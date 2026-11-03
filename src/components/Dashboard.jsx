import { useCallback, useEffect, useMemo, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { toast } from "react-toastify";

dayjs.extend(relativeTime);

const isSameDay = (a, b) => dayjs(a).isSame(dayjs(b), "day");

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const [deleting, setDeleting] = useState(null);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load submissions.");
      const data = await res.json();
      setContacts(Array.isArray(data.contacts) ? data.contacts : []);
      setStatus("ready");
    } catch (error) {
      setStatus("error");
      toast.error(error.message);
    }
  }, []);

  useEffect(() => {
    document.title = "Contact submissions · Brahm Kapila";
    load();
  }, [load]);

  const handleDelete = async (contact) => {
    if (!window.confirm(`Delete the message from ${contact.name}?`)) return;

    setDeleting(contact.id);
    try {
      const res = await fetch(`/api/contact?id=${encodeURIComponent(contact.id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Could not delete that message.");
      setContacts((prev) => prev.filter((item) => item.id !== contact.id));
      toast.success("Message deleted.");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setDeleting(null);
    }
  };

  const stats = useMemo(() => {
    const today = contacts.filter((contact) =>
      isSameDay(contact.createdAt, new Date()),
    ).length;
    const week = contacts.filter(
      (contact) => dayjs().diff(dayjs(contact.createdAt), "day") < 7,
    ).length;
    const uniqueEmails = new Set(contacts.map((contact) => contact.email)).size;

    return [
      { label: "Total messages", value: contacts.length },
      { label: "Today", value: today },
      { label: "Last 7 days", value: week },
      { label: "Unique emails", value: uniqueEmails },
    ];
  }, [contacts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((contact) =>
      [contact.name, contact.email, contact.message]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [contacts, query]);

  return (
    <div className="fixed inset-0 overflow-y-auto bg-slate-100 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-5 py-8">
        <header className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
              Brahm Kapila
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
              Contact submissions
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Every message sent from the portfolio contact form.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={load}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              Refresh
            </button>
            <a
              href="/"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700"
            >
              Back to portfolio
            </a>
          </div>
        </header>

        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 text-2xl font-extrabold tabular-nums">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, email or message..."
            className="w-full max-w-md rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
          />
          <span className="text-sm text-slate-500">
            {filtered.length} of {contacts.length} shown
          </span>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {status === "loading" && (
            <p className="p-10 text-center text-sm text-slate-500">
              Loading submissions...
            </p>
          )}

          {status === "error" && (
            <div className="p-10 text-center">
              <p className="text-sm text-slate-600">
                Couldn&apos;t load submissions.
              </p>
              <button
                type="button"
                onClick={load}
                className="mt-3 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500"
              >
                Try again
              </button>
            </div>
          )}

          {status === "ready" && filtered.length === 0 && (
            <div className="p-10 text-center">
              <p className="text-sm font-semibold text-slate-700">
                {contacts.length === 0 ? "No messages yet" : "No matches"}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {contacts.length === 0
                  ? "Messages sent from the Contact app will appear here."
                  : "Try a different search term."}
              </p>
            </div>
          )}

          {status === "ready" && filtered.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[46rem] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3 font-semibold">From</th>
                    <th className="px-4 py-3 font-semibold">Message</th>
                    <th className="px-4 py-3 font-semibold">Received</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((contact) => (
                    <tr key={contact.id} className="align-top hover:bg-slate-50/70">
                      <td className="px-4 py-4">
                        <p className="font-semibold text-slate-900">
                          {contact.name}
                        </p>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-xs text-violet-600 hover:underline"
                        >
                          {contact.email}
                        </a>
                      </td>
                      <td className="max-w-md px-4 py-4">
                        <p className="whitespace-pre-line text-slate-600">
                          {contact.message}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">
                        <p className="font-semibold text-slate-700">
                          {dayjs(contact.createdAt).format("DD MMM YYYY, hh:mm A")}
                        </p>
                        <p>{dayjs(contact.createdAt).fromNow()}</p>
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-right">
                        <a
                          href={`mailto:${contact.email}?subject=Re: your message to Brahm`}
                          className="rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                        >
                          Reply
                        </a>
                        <button
                          type="button"
                          onClick={() => handleDelete(contact)}
                          disabled={deleting === contact.id}
                          className="ml-2 rounded-md border border-rose-200 px-2.5 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 disabled:opacity-50"
                        >
                          {deleting === contact.id ? "..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-slate-400">
          API: <code>/api/contact</code> · storage: local JSON file
          (data/contacts.json)
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
