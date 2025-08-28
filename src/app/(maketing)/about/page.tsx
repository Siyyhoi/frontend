import Left from '@/app/components/left';
import Right from '@/app/components/right';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid gap-6 md:grid-cols-3">
      <Left />
      <div className="md:col-span-2">
        <Right />
      </div>
    </div>
  );
}
