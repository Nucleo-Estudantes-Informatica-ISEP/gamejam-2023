interface JudgeItemProps {
  name: string;
  image: string;
  description: string;
  sectionHovered: boolean;
}

const JudgeItem: React.FC<JudgeItemProps> = ({ name, image, description, sectionHovered }) => {
  return (
    <article
      className={`bg-gray-600 w-full rounded-lg px-4 py-6 cursor-pointer hover:scale-105 hover:brightness-100 duration-100 ease-in-out ${
        sectionHovered && 'brightness-50'
      }`}>
      <img src={image} alt={name} />
      <h3 className="text-4xl">{name}</h3>
      <p>{description}</p>
    </article>
  );
};

export default JudgeItem;
