
import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => setLang(lang === "en" ? "th" : "en");

  const content = {
    en: {
      name: "Saowalak Charoenrakphanya",
      intro:
        "My name is Saowalak Charoenrakphanya, in my role as a PMO and QA Lead, I bridge the gap between business requirements and technical execution. By managing agile processes, improving development workflows, and ensuring quality control, I contribute to the successful delivery of software products. My focus on process eGiciency and continuous improvement helps the team achieve high performance while maintaining quality standards in an agile environment.",
      resume: "Download Resume",
      about: "About Me",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    th: {
      name: "เสาวลักษณ์ เจริญรักษ์ปัญญา",
      intro:
        "My name is Saowalak Charoenrakphanya, in my role as a PMO and QA Lead, I bridge the gap between business requirements and technical execution. By managing agile processes, improving development workflows, and ensuring quality control, I contribute to the successful delivery of software products. My focus on process eGiciency and continuous improvement helps the team achieve high performance while maintaining quality standards in an agile environment.",
      resume: "ดาวน์โหลดเรซูเม่",
      about: "เกี่ยวกับฉัน",
      portfolio: "ผลงาน",
      contact: "ติดต่อ"
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors">
      <nav className="p-4 flex justify-between items-center shadow-md bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">{content[lang].name}</h1>
        <div className="space-x-4">
          <button onClick={toggleLang} className="hover:underline">
            {lang === "en" ? "TH" : "EN"}
          </button>
          <a
            href="https://drive.google.com/file/d/1naiQwuulW58I4g-T0p50W_qe6GrwgDwV/view"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {content[lang].resume}
          </a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{content[lang].name}</h2>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          {content[lang].intro}
        </p>
      </section>

      <footer className="text-center p-6 bg-gray-100 dark:bg-gray-800">
        <p>&copy; 2025 {content[lang].name}</p>
      </footer>
    </div>
  );
}
