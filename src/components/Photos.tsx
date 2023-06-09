import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useWindowDimensions from '../utils/useWindowDimensions';

const N_OF_FILES = 132;

const photos: JSX.Element[] = [];

for (let i = 1; i <= N_OF_FILES; i++)
  photos.push(<img src={`/event/${i}.webp`} className="w-full mx-auto aspect-[3/2]" />);

const PHOTOS_BREAKPOINT = 1024;

const Photos: React.FC = () => {
  const [current, setCurrent] = useState<number>(2);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
      if (!isHovered) next();
    }, 10000);
    return () => clearInterval(interval);
  }, [current, isHovered]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') previous();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const { width } = useWindowDimensions();

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full h-[75vh] lg:h-[50vh] relative">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.article
            key={current - 2 + i}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            animate={{
              left: width < PHOTOS_BREAKPOINT ? '50%' : i < 2 ? 0 : i === 2 ? '25%' : '50%',
              top: width > PHOTOS_BREAKPOINT ? 0 : i < 2 ? 0 : i === 2 ? '25%' : '50%',
              translateX: width < PHOTOS_BREAKPOINT ? '-50%' : 0,
              scale: i === 2 ? 1.1 : 1
            }}
            whileHover={{
              scale: i === 2 ? 1.5 : 1
            }}
            whileTap={{
              scale: i === 2 ? 1.5 : 1
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
            } w-4/5 lg:w-1/2 rounded-lg shadow-xl`}>
            {photos[(photos.length + current - 2 + i) % photos.length]}
          </motion.article>
        ))}
        <button
          onClick={previous}
          className="absolute z-30 px-4 -top-8 lg:left-0 rotate-90 lg:rotate-0 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:top-1/2 lg:-translate-y-1/2 py-2 rounded-full bg-white text-black text-center uppercase font-black text-2xl border-2 border-slate-700 hover:brightness-90 transition-all duration-100">
          &lt;
        </button>
        <button
          onClick={next}
          className="absolute z-30 lg:right-0 top-full rotate-90 lg:rotate-0 translate-x-1/2 lg:translate-x-0 right-1/2 lg:top-1/2 lg:-translate-y-1/2 px-4 py-2 rounded-full bg-white text-black text-center uppercase font-black text-2xl border-2 border-slate-700 hover:brightness-90 transition-all duration-100">
          &gt;
        </button>
      </section>
    </div>
  );
};

export default Photos;
