const AwardsContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-5/6 justify-center md:justify-around items-center mt-5 font-retro-numbers">
      <div className="flex flex-col justify-center my-4 mx-10">
        <h5 className="text-2xl sm:text-4xl md:text-6xl my-4 text-center text-yellow-400 drop-shadow-whiteStrokeShadow">
          1º Lugar
        </h5>
        <div className="flex flex-col justify-center items-center relative hover:scale-110 hover:drop-shadow-gold duration-150 ease-in-out">
          <img
            className="max-h-72 md:max-h-96  w-full"
            src="/prize-base.png"
            alt="Prémio de primeiro lugar"
          />
          <div className="w-full flex items-center justify-center absolute bottom-1/4">
            <p className="text-center text-3xl mr-4 lg:text-5xl drop-shadow-primaryStrokeShadow">
              500
            </p>
            <img className="w-16 h-16 drop-shadow-none" src="/space.png" alt="Space Invaders" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-4 mx-10">
        <h5 className="text-2xl sm:text-4xl md:text-6xl my-4 text-center text-slate-500 drop-shadow-whiteStrokeShadow">
          2º Lugar
        </h5>
        <div className="flex flex-col justify-center items-center relative hover:scale-110 hover:drop-shadow-silver duration-150 ease-in-out">
          <img
            className="max-h-72 md:max-h-96  w-full"
            src="/prize-base.png"
            alt="Prémio de segundo lugar"
          />
          <div className="w-full flex items-center justify-center absolute bottom-1/4">
            <p className="text-center text-3xl mr-4 lg:text-5xl drop-shadow-primaryStrokeShadow">
              300
            </p>
            <img className="w-16 h-16 drop-shadow-none" src="/space.png" alt="Space Invaders" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-4 mx-10">
        <h5 className="text-2xl sm:text-4xl md:text-6xl my-4 text-center mb-2 text-amber-600 drop-shadow-whiteStrokeShadow">
          3º Lugar
        </h5>
        <div className="flex flex-col justify-center items-center relative hover:scale-110 hover:drop-shadow-bronze duration-150 ease-in-out">
          <img
            className="max-h-72 md:max-h-96 w-full"
            src="/prize-base.png"
            alt="Prémio de terceiro lugar"
          />
          <div className="w-full flex items-center justify-center absolute bottom-1/4">
            <p className="text-center text-3xl mr-4 lg:text-5xl drop-shadow-primaryStrokeShadow">
              150
            </p>
            <img className="w-16 h-16 drop-shadow-none" src="/space.png" alt="Space Invaders" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsContent;
