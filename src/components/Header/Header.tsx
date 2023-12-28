import Link from "next/link";

export function Header() {
  return (
    <header className="bg-slate-700">
      <nav className="px-2 py-4" aria-label="header">
        <Link href="/" className="text-white text-lg">
          Statemind<span className="font-semibold ml-1">IO</span>
        </Link>
      </nav>
    </header>
  );
}
