import { UseFormRegister, FieldErrors } from "react-hook-form";
import { PaymentSchemaType } from "../Zod/schemas";

function ConfirmationCard({
  register,
  errors,
}: {
  register: UseFormRegister<PaymentSchemaType>;
  errors: FieldErrors<PaymentSchemaType>;
}) {
  return (
    <div className="w-full bg-white flex flex-col space-y-3 p-4 rounded border">
      <div>
        <div className="font-bold text-lg text-slate-600 flex justify-between items-baseline">
          <span>Confirmation</span>
          <span className="text-slate-400 text-xs font-normal">
            Step 4 of 4
          </span>
        </div>
        <div className=" text-slate-400 text-xs w-[70%]">
          We are getting to the end. Just few clicks and your rental is ready!
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-2">
          <div className="text-slate-600 font-medium">
            <input type="checkbox" {...register("confirmation.newsletter")} />
          </div>
          <div className="space-y-2 w-full">
            <div className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500">
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </div>
            {errors.confirmation?.newsletter && (
              <p className="text-red-400 text-xs">
                {errors.confirmation.newsletter.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex sm:items-baseline sm:space-x-2">
          <div className="text-slate-600 font-medium">
            <input type="checkbox" {...register("confirmation.terms")} />
          </div>
          <div className="space-y-2 w-full">
            <div className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500">
              I agree with our terms and conditions and privacy policy.
            </div>
            {errors.confirmation?.terms && (
              <p className="text-red-400 text-xs">
                {errors.confirmation.terms.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationCard;
