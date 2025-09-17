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
  const items = await getVelogLatest("somda", 3);
  if (!items.length) return null;

  return (
    <MainSection>
      <h2 className="text-3xl font-semibold">Velog· Latest</h2>
      <hr className="mt-2 w-full border-gray-200" />
      <ul className="mt-4 space-y-4">
        {items.map((post) => (
          <li key={post.link} className="group">
            <Link
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="text-lg font-medium underline-offset-2 group-hover:underline"
            >
              {post.title}
            </Link>
            {post.pubDate && (
              <p className="text-sm text-gray-500">
                {new Date(post.pubDate).toLocaleDateString("ko-KR")}
              </p>
            )}
            {post.description && (
              <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                {/* memo. dangerouslySetInnerHTML 사용 시 hydration mismatch 발생 */}
                {post.description?.replace(/<[^>]+>/g, "").slice(0, 100)}...
              </p>
            )}
          </li>
        ))}
      </ul>
    </MainSection>
  );
}
