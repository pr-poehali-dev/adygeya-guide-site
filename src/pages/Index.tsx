import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_MOUNTAINS = "https://cdn.poehali.dev/projects/f0b272cf-d038-4998-b9ec-de8b90009d19/files/29b744f5-e4ff-4fca-b486-f2b67660ffc9.jpg";
const IMG_WATERFALL = "https://cdn.poehali.dev/projects/f0b272cf-d038-4998-b9ec-de8b90009d19/files/62f4319d-ae67-46c7-b1ef-2fa590f0d3b1.jpg";
const IMG_DOLMEN = "https://cdn.poehali.dev/projects/f0b272cf-d038-4998-b9ec-de8b90009d19/files/c8754f5b-4c59-44a3-ad15-0ae7082e0da7.jpg";

const SECTIONS = ["Главная", "Достопримечательности", "Природа", "Маршруты", "Практически"];

const ATTRACTIONS = [
  {
    title: "Плато Лаго-Наки",
    desc: "Высокогорное плато на высоте 2000 м, покрытое альпийскими лугами. Летом — ковёр из цветов, зимой — нетронутые снега.",
    img: IMG_MOUNTAINS,
    tag: "Природа",
  },
  {
    title: "Водопады Руфабго",
    desc: "Каскад из 10 водопадов в ущелье реки Руфабго. Самый известный — «Сердце Руфабго» высотой 6 метров.",
    img: IMG_WATERFALL,
    tag: "Водопады",
  },
  {
    title: "Дольмены Адыгеи",
    desc: "Мегалитические погребальные сооружения возрастом 4–5 тысяч лет. Крупнейшее скопление на реке Белой.",
    img: IMG_DOLMEN,
    tag: "История",
  },
  {
    title: "Большой Азишский каньон",
    desc: "Живописный каньон глубиной 100 метров. Панорамный мост над пропастью и сталактитовая пещера Азишская.",
    img: IMG_MOUNTAINS,
    tag: "Каньоны",
  },
  {
    title: "Гора Тхач",
    desc: "Величественный горный массив с отвесными стенами. Любимое место альпинистов и трекеров. Высота — 2368 м.",
    img: IMG_MOUNTAINS,
    tag: "Горы",
  },
  {
    title: "Хаджохская теснина",
    desc: "Узкое ущелье реки Белой длиной 400 м. В некоторых местах ширина — всего 2 метра, а глубина — 40 метров.",
    img: IMG_WATERFALL,
    tag: "Теснины",
  },
];

const ROUTES = [
  {
    id: 1, name: "Водопады Руфабго",
    duration: "1 день", difficulty: "Лёгкий",
    x: 38, y: 52,
    desc: "Маршрут вдоль реки Руфабго через 4 основных водопада. Протяжённость 3 км.",
  },
  {
    id: 2, name: "Плато Лаго-Наки",
    duration: "2–3 дня", difficulty: "Средний",
    x: 28, y: 38,
    desc: "Трекинг по высокогорному плато с ночёвкой. Альпийские луга и панорамные виды.",
  },
  {
    id: 3, name: "Большой Азишский каньон",
    duration: "1 день", difficulty: "Лёгкий",
    x: 52, y: 44,
    desc: "Прогулка вдоль каньона с посещением пещеры. Есть подвесной мост.",
  },
  {
    id: 4, name: "Гора Тхач",
    duration: "3–4 дня", difficulty: "Сложный",
    x: 20, y: 58,
    desc: "Многодневный поход к вершине через лесные хребты. Требует подготовки.",
  },
  {
    id: 5, name: "Хаджохская теснина",
    duration: "Полдня", difficulty: "Лёгкий",
    x: 62, y: 60,
    desc: "Короткая прогулка по оборудованным тропам над ущельем реки Белой.",
  },
];

