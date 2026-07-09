import Link from "next/link";

type Course = {
  icon: string;
  level: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  highlight?: boolean;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const stats = [
  { value: "10.000+", label: "Học viên tin chọn" },
  { value: "4.9/5", label: "Đánh giá trung bình" },
  { value: "95%", label: "Cải thiện sau 3 tháng" },
  { value: "50+", label: "Giảng viên bản ngữ" },
];

const courses: Course[] = [
  {
    icon: "🗣️",
    level: "Sơ cấp",
    title: "Giao tiếp cho người mất gốc",
    description:
      "Lấy lại nền tảng phát âm, phản xạ và tự tin nói những câu tiếng Anh đầu tiên trong đời sống hằng ngày.",
    duration: "3 tháng · 36 buổi",
    price: "1.990.000đ",
  },
  {
    icon: "🎯",
    level: "Trung – Cao cấp",
    title: "Luyện thi IELTS 7.0+",
    description:
      "Lộ trình 4 kỹ năng bài bản, chấm chữa Writing & Speaking 1-1 cùng giảng viên đạt 8.0 IELTS.",
    duration: "4 tháng · 48 buổi",
    price: "4.590.000đ",
    highlight: true,
  },
  {
    icon: "💼",
    level: "Trung cấp",
    title: "Tiếng Anh công sở & phỏng vấn",
    description:
      "Viết email, thuyết trình, họp hành và phỏng vấn xin việc bằng tiếng Anh chuẩn môi trường quốc tế.",
    duration: "2 tháng · 24 buổi",
    price: "2.790.000đ",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Sau 3 tháng mình đã dám bắt chuyện với khách nước ngoài mà không còn run. Giảng viên cực kỳ tận tâm và kiên nhẫn.",
    name: "Nguyễn Minh Anh",
    role: "Sinh viên năm 3",
    initials: "MA",
  },
  {
    quote:
      "Lộ trình rõ ràng, mỗi buổi học đều có phản hồi cụ thể. Mình tăng từ 5.5 lên 7.5 IELTS chỉ trong một khoá.",
    name: "Trần Quốc Bảo",
    role: "IELTS 7.5",
    initials: "QB",
  },
  {
    quote:
      "Học phí hợp lý mà chất lượng vượt mong đợi. Giờ mình tự tin thuyết trình tiếng Anh trước cả sếp người nước ngoài.",
    name: "Lê Thu Hà",
    role: "Nhân viên Marketing",
    initials: "TH",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
        course.highlight
          ? "border-indigo-300 bg-indigo-50/60 dark:border-indigo-700 dark:bg-indigo-950/30"
          : "border-black/10 bg-white dark:border-white/10 dark:bg-zinc-900/60"
      }`}
    >
      {course.highlight && (
        <span className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
          Phổ biến nhất
        </span>
      )}
      <div className="text-4xl">{course.icon}</div>
      <span className="mt-4 inline-flex w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
        {course.level}
      </span>
      <h3 className="mt-3 text-xl font-bold tracking-tight">{course.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {course.description}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{course.duration}</p>
          <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{course.price}</p>
        </div>
        <a
          href="#dang-ky"
          className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Đăng ký
        </a>
      </div>
    </article>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-black/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-zinc-900">
      <div aria-hidden className="text-lg tracking-widest text-amber-400">
        ★★★★★
      </div>
      <blockquote className="mt-4 flex-1 leading-relaxed text-zinc-700 dark:text-zinc-200">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white">
          {testimonial.initials}
        </span>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">
              🎤
            </span>
            SpeakUp <span className="text-indigo-600 dark:text-indigo-400">Academy</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
            <a href="#khoa-hoc" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
              Khoá học
            </a>
            <a href="#hoc-vien" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
              Học viên nói gì
            </a>
            <a href="#dang-ky" className="transition hover:text-indigo-600 dark:hover:text-indigo-400">
              Học thử
            </a>
          </div>
          <a
            href="#dang-ky"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Đăng ký
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-white to-white dark:from-indigo-950/40 dark:via-black dark:to-black" />
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300">
            🎤 Nền tảng học tiếng Anh giao tiếp #1 Việt Nam
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Tự tin nói tiếng Anh,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              mở khoá cả thế giới
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
            SpeakUp Academy giúp bạn phá bỏ rào cản, phản xạ trôi chảy cùng giảng viên bản ngữ và lộ
            trình cá nhân hoá — dù bạn đang mất gốc hay muốn chinh phục IELTS.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#dang-ky"
              className="w-full rounded-full bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 sm:w-auto"
            >
              Đăng ký học thử miễn phí
            </a>
            <a
              href="#khoa-hoc"
              className="w-full rounded-full border border-zinc-300 px-7 py-3.5 text-base font-semibold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 sm:w-auto"
            >
              Khám phá khoá học →
            </a>
          </div>
          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured courses */}
      <section id="khoa-hoc" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Khoá học nổi bật</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Chọn lộ trình phù hợp với mục tiêu của bạn — mỗi khoá đều có buổi học thử miễn phí.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="hoc-vien" className="scroll-mt-20 bg-zinc-50 py-20 dark:bg-zinc-950/50 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Học viên nói gì về SpeakUp
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              Hàng nghìn học viên đã tự tin bật nói tiếng Anh cùng chúng tôi.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final call-to-action / Đăng ký */}
      <section id="dang-ky" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-16 text-center shadow-2xl shadow-indigo-600/20 sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Sẵn sàng nói tiếng Anh tự tin?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
              Đăng ký học thử miễn phí ngay hôm nay — không cần thẻ tín dụng, không ràng buộc.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:hello@speakup.academy?subject=Đăng ký học thử miễn phí"
                className="w-full rounded-full bg-white px-8 py-3.5 text-base font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50 sm:w-auto"
              >
                Đăng ký ngay
              </a>
              <a
                href="#khoa-hoc"
                className="w-full rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Xem lại khoá học
              </a>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              Hoặc gọi hotline <span className="font-semibold text-white">1900 6868</span> để được
              tư vấn miễn phí.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row">
          <p className="flex items-center gap-2 font-semibold text-zinc-700 dark:text-zinc-200">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-indigo-600 text-xs text-white">
              🎤
            </span>
            SpeakUp Academy
          </p>
          <p>© 2026 SpeakUp Academy. Đã đăng ký bản quyền.</p>
        </div>
      </footer>
    </>
  );
}
