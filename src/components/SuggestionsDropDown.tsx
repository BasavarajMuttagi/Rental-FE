import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CarData } from "./TopNav";

const SuggestionsDropDown = ({
  results,
  isLoading,
}: {
  results: CarData[];
  isLoading: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <>
      {isLoading ? (
        <AiOutlineLoading3Quarters className="w-6 h-6 animate-spin text-blue-600 mx-auto" />
      ) : (
        <ul className="p-1 text-sm text-blue-500 font-medium space-y-2 w-full">
          {results.map((eachCar) => {
            return (
              <li
                className="h-10 flex justify-between items-center px-2 cursor-pointer"
                key={eachCar.id}
                onClick={() =>
                  navigate(`/car/${eachCar.id}`)
                }
              >
                <div className="flex items-center space-x-3">
                  <span>{eachCar.name}</span>
                  <span>
                    <MdOutlineArrowOutward className="text-slate-500" />
                  </span>
                </div>
                <img
                  src={eachCar.baseUrl + eachCar.imageUrl}
                  alt="search result car image"
                  className="h-10 self-end"
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SuggestionsDropDown;
