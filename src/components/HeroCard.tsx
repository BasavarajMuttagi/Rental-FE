import { useNavigate } from "react-router-dom";

function HeroCard({
  imageUrl,
  bgUrl,
  text1,
  text2,
}: {
  imageUrl: string;
  bgUrl: string;
  text1: string;
  text2: string;
}) {
  const navigate = useNavigate();
  return (
    <div className="relative rounded bg-blue-600 text-white w-full  shrink-0 md:shrink">
      <img src={bgUrl} className="h-full w-full object-cover" alt="ads" />
      <div className="flex justify-between items-center px-4 absolute top-20">
        <button
          className="px-3 py-2 rounded bg-white font-semibold h-fit flex-shrink-0 text-blue-500"
          onClick={() => navigate("/category")}
        >
          Rent Now
        </button>
        <img src={imageUrl} className="w-[75%] h-full" alt="ads" />
      </div>
      <div className="space-y-2 absolute top-10 left-3 md:top-16">
        <div className="space-y-1">
          <p className="font-semibold md:text-xl">{text1}</p>
          <p className="text-xs md:text-base w-[85%]">{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
