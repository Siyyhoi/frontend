'use client';

import Image from 'next/image';
import Link from 'next/link';
import Skills from './skills';

export default function Left() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-blue-100">
          <Image src="/img/projects/me.png" alt="Profile" fill className="object-contain bg-gray-50" />
        </div>
        <h1 className="mt-4 text-xl font-semibold text-gray-800">นายชลสิทธิ์ แสงปินตา</h1>
        <p className="text-sm text-gray-500">Frontend Developer</p>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 tracking-wider">ติดต่อ</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Email:</span>
            <a href="mailto:you@example.com" className="text-blue-600 hover:underline">siyyhoi@gmail.com</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Phone:</span>
            <a href="tel:+6612345678" className="text-blue-600 hover:underline">+66 061 362 7678</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-medium text-gray-700">Location:</span>
            <span>ChingMai, Thailand</span>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 tracking-wider">SOCIAL</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="https://github.com/Siyyhoi" className="px-3 py-1 rounded-md bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">GitHub</Link>
          <Link href="https://www.facebook.com/Chonlasit.sangpinta" className="px-3 py-1 rounded-md bg-gray-100 text-sm text-gray-700 hover:bg-gray-200">Facebook</Link>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 tracking-wider">SKILLS</h2>
        <Skills />
      </div>
    </aside>
  );
}


