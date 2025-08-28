'use client';

import Image from 'next/image';

type Project = {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
};

const sampleProjects: Project[] = [
  {
    title: 'Web E Commerce',
    description: 'เป็นเว็ปสร้างเล่น ที่ชมรม',
    image: '/img/projects/project1.png',
    tags: ['Next.js', 'Tailwind', 'UI'],
  }
];

export default function Right() {
  return (
    <section className="w-full md:w-2/3 lg:w-3/4">
      {/* About */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">เกี่ยวกับฉัน</h2>
        <p className="mt-3 text-gray-600">
        ตอนนี้เป็นนักศึกษา ของวิทยาลัยเทคนิคเชียงใหม่ สาขา เทคโนโลยีสารสนเทศ ชั้น ปวส.1 สายตรง
        </p>
      </div>

      {/* Projects */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800">Projects</h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {sampleProjects.map((p, idx) => (
            <article key={idx} className="rounded-lg border border-gray-200 overflow-hidden">
              <div className="relative h-36 bg-gray-50">
                {p.image ? (
                  <Image src={p.image} alt={p.title} fill />
                ) : null}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>

                {p.tags && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


