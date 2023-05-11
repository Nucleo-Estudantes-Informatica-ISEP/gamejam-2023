import { motion, useScroll, useTransform } from 'framer-motion';

import '../styles/hero.css';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const input = [0, 0.4, 1];
  const opacityOutput = [1, 0, 0];

  const opacity = useTransform(scrollYProgress, input, opacityOutput);

  return (
    <main className="bg-background min-h-screen">
      <div id="hero">
        <motion.div
          style={{
            perspective: '1000px',
            transform: 'perspective(1000px)',
            position: 'fixed',
            fontFamily: 'Autom',
            opacity
          }}>
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-1/2 h-1/2">
              <img src="/logo_game_jam.png" alt="hero" />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
