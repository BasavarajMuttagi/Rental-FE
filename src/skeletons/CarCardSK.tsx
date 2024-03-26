import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function CarCardSK() {
  return (
    <div className="border bg-white h-96 max-w-[320px] rounded flex flex-col justify-between p-3 flex-shrink-0">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-base font-bold text-[#1A202C]">
            {<Skeleton className="w-[200px]" />}
          </div>
          <div className="text-base font-semibold text-[#90A3BF]">
            {<Skeleton className="w-[150px]" />}
          </div>
        </div>
        <div>
          <Skeleton className="h-5 w-5 " />
        </div>
      </div>
      <div className="h-[50%]">
        <Skeleton className="object-contain w-[293px] h-[190px]" />
      </div>
      <div className="flex justify-around items-baseline text-[#90A3BF]">
        <div className="flex items-center space-x-1">
          <Skeleton className="h-4 w-10" />
        </div>
        <div className="flex items-center space-x-1">
          <Skeleton className="h-4 w-10" />
        </div>
        <div className="flex items-center space-x-1">
          <Skeleton className="h-4 w-10" />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-slate-700">
          <Skeleton className="w-16 h-7" />
        </div>
        <div>
          <button className="text   bg-blue-600 px-3 py-2 rounded text-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCardSK;
