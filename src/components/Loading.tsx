import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="font-black uppercase text-5xl md:text-6xl lg:text-[9rem] text-primary font-misterPixel">
        Loading
      </h1>
      <div>
        <div className="w-[32rem] h-8 bg-gray-700 rounded-full my-8">
          <motion.div
            animate={{
              width: ['0%', '20%', '25%', '50%', '65%', '75%', '90%', '100%']
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: 'linear'
            }}
            className="w-full h-full bg-gradient-to-r from-secondary to-primary rounded-full"></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
