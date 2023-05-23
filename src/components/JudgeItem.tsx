import { motion } from 'framer-motion';
import { useState } from 'react';

interface JudgeItemProps {
  name: string;
  image: string;
  description: string;
  sectionHovered: boolean;
  isLeft: boolean;
  overDescription: string;
  stretchedImage?: boolean;
}

const JudgeItem: React.FC<JudgeItemProps> = ({
  name,
  image,
  description,
  sectionHovered,
  isLeft,
  overDescription,
  stretchedImage
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="relative w-1/2 h-full md:w-full mb-24">
      <motion.div
        onMouseOver={() => setIsHovered(true)}
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
        className={`bg-background-light w-full rounded-lg px-4 py-6 cursor-pointer z-0 duration-100 ease-in-out 
        ${isHovered && 'shadow-intense-shadow'}`}>
        <div className="flex flex-col h-80">
          <img
            className={`rounded-md mb-4 w-48 justify-center items-center mx-auto ${
              stretchedImage ? 'h-64' : 'h-60'
            }`}
            src={image}
            alt={name}
          />
          <h3 className="text-2xl md:text-3xl">{name}</h3>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </motion.div>
      <motion.p
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsHovered(false)}
        className={`absolute w-full ${
          isLeft ? 'md:-inset-x-1/2' : 'md:inset-x-1/2'
        } -top-56 bg-white border-slate-400 border-2 rounded-lg text-black text-lg text-center px-4 py-2 z-10`}
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
