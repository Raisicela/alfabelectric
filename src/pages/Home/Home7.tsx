const array = Array.from(Array(24).keys());

const Home7 = () => {
  return (
    <div className=" h-screen flex flex-col justify-around mt-10">
      <div>
        <p className="font-poppins text-white text-[30px] lg:text-[60px] font-bold">
          Venta
        </p>
        <p className="font-poppins text-white text-[12px] lg:text-[30px] ">
          de productos y equipos
        </p>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
        {array.map((item) => (
          <div
            key={item}
            className=" h-[120px] w-[auto] flex items-center justify-center"
          >
            <img
              src={`/assets/home/brands/b${item + 1}.png`}
              alt="Alfab Electric"
              width={89}
              height={45}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home7;
