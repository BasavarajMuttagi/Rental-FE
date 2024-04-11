import { twMerge } from "tailwind-merge";
import { LocationType } from "../Zod/schemas";
import { UseFormRegister } from "react-hook-form";


interface DropDownListProps {
  data: string[];
  selected: string;
  register: UseFormRegister<LocationType>;
  inputType:
    | "pickUpLocation"
    | "dropOffLocation"
    | "pickUpDateAndTime"
    | "dropOffDateAndTime";
}
const DropDownList = ({
  data,
  selected,
  register,
  inputType,
}: DropDownListProps) => {
  return (
    <select
      className="outline-none text-slate-400 text-[11px] font-semibold bg-white"
      {...register(inputType)}
    >
      <option value="">select</option>
      {data.map((eachItem) => (
        <option
          className={twMerge(
            "cursor-pointer py-1 px-1 text-nowrap hover:text-green-300",
            eachItem === selected ? "text-green-300" : ""
          )}
          key={eachItem}
          value={eachItem}
        >
          {eachItem}
        </option>
      ))}
    </select>
  );
};

export default DropDownList;
