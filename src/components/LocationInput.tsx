import { IoIosRadioButtonOn } from "react-icons/io";
import { IoChevronDownOutline } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import DropDownList from "./DropDownList";
import { useRef, useState } from "react";
import { cityData, timeData } from "../Axios/inputdata";
function LocationInput() {
  const [showDropOffLocations, setShowDropOffLocations] = useState(false);
  const [showPickUpLocations, setShowPickUpLocations] = useState(false);
  const [showDropOffDate, setShowDropOffDate] = useState(false);
  const [showPickUpDate, setShowPickUpDate] = useState(false);
  const [showDropOffTime, setShowDropOffTime] = useState(false);
  const [showPickUpTime, setShowPickUpTime] = useState(false);
  const showDropOffLocationsRef = useRef<HTMLDivElement>(null);
  const showPickUpLocationsRef = useRef<HTMLDivElement>(null);
  const showDropOffDateRef = useRef<HTMLDivElement>(null);
  const showPickUpDateRef = useRef<HTMLInputElement>(null);
  const showDropOffTimeRef = useRef<HTMLDivElement>(null);
  const showPickUpTimeRef = useRef<HTMLDivElement>(null);

  return (
    <div className="p-1 flex flex-col items-center w-full space-y-1 sm:space-y-0 sm:flex-row sm:justify-between sm:space-x-4 sm:p-6 sm:py-3">
      <div className="bg-white rounded space-y-3 p-3 border   w-full">
        <div className="flex items-center space-x-2">
          <IoIosRadioButtonOn className="text-blue-600" />
          <span className="text-slate-700 font-semibold text-sm">Pick-Up</span>
        </div>
        <div className="flex items-center  space-x-6 justify-between md:justify-around">
          <div className="space-y-2 relative">
            <h1 className="font-medium text-sm">Locations</h1>
            <button
              className="flex items-center space-x-4 group"
              onClick={() => {
                setShowPickUpLocations(!showPickUpLocations),
                  showPickUpLocationsRef.current?.focus();
              }}
            >
              <span className="text-slate-400 text-[11px] group-hover:text-blue-600  sm:text-xs">
                Select city
              </span>
              <IoChevronDownOutline className="text-slate-600 group-hover:text-blue-600  sm:text-xs" />
            </button>
            <div
              className="absolute z-10 top-14 -left-3"
              tabIndex={-1}
              ref={showPickUpLocationsRef}
              onBlur={() => {
                setShowPickUpLocations(!showPickUpLocations);
                showPickUpLocationsRef.current?.blur();
              }}
            >
              {showPickUpLocations && <DropDownList data={cityData} />}
            </div>
          </div>
          <div className="space-y-2 relative">
            <h1 className="font-medium text-sm">Date</h1>
            <div className="flex items-center space-x-4 group">
              <label
                onClick={() => showPickUpDateRef.current?.showPicker}
                htmlFor="pickupdatepicker"
                className="text-slate-400 text-[11px] cursor-pointer group-hover:text-blue-600  sm:text-xs"
              >
                Select date
                <input
                  id="pickupdatepicker"
                  type="date"
                  className=" hidden"
                  ref={showPickUpDateRef}
                />
              </label>

              <IoChevronDownOutline className="text-slate-600 group-hover:text-blue-600  sm:text-xs" />
            </div>
            <div
              className="absolute z-10 top-14 -left-3"
              tabIndex={-1}
              ref={showPickUpDateRef}
              onBlur={() => {
                setShowPickUpDate(!showPickUpDate),
                  showPickUpDateRef.current?.blur();
              }}
            >
              {showPickUpDate && <DropDownList data={[]} />}
            </div>
          </div>
          <div className="space-y-2 relative">
            <h1 className="font-medium text-sm">Time</h1>
            <button
              className="flex items-center space-x-4 group"
              onClick={() => {
                setShowPickUpTime(!showPickUpTime),
                  showPickUpTimeRef.current?.focus();
              }}
            >
              <span className="text-slate-400 text-[11px] group-hover:text-blue-600  sm:text-xs">
                Select time
              </span>
              <IoChevronDownOutline className="text-slate-600 group-hover:text-blue-600  sm:text-xs" />
            </button>
            <div
              className="absolute z-10 top-14 -right-3"
              tabIndex={-1}
              ref={showPickUpTimeRef}
              onBlur={() => {
                setShowPickUpTime(!showPickUpTime),
                  showPickUpTimeRef.current?.blur();
              }}
            >
              {showPickUpTime && <DropDownList data={timeData} />}
            </div>
          </div>
        </div>
      </div>

      <GoArrowSwitch className="w-11 h-11 rounded bg-blue-600 text-white p-2  shrink-0 rotate-90 sm:rotate-0" />

      <div className="bg-white rounded space-y-3 p-3 border   w-full">
        <div className="flex items-center space-x-2">
          <IoIosRadioButtonOn className="text-blue-600" />
          <span className="text-slate-700 font-semibold text-sm">Drop-Off</span>
        </div>
        <div className="flex items-center  space-x-6 justify-between md:justify-around">
          <div className="space-y-2 relative">
            <h1 className="font-medium text-sm">Locations</h1>
            <button
              className="flex items-center space-x-4 group"
              onClick={() => {
                setShowDropOffLocations(!showDropOffLocations),
                  showDropOffLocationsRef.current?.focus();
              }}
            >
              <span className="text-slate-400 text-[11px] group-hover:text-blue-600  sm:text-xs">
                Select city
              </span>
              <IoChevronDownOutline className="text-slate-600 group-hover:text-blue-600  sm:text-xs" />
            </button>
            <div
              className="absolute z-10 top-14 -left-3"
              tabIndex={-1}
              ref={showDropOffLocationsRef}
              onBlur={() => {
                setShowDropOffLocations(!showDropOffLocations);
                showDropOffLocationsRef.current?.blur();
              }}
            >
              {showDropOffLocations && <DropDownList data={cityData} />}
            </div>
          </div>
          <div className="space-y-2 relative">
            <h1 className="font-medium text-sm">Date</h1>
            <button
              className="flex items-center space-x-4 group"
              onClick={() => {
                setShowDropOffDate(!showDropOffDate),
                  showDropOffDateRef.current?.focus();
              }}
            >
              <span className="text-slate-400 text-[11px] group-hover:text-blue-600  sm:text-xs">
                Select date
              </span>
              <IoChevronDownOutline className="text-slate-600 group-hover:text-blue-600  sm:text-xs" />
            </button>
            <div
              className="absolute z-10 top-14 -left-3"
              tabIndex={-1}
              ref={showDropOffDateRef}
              onBlur={() => {
                setShowDropOffDate(!showDropOffDate);
                showDropOffDateRef.current?.blur();
              }}
            >
              {showDropOffDate && <DropDownList data={[]} />}
            </div>
          </div>
          <div className="space-y-2 relative">
            <h1 className="font-medium text-sm">Time</h1>
            <button
              className="flex items-center space-x-4 group"
              onClick={() => {
                setShowDropOffTime(!showDropOffTime),
                  showDropOffTimeRef.current?.focus();
              }}
            >
              <span className="text-slate-400 text-[11px] group-hover:text-blue-600  sm:text-xs">
                Select time
              </span>
              <IoChevronDownOutline className="text-slate-600 group-hover:text-blue-600  sm:text-xs" />
            </button>
            <div
              className="absolute z-10 top-14 -right-3"
              tabIndex={-1}
              ref={showDropOffTimeRef}
              onBlur={() => {
                setShowDropOffTime(!showDropOffTime);
                showDropOffTimeRef.current?.blur();
              }}
            >
              {showDropOffTime && <DropDownList data={timeData} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationInput;
