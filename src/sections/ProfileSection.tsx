import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile.data";
import MainSection from "@/components/ui/MainSection";

export default function ProfileSection() {
  const { name, title, email, links, resumeHref, imageSrc } = profile;

  return (
    <MainSection title="Profile">
      {imageSrc && (
        <div
          className="relative mx-auto
          aspect-[5/3] w-40 sm:w-48 md:w-56 lg:w-64
          overflow-hidden rounded-full ring-1 ring-gray-200"
        >
          <Image
            src={imageSrc}
            alt={`${name} 프로필 사진`}
            fill
            sizes="(max-width: 640px) 128px, 
            (max-width: 768px) 160px,
            (max-width: 1024px) 192px, 
            224px"
            className="object-cover"
          />
        </div>
      )}

      <p className="text-base sm:text-lg lg:text-xl mt-4 text-typo-header">
        {name} · {title}
      </p>

      <dl className="mt-4 sm:mt-6 grid gap-3 sm:gap-4 text-sm sm:text-base text-typo-paragraph w-full max-w-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
          <dt className="text-typo-paragraph text-left">이메일</dt>
          <dd>
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-2 break-all text-left"
            >
              {email}
            </a>
          </dd>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
          <dt className="text-typo-paragraph text-left">링크</dt>
          <dd className="flex flex-wrap gap-2 sm:gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2"
              >
                {l.label}
              </Link>
            ))}
          </dd>
        </div>

        {resumeHref && (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
            <dt className="text-typo-paragraph text-left">이력서</dt>
            <dd>
              <Link
                href={resumeHref}
                target="_blank"
                className="underline underline-offset-2"
              >
                다운로드(PDF)
              </Link>
            </dd>
          </div>
        )}

        {profile.stacks && (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 align-center">
            <dt className="text-typo-paragraph text-left whitespace-nowrap">
              기술 스택
            </dt>
            <dd className="flex flex-wrap gap-2 sm:gap-4 justify-start sm:justify-end">
              {profile.stacks.map(({ name, icon: Icon, color }) => (
                <div key={name} className="flex items-center gap-1 sm:gap-2">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
                  <span className="text-sm sm:text-base">{name}</span>
                </div>
              ))}
            </dd>
          </div>
        )}

        {profile.subStacks && (
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 align-center">
            <dt className="text-typo-paragraph text-left whitespace-nowrap">
              기타 Tools
            </dt>
            <dd className="flex flex-wrap gap-2 sm:gap-4 justify-start sm:justify-end">
              {profile.subStacks.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="relative group flex items-center justify-center"
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />

                  {/* 커스텀 툴팁 */}
                  <span
                    className="
        absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded
        opacity-0 group-hover:opacity-100 transition-opacity
        whitespace-nowrap z-10
      "
                  >
                    {name}
                  </span>
                </div>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </MainSection>
  );
}
