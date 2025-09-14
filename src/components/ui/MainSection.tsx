export default function MainSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="
    flex flex-col items-center gap-4
    py-12 space-y-4 text-center h-screen snap-start
    mx-auto max-w-[65ch] px-4 pt-16 text-center
    "
    >
      {children}
    </section>
  );
}
