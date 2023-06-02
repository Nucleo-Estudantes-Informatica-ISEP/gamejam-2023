import { useState } from 'react';
const photos = [
  <span className="text-4xl font-black">Photo 1</span>,
  <span className="text-4xl font-black">Photo 2</span>,
  <span className="text-4xl font-black">Photo 3</span>,
  <span className="text-4xl font-black">Photo 4</span>,
  <span className="text-4xl font-black">Photo 5</span>
];

const Photos: React.FC = () => {
  const [current, setCurrent] = useState<number>(3);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <section className="container h-96 relative">
        <article className="absolute w-1/2 h-full flex items-center justify-center bg-slate-400 rounded-lg shadow-xl skew-y-6 -translate-y-10">
          <span className="text-4xl font-black">Photo 1</span>
        </article>
        <article className="absolute w-1/2 h-full flex items-center justify-center bg-slate-400 rounded-lg shadow-xl skew-y-6 -translate-y-10 z-10">
          <span className="text-4xl font-black">Photo 2</span>
        </article>
        <article className="absolute left-1/2 -translate-x-1/2 w-1/2 h-full flex items-center justify-center bg-slate-400 rounded-lg shadow-xl z-20">
          <span className="text-4xl font-black">Photo 3</span>
        </article>
        <article className="absolute left-1/2 w-1/2 h-full flex items-center justify-center bg-slate-400 rounded-lg shadow-xl -skew-y-6 -translate-y-10 z-10">
          <span className="text-4xl font-black">Photo 4</span>
        </article>
        <article className="absolute left-1/2 w-1/2 h-full flex items-center justify-center bg-slate-400 rounded-lg shadow-xl -skew-y-6 -translate-y-10">
          <span className="text-4xl font-black">Photo 5</span>
        </article>
      </section>
      <div className="flex items-center justify-center w-full gap-x-4 my-4">
        <button className="px-4 py-2 rounded-full bg-slate-400 uppercase font-black text-2xl border-2 border-slate-700">
          &lt;
        </button>
        <button className="px-4 py-2 rounded-full bg-slate-400 uppercase font-black text-2xl border-2 border-slate-700">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Photos;
