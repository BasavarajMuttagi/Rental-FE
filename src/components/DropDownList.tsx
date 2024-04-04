import { twMerge } from "tailwind-merge";

function DropDownList({
  data = [],
  setData,
  selected,
}: {
  data: string[];
  setData: any;
  selected: string;
}) {
  return (
    <div>
      <ul className="flex flex-col space-y-3 text-base font-medium text-slate-500  bg-white border w-fit rounded tracking-widest p-2 px-4 max-h-96 overflow-y-scroll">
        {data.map((eachItem) => (
          <li
            className={twMerge(
              "cursor-pointer py-1 px-1 text-nowrap hover:text-green-300",
              eachItem === selected ? "text-green-300" : ""
            )}
            key={eachItem}
            onClick={() => setData(eachItem)}
          >
            {eachItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownList;
