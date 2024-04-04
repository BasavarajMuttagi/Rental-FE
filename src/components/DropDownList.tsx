function DropDownList({ data=[] }: { data: string[] }) {
  return (
    <div>
      <ul className="flex flex-col space-y-3 text-base font-medium text-slate-500  bg-white border w-fit rounded tracking-widest p-2 px-4 max-h-96 overflow-y-scroll">
        {data.map((eachItem) => (
          <li
            className="cursor-pointer py-1 px-1 text-nowrap hover:text-blue-600"
            key={eachItem}
          >
            {eachItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownList;
