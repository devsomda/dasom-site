export default function MainSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <section
      className={`
        relative
        flex flex-col gap-4
        items-center justify-center
        py-8 sm:py-12 lg:py-16 text-center snap-start
        mx-auto max-w-[65ch]
        min-h-[100svh]
        px-4 sm:px-6
      `}
    >
      {title && (
        <>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {title}
          </h2>
          <hr className="w-full border-gray-200" />
        </>
      )}
      <div className="flex-1 flex flex-col justify-center w-full">
        {children}
      </div>
    </section>
  );
}
