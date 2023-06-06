import { motion } from 'framer-motion';

interface WinnerProps {
  name: string;
  image: string;
}

const Winner: React.FC<WinnerProps> = ({ name, image }) => {
  return (
    <motion.article
      viewport={{ once: true }}
      whileInView={{
        scale: [0, 1],
        opacity: [0, 1]
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut'
      }}
      className="w-72 h-72 md:w-[21rem] md:h-[21rem] select-none flex items-center flex-col justify-between rounded-md relative group/father ">
      <motion.img
        initial={{ scaleX: 1 }}
        whileHover={{ scaleX: -1 }}
        transition={{ duration: 0.1 }}
        src="question-mark.png"
        alt="Super Mario Question mark box"
        className="absolute top-0 left-0 z-20 group-hover/father:opacity-0 duration-300 transition-all ease-in-out"
      />
      <img className="absolute top-0 left-0" src={image} alt="First Winner" />
      <h1 className="font-black uppercase text-5xl z-10 my-6 w-full text-center drop-shadow-primaryStrokeShadow">
        {name}
      </h1>
    </motion.article>
  );
};

export default Winner;
