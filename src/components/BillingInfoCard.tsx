function BillingInfoCard() {
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
          <input
            type="text"
            className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
            placeholder="Name"
          />
          <p className="text-red-400 text-xs">Enter your name</p>
        </div>
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Phone Number</div>
          <input
            type="text"
            className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
            placeholder="Phone Number"
          />
          <p className="text-red-400 text-xs">Enter your phone number </p>
        </div>
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Address</div>
          <input
            type="text"
            className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
            placeholder="Address"
          />
          <p className="text-red-400 text-xs">Enter your address </p>
        </div>
        <div className="space-y-2">
          <div className="text-slate-600 font-medium">Town/city</div>
          <input
            type="text"
            className="p-4 bg-slate-100 rounded text-sm w-full outline-none placeholder:text-slate-500"
            placeholder="Town/City"
          />
          <p className="text-red-400 text-xs">Enter your town/city </p>
        </div>
      </div>
    </div>
  );
}

export default BillingInfoCard;
