// Link
import Link from "next/link";
export default function NotFound() {
  // hooks
  // local variables
  // functions
  // return
  return (
    <>
      <section className="flex h-screen w-screen flex-col items-center justify-center p-12">
        <h1 className="text-64px-capsized mb-16 text-center font-stolzl font-normal text-white">
          404 | Not Found
        </h1>

        <h2 className="text-32px-capsized mt-8 text-center font-stolzl font-normal text-white">
          <Link href="/" className="text-white">
            ➡️ Home ⬅️
          </Link>
        </h2>
      </section>
    </>
  );
}
