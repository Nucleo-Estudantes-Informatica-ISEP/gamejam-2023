import { motion } from 'framer-motion';
import { useState } from 'react';

interface JudgeItemProps {
  name: string;
  image: string;
  description: string;
  sectionHovered: boolean;
  isLeft: boolean;
  overDescription: string;
}

const JudgeItem: React.FC<JudgeItemProps> = ({
  name,
  image,
  description,
  sectionHovered,
  isLeft,
  overDescription
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="relative w-full flex items-center justify-center">
      <motion.div
        onMouseOver={() => setIsHovered(true)}
        onMouseDown={() => setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{
          scale: isHovered ? 1.05 : 1,
          filter: isHovered
            ? 'brightness(100%) blur(0px)'
            : sectionHovered
            ? 'brightness(50%) blur(4px)'
            : 'brightness(100%) blur(0)'
        }}
        transition={{ opacity: { duration: 0.5 }, duration: 0.1 }}
        viewport={{ once: true }}
        className={`bg-background-light max-w-xs w-full rounded-lg px-4 py-6 cursor-pointer z-0 duration-100 ease-in-out 
        ${isHovered && 'shadow-intense-shadow'}`}>
        <div className="flex flex-col items-start min-h-fit h-[21rem] gap-6">
          <img
            className="rounded-md w-full aspect-[25/23] justify-center items-center mx-auto "
            src={image}
            alt={name}
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-xl md:text-2xl">{name}</h3>
            <p className="text-sm md:text-md">{description}</p>
          </div>
        </div>
      </motion.div>
      <motion.p
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsHovered(false)}
        className={`absolute w-full ${
          isLeft ? 'md:-inset-x-1/2' : 'md:inset-x-1/2'
        } bottom-72 bg-white border-slate-400 border-2 rounded-lg text-black text-sm text-center px-4 py-2 z-10`}
        animate={{
          scale: isHovered ? [0, 1] : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.2 }}>
        {overDescription}
      </motion.p>
    </article>
  );
};

export default JudgeItem;
