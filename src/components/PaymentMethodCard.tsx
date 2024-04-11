import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IoIosRadioButtonOn } from "react-icons/io";
import { PaymentSchemaType } from "../Zod/schemas";
function PaymentMethodCard({
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
          <span>Payment Method</span>
          <span className="text-slate-400 text-xs font-normal">
            Step 3 of 4
          </span>
        </div>
        <div className=" text-slate-400 text-xs">
          Please enter your payment method
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-base font-bold text-slate-600">
          <IoIosRadioButtonOn className="text-blue-600" />
          <span>Credit Card</span>
        </div>
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:grid grid-cols-2 sm:gap-8">
          <div className="space-y-2">
            <div className="text-slate-600 font-medium">Card Number</div>
            <input
              type="text"
              className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
              placeholder="Card Number"
              {...register("cardInfo.cardNumber")}
            />
            {errors.cardInfo?.cardNumber && (
              <p className="text-red-400 text-xs">
                {errors.cardInfo.cardNumber.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="text-slate-600 font-medium">Expiration Date</div>
            
            <input
              type="date"
              className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
              {...register("cardInfo.ExpirationDate")}
            />
            {errors.cardInfo?.ExpirationDate && (
              <p className="text-red-400 text-xs">
                {errors.cardInfo.ExpirationDate.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="text-slate-600 font-medium">Card Holder Name</div>
            <input
              type="text"
              className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
              placeholder="Card Holder Name"
              {...register("cardInfo.CardHolder")}
            />
            {errors.cardInfo?.CardHolder && (
              <p className="text-red-400 text-xs">
                {errors.cardInfo.CardHolder.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="text-slate-600 font-medium">CVV</div>
            <input
              type="text"
              className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
              placeholder="CVV"
              {...register("cardInfo.CVV")}
            />
            {errors.cardInfo?.CVV && (
              <p className="text-red-400 text-xs">
                {errors.cardInfo.CVV.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethodCard;
