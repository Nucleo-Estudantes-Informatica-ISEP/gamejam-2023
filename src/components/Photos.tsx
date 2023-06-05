import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const N_OF_FILES = 21;

const photos: JSX.Element[] = [];

for (let i = 1; i <= N_OF_FILES; i++)
  photos.push(<img src={`/event/${i}.webp`} className="w-full h-full aspect-[3/2]" />);

const Photos: React.FC = () => {
  const [current, setCurrent] = useState<number>(2);

  function previous() {
    if (current === 0) setCurrent(photos.length - 1);
    else setCurrent((cur) => cur - 1);
  }

  function next() {
    if (current === photos.length - 1) setCurrent(0);
    else setCurrent((cur) => cur + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') previous();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="flex flex-col items-center w-full">
      <section className="h-[32rem] w-full relative">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.article
            key={current - 2 + i}
            animate={{
              translateY: i === 2 ? '2px' : '0',
              left: i < 2 ? 0 : i === 2 ? '25%' : '50%',
              scale: i === 2 ? 1.1 : 1
            }}
            transition={{
              duration: 0.5,
              type: 'spring',
              bounce: 0.5
            }}
            className={`absolute ${
              i === 2
                ? 'z-20 brightness-100 blur-none'
                : i === 0 || i === 4
                ? 'z-0 blur-sm'
                : 'z-10 brightness-75 blur-sm'
            }
            w-1/2 rounded-lg shadow-xl`}>
            {photos[(photos.length + current - 2 + i) % photos.length]}
          </motion.article>
        ))}
        <button
          onClick={previous}
          className="absolute z-30 px-4 top-1/2 -translate-y-1/2 py-2 rounded-full bg-white  text-black text-center uppercase font-black text-2xl border-2 border-slate-700 hover:brightness-90 transition-all duration-100">
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute z-30 right-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-white  text-black text-center uppercase font-black text-2xl border-2 border-slate-700 hover:brightness-90 transition-all duration-100">
          &gt;
        </button>
      </section>
    </div>
  );
};

export default Photos;
