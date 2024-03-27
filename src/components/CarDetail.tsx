import { useQuery } from "@tanstack/react-query";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import AxiosClient from "../Axios/AxiosClient";
import { useNavigate, useParams } from "react-router-dom";
import { Car } from "./CarsCardCarosel";
import bg from "../assets/bg.jpg";
import CarDetailSK from "../skeletons/CarDetailSK";
function CarDetail() {
  const navigate = useNavigate();
  let { id } = useParams();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["cardetail", id],
    queryFn: async () => await AxiosClient().get(`/api/v1/detail/${id}`),
  });

  const CarDetail: Car = data?.data.result;

  if (!id || id.length == 0 || id == null || id == undefined) {
    return <div>404 Not Found</div>;
  }

  if (isLoading) return <CarDetailSK />;
  if (isError) return <div>Error : {error.message}</div>;
  return (
    <div className="flex flex-col w-full justify-between p-1 space-y-2 bg-[#F6F7F9]  min-[1186px]:p-5 min-[1186px]:flex-row min-[1186px]:space-y-0 min-[1186px]:space-x-3">
      <div className="drop-shadow rounded relative min-[1186px]:w-[70%]">
        <img src={bg} className="aspect-video w-full h-full rounded" />
        <img
          src={CarDetail.baseUrl + CarDetail.imageUrl}
          className="absolute aspect-video top-0 left-0 rounded"
        />
      </div>

      <div className="flex flex-col space-y-3  justify-around rounded drop-shadow  text-slate-600 font-medium p-5  bg-white min-[1186px]:w-[30%]  min-[1186px]:shrink-0">
        <div className="text-black  w-full  flex justify-between items-center">
          <span className="font-semibold  text-2xl">{CarDetail.name}</span>
          <div>
            {true ? (
              <IoHeartSharp className="h-5 w-5 text-red-500" />
            ) : (
              <IoHeartOutline className="h-5 w-5 " />
            )}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-slate-800 text-lg font-semibold">
            Description
          </div>
          <div className="text-sm">{CarDetail.description}</div>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Type</span>
          <span>{CarDetail.carType}</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Seats</span>
          <span>{CarDetail.seats}</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Gearing</span>
          <span>{CarDetail.gearType}</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Fuel Type</span>
          <span>{CarDetail.fuelType}</span>
        </div>
        <div className="flex justify-between text-base font-semibold">
          <span>Fuel Capacity</span>
          <span>{CarDetail.fuelcapacity} L</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-slate-700">
            ${CarDetail.price.offerPrice}/
            <span
              className="text-[#90A3BF] text-sm
          "
            >
              day
            </span>
            <div className="text-slate-500 text-xs">
              <s>${CarDetail.price.rentalPrice}/day</s>
            </div>
          </div>
          <div>
            <button
              className="text  text-white bg-blue-600 px-3 py-2 rounded"
              onClick={() => navigate("/payment")}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
