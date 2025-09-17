import MainSection from "@/components/ui/MainSection";
import { experiences, educations } from "@/data/background.data";

export default function BackgroundSection() {
  return (
    <MainSection fullHeight={false}>
      <h2 className="text-3xl font-semibold">Experience & Education</h2>
      <hr className="mt-2 w-full border-gray-200" />

      {/* 경력 */}
      <section className="mt-6 w-full">
        <h3 className="text-xl font-semibold">경력</h3>
        <ul className="mt-4 space-y-6">
          {experiences.map((exp) => (
            <li
              key={`${exp.company}-${exp.start}`}
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-x-2">
                <strong className="text-lg">{exp.company}</strong>
                <span className="text-sm text-gray-600">— {exp.role}</span>
                <span className="ml-auto text-sm text-gray-500">
                  {exp.start} ~ {exp.end}
                </span>
              </div>
              {exp.summary && (
                <p className="mt-2 text-sm text-gray-700">{exp.summary}</p>
              )}
              {/* TODO: 구성 점검 후 추가 */}
              {/* {exp.bullets && (
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
        </ul>
      </section>

      {/* 교육 */}
      <section className="mt-10 w-full">
        <h3 className="text-xl font-semibold">교육 & 자격증</h3>
        <ul className="mt-4 space-y-6">
          {educations.map((ed) => (
            <li
              key={ed.title}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-x-2">
                <strong className="text-base">{ed.title}</strong>
                {ed.period && (
                  <span className="ml-auto text-sm text-gray-500">
                    {ed.period}
                  </span>
                )}
              </div>
              {ed.bullets && (
                <ul className="mt-3 space-y-1 text-sm text-gray-700">
                  {ed.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-400 shrink-0" />
                      <span>{b}</span>
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
