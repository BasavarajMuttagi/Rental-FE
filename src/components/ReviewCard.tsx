import { IoStarOutline } from "react-icons/io5";
function ReviewCard() {
  return (

    <div className="bg-white border-b w-full   flex justify-between items-start space-x-3 p-4">
      <img
        src="https://www.billboard.com/wp-content/uploads/2023/04/02-post-malone-press-2023-cr-Emma-Louise-Swanson-billboard-1548.jpg?w=942&h=623&crop=1"
        className="rounded-[8rem] h-12 w-12 cursor-pointer"
        alt="profile"
      />
      <div className="space-y-3 w-full">
        <div className="flex justify-between items-center">
          <div className="text-slate-800 text-lg font-bold">
            Lewis Hamilton
          </div>
          <div className="text-sm font-medium text-slate-500 flex-wrap">21 July 2024</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-slate-700 text-lg font-semibold">CEO of F1</div>

          <div className="flex items-center space-x-2">
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </div>
        </div>
        <div className="text-slate-600 text-sm font-medium flex-wrap">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
