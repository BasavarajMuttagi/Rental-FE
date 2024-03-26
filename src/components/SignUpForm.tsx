import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { z } from "zod";
import { useState } from "react";

import useBabyLink from "../store";
import { ImSpinner8 } from "react-icons/im";
import AxiosClient from "../Axios/AxiosClient";
function SignUpForm() {
  const { setToken } = useBabyLink();
  const [isSpin, setIsSpin] = useState(false);

  const navigate = useNavigate();
  const userSignUpSchema = z
    .object({
      fullname: z.string(),
      username: z
        .string()
        .min(3, { message: "username must be more than 2 digits" }),
      email: z.string().email(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      address: z.string(),
      password: z
        .string()
        .min(8, { message: "password cannot be less than 8 digits" })
        .max(10, { message: "password cannot be more than 10 digits" }),
      confirmpassword: z
        .string()
        .min(8, { message: "password cannot be less than 8 digits" })
        .max(10, { message: "password cannot be more than 10 digits" }),
    })
    .refine((data) => data.password == data.confirmpassword, {
      message: "Passwords don't match",
      path: ["confirmpassword"],
    });

  type userSignUpType = z.infer<typeof userSignUpSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userSignUpType>({
    resolver: zodResolver(userSignUpSchema),
  });

  const submitHandler = async (data: userSignUpType) => {
    setIsSpin(true);
    await AxiosClient()
      .post(`/auth/signup`, data)
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        setToken(res.data.token);
        navigate("/");
        reset();
        location.reload();
      })
      .catch((error: AxiosError) => {
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message || "Something Went Wrong!", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsSpin(false);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white w-full rounded p-4 py-10 space-y-10 sm:w-[60%]"
    >
      <div className="text-xl font-bold text-slate-700 text-center">
        Sign Up
      </div>
      <div className="space-y-5 sm:space-y-0 sm:grid sm:grid-cols-2  sm:gap-5 ">
        <div className="space-y-1">
          <div>Full Name</div>
          <input
            {...register("fullname")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Full Name"
          />
          {errors.fullname && (
            <p className="text-red-400 text-xs font-medium">
              {errors.fullname.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>Username</div>
          <input
            {...register("username")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-400 text-xs font-medium">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>Email</div>
          <input
            {...register("email")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-400 text-xs font-medium">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>City</div>
          <input
            {...register("city")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="City"
          />
          {errors.city && (
            <p className="text-red-400 text-xs font-medium">
              {errors.city.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>State</div>
          <input
            {...register("state")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="State"
          />
          {errors.state && (
            <p className="text-red-400 text-xs font-medium">
              {errors.state.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>Country</div>
          <input
            {...register("country")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Country"
          />
          {errors.country && (
            <p className="text-red-400 text-xs font-medium">
              {errors.country.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>Address</div>
          <input
            {...register("address")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Address"
          />
          {errors.address && (
            <p className="text-red-400 text-xs font-medium">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>Password</div>
          <input
            {...register("password")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-400 text-xs font-medium">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <div>Confirm Password</div>
          <input
            {...register("confirmpassword")}
            type="text"
            className="p-4 bg-slate-100 rounded w-full outline-none"
            placeholder="Confirm Password"
          />
          {errors.confirmpassword && (
            <p className="text-red-400 text-xs font-medium">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>
        <div className="sm:grid sm:col-span-2 sm:place-content-end">
          <button className="w-full p-4 mt-5 rounded-md bg-[#9C7EF1] flex items-center justify-center">
            <span className="text-white  text-center font-bold text-lg">
              Sign Up
            </span>
            <span>
              {isSpin && (
                <ImSpinner8 className="animate-spin text-white  ml-2 h-6 w-6" />
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="text-center">or</div>
      <div className="flex justify-center items-center space-x-2 text-black font-medium text-lg">
        <span>Already Have An Account?</span>
        <span
          className=" font-semibold text-blue-600 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </div>
    </form>
  );
}

export default SignUpForm;
