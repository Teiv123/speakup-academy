"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

// Nav phần phải trên landing: phản ánh trạng thái đăng nhập.
export default function AuthNav() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createClient();
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (active) setLoggedIn(!!data.user);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setLoggedIn(!!session?.user);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (loggedIn) {
    return (
      <Link
        href="/tai-khoan"
        className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        Khu vực học viên
      </Link>
    );
  }

  // Đang tải (null) hoặc chưa đăng nhập: hiện Đăng nhập / Đăng ký
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm font-semibold text-zinc-700 transition hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-indigo-400"
      >
        Đăng nhập
      </Link>
      <Link
        href="/signup"
        className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
      >
        Đăng ký
      </Link>
    </div>
  );
}
