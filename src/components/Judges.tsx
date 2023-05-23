import { useState } from 'react';
import JudgeItem from './JudgeItem';

const Judges: React.FC = () => {
  const [sectionHovered, setSectionHovered] = useState(false);

  return (
    <section
      onMouseOver={() => {
        setSectionHovered(true);
      }}
      onMouseOut={() => setSectionHovered(false)}
      className="w-5/6 md:w-full gap-8 items-center justify-around flex flex-col md:flex-row">
      <JudgeItem
        name="name"
        description="description"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oQujJ6xhJOypmueloMEP3gHaHa%26pid%3DApi&f=1&ipt=4d9c90558e6ef844332f73778c98a16bb8804582c6dd59a39fcd2169f2af4af1&ipo=images"
        sectionHovered={sectionHovered}
        isLeft={false}
      />
      <JudgeItem
        name="name"
        description="description"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oQujJ6xhJOypmueloMEP3gHaHa%26pid%3DApi&f=1&ipt=4d9c90558e6ef844332f73778c98a16bb8804582c6dd59a39fcd2169f2af4af1&ipo=images"
        sectionHovered={sectionHovered}
        isLeft={false}
      />
      <JudgeItem
        name="name"
        description="description"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oQujJ6xhJOypmueloMEP3gHaHa%26pid%3DApi&f=1&ipt=4d9c90558e6ef844332f73778c98a16bb8804582c6dd59a39fcd2169f2af4af1&ipo=images"
        sectionHovered={sectionHovered}
        isLeft={true}
      />
      <JudgeItem
        name="name"
        description="description"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.oQujJ6xhJOypmueloMEP3gHaHa%26pid%3DApi&f=1&ipt=4d9c90558e6ef844332f73778c98a16bb8804582c6dd59a39fcd2169f2af4af1&ipo=images"
        sectionHovered={sectionHovered}
        isLeft={true}
      />
    </section>
  );
};

export default Judges;
