"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

const inputCls =
  "w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMsg(error.message);
      setBusy(false);
      return;
    }
    router.push("/tai-khoan");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6 dark:from-indigo-950/40 dark:to-black">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2 text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">🎤</span>
          SpeakUp <span className="text-indigo-600 dark:text-indigo-400">Academy</span>
        </Link>
        <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-zinc-900">
          <h1 className="text-2xl font-bold tracking-tight">Đăng nhập</h1>
          <form onSubmit={onSubmit} className="mt-5 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Mật khẩu</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputCls} />
            </div>
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60"
            >
              {busy ? "..." : "Đăng nhập"}
            </button>
            {msg && <p className="text-sm text-red-500">{msg}</p>}
          </form>
        </div>
        <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Chưa có tài khoản?{" "}
          <Link href="/signup" className="font-semibold text-indigo-600 dark:text-indigo-400">
            Đăng ký học thử
          </Link>
        </p>
      </div>
    </main>
  );
}
