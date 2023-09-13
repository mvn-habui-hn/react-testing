"use client";

import { BaseSyntheticEvent, useMemo, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = form.get("username");
    const password = form.get("password");
  };

  const isDisabled = useMemo(() => {
    if (username && password) {
      return false;
    }
    return true;
  }, [username, password]);

  return (
    <div className="relative flex place-items-center">
      <form
        name="form"
        className="flex flex-col gap-10"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            aria-label="username"
            className="h-[40px] min-w-[450px] text-zinc-900 px-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            aria-label="password"
            className="h-[40px] min-w-[450px] text-zinc-900 px-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 py-3 px-6 rounded-lg cursor-pointer"
          disabled={isDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
