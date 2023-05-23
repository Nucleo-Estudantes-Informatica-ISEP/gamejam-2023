import { motion } from 'framer-motion';
import { useState } from 'react';

interface JudgeItemProps {
  name: string;
  image: string;
  description: string;
  sectionHovered: boolean;
  isLeft: boolean;
}

const JudgeItem: React.FC<JudgeItemProps> = ({
  name,
  image,
  description,
  sectionHovered,
  isLeft
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="relative w-full">
      <motion.div
        initial={{ rotateY: 90 }}
        whileInView={{ rotateY: 0 }}
        whileHover={{ scale: 1.05 }}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ scale: { duration: 0.1 }, rotateY: { duration: 0.5 } }}
        viewport={{ once: true }}
        className={`bg-background-light w-full rounded-lg px-4 py-6 cursor-pointer hover:shadow-intense-shadow hover:blur-none hover:brightness-100 duration-100 ease-in-out z-10 ${
          sectionHovered && 'md:brightness-50 md:blur-sm'
        }`}>
        <img className="rounded-md mb-4" src={image} alt={name} />
        <h3 className="text-2xl md:text-4xl">{name}</h3>
        <p className="text-lg md:text-xl">{description}</p>
      </motion.div>
      <motion.p
        className={`absolute w-full ${
          isLeft ? 'md:-inset-x-1/2' : 'md:inset-x-1/2'
        } -top-40 bg-white border-slate-400 border-2 rounded-lg text-black text-lg text-center px-4 py-2 z-40`}
        animate={{
          rotateY: isHovered ? [90, 0] : 90,
          opacity: isHovered ? 1 : 0
        }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae aliquam distinctio
        error enim velit, cum, dolores expedita labore necessitatibus quisquam repellat, quia
        molestias optio sit ducimus nihil laudantium ratione!
      </motion.p>
    </article>
  );
};

export default JudgeItem;
