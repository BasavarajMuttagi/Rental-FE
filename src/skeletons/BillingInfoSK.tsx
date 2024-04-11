import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function BillingInfoSK() {
  return (
    <div className="w-full bg-white flex flex-col space-y-3 p-4 rounded border">
      <div>
        <div className="font-bold text-lg text-slate-600 flex justify-between items-baseline">
          <span>Billing Info</span>
          <span className="text-slate-400 text-xs font-normal">
            Step 1 of 4
          </span>
        </div>
        <div className=" text-slate-400 text-xs">
          Please enter your billing info
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:space-y-0 sm:grid grid-cols-2 sm:gap-8">
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Name</div>
          <Skeleton className="p-4 rounded w-full " />
        </div>
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Phone Number</div>
          <Skeleton className="p-4 rounded w-full " />
        </div>
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Address</div>
          <Skeleton className="p-4 rounded w-full " />
        </div>
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Town/city</div>
          <Skeleton className="p-4 rounded w-full " />
        </div>
      </div>
    </div>
  );
}

export default BillingInfoSK;
