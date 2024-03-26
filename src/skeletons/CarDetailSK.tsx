import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CarDetailSK() {
  return (
    <div className="flex flex-col w-full justify-between p-1 space-y-2 bg-[#F6F7F9]  sm:p-5 sm:flex-row sm:space-y-0 sm:space-x-3">
      <div className="drop-shadow rounded relative sm:w-[70%] sw:h-full">
        <Skeleton className="aspect-video w-full full p-1 rounded" />
      </div>

      <div className="flex flex-col space-y-3  justify-around rounded drop-shadow  text-slate-600 font-medium p-5  bg-white sm:w-[30%]  sm:shrink-0">
        <div className="text-black  w-full  flex justify-between items-center">
          <span className="font-semibold  text-2xl w-[60%]">
            <Skeleton />
          </span>
          <div>
            <Skeleton />
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-slate-800 text-lg font-semibold">
            Description
          </div>
          <div className="text-sm">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Type</span>
          <span className="w-[50%]">
            <Skeleton />
          </span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Seats</span>
          <span className="w-[50%]">
            <Skeleton />
          </span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Gearing</span>
          <span className="w-[50%]">
            <Skeleton />
          </span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Fuel Type</span>
          <span className="w-[50%]">
            <Skeleton />
          </span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Fuel Capacity</span>
          <span className="w-[50%]">
            <Skeleton />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-slate-700 w-[10%]">
            <Skeleton />
            <Skeleton />
          </div>
          <div>
            <button className="text  text-blue-600 bg-blue-600 px-3 py-2 rounded">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetailSK;
