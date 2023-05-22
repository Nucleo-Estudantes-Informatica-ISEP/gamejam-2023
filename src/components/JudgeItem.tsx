interface JudgeItemProps {
  name: string;
  image: string;
  description: string;
}

const JudgeItem: React.FC<JudgeItemProps> = ({ name, image, description }) => {
  return (
    <article className="bg-gray-600 h-full max-h-40 w-full">
      <h3>Judge name</h3>
    </article>
  );
};

export default JudgeItem;
