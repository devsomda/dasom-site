import MainSection from "@/components/ui/MainSection";
import { experiences, educations } from "@/data/background.data";

export default function BackgroundSection() {
  return (
    <MainSection title="Experience & Education">
      {/* 경력 */}
      <section className="w-full">
        <h3 className="text-lg sm:text-xl font-semibold">경력</h3>
        <ul className="mt-3 sm:mt-4 space-y-4 sm:space-y-6">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.start}`}
              className="p-4 sm:p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-base sm:text-lg text-gray-900">
                  {exp.company}
                </strong>
                <span className="text-sm text-gray-600">— {exp.role}</span>
                <span className="sm:ml-auto text-sm text-gray-500 mt-1 sm:mt-0">
                  {exp.start} ~ {exp.end}
                </span>
              </div>
              {exp.summary && (
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {exp.summary}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 교육 */}
      <section className="mt-8 sm:mt-10 w-full">
        <h3 className="text-lg sm:text-xl font-semibold">교육 & 자격증</h3>
        <ul className="mt-3 sm:mt-4 space-y-4 sm:space-y-6">
          {educations.map((ed) => (
            <li
              key={ed.title}
              className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                <strong className="text-sm sm:text-base text-gray-900">
                  {ed.title}
                </strong>
                {ed.period && (
                  <span className="sm:ml-auto text-sm text-gray-500 mt-1 sm:mt-0">
                    {ed.period}
                  </span>
                )}
              </div>
              {ed.bullets && (
                <ul className="mt-2 sm:mt-3 space-y-1 text-sm text-gray-700">
                  {ed.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>
    </MainSection>
  );
}
