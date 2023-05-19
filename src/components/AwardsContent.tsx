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
          <p className="text-center text-3xl lg:text-5xl absolute bottom-1/4 drop-shadow-primaryStrokeShadow">
            500€
          </p>
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
          <p className="text-center text-3xl lg:text-5xl absolute bottom-1/4 drop-shadow-primaryStrokeShadow">
            350€
          </p>
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
          <p className="text-center text-3xl lg:text-5xl absolute bottom-1/4 drop-shadow-primaryStrokeShadow">
            150€
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsContent;
