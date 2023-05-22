import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="font-black uppercase text-5xl md:text-6xl lg:text-[9rem] text-primary font-misterPixel drop-shadow-whiteStrokeShadow">
        Loading
      </h1>
      <div className="w-5/6 md:w-3/4 h-8 bg-gray-700 rounded-full my-8">
        <motion.div
          animate={{
            width: ['0%', '20%', '25%', '50%', '55%', '70%']
          }}
          transition={{
            duration: 60,
            ease: 'linear'
          }}
          className="w-full h-full bg-gradient-to-r from-secondary to-primary rounded-full"></motion.div>
      </div>
    </section>
  );
};

export default Loading;
