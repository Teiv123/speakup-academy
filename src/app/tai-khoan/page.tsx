import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let profile: { full_name: string | null; phone: string | null } | null = null;
  if (user) {
    const { data } = await supabase.from("profiles").select("full_name, phone").eq("id", user.id).single();
    profile = data;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50/60 to-white dark:from-indigo-950/30 dark:to-black">
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">🎤</span>
            SpeakUp <span className="text-indigo-600 dark:text-indigo-400">Academy</span>
          </Link>
          <LogoutButton />
        </div>

        <h1 className="mt-10 text-3xl font-extrabold tracking-tight">
          Xin chào{profile?.full_name ? `, ${profile.full_name}` : ""} 👋
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-300">
          Cảm ơn bạn đã đăng ký học thử tại SpeakUp Academy. Đội ngũ tư vấn sẽ liên hệ với bạn sớm để xếp lịch buổi học
          thử miễn phí.
        </p>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <h2 className="text-lg font-bold">Thông tin đăng ký</h2>
          <dl className="mt-4 space-y-2.5 text-sm">
            <div className="flex justify-between">
              <dt className="text-zinc-500 dark:text-zinc-400">Họ tên</dt>
              <dd className="font-semibold">{profile?.full_name || "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-zinc-500 dark:text-zinc-400">Số điện thoại</dt>
              <dd className="font-semibold">{profile?.phone || "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-zinc-500 dark:text-zinc-400">Email</dt>
              <dd className="font-semibold">{user?.email || "—"}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-zinc-900">
          <h2 className="text-lg font-bold">Khoá học của bạn</h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
            Chưa có khoá học nào được kích hoạt. Tư vấn viên sẽ giúp bạn chọn lộ trình phù hợp ngay sau buổi học thử.
          </p>
          <Link href="/#khoa-hoc" className="mt-4 inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            ← Xem các khoá học
          </Link>
        </div>
      </div>
    </main>
  );
}
