import { IoIosRadioButtonOn } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import DropDownList from "./DropDownList";
import { cityData } from "../Axios/inputdata";
import useRental from "../store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocationSchema, LocationType } from "../Zod/schemas";
import { Link, useLocation } from "react-router-dom";

function LocationInput() {
  const location = useLocation();
  const { rentalInfo, setRentalInfo, setPaymentInfo, paymentInfo } =
    useRental();
  const { register, getValues } = useForm<LocationType>({
    resolver: zodResolver(LocationSchema),
    defaultValues: rentalInfo,
  });

  return (
    <form
      onChange={() => {
        setRentalInfo(getValues());
        setPaymentInfo({ ...paymentInfo, rentalInfo: getValues() });
      }}
      className="p-1 w-full flex flex-col items-end space-y-4  sm:p-6 sm:py-3"
    >
      <div className="flex flex-col items-center w-full space-y-1 sm:space-y-0 sm:flex-row sm:justify-between sm:space-x-4">
        <div className="bg-white rounded space-y-3 p-3 border   w-full">
          <div className="flex items-center space-x-2">
            <IoIosRadioButtonOn className="text-blue-600" />
            <span className="text-slate-700 font-semibold text-sm">
              Pick-Up
            </span>
          </div>
          <div className="flex items-center  space-x-6 justify-between md:justify-around">
            <div className="space-y-2 relative">
              <h1 className="font-medium text-sm">Locations</h1>
              <DropDownList
                data={cityData}
                selected={rentalInfo.pickUpLocation}
                register={register}
                inputType="pickUpLocation"
              />
            </div>
            <div className="space-y-2 relative">
              <h1 className="font-medium text-sm">Date & Time</h1>
              <input
                type="datetime-local"
                className="outline-none w-fit bg-white text-slate-400 text-[11px]"
                {...register("pickUpDateAndTime")}
              />
            </div>
          </div>
        </div>
        <GoArrowSwitch className="w-11 h-11 rounded bg-blue-600 text-white p-2  shrink-0 rotate-90 sm:rotate-0" />
        <div className="bg-white rounded space-y-3 p-3 border   w-full">
          <div className="flex items-center space-x-2">
            <IoIosRadioButtonOn className="text-blue-600" />
            <span className="text-slate-700 font-semibold text-sm">
              Drop-Off
            </span>
          </div>
          <div className="flex items-center  space-x-6 justify-between md:justify-around">
            <div className="space-y-2 relative">
              <h1 className="font-medium text-sm">Locations</h1>
              <DropDownList
                data={cityData}
                selected={rentalInfo.dropOffLocation}
                register={register}
                inputType="dropOffLocation"
              />
            </div>
            <div className="space-y-2 relative">
              <h1 className="font-medium text-sm">Date & Time</h1>
              <input
                type="datetime-local"
                className="outline-none w-fit bg-white text-slate-400 text-[11px]"
                {...register("dropOffDateAndTime")}
              />
            </div>
          </div>
        </div>
      </div>
      {location.pathname == "/" && (
        <Link
          to={"/category"}
          className="px-4 py-1 rounded bg-blue-600 text-white text-xl flex items-center space-x-4"
        >
          <span>Search</span>
        </Link>
      )}
    </form>
  );
}

export default LocationInput;