const PRACTICAL = [
  { icon: "CalendarDays", title: "Лучшее время для посещения", text: "Май–октябрь — идеальный сезон. Июнь–август — горные маршруты открыты полностью. Зимой работает горнолыжный курорт «Лагонаки»." },
  { icon: "MapPin", title: "Как добраться", text: "Ближайший аэропорт — Краснодар (2 часа езды). Из Краснодара до Майкопа — поезд или автобус. До достопримечательностей — такси или аренда авто." },
  { icon: "Thermometer", title: "Климат", text: "Умеренно-континентальный. Лето тёплое (+25°C в долинах), в горах прохладно. Зима мягкая в предгорьях, снежная на плато." },
  { icon: "ShieldCheck", title: "Безопасность", text: "На горных маршрутах обязательна регистрация в МЧС. Берите тёплую одежду даже летом — погода меняется быстро. Не ходите в одиночку." },
  { icon: "Bed", title: "Где остановиться", text: "Майкоп — столица республики с гостиницами. Хаджох (пос. Каменномостский) — база для большинства маршрутов. Есть турбазы и эко-домики в горах." },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [activeRoute, setActiveRoute] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: "rgba(30,20,10,0.88)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold" style={{ color: "var(--ochre)" }}>
            Адыгея
          </span>
          <span className="font-body text-xs" style={{ color: "var(--earth-light)", opacity: 0.7 }}>
            путеводитель
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <li key={s}>
              <button
                onClick={() => scrollTo(s)}
                className={`nav-link font-body text-sm ${activeSection === s ? "active" : ""}`}
                style={{ color: activeSection === s ? "var(--ochre)" : "var(--earth-light)", background: "none", border: "none" }}
              >
                {s === "Практически" ? "Практическая информация" : s}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden" style={{ color: "var(--earth-light)" }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6"
          style={{ backgroundColor: "rgba(30,20,10,0.97)" }}
        >
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="font-display text-3xl font-light"
              style={{ color: "var(--earth-light)", background: "none", border: "none" }}
            >
              {s === "Практически" ? "Практическая информация" : s}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="Главная" className="relative h-screen flex items-end pb-20 overflow-hidden">
        <img src={IMG_MOUNTAINS} alt="Горы Адыгеи" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-6">
          <p
            className="font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up opacity-0 delay-100"
            style={{ color: "var(--ochre)" }}
          >
            Республика Адыгея
          </p>
          <h1
            className="font-display text-6xl md:text-8xl font-light leading-none mb-6 animate-fade-in-up opacity-0 delay-200"
            style={{ color: "var(--cream)" }}
          >
            Там, где горы
            <br />
            <em>встречают лес</em>
          </h1>
          <p
            className="font-body text-lg max-w-xl mb-10 animate-fade-in-up opacity-0 delay-300"
            style={{ color: "rgba(232,213,181,0.85)" }}
          >
            Дикие водопады, древние дольмены, нетронутые альпийские луга — Адыгея ждёт тех, кто ищет настоящее.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 delay-400">
            <button
              onClick={() => scrollTo("Маршруты")}
              className="px-8 py-3 font-body font-medium rounded-full transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--earth-warm)", color: "var(--earth-dark)" }}
            >
              Маршруты
            </button>
            <button
              onClick={() => scrollTo("Достопримечательности")}
              className="px-8 py-3 font-body font-medium rounded-full border transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(232,213,181,0.5)", color: "var(--cream)" }}
            >
              Достопримечательности
            </button>
          </div>
        </div>
        {/* Author badge */}
        <div
          className="absolute bottom-8 right-6 animate-fade-in-up opacity-0 delay-500 rounded-xl px-5 py-3"
          style={{ backgroundColor: "rgba(30,20,10,0.7)", border: "1px solid rgba(201,149,90,0.35)", backdropFilter: "blur(8px)" }}
        >
          <p className="font-body text-xs mb-0.5" style={{ color: "var(--earth-warm)" }}>Автор проекта</p>
          <p className="font-display text-lg font-semibold leading-tight" style={{ color: "var(--cream)" }}>Даная Штейнбрехер</p>
          <p className="font-body text-xs" style={{ color: "rgba(232,213,181,0.6)" }}>Группа ПО (ист и общ)</p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "var(--earth-light)", opacity: 0.6 }}>
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section id="Достопримечательности" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: "var(--earth-warm)" }}>
              Откройте для себя
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: "var(--earth-dark)" }}>
              Достопримечательности
            </h2>
            <div className="section-divider w-32 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ATTRACTIONS.map((item, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl overflow-hidden"
                style={{ backgroundColor: "white", boxShadow: "0 4px 20px rgba(61,43,26,0.1)" }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <span
                    className="absolute top-4 left-4 font-body text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: "var(--ochre)", color: "var(--earth-dark)" }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--earth-dark)" }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATURE */}
      <section id="Природа" className="py-24" style={{ backgroundColor: "var(--earth-light)" }}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: "var(--forest-mid)" }}>
              Нетронутая красота
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: "var(--earth-dark)" }}>
              Природа Адыгеи
            </h2>
            <div className="section-divider w-32 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={IMG_WATERFALL}
                alt="Водопады Руфабго"
                className="rounded-2xl w-full object-cover"
                style={{ height: "420px", boxShadow: "0 20px 60px rgba(61,43,26,0.25)" }}
              />
            </div>
            <div>
              <h3 className="font-display text-4xl font-light mb-6" style={{ color: "var(--earth-dark)" }}>
                Заповедная<br /><em>дикая природа</em>
              </h3>
              <p className="font-body leading-relaxed mb-6" style={{ color: "var(--earth-mid)" }}>
                Адыгея — один из немногих регионов России, где за один день можно побывать в субтропическом лесу, альпийском луге и у подножия вечных снегов.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ color: "var(--earth-mid)" }}>
                Кавказский государственный природный биосферный заповедник — второй по площади в Европе. Здесь обитают зубры, туры, бурые медведи и сотни видов редких птиц.
              </p>
              <div className="space-y-3">
                <p className="font-body text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--earth-warm)" }}>
                  Природные объекты:
                </p>
                {[
                  "Кавказский биосферный заповедник (280 000 га)",
                  "Плато Лаго-Наки — горнолыжный и туристический рай",
                  "Каскад водопадов Руфабго (10 водопадов)",
                  "Большой Азишский каньон глубиной 100 м",
                  "Хаджохская теснина реки Белой",
                  "Гора Тхач (2368 м) — памятник природы",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--earth-warm)" }} />
                    <span className="font-body text-sm" style={{ color: "var(--earth-dark)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "Mountain", label: "Высшая точка", value: "3345 м", sub: "Гора Чугуш" },
              { icon: "Droplets", label: "Водопадов", value: "50+", sub: "в реестре республики" },
              { icon: "Trees", label: "Площадь лесов", value: "39%", sub: "территории Адыгеи" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "white", boxShadow: "0 4px 20px rgba(61,43,26,0.08)" }}
              >
                <div className="flex justify-center mb-4">
                  <Icon name={stat.icon} size={32} style={{ color: "var(--forest-mid)" }} />
                </div>
                <div className="font-display text-5xl font-light mb-1" style={{ color: "var(--earth-dark)" }}>
                  {stat.value}
                </div>
                <div className="font-body text-sm font-medium mb-1" style={{ color: "var(--earth-warm)" }}>
                  {stat.label}
                </div>
                <div className="font-body text-xs" style={{ color: "var(--stone)" }}>
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section id="Маршруты" className="py-24" style={{ backgroundColor: "var(--earth-dark)" }}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: "var(--earth-warm)" }}>
              Планируйте путешествие
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: "var(--cream)" }}>
              Маршруты
            </h2>
            <div className="section-divider w-32 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Interactive map */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/3", backgroundColor: "var(--forest-dark)" }}
            >
              <img src={IMG_MOUNTAINS} alt="Карта" className="w-full h-full object-cover opacity-40" />
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--earth-light)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              <div
                className="absolute top-4 left-4 font-body text-xs px-3 py-1.5 rounded-full border"
                style={{ backgroundColor: "rgba(30,20,10,0.7)", borderColor: "var(--earth-warm)", color: "var(--earth-light)" }}
              >
                Республика Адыгея
              </div>
              {ROUTES.map((r) => (
                <button
                  key={r.id}
                  className="map-dot absolute"
                  style={{ left: `${r.x}%`, top: `${r.y}%`, transform: "translate(-50%,-50%)" }}
                  onClick={() => setActiveRoute(activeRoute === r.id ? null : r.id)}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2"
                    style={{
                      backgroundColor: activeRoute === r.id ? "var(--ochre)" : "var(--earth-warm)",
                      borderColor: "var(--cream)",
                    }}
                  />
                  {activeRoute === r.id && (
                    <div
                      className="absolute left-6 top-1/2 -translate-y-1/2 rounded-xl p-3 min-w-44 z-10"
                      style={{ backgroundColor: "rgba(30,20,10,0.95)", border: "1px solid var(--earth-warm)" }}
                    >
                      <p className="font-display text-base font-semibold mb-1" style={{ color: "var(--cream)" }}>
                        {r.name}
                      </p>
                      <p className="font-body text-xs mb-2" style={{ color: "var(--earth-light)", opacity: 0.8 }}>
                        {r.desc}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="font-body text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "var(--forest-mid)", color: "var(--cream)" }}>
                          {r.duration}
                        </span>
                        <span
                          className="font-body text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: r.difficulty === "Лёгкий" ? "var(--forest-mid)" : r.difficulty === "Средний" ? "var(--earth-warm)" : "#8b2020",
                            color: "var(--cream)"
                          }}
                        >
                          {r.difficulty}
                        </span>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Route list */}
            <div className="space-y-4">
              {ROUTES.map((r) => (
                <button
                  key={r.id}
                  className="w-full text-left rounded-xl p-5 transition-all"
                  style={{
                    backgroundColor: activeRoute === r.id ? "rgba(201,149,90,0.15)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${activeRoute === r.id ? "var(--earth-warm)" : "rgba(255,255,255,0.08)"}`,
                  }}
                  onClick={() => setActiveRoute(activeRoute === r.id ? null : r.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-xl font-semibold mb-1" style={{ color: "var(--cream)" }}>
                        {r.name}
                      </p>
                      <p className="font-body text-sm" style={{ color: "rgba(232,213,181,0.65)" }}>
                        {r.desc}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className="font-body text-xs px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "var(--earth-light)" }}>
                        {r.duration}
                      </span>
                      <span
                        className="font-body text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: r.difficulty === "Лёгкий" ? "rgba(74,102,64,0.4)" : r.difficulty === "Средний" ? "rgba(201,149,90,0.3)" : "rgba(139,32,32,0.4)",
                          color: "var(--earth-light)"
                        }}
                      >
                        {r.difficulty}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICAL */}
      <section id="Практически" className="py-24" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase mb-3" style={{ color: "var(--earth-warm)" }}>
              Всё для поездки
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light" style={{ color: "var(--earth-dark)" }}>
              Практическая информация
            </h2>
            <div className="section-divider w-32 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {PRACTICAL.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "white", boxShadow: "0 4px 20px rgba(61,43,26,0.08)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--earth-light)" }}
                  >
                    <Icon name={item.icon} size={20} style={{ color: "var(--earth-warm)" }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold" style={{ color: "var(--earth-dark)" }}>
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--stone)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 text-center"
            style={{ backgroundColor: "var(--earth-light)", border: "1px solid rgba(122,92,58,0.2)" }}
          >
            <h3 className="font-display text-2xl mb-4" style={{ color: "var(--earth-dark)" }}>
              Полезные ссылки
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.adygnet.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-medium transition-all hover:opacity-80"
                style={{ backgroundColor: "var(--earth-mid)", color: "var(--cream)" }}
              >
                <Icon name="GraduationCap" size={16} />
                Официальный сайт АГУ
              </a>
              <a
                href="https://t.me/adygnet_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-medium transition-all hover:opacity-80"
                style={{ backgroundColor: "var(--forest-mid)", color: "var(--cream)" }}
              >
                <Icon name="Send" size={16} />
                Telegram АГУ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="py-16" style={{ backgroundColor: "var(--earth-mid)" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <Icon name="User" size={28} style={{ color: "var(--cream)" }} />
            </div>
            <p className="font-body text-xs tracking-[0.25em] uppercase mb-2" style={{ color: "var(--earth-light)", opacity: 0.7 }}>
              Об авторе
            </p>
            <h3 className="font-display text-3xl font-semibold mb-1" style={{ color: "var(--cream)" }}>
              Даная Штейнбрехер
            </h3>
            <p className="font-body text-sm mb-4" style={{ color: "var(--ochre)" }}>
              Группа ПО (ист и общ)
            </p>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(232,213,181,0.75)" }}>
              Этот путеводитель создан в рамках учебного проекта.
              Цель — познакомить путешественников с уникальной природой и культурой Республики Адыгея.
            </p>
            <p className="font-body text-xs" style={{ color: "rgba(232,213,181,0.5)" }}>
              Адыгейский государственный университет · 2025–2026 уч. г.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 border-t"
        style={{ backgroundColor: "var(--earth-dark)", borderColor: "rgba(122,92,58,0.3)" }}
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg" style={{ color: "var(--ochre)" }}>
            Адыгея — путеводитель
          </p>
          <p className="font-body text-xs text-center" style={{ color: "rgba(232,213,181,0.4)" }}>
            Учебный проект · Адыгейский государственный университет
          </p>
          <div className="flex gap-4">
            {SECTIONS.slice(0, 4).map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="font-body text-xs transition-opacity hover:opacity-100"
                style={{ color: "rgba(232,213,181,0.5)", background: "none", border: "none" }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}