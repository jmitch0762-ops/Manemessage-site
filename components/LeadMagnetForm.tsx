"use client";

import { useState } from "react";

export default function LeadMagnetForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col gap-3 max-w-md mx-auto text-center py-8">
        <h3 className="font-heading font-bold text-saddle-500 text-2xl">
          Check your inbox.
        </h3>
        <p className="text-bark-300 text-base leading-relaxed">
          Your Website Copy Audit Checklist is on its way. If you don&apos;t see
          it in a minute or two, check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={status === "submitting"}
        className="w-full px-4 py-3 border border-bark-100 rounded-sm text-sm text-bark-700 bg-white focus:outline-none focus:border-saddle-500 disabled:opacity-50"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === "submitting"}
        className="w-full px-4 py-3 border border-bark-100 rounded-sm text-sm text-bark-700 bg-white focus:outline-none focus:border-saddle-500 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary !bg-saddle-500 hover:!bg-saddle-400 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Get the Checklist"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-700 mt-2 text-center">{errorMessage}</p>
      )}

      <p className="text-xs text-bark-200 mt-4 text-center">
        Delivered straight to your inbox. Unsubscribe anytime.
      </p>
    </form>
  );
}
