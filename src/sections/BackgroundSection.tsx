import MainSection from "@/components/ui/MainSection";
import { experiences, educations } from "@/data/background.data";

export default function BackgroundSection() {
  return (
    <MainSection>
      <h2 className="text-3xl font-semibold">Experience & Education</h2>
      <hr className="mt-2 w-full border-gray-200" />

      {/* 경력 */}
      <section className="mt-6 w-full">
        <h3 className="text-xl font-semibold">경력</h3>
        <ul className="mt-4 space-y-4 divide-y divide-gray-200">
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.start}`} className="p-4">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <strong className="text-base">{exp.company}</strong>
                <span className="text-sm text-gray-500">— {exp.role}</span>
                <span className="ml-auto text-sm text-gray-500">
                  {exp.start} ~ {exp.end}
                </span>
              </div>
              {exp.summary && <p className="mt-2 text-sm">{exp.summary}</p>}
              {exp.bullets?.length ? (
                <ul className="mt-2 list-disc list-inside text-sm text-start">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {/* 교육 */}
      <section className="mt-10 w-full">
        <h3 className="text-xl font-semibold">교육</h3>
        <ul className="mt-4 space-y-5 divide-y divide-gray-200">
          {educations.map((ed) => (
            <li key={ed.title} className="p-4">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <strong className="text-base">{ed.title}</strong>
                {ed.period && (
                  <span className="ml-auto text-sm text-gray-500">
                    {ed.period}
                  </span>
                )}
              </div>
              {ed.bullets?.length ? (
                <ul className="mt-2 list-disc list-inside text-sm text-start">
                  {ed.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>
    </MainSection>
  );
}
