import { useState, useEffect } from 'react'
import myPhoto from './images/My-photo.jpg'
import tgIcon from './images/icons/tg.svg'
import vkIcon from './images/icons/vk.svg'
import gmailIcon from './images/icons/gmail.svg'
import githubIcon from './images/icons/github.png'

const resume = {
  name: 'Синельников Игорь Леонидович',
  contacts: {
    telegram: '@unish333ld',
    vk: 'https://vk.com/xllllllllllllllll',
    email: 'nakkani7331@gmail.com',
    github: 'https://github.com/unish333ld',
    location: 'Россия, Санкт-Петербург',
  },
  photo: myPhoto,
  about: 'Мотивированный Backend-разработчик на Python, которому интересно работать над новыми проектами и создавать полезные продукты. Готов постоянно учиться, осваивать новые технологии и развиваться в команде. Имею практический опыт Fullstack-разработки. Активно интересуюсь миром искусственного интеллекта, а в свободное время развиваюсь в криптовалютном трейдинге и слежу за новостным фоном рынка.',
  hardSkills: [
    { category: 'Backend', skills: ['Python', 'Django', 'FastAPI', 'Litestar', 'PostgreSQL', 'MySQL', 'Docker'] },
    { category: 'Frontend', skills: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap 5', 'Ant Design'] },
    { category: 'Мобильная разработка', skills: ['React Native', 'Expo'] },
  ],
  education: [
    {
      institution: 'АУГСГиП',
      degree: 'Среднее профессиональное образование, специальность "Информационные системы и программирование"',
      period: '2022-2026',
    },
    {
      institution: 'СПбПУ',
      degree: 'Высшее образование (Бакалавриат), специальность "Информационные системы и технологии"',
      period: '1 курс, заочная форма',
    },
  ],
  experience: [
    {
      company: 'ООО "ПОЧИНИ.ОНЛАЙН"',
      role: 'Fullstack-разработчик',
      period: 'июль 2025 — сентябрь 2026',
      details: [
        'Участвовал в реализации MVP распределённой платформы на микросервисной архитектуре.',
        'Разрабатывал frontend-часть на React Native/Expo и интегрировал её с REST API.',
        'Реализовывал работу с медиа и интеграцию с медиасервисами.',
        'Разрабатывал backend-сервисы на Python/Litestar, REST и WebSocket API, взаимодействие с PostgreSQL и Redis.',
        'Оптимизировал код и участвовал в настройке контейнеризации и GitLab CI/CD.',
      ],
    },
    {
      company: 'Фриланс',
      role: 'TypeScript-разработчик',
      period: 'август 2026',
      details: [
        'Разработал бота для мессенджера MAX на TypeScript с использованием MAX API.',
        'Реализовал систему, упрощающую работу с отчётностью водителей и логистов на предприятии.',
      ],
    },
  ],
}

const themes = {
  dark: {
    page: 'bg-zinc-950',
    card: 'bg-zinc-900 border-zinc-800',
    name: 'text-zinc-100',
    sectionTitle: 'text-zinc-100 border-zinc-700',
    text: 'text-zinc-400',
    textBold: 'text-zinc-100',
    period: 'text-zinc-500',
    accent: 'text-teal-400',
    accentBorder: 'border-teal-500',
    tag: 'bg-teal-900 text-teal-300',
    toggleBtn: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.5)]',
    divider: 'bg-zinc-800',
    printBtn: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
  },
  light: {
    page: 'bg-gray-100',
    card: 'bg-white border-gray-200',
    name: 'text-gray-900',
    sectionTitle: 'text-gray-800 border-gray-200',
    text: 'text-gray-500',
    textBold: 'text-gray-800',
    period: 'text-gray-400',
    accent: 'text-teal-800',
    accentBorder: 'border-teal-600',
    tag: 'bg-teal-100 text-teal-800',
    toggleBtn: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.1)]',
    divider: 'bg-gray-200',
    printBtn: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  },
}

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const t = isDark ? themes.dark : themes.light

  const handlePrint = () => window.print()

  return (
    <div className={`min-h-screen ${t.page} py-6 sm:py-10 px-4 transition-colors duration-300`}>
      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          html, body { margin: 0; padding: 0; }
          body * { visibility: hidden; }
          #resume-card, #resume-card * { visibility: visible; color: black !important; }
          #resume-card .contact-icon { width: 10px !important; height: 10px !important; }
          #resume-card .resume-photo,
          #resume-card .vk-contact { display: none !important; }
          #resume-card .border-l-2 { border-color: black !important; }
          #resume-card {
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            padding: 5mm;
            box-sizing: border-box;
            background: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
            font-size: 10px !important;
            line-height: 1.25 !important;
          }
          #resume-card h1 { font-size: 20px !important; }
          #resume-card h2 { font-size: 11px !important; margin-bottom: 2px !important; padding-bottom: 1px !important; }
          #resume-card img { width: 64px !important; height: 64px !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          #resume-card .contact-icon { width: 10px !important; height: 10px !important; }
          #resume-card .job-title { font-size: 10px !important; margin-top: 1px !important; }
          #resume-card .contacts-row { flex-direction: row !important; flex-wrap: wrap !important; gap: 8px !important; margin-top: 4px !important; }
          #resume-card .resume-header { padding-top: 2mm !important; padding-bottom: 2mm !important; }
          #resume-card .resume-content { padding-top: 2mm !important; padding-bottom: 2mm !important; }
          #resume-card .resume-content > * + * { margin-top: 6px !important; }
          #resume-card .resume-content h2 { margin-bottom: 2px !important; }
          #resume-card .resume-content .space-y-4 > * + * { margin-top: 5px !important; }
          #resume-card .resume-content .space-y-3 > * + * { margin-top: 4px !important; }
          #resume-card .resume-content .space-y-2 > * + * { margin-top: 3px !important; }
          #resume-card .resume-content .space-y-1 > * + * { margin-top: 1px !important; }
        }
      `}</style>

      <div className="max-w-2xl mx-auto">

        <div className="print:hidden flex justify-end mb-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`${t.toggleBtn} px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200`}
          >
            {isDark ? '☀️ Светлая' : '🌙 Тёмная'}
          </button>
        </div>

        <div id="resume-card" className={`${t.card} rounded-2xl border overflow-hidden transition-colors duration-300`}>

          <div className="resume-header flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-4 sm:py-5">
            <img
              src={resume.photo}
              alt="Фото"
              className={`resume-photo w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 ${t.shadow}`}
            />
            <div>
              <h1 className={`text-lg sm:text-2xl font-bold ${t.name}`}>{resume.name}</h1>
              <p className={`text-xs font-medium ${t.accent} mt-0.5 job-title`}>Backend Python Developer</p>
              <div className={`flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mt-2 text-xs ${t.text} contacts-row`}>
                <a href={`https://t.me/${resume.contacts.telegram.replace('@', '')}`} target="_blank" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <img src={tgIcon} alt="Telegram" className="w-4 h-4 contact-icon" />
                  <span>{resume.contacts.telegram}</span>
                </a>
                <a href={resume.contacts.vk} target="_blank" className="vk-contact flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <img src={vkIcon} alt="VK" className="w-4 h-4 contact-icon" />
                  <span>VK</span>
                </a>
                <a href={resume.contacts.github} target="_blank" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <img src={githubIcon} alt="GitHub" className="w-4 h-4 contact-icon" />
                  <span>unish333ld</span>
                </a>
                <a href={`mailto:${resume.contacts.email}`} className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <img src={gmailIcon} alt="Email" className="w-4 h-4 contact-icon" />
                  <span>{resume.contacts.email}</span>
                </a>
                <span className="flex items-center gap-1">📍 {resume.contacts.location}</span>
              </div>
            </div>
          </div>

          <div className="resume-content px-4 sm:px-6 py-4 sm:py-5 space-y-5 sm:space-y-6">

            <Section title="О себе" t={t}>
              <p className={`${t.text} text-sm leading-relaxed`}>{resume.about}</p>
            </Section>

            <Section title="Опыт работы" t={t}>
              <div className="space-y-4">
                {resume.experience.map((job, i) => (
                  <div key={i} className={`border-l-2 ${t.accentBorder} pl-4`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className={`font-semibold ${t.textBold}`}>{job.role}</p>
                        <p className={`${t.accent} text-sm`}>{job.company}</p>
                      </div>
                      <span className={`text-xs ${t.period} sm:whitespace-nowrap`}>{job.period}</span>
                    </div>
                    <ul className={`${t.text} text-sm mt-1 list-disc pl-5 space-y-1`}>
                      {job.details.map((detail, j) => <li key={j}>{detail}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Работал с" t={t}>
              <div className="space-y-3">
                {resume.hardSkills.map((group, i) => (
                  <div key={i}>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${t.accent} mb-2`}>{group.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((s, j) => (
                        <span key={j} className={`${t.tag} text-sm px-3 py-1 rounded-full`}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Образование" t={t}>
              <div className="space-y-2">
                {resume.education.map((edu, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                    <div>
                      <p className={`font-semibold ${t.textBold}`}>{edu.institution}</p>
                      <p className={`${t.text} text-sm`}>{edu.degree}</p>
                    </div>
                    <span className={`text-xs ${t.period} sm:whitespace-nowrap`}>{edu.period}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Языки" t={t}>
              <div className="space-y-1 text-sm">
                <p className={t.text}><span className={`font-semibold ${t.textBold}`}>Английский</span> — Средний</p>
                <p className={t.text}><span className={`font-semibold ${t.textBold}`}>Немецкий</span> — Начальный</p>
                <p className={t.text}><span className={`font-semibold ${t.textBold}`}>Русский</span> — Родной</p>
              </div>
            </Section>

          </div>
        </div>

        <div className="print:hidden flex justify-center mt-4">
          <button
            onClick={handlePrint}
            className={`${t.printBtn} px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200`}
          >
            🖨️ Распечатать резюме
          </button>
        </div>

      </div>
    </div>
  )
}

function Section({ title, children, t }: { title: string; children: React.ReactNode; t: typeof themes.dark }) {
  return (
    <div>
      <h2 className={`text-base font-bold ${t.sectionTitle} border-b pb-1 mb-2 transition-colors duration-300`}>{title}</h2>
      {children}
    </div>
  )
}
