import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import useRental from "../store";
import { IoChevronDown } from "react-icons/io5";
function SidePanel() {
  const { filter, setFilter } = useRental();
  const [showType, setShowType] = useState(false);
  const [showCapacity, setShowCapacity] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  const filterSchema = z.object({
    Type: z.string().array(),
    Capacity: z.string().array(),
    Price: z.number(),
  });

  type filterType = z.infer<typeof filterSchema>;

  const { register, watch } = useForm<filterType>({
    resolver: zodResolver(filterSchema),
    defaultValues: filter,
    values: filter,
  });

  const { register: form2, watch: watchform2 } = useForm<filterType>({
    resolver: zodResolver(filterSchema),
    defaultValues: filter,
    values: filter,
  });

  useEffect(() => {
    const { unsubscribe } = watch((value) => {
      setFilter(value);
    });
    return () => unsubscribe();
  }, [watch]);

  useEffect(() => {
    const { unsubscribe } = watchform2((value) => {
      setFilter(value);
    });
    return () => unsubscribe();
  }, [watchform2]);

  return (
    <div className="w-screen sm:w-72 sm:h-screen sm:text-slate-600 sm:bg-white border-r">
      <form className="hidden sm:h-[60%] sm:flex flex-col justify-between p-3 space-y-10">
        <div className="space-y-6">
          <h1 className="text-slate-400">Type</h1>
          <ul className="flex flex-col justify-between items-start space-y-5 px-12">
            <li className="flex items-center space-x-2">
              <input
                {...register("Type")}
                value={"SPORT"}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0
    checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>Sport</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                {...register("Type")}
                value={"SUV"}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0
    checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>SUV</span> <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                {...register("Type")}
                value={"MPV"}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0
    checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>MPV</span> <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                {...register("Type")}
                value={"SEDAN"}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0
    checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>Sedan</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                {...register("Type")}
                value={"COUPE"}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0
    checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>Coupe</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                {...register("Type")}
                value={"HATCHBACK"}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0
    checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>Hatchback</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h1 className="text-slate-400">Capacity</h1>
          <ul className="flex flex-col justify-between items-start space-y-5 px-12">
            <li className="flex items-center space-x-2">
              <input
                value={"2"}
                {...register("Capacity")}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>2 Person</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                value={"4"}
                {...register("Capacity")}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>4 Person</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                value={"6"}
                {...register("Capacity")}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>6 Person</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
            <li className="flex items-center space-x-2">
              <input
                value={"8"}
                {...register("Capacity")}
                type="checkbox"
                className="accent-blue-600 mr-2  w-4 h-4 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
              />{" "}
              <span>8 Person</span>{" "}
              <span className="text-slate-400">({"20"})</span>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="text-slate-400">Price</h1>
          <input
            {...register("Price")}
            min={60}
            max={200}
            type="range"
            className="w-full rounded accent-blue-600"
          />
          <div>Price : {watch("Price")}</div>
        </div>
      </form>

      <form className="w-full grid grid-cols-2 grid-rows-2 h-24 p-2 gap-2 sm:hidden">
        {/* type */}
        <div className="relative text-lg">
          <div
            className=" bg-white rounded border w-fit  font-semibold text-slate-600 flex items-center space-x-10  py-1 px-5"
            onClick={() => setShowType(!showType)}
          >
            <span>Type</span>
            <IoChevronDown className="h-5 w-5" />
          </div>
          {showType && (
            <div className="absolute top-14 z-10 left-0 w-fit bg-white rounded p-7 space-y-5 border">
              <ul className="flex flex-col space-y-5 font-medium">
                <li className="flex items-center space-x-4">
                  <input
                    value={"SPORT"}
                    {...form2("Type")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>Sport</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"SUV"}
                    {...form2("Type")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>SUV</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"MPV"}
                    {...form2("Type")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>MPV</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"SEDAN"}
                    {...form2("Type")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>Sedan</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"COUPE"}
                    {...form2("Type")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>Coupe</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"HATCHBACK"}
                    {...form2("Type")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>Hatchback</span>
                </li>
              </ul>

              <div className="w-full flex justify-end">
                <button
                  className="py-1 px-4 rounded border  bg-blue-600 text-white font-semibold"
                  onClick={() => setShowType(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        {/* capacity */}
        <div className="relative text-lg ">
          <div
            className=" bg-white rounded border w-fit  font-semibold text-slate-600 flex items-center space-x-5  py-1 px-5"
            onClick={() => setShowCapacity(!showCapacity)}
          >
            <span>Capacity</span>
            <IoChevronDown className="h-5 w-5" />
          </div>
          {showCapacity && (
            <div className="absolute top-14 z-10 right-0  min-w-48 bg-white rounded p-7 space-y-5 border">
              <ul className="flex flex-col space-y-5 font-medium">
                <li className="flex items-center space-x-4">
                  <input
                    value={"2"}
                    {...form2("Capacity")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>2 Person</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"4"}
                    {...form2("Capacity")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>4 Person</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"6"}
                    {...form2("Capacity")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>6 Person</span>
                </li>
                <li className="flex items-center space-x-4">
                  <input
                    value={"8"}
                    {...form2("Capacity")}
                    type="checkbox"
                    className="accent-blue-600 mr-2  w-5 h-5 border-2 border-blue-500 rounded-sm bg-white shrink-0 checked:bg-blue-800 checked:border-0"
                  />{" "}
                  <span>8 Person</span>
                </li>
              </ul>

              <div className="w-full flex justify-end">
                <button
                  className="py-1 px-4 rounded border  bg-blue-600 text-white font-semibold"
                  onClick={() => setShowCapacity(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Price */}
        <div className="relative text-lg">
          <div
            className=" bg-white rounded border w-fit  font-semibold text-slate-600 flex items-center space-x-10  py-1 px-5"
            onClick={() => setShowPrice(!showPrice)}
          >
            <span>Price</span>
            <IoChevronDown className="h-5 w-5" />
          </div>
          {showPrice && (
            <div className="absolute top-14 z-10 left-0  bg-white rounded p-2 space-y-5 w-full border">
              <div className="space-y-2 w-full">
                <div>Price : {watch("Price")}</div>
                <input
                  {...form2("Price")}
                  min={60}
                  max={200}
                  type="range"
                  className="w-full rounded accent-blue-600"
                />
              </div>

              <div className="w-full flex justify-end">
                <button
                  className="py-1 px-4 rounded border  bg-blue-600 text-white font-semibold"
                  onClick={() => setShowPrice(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default SidePanel;
