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
function LocationInput() {
  const { rentalInfo, setRentalInfo } = useRental();
  const dates = generateSequentialDates();

  const submitHandler = (data: LocationType) => {
    console.log(errors.pickUpLocation?.message);
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
      className="p-1 flex flex-col items-center w-full space-y-1 sm:space-y-0 sm:flex-row sm:justify-between sm:space-x-4 sm:p-6 sm:py-3"
      onChange={() => setRentalInfo(getValues())}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="bg-white rounded space-y-3 p-3 border   w-full">
        <div className="flex items-center space-x-2">
          <IoIosRadioButtonOn className="text-blue-600" />
          <span className="text-slate-700 font-semibold text-sm">Pick-Up</span>
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
          <span className="text-slate-700 font-semibold text-sm">Drop-Off</span>
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
      <button type="submit">yes</button>
    </form>
  );
}

export default LocationInput;
