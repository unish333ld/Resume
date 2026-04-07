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
  about: 'Учусь на 4-м курсе колледжа по специальности «Информационные системы и программирование». Готовлюсь к поступлению в СПбПУ на заочную форму обучения по направлению «Программная инженерия». Параллельно участвую в стартапе студентов ИТМО — ООО «ПОЧИНИ.ОНЛАЙН», помогаю с frontend-частью проекта, а также изучаю React, Expo (React Native) и TypeScript.',
  hardSkills: [
    { category: 'Фронтенд', skills: ['React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap 5', 'Ant Design'] },
    { category: 'Мобильная разработка', skills: ['React Native', 'Expo'] },
    { category: 'Бэкенд', skills: ['Python', 'Django'] },
    { category: 'Базы данных', skills: ['PostgreSQL', 'MySQL'] },
    { category: 'Инструменты и сборщики', skills: ['Vite', 'Postman'] },
    { category: 'Пакетные менеджеры', skills: ['npm', 'Bun'] },
  ],
  education: [
    {
      institution: 'АУГСГиП',
      degree: 'Среднее профессиональное образование, специальность «Информационные системы и программирование»',
      period: '4 курс, очная форма',
    },
  ],
  experience: [
    {
      company: 'ООО "ПОЧИНИ.ОНЛАЙН" • Стартап',
      role: 'Frontend-разработчик',
      period: '2025 — по настоящее время',
      description: 'Разработка мобильного приложения на Expo (React Native), интеграция с REST API по документации Swagger, верстка кросс-платформенных интерфейсов.',
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
          #resume-card .border-l-2 { border-color: black !important; }
          #resume-card {
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            padding: 8mm;
            box-sizing: border-box;
            background: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
            font-size: 11px !important;
            line-height: 1.4 !important;
          }
          #resume-card h1 { font-size: 16px !important; }
          #resume-card h2 { font-size: 12px !important; margin-bottom: 4px !important; padding-bottom: 2px !important; }
          #resume-card img { width: 64px !important; height: 64px !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          #resume-card .contact-icon { width: 10px !important; height: 10px !important; }
          #resume-card .job-title { font-size: 10px !important; margin-top: 1px !important; }
          #resume-card .contacts-row { flex-direction: row !important; flex-wrap: wrap !important; gap: 8px !important; margin-top: 4px !important; }
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

          <div className="flex items-center gap-4 sm:gap-5 px-4 sm:px-6 py-5 sm:py-6">
            <img
              src={resume.photo}
              alt="Фото"
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0 ${t.shadow}`}
            />
            <div>
              <h1 className={`text-lg sm:text-2xl font-bold ${t.name}`}>{resume.name}</h1>
              <p className={`text-xs font-medium ${t.accent} mt-0.5 job-title`}>Frontend Developer</p>
              <div className={`flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1 mt-2 text-xs ${t.text} contacts-row`}>
                <a href={`https://t.me/${resume.contacts.telegram.replace('@', '')}`} target="_blank" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                  <img src={tgIcon} alt="Telegram" className="w-4 h-4 contact-icon" />
                  <span>{resume.contacts.telegram}</span>
                </a>
                <a href={resume.contacts.vk} target="_blank" className="flex items-center gap-1 hover:opacity-70 transition-opacity">
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

          <div className={`h-px mx-4 sm:mx-6 ${t.divider}`} />

          <div className="px-4 sm:px-6 py-5 sm:py-6 space-y-6 sm:space-y-8">

            <Section title="О себе" t={t}>
              <p className={`${t.text} text-sm leading-relaxed`}>{resume.about}</p>
            </Section>

            <Section title="Работаю с" t={t}>
              <div className="space-y-4">
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
              <div className="space-y-3">
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

            <Section title="Опыт работы" t={t}>
              <div className="space-y-5">
                {resume.experience.map((job, i) => (
                  <div key={i} className={`border-l-2 ${t.accentBorder} pl-4`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <p className={`font-semibold ${t.textBold}`}>{job.role}</p>
                        <p className={`${t.accent} text-sm`}>{job.company}</p>
                      </div>
                      <span className={`text-xs ${t.period} sm:whitespace-nowrap`}>{job.period}</span>
                    </div>
                    <p className={`${t.text} text-sm mt-1`}>{job.description}</p>
                  </div>
                ))}
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
      <h2 className={`text-base font-bold ${t.sectionTitle} border-b pb-1 mb-3 transition-colors duration-300`}>{title}</h2>
      {children}
    </div>
  )
}
