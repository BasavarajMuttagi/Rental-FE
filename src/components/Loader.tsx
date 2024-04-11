import loading from "../assets/loading.webp";

function Loader() {
  return (
    <div className="h-screen w-full">
      <div className="h-full bg-white flex flex-col items-center justify-center  sm:flex ">
        <h1 className="animate-pulse  text-xl font-semibold text-black italic text-center sm:text-2xl">
          "Elegance is not about being noticed, it's about being remembered. Let
          your luxury car make the statement." -{" "}
          <span className="text-sm font-light">Giorgio Armani</span>
        </h1>
        <img src={loading} alt="loading" className="w-[430px]" />
      </div>
    </div>
  );
}

export default Loader;
