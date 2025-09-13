import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>404! - 페이지를 찾을 수 없습니다.</h1>
      <p>주소를 잘못 입력하셨나요</p>
      <Link href="/" className="text-blue-500">
        홈으로 이동해 개발자 박다솜에 대해 자세히 알아보세요!
      </Link>
    </div>
  );
}
