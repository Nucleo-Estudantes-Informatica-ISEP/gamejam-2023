import { useState } from 'react';
import JudgeItem from './JudgeItem';

const Judges: React.FC = () => {
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <section
      onMouseOver={() => {
        console.log('hover');
        setSectionHovered(true);
      }}
      onMouseOut={() => setSectionHovered(false)}
      className="w-full gap-8 items-center justify-around flex flex-row py-4">
      <JudgeItem
        name="name"
        description="description"
        image="http://github.com/tomasflopes.png"
        sectionHovered={sectionHovered}
      />
      <JudgeItem
        name="name"
        description="description"
        image="http://github.com/tomasflopes.png"
        sectionHovered={sectionHovered}
      />
      <JudgeItem
        name="name"
        description="description"
        image="http://github.com/tomasflopes.png"
        sectionHovered={sectionHovered}
      />
      <JudgeItem
        name="name"
        description="description"
        image="http://github.com/tomasflopes.png"
        sectionHovered={sectionHovered}
      />
    </section>
  );
};

export default Judges;
