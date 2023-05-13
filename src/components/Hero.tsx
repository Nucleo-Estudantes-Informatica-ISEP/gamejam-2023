import { motion, useScroll, useTransform } from 'framer-motion';
import HeroParticles from './HeroParticles';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const input = [0, 0.4, 1];
  const opacityOutput = [1, 0, 0];

  const opacity = useTransform(scrollYProgress, input, opacityOutput);

  return (
    <main className="bg-background min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <HeroParticles className="fixed h-screen w-screen" />
        <motion.div
          className="w-full flex items-center justify-center h-full fixed font-retro"
          style={{ opacity }}>
          <img className="aspect-[4/5] w-11/12 max-w-5xl" src="/logo_game_jam.webp" alt="hero" />
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
