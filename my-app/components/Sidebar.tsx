'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="space-y-4">
        <Link href="/">
          <a className="block hover:bg-gray-700 rounded px-3 py-2">Home</a>
        </Link>
        <Link href="/magazines">
          <a className="block hover:bg-gray-700 rounded px-3 py-2">Revistas</a>
        </Link>
      </nav>
    </aside>
  );
}
