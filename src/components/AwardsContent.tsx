const AwardsContent: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center my-4 mx-10">
              <h5 className="text-6xl my-2 text-center text-yellow-400">1º Lugar</h5>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="max-h-56 max-w-full h-auto w-full"
                  src="/prize-base.png"
                  alt="Premio de primeiro lugar"
                />
                <p className="text-center text-xl">500€</p>
              </div>
            </div>
            <div className="flex flex-col justify-start my-4 mx-10">
              <h5 className="text-6xl my-2 text-center text-slate-500">2º Lugar</h5>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="max-h-56 max-w-full h-auto w-full"
                  src="/prize-base.png"
                  alt="Premio de segundo lugar"
                />
                <p className="text-center text-xl">350€</p>
              </div>
            </div>
            <div className="flex flex-col justify-start my-4 mx-10">
              <h5 className="text-6xl my-2 text-center mb-2 text-amber-600">3º Lugar</h5>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="max-h-56 max-w-full h-auto w-full"
                  src="/prize-base.png"
                  alt="Premio de terceiro lugar"
                />
              </div>
              <p className="text-center text-xl">150€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsContent;
