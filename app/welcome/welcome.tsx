type Notice = {
  title: string;
  detail: string;
  date: string;
  dateTime: string;
  category: string;
  accent: string;
  action?: { label: string; href: string };
};

const notices: Notice[] = [
  {
    title: "ช่วงเวลาบำรุงรักษาตามกำหนดการ",
    detail:
      "บริการธนาคารออนไลน์จะไม่สามารถใช้งานได้ในวันอาทิตย์ เวลา 01:00–03:00 น. ET เนื่องจากการอัปเกรดโครงสร้างพื้นฐาน การทำรายการบัตรเดบิตผ่านมือถือยังคงใช้งานได้ตามปกติ",
    date: "24 มี.ค. 2025",
    dateTime: "2025-03-24",
    category: "ระบบ",
    accent: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-200",
    action: { label: "รายการตรวจสอบการบำรุงรักษา", href: "#" },
  },
  {
    title: "ตัวเลือกการแจ้งเตือนความปลอดภัยรูปแบบใหม่",
    detail:
      "ขณะนี้คุณสามารถเลือกการแจ้งเตือนแบบพุชเพิ่มเติมจากอีเมลสำหรับการโอนยอดสูง โปรดเปิดใช้งานตัวเลือกนี้ให้ลูกค้าในสาขาของคุณภายในวันศุกร์",
    date: "21 มี.ค. 2025",
    dateTime: "2025-03-21",
    category: "ความปลอดภัย",
    accent:
      "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  },
  {
    title: "สรุปกิจกรรมสู่ชุมชน",
    detail:
      "ขอบคุณทุกคนที่เข้าร่วมเวิร์กช็อปความรู้ทางการเงินฤดูใบไม้ผลิ ดาวน์โหลดหัวข้อสำคัญเพื่อแบ่งปันกับทีมของคุณในสัปดาห์นี้",
    date: "19 มี.ค. 2025",
    dateTime: "2025-03-19",
    category: "การมีส่วนร่วม",
    accent:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
    action: { label: "ดูสไลด์สรุป", href: "#" },
  },
];

const quickActions = [
  {
    title: "ตัวติดตามผลกระทบต่อลูกค้า",
    description:
      "ตรวจสอบภูมิภาคที่ได้รับผลกระทบจากการบำรุงรักษาระบบที่จะมาถึง",
    href: "#",
  },
  {
    title: "พอร์ทัลความเสี่ยงและการปฏิบัติตามข้อกำหนด",
    description:
      "ส่งการยืนยันนโยบายและตรวจสอบเอกสารเพื่อการตรวจสอบ",
    href: "#",
  },
  {
    title: "ศูนย์ตอบสนองเหตุผิดปกติ",
    description:
      "บันทึกเหตุการณ์การผลิตหรือขอรับการสนับสนุนจากฝ่ายปฏิบัติการโดยตรง",
    href: "#",
  },
];

const supportContacts = [
  { team: "ปฏิบัติการระบบธนาคารแกนหลัก", contact: "ops@goodbank.com", hours: "ตลอด 24 ชั่วโมง ทุกวัน" },
  {
    team: "การตอบสนองด้านความปลอดภัย",
    contact: "security@goodbank.com",
    hours: "06:00–22:00 น. ET",
  },
  {
    team: "ทีมทรัพยากรบุคคล",
    contact: "people@goodbank.com",
    hours: "09:00–18:00 น. ET",
  },
];

export function Welcome() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-slate-50 pb-16 pt-24 text-slate-900 dark:bg-gray-950 dark:text-gray-100"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 lg:flex-row">
        <section className="w-full space-y-8 lg:w-[55%]">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-500/20 dark:text-blue-200">
            สรุปงานผู้ดูแลประจำวัน
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              ติดตามความคืบหน้าบนกระดานข้อมูลของ GoodBank
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-gray-300">
              ทีมปฏิบัติการได้คัดสรรอัปเดตเหล่านี้เพื่อให้ทุกสาขารับทราบข้อมูล ตรวจสอบกระดานทุกเช้าเพื่อดูประกาศล่าสุด งานที่ต้องทำ และแหล่งข้อมูลสนับสนุนสำหรับลูกค้าของคุณ
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-500 dark:text-gray-400 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden
              />
              ระบบทำงานปกติ
            </div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full bg-amber-500"
                aria-hidden
              />
              ตรวจสอบการแจ้งเตือนก่อนวันศุกร์ เวลา 17:00 น. ET
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 shadow-xl shadow-slate-900/5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200/60 px-6 py-5 dark:border-gray-800">
              <div>
                <h2 className="text-xl font-semibold">กระดานข้อมูล</h2>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  อัปเดตล่าสุดจากทีมผู้ดูแลของ GoodBank
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-gray-800 dark:text-gray-300">
                อัปเดตรายวัน
              </span>
            </div>
            <ul className="divide-y divide-slate-200/70 dark:divide-gray-800">
              {notices.map((notice) => (
                <li key={notice.title} className="flex gap-4 px-6 py-5">
                  <div
                    className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold ${notice.accent}`}
                  >
                    {notice.category}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-gray-100">
                        {notice.title}
                      </h3>
                      <time
                        dateTime={notice.dateTime}
                        className="text-sm text-slate-500 dark:text-gray-400"
                      >
                        {notice.date}
                      </time>
                    </div>
                    <p className="text-sm leading-6 text-slate-600 dark:text-gray-300">
                      {notice.detail}
                    </p>
                    {notice.action ? (
                      <a
                        href={notice.action.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200"
                      >
                        {notice.action.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14" strokeLinecap="round" />
                          <path
                            d="m13 6 6 6-6 6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside className="w-full space-y-8 lg:w-[45%]">
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <h2 className="text-lg font-semibold">การทำงานด่วน</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
              เข้าสู่พอร์ทัลที่คุณต้องการเพื่อดูแลลูกค้าได้ทันที
            </p>
            <ul className="mt-5 space-y-4">
              {quickActions.map((action) => (
                <li
                  key={action.title}
                  className="group rounded-2xl border border-transparent p-4 transition hover:border-blue-200 hover:bg-blue-50/60 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/10"
                >
                  <a href={action.href} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-blue-700 group-hover:underline dark:text-blue-300">
                      {action.title}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-gray-300">
                      {action.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-slate-100 shadow-xl">
            <h2 className="text-lg font-semibold">ต้องการความช่วยเหลือไหม?</h2>
            <p className="mt-1 text-sm text-slate-300">
              ติดต่อทีมที่พร้อมช่วยเหลือสาขาและทีมหน้าสำนักงาน
            </p>
            <ul className="mt-6 space-y-4">
              {supportContacts.map((support) => (
                <li
                  key={support.team}
                  className="flex items-start justify-between gap-4 rounded-2xl bg-white/5 px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold">{support.team}</p>
                    <p className="text-xs text-slate-300">{support.hours}</p>
                  </div>
                  <a
                    href={`mailto:${support.contact}`}
                    className="text-xs font-medium text-blue-200 hover:text-white"
                  >
                    {support.contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

