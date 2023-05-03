import { motion, useScroll, useTransform } from 'framer-motion';

import '../styles/hero.css';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const input = [0, 0.75, 1];
  const scaleOutput = [1, 4, 6];
  const opacityOutput = [1, 0, 0];

  const scale = useTransform(scrollYProgress, input, scaleOutput);
  const opacity = useTransform(scrollYProgress, input, opacityOutput);

  return (
    <main className="bg-black min-h-screen">
      <div id="hero">
        <motion.div
          style={{
            perspective: '1000px',
            transform: 'perspective(1000px)',
            position: 'fixed',
            fontFamily: 'Autom',
            scale,
            opacity
          }}>
          <div>
            <div className="row">
              <span className="game">Game</span>
            </div>
            <div className="row">
              <span className="jam">Jam</span>
              <div className="numbers">
                <span>22</span>
                <span>23</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
