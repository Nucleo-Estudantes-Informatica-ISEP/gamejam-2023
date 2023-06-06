import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mb-32 relative">
      <h1 className="font-black uppercase text-5xl md:text-6xl lg:text-[9rem] text-primary font-misterPixel drop-shadow-whiteStrokeShadow">
        Loading
      </h1>
      <motion.div
        whileInView={{
          scale: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
          opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
        }}
        viewport={{ once: true }}
        transition={{
          duration: 5.5
        }}
        className="w-5/6 md:w-3/4 h-8 bg-gray-700 rounded-full my-8">
        <motion.div
          viewport={{ once: true }}
          whileInView={{
            width: ['0%', '25%', '50%', '70%', '85%', '98%', '100%']
          }}
          transition={{
            duration: 5,
            ease: 'linear'
          }}
          className="w-full h-full bg-gradient-to-r from-secondary to-primary rounded-full"></motion.div>
      </motion.div>
      <motion.h1
        className="absolute -bottom-24 text-white font-black text-5xl md:text-6xl lg:text-[9rem] text-center font-misterPixel uppercase drop-shadow-primaryStrokeShadow"
        initial={{
          scale: 0,
          opacity: 0
        }}
        whileInView={{
          scale: [0, 1],
          opacity: [0, 1]
        }}
        animate={{
          translateY: ['0', '10px', '0']
        }}
        viewport={{ once: true }}
        transition={{
          delay: 5,
          duration: 0.5,
          ease: 'easeInOut',
          translateY: {
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        }}>
        Até para o ano!
      </motion.h1>
    </section>
  );
};

export default Loading;
