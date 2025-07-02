'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import 'flowbite/dist/flowbite.min.css';
import 'flowbite';

export default function Cards() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('flowbite');
    }
  }, []);

  return (
<div className="max-w-screen-xl mx-auto mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/img/cards/1.jpg"
      alt="Example 1"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Card Meme 1
      </h2>
      <p className="text-gray-600 mb-4">
        This is a sample card using Tailwind CSS and Flowbite in a Next.js app.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/img/cards/2.jpg"
      alt="Example 2"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Card Meme 2
      </h2>
      <p className="text-gray-600 mb-4">
        Explore the second card with amazing layout using Tailwind + Next.js.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/img/cards/3.jpg"
      alt="Example 3"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Card Meme 3
      </h2>
      <p className="text-gray-600 mb-4">
        Beautiful and responsive cards powered by Tailwind and Flowbite.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image
      className="w-full h-48 object-cover"
      src="/img/cards/4.png"
      alt="Example 4"
      width={400}
      height={200}
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Card Meme 4
      </h2>
      <p className="text-gray-600 mb-4">
        Last card with clean design, ready for production in your Next.js app.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Read More
      </button>
    </div>
  </div>
</div>
  );
}
