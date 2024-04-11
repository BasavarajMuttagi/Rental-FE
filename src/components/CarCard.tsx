import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPumpFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import CarCardSK from "../skeletons/CarCardSK";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosClient from "../Axios/AxiosClient";
import { useQueryClient } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";

function CarCard({
  id,
  url,
  favorite = [],
  name,
  carType,
  fuelcapacity,
  seats,
  gearType,
  offerPrice,
  rentalPrice,
}: {
  id: string;
  url: string;
  favorite: {
    id: string;
    userId: string;
    carId: string;
  }[];
  name: string;
  carType: string;
  fuelcapacity: number;
  seats: number;
  gearType: string;
  offerPrice: number;
  rentalPrice: number;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();
  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoading(false);
    image.src = url;
  }, [url]);

  if (loading) return <CarCardSK />;
  return (
    <div className="border bg-white h-96 max-w-xs rounded flex flex-col justify-between p-3 w-[95%] flex-shrink-0">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-base font-bold text-[#1A202C]">{name}</div>
          <div className="text-base font-semibold text-[#90A3BF]">
            {carType}
          </div>
        </div>
        <div>
          {favorite?.length ? (
            <IoHeartSharp
              className="h-5 w-5 text-red-500 cursor-pointer"
              onClick={async () =>
                await AxiosClient()
                  .post("/favorite/remove", {
                    favoriteId: favorite[0].id,
                  })
                  .then(async () => {
                    queryClient.refetchQueries({
                      queryKey: ["allcars"],
                    });
                    queryClient.refetchQueries({
                      queryKey: ["Favorite"],
                    });
                    queryClient.refetchQueries({
                      queryKey: ["Popular"],
                    });
                    queryClient.refetchQueries({
                      queryKey: ["Recommende"],
                    });
                  })
              }
            />
          ) : (
            <IoHeartOutline
              className="h-5 w-5 cursor-pointer"
              onClick={async () =>
                await AxiosClient()
                  .post("/favorite/add", { carId: id })
                  .then(async () => {
                    queryClient.refetchQueries({
                      queryKey: ["allcars"],
                    });
                    queryClient.refetchQueries({
                      queryKey: ["Favorite"],
                    });
                    queryClient.refetchQueries({
                      queryKey: ["Popular"],
                    });
                    queryClient.refetchQueries({
                      queryKey: ["Recommende"],
                    });
                  })
              }
            />
          )}
        </div>
      </div>
      <div className="h-[50%]">
        <img
          src={url}
          className="object-contain"
          onLoad={() => setLoading(false)}
          alt="car image"
        />
      </div>
      <div className="flex justify-around items-baseline text-[#90A3BF]">
        <div className="flex items-center space-x-1">
          <BsFuelPumpFill className="h-4 w-4" />
          <span className="text-base font-medium">{fuelcapacity}L</span>
        </div>
        <div className="flex items-center space-x-1">
          <TbManualGearbox className="h-4 w-4" />
          <span className="text-base font-medium">{gearType}</span>
        </div>
        <div className="flex items-center space-x-1">
          <IoPeopleSharp className="h-4 w-4" />
          <span className="text-base font-medium">{seats}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-slate-700">
          ${offerPrice}/
          <span
            className="text-[#90A3BF] text-sm
          "
          >
            hr
          </span>
          <div className="text-slate-500 text-xs">
            <s>${rentalPrice}/hr</s>
          </div>
        </div>
        <div>
          <button
            className={twMerge(
              "text  text-white bg-blue-600 px-3 py-2 rounded",
              location.pathname === "/bookings" ? "bg-green-600" : ""
            )}
            onClick={() => navigate(`/car/${id}`)}
          >
            {location.pathname === "/bookings" ? "Booked" : "Rent Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
