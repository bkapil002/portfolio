import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// On Vercel the project directory is read-only and serverless invocations are
// isolated, so we fall back to the only writable location (/tmp). That works
// for a single warm instance but is NOT durable across deploys or cold starts.
// For real persistence, point this at MongoDB/Vercel KV instead.
const DATA_FILE = process.env.VERCEL
  ? path.join("/tmp", "contacts.json")
  : path.join(process.cwd(), "data", "contacts.json");

let queue = Promise.resolve();

const withLock = (task) => {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
};

const readAll = async () => {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
};

const writeAll = async (contacts) => {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(contacts, null, 2), "utf8");
};

const byNewest = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

export const listContacts = async () => {
  const contacts = await readAll();
  return contacts.sort(byNewest);
};

export const addContact = ({ name, email, message }) =>
  withLock(async () => {
    const contacts = await readAll();
    const contact = {
      id: randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };
    await writeAll([contact, ...contacts]);
    return contact;
  });

export const deleteContact = (id) =>
  withLock(async () => {
    const contacts = await readAll();
    const next = contacts.filter((contact) => contact.id !== id);
    if (next.length === contacts.length) return false;
    await writeAll(next);
    return true;
  });
