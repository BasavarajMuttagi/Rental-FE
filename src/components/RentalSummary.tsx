import { IoStarOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

import AxiosClient from "../Axios/AxiosClient";
import { useQuery } from "@tanstack/react-query";
import { Car } from "./CarsCardCarosel";
import RentalSummarySK from "../skeletons/RentalSummarySK";
function RentalSummary({ id }: { id: string }) {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["rentalsummary", id],
    queryFn: async () => await AxiosClient().get(`/api/v1/detail/${id}`),
  });

  const CarDetail: Car = data?.data.result;
  console.log(CarDetail);
  if (!id || id.length == 0 || id == null || id == undefined) {
    return <div>404 Not Found</div>;
  }

  if (isLoading) return <RentalSummarySK />;
  if (isError) return <div>Error : {error.message}</div>;

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-white  space-y-10 w-full p-5 h-fit border rounded">
        <div className="space-y-1">
          <div className="font-bold text-lg text-slate-600">Rental Summary</div>
          <div className="text-slate-400 text-xs">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </div>
        </div>
        <div className="w-full grid grid-cols-2 place-items-center">
          <div>
            <img
              src={CarDetail.baseUrl + CarDetail.imageUrl}
              className="bg-blue-600 rounded"
            />
          </div>
          <div className="space-y-2">
            <div className="font-bold text-xl text-slate-700">
              {CarDetail.name}
            </div>
            <div className="space-y-1">
              <div className="flex items-start ">
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
                <IoStarOutline />
              </div>
              <div>500+ Reviews</div>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm font-medium">Subtotal</span>
            <span className="text-slate-600 text-lg font-bold">
              ${CarDetail.price.offerPrice}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm font-medium">Tax</span>
            <span className="text-slate-600 text-lg font-bold">
              ${(CarDetail.price.offerPrice * 0.18).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="p-2 bg-slate-100 rounded text-sm w-full outline-none flex justify-between items-center">
          <input
            type="text"
            className="p-2 bg-slate-100  text-sm w-full outline-none placeholder:text-slate-500"
            placeholder="Apply Promo Code"
          />
          <button className="text-slate-700 text-lg font-medium px-2 py-1">
            Apply
          </button>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <div className="font-bold text-lg text-slate-600">Total Price</div>
            <div className="text-slate-400 text-xs">
              Overall price and includes rental discount
            </div>
          </div>
          <div className="text-slate-600 text-3xl font-bold">$100</div>
        </div>
      </div>
      <button
        className="text-white font-semibold text-lg rounded bg-blue-600 p-3 flex justify-center items-center space-x-5"
        type="submit"
      >
        <span>Pay Now</span>
        <GoArrowRight className="w-8 h-8" />
      </button>
    </div>
  );
}

export default RentalSummary;
