import { addContact, deleteContact, listContacts } from "../server/store.js";

const MAX_BODY = 20 * 1024;

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > MAX_BODY) {
        reject(Object.assign(new Error("Payload too large"), { status: 413 }));
        req.destroy();
      }
    });
    req.on("end", () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(Object.assign(new Error("Invalid JSON body"), { status: 400 }));
      }
    });
    req.on("error", reject);
  });

const json = (res, status, payload) => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = (body) => {
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 80) {
    return { error: "Please enter a name between 2 and 80 characters." };
  }
  if (!EMAIL_RE.test(email) || email.length > 160) {
    return { error: "Please enter a valid email address." };
  }
  if (message.length < 5 || message.length > 2000) {
    return { error: "Your message should be between 5 and 2000 characters." };
  }

  return { value: { name, email, message } };
};

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const contacts = await listContacts();
      return json(res, 200, { contacts, total: contacts.length });
    }

    if (req.method === "POST") {
      const body = await readBody(req);
      const { value, error } = validate(body);
      if (error) return json(res, 400, { error });

      const contact = await addContact(value);
      return json(res, 201, { contact });
    }

    if (req.method === "DELETE") {
      const url = new URL(req.url, "http://localhost");
      const id = url.searchParams.get("id");
      if (!id) return json(res, 400, { error: "Missing contact id." });

      const removed = await deleteContact(id);
      if (!removed) return json(res, 404, { error: "Contact not found." });
      return json(res, 200, { ok: true });
    }

    res.setHeader("Allow", "GET, POST, DELETE");
    return json(res, 405, { error: "Method not allowed." });
  } catch (error) {
    const status = error.status ?? 500;
    return json(res, status, {
      error:
        status === 500
          ? "Something went wrong saving your message. Please try again."
          : error.message,
    });
  }
}
