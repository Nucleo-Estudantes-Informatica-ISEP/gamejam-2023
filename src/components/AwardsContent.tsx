const AwardsContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-5/6 justify-center md:justify-around items-center mt-5">
      <div className="flex flex-col justify-center my-4 mx-10">
        <h5 className="text-6xl my-2 text-center text-yellow-400">1º Lugar</h5>
        <div className="flex flex-col justify-center items-center relative">
          <img className="max-h-96  w-full" src="/prize-base.png" alt="Premio de primeiro lugar" />
          <p className="text-center text-5xl lg:text-6xl absolute bottom-1/4">500€</p>
        </div>
      </div>
      <div className="flex flex-col justify-center my-4 mx-10">
        <h5 className="text-6xl my-2 text-center text-slate-500">2º Lugar</h5>
        <div className="flex flex-col justify-center items-center relative">
          <img className="max-h-96  w-full" src="/prize-base.png" alt="Premio de segundo lugar" />
          <p className="text-center text-5xl lg:text-6xl absolute bottom-1/4">350€</p>
        </div>
      </div>
      <div className="flex flex-col justify-center my-4 mx-10">
        <h5 className="text-6xl my-2 text-center mb-2 text-amber-600">3º Lugar</h5>
        <div className="flex flex-col justify-center items-center relative">
          <img className="max-h-96 w-full" src="/prize-base.png" alt="Premio de terceiro lugar" />
          <p className="text-center text-5xl lg:text-6xl absolute bottom-1/4">150€</p>
        </div>
      </div>
    </div>
  );
};

export default AwardsContent;
