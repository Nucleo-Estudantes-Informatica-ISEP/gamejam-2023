import { motion } from 'framer-motion';

interface WinnerProps {
  name: string;
  image: string;
  members: string[];
}

const Winner: React.FC<WinnerProps> = ({ name, image, members }) => {
  return (
    <article className="w-[22rem] h-[22rem] select-none flex items-center flex-col justify-between rounded-md relative group/father ">
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
      <div className="z-10 ml-4 mb-10 flex flex-col items-center text-center w-full">
        <h2 className="font-black uppercase text-3xl mb-2 drop-shadow-primaryStrokeShadow">
          Members
        </h2>
        <ul className="flex flex-col gap-y-2">
          {members.map((member, index) => (
            <li key={index} className="font-bold text-xl drop-shadow-primaryStrokeShadow">
              {member}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Winner;
