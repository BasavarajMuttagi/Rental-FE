import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useQuery } from "@tanstack/react-query";
import {
  getCities,
  getCountries,
  getStates,
} from "../Axios/ExternalEndpoints";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AxiosResponse, AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { FiArrowRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import AxiosClient from "../Axios/AxiosClient";

function RegistrationForm() {
  const [isSpin, setIsSpin] = useState(false);

  const userRegistrationSchema = z
    .object({
      fullname: z.string().min(3),
      email: z.string().email(),
      password: z
        .string()
        .min(8, { message: "password cannot be less than 8 digits" })
        .max(10, { message: "password cannot be more than 10 digits" }),
      confirmpassword: z
        .string()
        .min(8, { message: "password cannot be less than 8 digits" })
        .max(10, { message: "password cannot be more than 10 digits" }),
      phone: z.string().min(10),
      address: z.string().min(3).max(30),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      pincode: z.string().min(6, { message: "PIN code must be 6 characters" }),
      driversLicense: z.object({
        licenseNumber: z.string().min(16).max(16),
        expiryDate: z.string().pipe(z.coerce.date()),
        issuingState: z.string(),
      }),
      communicationPreferences: z.object({
        newsletters: z.boolean(),
        smsNotifications: z.boolean(),
      }),
    })
    .refine((data) => data.password == data.confirmpassword, {
      message: "Passwords don't match",
      path: ["confirmpassword"],
    });

  type userRegistrationType = z.infer<typeof userRegistrationSchema>;
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<userRegistrationType>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      driversLicense: { licenseNumber: "", issuingState: "" },
      communicationPreferences: { newsletters: true, smsNotifications: true },
    },
  });

  const SubmitHandler = async (data: userRegistrationType) => {
    console.log(data);
    setIsSpin(true);

    await AxiosClient()
      .post(`/auth/signup`, data)
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        reset();
      })
      .catch((error: AxiosError) => {
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message, { variant: "error" });
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  const { data, isLoading: isCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  const { data: states, isLoading: isStatesLoading } = useQuery({
    queryKey: ["states", watch("country")],
    queryFn: () => {
      return getStates(watch("country"));
    },
    enabled: watch("country") ? true : false,
  });

  const { data: cities, isLoading: isCitiesLoading } = useQuery({
    queryKey: ["cities", watch("country"), watch("state")],
    queryFn: () => {
      return getCities(watch("country"), watch("state"));
    },
    enabled: watch("state") ? true : false,
  });

  return (
    <div className="font-inter   md:h-screen">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="space-y-2 max-w-screen-md justify-center"
        >
          <div className="p-2 w-[310px] flex justify-center mt-5">
            <div>
              <div className="w-full text-start mb-5">
                <NavLink to={"/"}>
                  <span className="cursor-pointer text-center text-xl text-yellow-300 font-extrabold bg-black p-4">
                    APEX AUTO
                  </span>
                </NavLink>
              </div>
              <div>
                <p>Drive Elegance, Arrive in Style.</p>
              </div>
            </div>
          </div>
          {/* Personalform */}
          <div className="p-2">
            <label htmlFor="Personal" className="text-xl font-bold">
              Personal Details
            </label>
            <div className="space-y-2 md:flex  flex-wrap justify-between items-baseline md:space-y-4">
              <div id="Personal">
                <input
                  {...register("fullname")}
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                  placeholder="Full Name"
                />
                {errors.fullname && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.fullname.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.email && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("password")}
                  placeholder="Password"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.password && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("confirmpassword")}
                  placeholder="Confirm Password"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.confirmpassword && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.confirmpassword.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.phone && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.phone.message}
                  </div>
                )}
              </div>

              <div>
                <select
                  {...register("country")}
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                >
                  <option value="" disabled className="bg-violet-600 text-wrap">
                    Country
                  </option>
                  {data?.data.map((eachCountry: any, index: number) => (
                    <option key={index} value={eachCountry.country}>
                      {eachCountry.country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.country.message}
                  </div>
                )}
                {
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {isCountriesLoading ? "Loading..." : ""}
                  </div>
                }
              </div>

              <div>
                <select
                  {...register("state")}
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                >
                  <option value="" disabled className="bg-violet-600">
                    State
                  </option>
                  {states?.data.states.map((eachState: any) => (
                    <option key={eachState.name} value={eachState.name}>
                      {eachState.name}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.state.message}
                  </div>
                )}
                {
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {isStatesLoading ? "Loading..." : ""}
                  </div>
                }
              </div>
              <div>
                <select
                  {...register("city")}
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                >
                  <option value="" disabled className="bg-violet-600">
                    City
                  </option>
                  {cities?.data.map((eachCity: any) => (
                    <option key={eachCity} value={eachCity}>
                      {eachCity}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.city?.message}
                  </div>
                )}
                {
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {isCitiesLoading ? "Loading..." : ""}
                  </div>
                }
              </div>
              <div>
                <input
                  {...register("pincode")}
                  placeholder="Pincode"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.pincode && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.pincode.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("address")}
                  placeholder="Address"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.address && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.address.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* driverLicense */}
          <div className="p-2">
            <label htmlFor="License" className="text-xl font-bold">
              Drivers License
            </label>
            <div className="space-y-2 md:flex  flex-wrap justify-between items-baseline md:space-y-4">
              <div id="License">
                <input
                  {...register("driversLicense.licenseNumber")}
                  placeholder="License Number"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.driversLicense?.licenseNumber && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.driversLicense.licenseNumber.message}
                  </div>
                )}
              </div>
              <div>
                <select
                  {...register("driversLicense.issuingState")}
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                >
                  <option value="" disabled className="bg-violet-600">
                    State
                  </option>
                  {states?.data.states.map((eachState: any) => (
                    <option key={eachState.name} value={eachState.name}>
                      {eachState.name}
                    </option>
                  ))}
                </select>
                {errors.driversLicense?.issuingState && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.driversLicense.issuingState.message}
                  </div>
                )}
                {
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {isStatesLoading ? "Loading..." : ""}
                  </div>
                }
              </div>
              <div>
                <input
                  {...register("driversLicense.expiryDate")}
                  type="date"
                  placeholder="Expiry Date"
                  min="24/08/2023"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold "
                />
                {errors.driversLicense?.expiryDate && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.driversLicense?.expiryDate.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* communicationPreferences */}
          <div className="space-y-2 p-2 md:p-5">
            <div id="Preferences">
              <label htmlFor="newsletters" className="italic">
                Newsletters
                <input
                  id="newsletter"
                  {...register("communicationPreferences.newsletters")}
                  className="p-2  rounded-sm m-1 accent-yellow-300"
                  type="checkbox"
                />
              </label>
              {errors.communicationPreferences?.newsletters && (
                <div className="text-red-400 ml-1   text-xs w-full">
                  {errors.communicationPreferences?.newsletters.message}
                </div>
              )}
            </div>
            <div>
              <label htmlFor="smsNotifications" className="italic">
                SMS Notifications
                <input
                  {...register("communicationPreferences.smsNotifications")}
                  className="p-2  rounded-sm m-1 accent-yellow-300"
                  type="checkbox"
                />
              </label>
              {errors.communicationPreferences?.smsNotifications && (
                <div className="text-red-400 ml-1   text-xs w-full">
                  {errors.communicationPreferences.smsNotifications.message}
                </div>
              )}
            </div>
          </div>
          <div className="p-2 flex justify-center">
            <button
              className="p-2 rounded-sm  outline outline-1 outline-slate-400 w-[310px]  bg-black text-xl font-bold text-white"
              type="submit"
            >
              Sign Up{" "}
              {isSpin && (
                <AiOutlineLoading3Quarters className="inline ml-2 animate-spin" />
              )}
              {!isSpin && <FiArrowRight className="inline ml-2 " />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;