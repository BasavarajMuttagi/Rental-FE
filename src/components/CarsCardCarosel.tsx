import { useQuery } from "@tanstack/react-query";
import AxiosClient from "../Axios/AxiosClient";
import CarCard from "./CarCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useRental from "../store";
import { useLocation } from "react-router-dom";

export type Car = {
  id: string;
  name: string;
  year: number;
  model: string;
  manufacturer: string;
  gearType: string;
  fuelType: string;
  fuelcapacity: number;
  seats: number;
  carType: string;
  description: string;
  city: string;
  state: string;
  country: string;
  imageUrl: string;
  baseUrl: string;
  createdAt: string;
  updatedAt: string;
  favorite: {
    id: string;
    userId: string;
    carId: string;
  }[];
  price: {
    offerPrice: number;
    rentalPrice: number;
  };
  availability: {
    carStatus: string;
    currentLocation: string;
  };
};

function CarsCardCarosel({
  title,
  url,
  queryKey,
}: {
  title: string;
  url: string;
  queryKey: string;
}) {
  const {
    rentalInfo: {
      pickUpLocation,
      dropOffLocation,
      pickUpDateAndTime,
      dropOffDateAndTime
    },
  } = useRental();
  const location = useLocation();
  const filter = useRental((state) => state.filter);
  const rentalInfo = useRental((state) => state.rentalInfo);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: [queryKey, filter,rentalInfo.pickUpLocation],
    queryFn: async () =>
      await AxiosClient().get(
        url ||
          `/api/v1/cars?Type=${filter.Type}&Capacity=${filter.Capacity}&Price=${filter.Price}&PickUp=${pickUpLocation}&PickUpDateAndTime=${pickUpDateAndTime}&DropOff=${dropOffLocation}&DropOffDateAndTime=${dropOffDateAndTime}`
      ),
  });

  if (isLoading) {
    return (
      <div className="space-y-6 py-7">
        <div className="text-slate-600 px-3 font-bold">{title}</div>
        <div className="w-full text-center flex items-center justify-center">
          <AiOutlineLoading3Quarters className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-6 py-7">
        <div className="text-slate-600 px-3 font-bold">{title}</div>
        <div className="w-full text-center flex items-center justify-center text-red-400">
          Error Occured : {error.message}
        </div>
      </div>
    );
  }

  if (data?.data.results.length == 0) {
    return (
      <div className="space-y-6 py-7">
        <div className="text-slate-600 px-3 font-bold">{title}</div>
        <div className="w-full text-center flex items-center justify-center ">
          No Cars Available
        </div>
      </div>
    );
  }
  if (location.pathname == "/category") {
    return (
      <div className="space-y-6 py-7 w-full p-1">
        <div className="text-slate-600 px-7 font-bold">{`${data?.data.results.length} Results`}</div>
        <div className="flex flex-col justify-between items-center space-y-4 sm:space-y-0 sm:grid grid-cols-2  sm:place-items-center sm:gap-4  min-[1330px]:grid-cols-3 min-[1800px]:grid-cols-4">
          {data?.data.results.map((eachObject: Car) => (
            <CarCard
              id={eachObject.id}
              key={eachObject.id}
              url={eachObject.baseUrl + eachObject.imageUrl}
              favorite={eachObject.favorite}
              name={eachObject.name}
              carType={eachObject.carType}
              fuelcapacity={eachObject.fuelcapacity}
              seats={eachObject.seats}
              gearType={eachObject.gearType}
              offerPrice={eachObject.price.offerPrice}
              rentalPrice={eachObject.price.rentalPrice}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 py-7 w-full">
      <div className="text-slate-600 px-3 font-bold">{title}</div>
      <div className="text-slate-600 px-7 font-bold">{`${data?.data.results.length} Results`}</div>
      <div
        className={
          "flex space-x-5 px-4   overflow-x-scroll sm:space-x-0 sm:overflow-x-hidden sm:gap-y-7 sm:place-items-center sm:grid sm:grid-cols-2  md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 min-[1480px]:grid min-[1480px]:grid-cols-5 min-[1854px]:grid min-[1854px]:grid-cols-6"
        }
      >
        {data?.data.results.map((eachObject: Car) => (
          <CarCard
            id={eachObject.id}
            key={eachObject.id}
            url={eachObject.baseUrl + eachObject.imageUrl}
            favorite={eachObject.favorite}
            name={eachObject.name}
            carType={eachObject.carType}
            fuelcapacity={eachObject.fuelcapacity}
            seats={eachObject.seats}
            gearType={eachObject.gearType}
            offerPrice={eachObject.price.offerPrice}
            rentalPrice={eachObject.price.rentalPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default CarsCardCarosel;
