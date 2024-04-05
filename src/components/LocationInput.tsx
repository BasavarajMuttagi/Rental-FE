import { IoIosRadioButtonOn } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import DropDownList from "./DropDownList";
import generateSequentialDates, {
  cityData,
  timeData,
} from "../Axios/inputdata";
import useRental from "../store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocationSchema, LocationType } from "../Zod/schemas";
import axios from "axios";
import { ImSpinner8 } from "react-icons/im";
import { useRef, useState } from "react";

function LocationInput() {
  const [isSpin, setIsSpin] = useState(false);
  const { rentalInfo, setRentalInfo } = useRental();
  const dates = generateSequentialDates();
  const formRef = useRef<HTMLFormElement>(null);
  const submitHandler = async (data: LocationType) => {
    setIsSpin(true);
    const result = await axios
      .get(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${
          data.pickUpLocation
        }&destinations=${data.dropOffLocation}&key=${
          import.meta.env.VITE_DISTANCE_KEY
        }`
      )
      .finally(() => {
        setIsSpin(false);
      });

    console.log(result.data);
  };
  const {
    register,
    reset,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<LocationType>({
    resolver: zodResolver(LocationSchema),
    defaultValues: rentalInfo,
  });
  return (
    <form
      ref={formRef}
      onChange={() => setRentalInfo(getValues())}
      onSubmit={handleSubmit(submitHandler)}
      className="w-full flex flex-col items-end space-y-4 p-1 sm:p-6 sm:py-3"
    >
      <div className="flex flex-col items-center w-full space-y-1 sm:space-y-0 sm:flex-row sm:justify-between sm:space-x-4 ">
        {/* <p>{errors.pickUpLocation?.message}</p>
        <p>{errors.dropOffLocation?.message}</p>
        <p>{errors.pickUpDate?.message}</p> */}
        {errors.dropOffDate && <p>{errors.dropOffDate?.message}</p>}
        {/* <p>{errors.pickUpTime?.message}</p>
        <p>{errors.dropOffTime?.message}</p> */}
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
              <h1 className="font-medium text-sm">Date</h1>
              <DropDownList
                data={dates}
                selected={rentalInfo.pickUpDate}
                register={register}
                inputType="pickUpDate"
              />
            </div>
            <div className="space-y-2 relative">
              <h1 className="font-medium text-sm">Time</h1>
              <DropDownList
                data={timeData}
                selected={rentalInfo.pickUpTime}
                register={register}
                inputType="pickUpTime"
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
              <h1 className="font-medium text-sm">Date</h1>
              <DropDownList
                data={dates}
                selected={rentalInfo.dropOffDate}
                register={register}
                inputType="dropOffDate"
              />
            </div>
            <div className="space-y-2 relative">
              <h1 className="font-medium text-sm">Time</h1>
              <DropDownList
                data={timeData}
                selected={rentalInfo.dropOffTime}
                register={register}
                inputType="dropOffTime"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-1 rounded bg-blue-600 text-white text-xl flex items-center space-x-4"
      >
        <span>Search</span>
        <span>
          {isSpin && (
            <ImSpinner8 className="animate-spin text-white  ml-2 h-6 w-6" />
          )}
        </span>
      </button>
    </form>
  );
}

export default LocationInput;
