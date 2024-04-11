import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IoIosRadioButtonOn } from "react-icons/io";
import { PaymentSchemaType } from "../Zod/schemas";


function RentalInfoCard({
  register,
  errors,
}: {
  register: UseFormRegister<PaymentSchemaType>;
  errors: FieldErrors<PaymentSchemaType>;
}) {
  return (
    <div className="w-full bg-white flex flex-col space-y-10 p-4 rounded border">
      <div>
        <div className="font-bold text-lg text-slate-600 flex justify-between items-baseline">
          <span>Rental Info</span>
          <span className="text-slate-400 text-xs font-normal">
            Step 2 of 4
          </span>
        </div>
        <div className=" text-slate-400 text-xs">
          Please select your rental dates
        </div>
      </div>

      <div className="space-y-16">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-base font-bold text-slate-600">
            <IoIosRadioButtonOn className="text-blue-600" />
            <span>Pick-Up</span>
          </div>
          <div className="flex flex-col space-y-5 sm:space-y-0 sm:grid grid-cols-2 sm:gap-8">
            <div className="space-y-2">
              <div className="text-slate-600 font-medium">Locations</div>
              <input
                type="text"
                className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
                placeholder="Select your city"
                {...register("rentalInfo.pickUpLocation")}
              />
              {errors.rentalInfo?.pickUpLocation && (
                <p className="text-red-400 text-xs">
                  {errors.rentalInfo.pickUpLocation.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div className="text-slate-600 font-medium">Date & Time</div>
              <input
                type="datetime-local"
                readOnly
                className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
                placeholder="select your date"
                {...register("rentalInfo.pickUpDateAndTime")}
              />
              {errors.rentalInfo?.pickUpDateAndTime && (
                <p className="text-red-400 text-xs">
                  {errors.rentalInfo.pickUpDateAndTime.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-base font-bold text-slate-600">
            <IoIosRadioButtonOn className="text-blue-600" />
            <span>Drop-Off</span>
          </div>
          <div className="flex flex-col space-y-5 sm:space-y-0 sm:grid grid-cols-2 sm:gap-8">
            <div className="space-y-2">
              <div className="text-slate-600 font-medium">Locations</div>
              <input
                type="text"
                className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
                placeholder="Select your city"
                {...register("rentalInfo.dropOffLocation")}
              />
              {errors.rentalInfo?.dropOffLocation && (
                <p className="text-red-400 text-xs">
                  {errors.rentalInfo.dropOffLocation.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <div className="text-slate-600 font-medium">Date & Time</div>
              <input
                type="datetime-local"
                readOnly
                className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
                placeholder="select your date"
                {...register("rentalInfo.dropOffDateAndTime")}
              />
              {errors.rentalInfo?.dropOffDateAndTime && (
                <p className="text-red-400 text-xs">
                  {errors.rentalInfo.dropOffDateAndTime.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalInfoCard;
