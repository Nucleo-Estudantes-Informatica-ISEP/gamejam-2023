import { motion } from 'framer-motion';

interface JudgeItemProps {
  name: string;
  image: string;
  description: string;
  sectionHovered: boolean;
}

const JudgeItem: React.FC<JudgeItemProps> = ({ name, image, description, sectionHovered }) => {
  return (
    <motion.article
      initial={{ rotateY: 90 }}
      whileInView={{ rotateY: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ scale: { duration: 0.1 }, rotateY: { duration: 0.5 } }}
      viewport={{ once: true }}
      className={`bg-background-light w-full rounded-lg px-4 py-6 cursor-pointer hover:brightness-100 duration-100 ease-in-out ${
        sectionHovered && 'brightness-50'
      }`}>
      <img className="rounded-md mb-4" src={image} alt={name} />
      <h3 className="text-2xl md:text-4xl">{name}</h3>
      <p className="text-lg md:text-xl">{description}</p>
    </motion.article>
  );
};

export default JudgeItem;
