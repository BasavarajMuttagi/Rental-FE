import { IoHeartSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { ChangeEvent, useRef, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "@tanstack/react-query";
import AxiosClient from "../Axios/AxiosClient";
import { MdOutlineClose } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { HiMiniHome } from "react-icons/hi2";
import SuggestionsDropDown from "./SuggestionsDropDown";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import useRental from "../store";
import { FaCalendarDays } from "react-icons/fa6";
function TopNav() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const { user, setUser } = useRental();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const uploadFile = async (selectedFile: File) => {
    if (!selectedFile) {
      alert("Please Select A File");

      return;
    }

    const result = await AxiosClient().post("/upload", {
      fileName: selectedFile.name,
      fileType: selectedFile.type,
    });

    await axios.put(result.data.url, selectedFile).then(() => {
      enqueueSnackbar("Profile Image Updated", { variant: "success" });
    });

    await AxiosClient()
      .post("/auth/update", {
        filePath: result.data.filePath,
      })
      .then((res) => {
        const current = user;
        current.profileUrl = res.data.url;
        setUser(current);
        enqueueSnackbar("Profile Updated In Records", { variant: "success" });
      });
  };
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["searchcar", debouncedSearchTerm],
    enabled: !!debouncedSearchTerm,
    queryFn: async () => {
      searchBoxRef.current?.focus();
      return await AxiosClient()
        .get(`/api/v1/search?term=${debouncedSearchTerm}`)
        .then((res) => {
          if (res.data.results.length > 0) {
            setShowSuggestion(true);
          }
          return res;
        });
    },
  });

  const navRef = useRef<any>(null);

  if (isError) return <div>Error : {error.message}</div>;

  return (
    <nav
      className={
        "flex p-4 w-full justify-between items-center bg-white border-b"
      }
    >
      {/* mobile search bar */}

      {showMobileSearchBar && (
        <div className="absolute top-20 z-10 left-2 w-[96%] drop-shadow-lg">
          <input
            type="search"
            value={searchTerm}
            onBlur={() => setShowSuggestion(false)}
            onChange={(e) => handleChange(e)}
            className="p-2 w-full border border-slate-300 text-slate-700 font-medium px-14 outline-none rounded placeholder: bg-[#F6F7F9]"
            placeholder="Search Luxury Cars"
          />
          <CiSearch className="h-8 w-8 text-blue-600 absolute top-1 mx-2" />

          {isLoading && (
            <div className="z-10 w-full bg-white border min-h-10 absolute top-12 left-0  rounded max-h-44 overflow-y-scroll flex justify-between items-center">
              <SuggestionsDropDown results={[]} isLoading={isLoading} />
            </div>
          )}
          {showSuggestion && (
            <div className="z-10 w-full bg-white border min-h-10 absolute top-12 left-0  rounded max-h-44 overflow-y-scroll flex justify-between items-center">
              <SuggestionsDropDown
                results={data?.data.results || []}
                isLoading={isLoading}
              />
            </div>
          )}
        </div>
      )}

      <Link to={"/"} className="text-blue-500 font-semibold w-[10%] text-3xl">
        MORENT
      </Link>
      <div className="flex justify-between w-[40%] md:hidden">
        {showMobileSearchBar ? (
          <MdOutlineClose
            className="h-9 w-9 text-slate-800  md:hidden"
            onClick={() => setShowMobileSearchBar(!showMobileSearchBar)}
          />
        ) : (
          <IoSearchOutline
            className="h-9 w-9 text-slate-800  md:hidden"
            onClick={() => setShowMobileSearchBar(!showMobileSearchBar)}
          />
        )}
        <div className="relative">
          <RxHamburgerMenu
            className="h-9 w-9 text-slate-800 md:hidden"
            onClick={() => navRef.current.focus()}
          />
          <div
            ref={navRef}
            tabIndex={-1}
            className="absolute outline-none duration-300  -z-50  -top-4 right-0  translate-x-full focus:translate-x-5 focus:duration-300 focus:z-50"
          >
            <div className="flex flex-col text-slate-700 w-[300px] bg-white justify-between h-screen rounded border outline-none">
              <ul className="px-4 p-3 text-xl font-semibold flex flex-col justify-around space-y-6">
                <li
                  className="flex  justify-start p-2 space-x-12 items-center cursor-pointer"
                  onClick={() => navRef.current.blur()}
                >
                  <MdOutlineClose className="h-6 w-6 cursor-pointer" />
                </li>
                <NavLink
                  to={"/"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#2563eb",
                        }
                      : { color: "" }
                  }
                >
                  <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                    <HiMiniHome className="h-6 w-6 cursor-pointer" />
                    <span>Home</span>
                  </li>
                </NavLink>

                <NavLink
                  to={"/category"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#2563eb",
                        }
                      : { color: "" }
                  }
                >
                  <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                    <TbCategoryFilled className="h-6 w-6 cursor-pointer" />
                    <span>Categories</span>
                  </li>
                </NavLink>
                <NavLink
                  to={"/favorite"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#2563eb",
                        }
                      : { color: "" }
                  }
                >
                  <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                    <IoHeartSharp className="h-6 w-6 cursor-pointer" />
                    <span>Favorite</span>
                  </li>
                </NavLink>
                <NavLink
                  to={"/notifications"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#2563eb",
                        }
                      : { color: "" }
                  }
                >
                  <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                    <IoNotificationsSharp className="h-6 w-6 cursor-pointer" />
                    <span>Notifications</span>
                  </li>
                </NavLink>

                <NavLink
                  to={"/bookings"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#2563eb",
                        }
                      : { color: "" }
                  }
                >
                  <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                    <FaCalendarDays
                      className="h-6 w-6 cursor-pointer"
                      title="bookings"
                    />
                    <span>Bookings</span>
                  </li>
                </NavLink>
                <NavLink
                  to={"/settings"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#2563eb",
                        }
                      : { color: "" }
                  }
                >
                  <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                    <RiSettings3Fill className="h-6 w-6 cursor-pointer" />
                    <span>Settings</span>
                  </li>
                </NavLink>

                <li className="flex  justify-start p-2 space-x-12 items-center cursor-pointer">
                  <img
                    src={
                      user.profileUrl
                        ? user.profileUrl
                        : "https://d38vo1rzl5mxfz.cloudfront.net/users/avatar.jpg"
                    }
                    className="rounded-[8rem] h-8 w-8 cursor-pointer"
                    alt="profile"
                  />
                  <span>Profile</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group w-[50%] hidden md:block">
        <input
          type="search"
          value={searchTerm}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => handleChange(e)}
          className="p-2 w-full border border-slate-300 text-slate-700 font-medium px-14 outline-none rounded placeholder: bg-[#F6F7F9]"
          placeholder="Search Luxury Cars"
        />
        <CiSearch className="h-8 w-8 text-blue-600 absolute top-1 mx-2" />

        {isLoading && (
          <div className="z-10 w-full bg-white border min-h-10 absolute top-12 left-0  rounded max-h-44 overflow-y-scroll flex justify-between items-center">
            <SuggestionsDropDown results={[]} isLoading={isLoading} />
          </div>
        )}
        {showSuggestion && (
          <div className="z-10 w-full bg-white border min-h-10 absolute top-12 left-0  rounded max-h-44 overflow-y-scroll flex justify-between items-center">
            <SuggestionsDropDown
              results={data?.data.results || []}
              isLoading={isLoading}
            />
          </div>
        )}
      </div>

      <div className="hidden md:flex justify-around items-center text-slate-700 w-[24%]">
        <NavLink
          to={"/category"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#2563eb",
                }
              : { color: "" }
          }
        >
          <TbCategoryFilled
            className="h-6 w-6 cursor-pointer"
            title="categories"
          />
        </NavLink>
        <NavLink
          to={"/favorite"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#2563eb",
                }
              : { color: "" }
          }
        >
          <IoHeartSharp className="h-6 w-6 cursor-pointer" title="favorite" />
        </NavLink>
        <NavLink
          to={"/"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#2563eb",
                }
              : { color: "" }
          }
        >
          <IoNotificationsSharp
            className="h-6 w-6 cursor-pointer"
            title="notifications"
          />
        </NavLink>
        <NavLink
          to={"/bookings"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#2563eb",
                }
              : { color: "" }
          }
        >
          <FaCalendarDays className="h-6 w-6 cursor-pointer" title="bookings" />
        </NavLink>
        <NavLink
          to={"/"}
          style={({ isActive }) =>
            isActive
              ? {
                  color: "#2563eb",
                }
              : { color: "" }
          }
        >
          <RiSettings3Fill
            className="h-6 w-6 cursor-pointer"
            title="settings"
          />
        </NavLink>

        <label htmlFor="fileupload">
          <img
            title="profile"
            src={
              user.profileUrl
                ? user.profileUrl
                : "https://d38vo1rzl5mxfz.cloudfront.net/users/avatar.jpg"
            }
            className="rounded-[8rem] h-8 w-8 cursor-pointer"
            alt="profile"
          />
          <input
            className="hidden"
            id="fileupload"
            type="file"
            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files && e.target.files.length > 0) {
                await uploadFile(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>
    </nav>
  );
}

export default TopNav;

export interface CarData {
  id: string;
  name: string;
  baseUrl: string;
  imageUrl: string;
}
