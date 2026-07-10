"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import GoogleAuthButton from "@/components/GoogleAuthButton";

const inputCls =
  "w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-950";

export default function SignupPage() {
  const supabase = createClient();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // Khớp trigger handle_new_user (raw_user_meta_data ->> 'full_name' / 'phone')
        data: { full_name: fullName, phone },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setMsg(error.message);
      setBusy(false);
      return;
    }
    setDone(true);
    setBusy(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6 py-10 dark:from-indigo-950/40 dark:to-black">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-6 flex items-center justify-center gap-2 text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">🎤</span>
          SpeakUp <span className="text-indigo-600 dark:text-indigo-400">Academy</span>
        </Link>

        {done ? (
          <div className="rounded-2xl border border-black/10 bg-white p-7 text-center shadow-xl dark:border-white/10 dark:bg-zinc-900">
            <div className="text-4xl">📩</div>
            <h1 className="mt-3 text-xl font-bold">Kiểm tra email</h1>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
              Đã gửi link xác nhận tới <b className="text-zinc-900 dark:text-white">{email}</b>. Bấm link để kích hoạt
              tài khoản, rồi{" "}
              <Link href="/login" className="font-semibold text-indigo-600 dark:text-indigo-400">
                đăng nhập
              </Link>
              .
            </p>
          </div>
        ) : (
          <>
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-zinc-900">
              <h1 className="text-2xl font-bold tracking-tight">Đăng ký học thử miễn phí</h1>
              <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                Điền thông tin, SpeakUp sẽ liên hệ xếp lịch học thử cho bạn.
              </p>
              <form onSubmit={onSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Họ tên</label>
                  <input required value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Số điện thoại</label>
                  <input required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Email</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Mật khẩu (tối thiểu 6 ký tự)</label>
                  <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className={inputCls} />
                </div>
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:opacity-60"
                >
                  {busy ? "..." : "Đăng ký học thử"}
                </button>
                {msg && <p className="text-sm text-red-500">{msg}</p>}
              </form>
              <div className="my-5 flex items-center gap-3 text-xs text-zinc-400">
                <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
                hoặc
                <span className="h-px flex-1 bg-zinc-200 dark:bg-zinc-700" />
              </div>
              <GoogleAuthButton label="Đăng ký với Google" />
            </div>
            <p className="mt-5 text-center text-sm text-zinc-500 dark:text-zinc-400">
              Đã có tài khoản?{" "}
              <Link href="/login" className="font-semibold text-indigo-600 dark:text-indigo-400">
                Đăng nhập
              </Link>
            </p>
          </>
        )}
      </div>
    </main>
  );
}
