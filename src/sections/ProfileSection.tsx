import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile.data";
import MainSection from "@/components/ui/MainSection";

export default function ProfileSection() {
  const { name, title, email, links, resumeHref, imageSrc } = profile;

  return (
    <MainSection>
      <h2 className="text-3xl font-semibold">Profile</h2>
      <hr className="mt-2 w-full border-gray-200" />

      {imageSrc && (
        <div className="relative mt-6 h-50 w-80 overflow-hidden rounded-full ring-1 ring-gray-200">
          <Image
            src={imageSrc}
            alt={`${name} 프로필 사진`}
            fill
            sizes="200px"
            className="object-cover"
          />
        </div>
      )}

      <p className="text-lg mt-4 text-gray-700">
        {name} · {title}
      </p>

      <dl className="mt-4 grid gap-3 text-gray-700 w-full max-w-xl">
        <div className="flex justify-between">
          <dt className="text-gray-500">이메일</dt>
          <dd>
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-2"
            >
              {email}
            </a>
          </dd>
        </div>

        <div className="flex justify-between">
          <dt className="text-gray-500">링크</dt>
          <dd className="flex flex-wrap gap-4">
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
          <div className="flex justify-between">
            <dt className="text-gray-500">이력서</dt>
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
          <div className="flex justify-between">
            <dt className="text-gray-500">기술 스택</dt>
            <dd className="flex flex-wrap gap-4">
              {profile.stacks.map(({ name, icon: Icon, color }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon className={`w-6 h-6 ${color}`} />
                  <span>{name}</span>
                </div>
              ))}
            </dd>
          </div>
        )}

        {profile.subStacks && (
          <div className="flex justify-between">
            <dt className="text-gray-500">기타 Tools</dt>
            <dd className="flex flex-wrap gap-4">
              {profile.subStacks.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="relative group flex items-center justify-center"
                >
                  <Icon className={`w-6 h-6 ${color}`} />

                  {/* 커스텀 툴팁 */}
                  <span
                    className="
        absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded
        opacity-0 group-hover:opacity-100 transition-opacity
        whitespace-nowrap
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
