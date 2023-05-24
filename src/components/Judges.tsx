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
      className="w-full items-center justify-around md:justify-around gap-y-24 md:gap-x-6 flex flex-col md:flex-row z-0">
      <JudgeItem
        name="Carlos Vaz de Carvalho"
        description="Professor Coordenador do DEI"
        image="/judges/carlos.jpg"
        sectionHovered={sectionHovered}
        isLeft={false}
        overDescription="Professor Coordenador do DEI no Instituto Superior de Engenharia do Porto (ISEP). Diretor da Virtual Campus Lda, uma PME (pequena média empresa) dedicada à Aprendizagem Aprimorada por Tecnologia e “Serious Games”"
      />
      <JudgeItem
        name="Dulce Mota"
        description="Professora e sub-diretora do DEI"
        image="/judges/dulce.jpg"
        sectionHovered={sectionHovered}
        isLeft={false}
        overDescription="Doutorada em Engenharia Informática pela FEUP, é Professora no DEI do ISEP desde 1992. Subdiretora do DEI desde 2020. Suas áreas de pesquisa incluem Sistemas de Recomendação e Ensino à Distância."
      />
      <JudgeItem
        name="Marílio Cardoso"
        description="Professor Adjunto e sub-diretor do DEI"
        image="/judges/marilio.jpg"
        sectionHovered={sectionHovered}
        isLeft={true}
        overDescription="Licenciado em Engenharia Eletrotécnica. Experiência em eficiência energética e sistemas educativos inovadores. Principais interesses: Aprendizado de programação, sistemas educacionais inovadores e soluções centradas no ensino de ciência da computação e multimedia."
      />
      <JudgeItem
        name="Gonçalo Pinto"
        description="Streamer na Twitch"
        image="/judges/gonçalo_pinto.jpeg"
        sectionHovered={sectionHovered}
        isLeft={true}
        overDescription="O meu nome é Gonçalo, tenho 19 anos. Desde o dia 24/01 que estou full-time streamer pois suspendi a matrícula da faculdade para lutar pelo meu sonho de criança, tendo começado a streamar diariamente desde 24/07."
        stretchedImage={true}
      />
    </section>
  );
};

export default Judges;
