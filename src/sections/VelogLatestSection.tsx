import MainSection from "@/components/ui/MainSection";
import Link from "next/link";
import { XMLParser } from "fast-xml-parser";

type FeedItem = {
  title: string;
  link: string;
  pubDate?: string;
  description?: string;
};

async function getVelogLatest(
  username: string,
  limit = 3
): Promise<FeedItem[]> {
  const url = `https://v2.velog.io/rss/@${username}`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 12 } }); // 12시간 캐시
  if (!res.ok) return [];
  const xml = await res.text();
  const parsed = new XMLParser({ ignoreAttributes: false }).parse(xml);
  const items = parsed?.rss?.channel?.item ?? [];
  // RSS가 글이 1개면 item이 객체일 수 있어 배열로 정규화 해야함
  const arr = Array.isArray(items) ? items : [items];
  return arr.slice(0, limit).map((item: any) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.description,
  }));
}

export default async function VelogLatestSection() {
  const items = await getVelogLatest("somda", 4);
  if (!items.length) return null;

  return (
    <MainSection>
      <h2 className="text-3xl font-semibold">Velog· Latest</h2>
      <hr className="mt-2 w-full border-gray-200" />
      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {items.map((post) => (
          <li
            key={post.link}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            <Link
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-semibold text-gray-900 hover:text-primary"
            >
              {post.title}
            </Link>

            {post.pubDate && (
              <p className="mt-1 text-xs text-gray-500">
                {new Date(post.pubDate).toLocaleDateString("ko-KR")}
              </p>
            )}

            {post.description && (
              <p className="mt-3 text-sm text-gray-700 line-clamp-3">
                {post.description?.replace(/<[^>]+>/g, "").slice(0, 120)}...
              </p>
            )}

            <div className="mt-4">
              <Link
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                글 보러가기 →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </MainSection>
  );
}
