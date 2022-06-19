import Link from "next/link";

export default function Eror() {
  return (
    <div className="grid place-items-center min-h-screen w-full ">
      <Link href="/">
        <a className="text-bold bg-teal-800 p-5 rounded-xl text-white text-4xl">
          404 - Page Not Found |Go back home
        </a>
      </Link>
    </div>
  );
}
