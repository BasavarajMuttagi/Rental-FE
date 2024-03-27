import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { z } from "zod";
import { useState } from "react";

import { ImSpinner8 } from "react-icons/im";
import AxiosClient from "../Axios/AxiosClient";
import useRental from "../store";
function LoginForm() {
  const { setToken, setUser } = useRental();
  const [isSpin, setIsSpin] = useState(false);

  const navigate = useNavigate();
  const userLoginSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
  });

  type userLoginType = z.infer<typeof userLoginSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userLoginType>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = async (data: userLoginType) => {
    setIsSpin(true);
    await AxiosClient()
      .post(`/auth/login`, data)
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        setToken(res.data.token);
        setUser(res.data.user);
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
      className="bg-white w-full rounded p-4 py-10 space-y-10 max-w-[380px]"
    >
      <div className="text-xl font-bold text-slate-700 text-center">Login</div>
      <div className="space-y-5">
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

        <div className="sm:grid sm:col-span-2 sm:place-content-end">
          <button className="w-full p-4 mt-5 rounded-md bg-[#9C7EF1] flex items-center justify-center">
            <span className="text-white  text-center font-bold text-lg">
              Login
            </span>
            <span>
              {isSpin && (
                <ImSpinner8 className="animate-spin text-white  ml-2 h-6 w-6" />
              )}
            </span>
          </button>
        </div>
        <div className="text-center">or</div>
        <div className="flex justify-center items-center space-x-2 text-black font-medium text-lg">
          <span>Don't Have An Account?</span>
          <span
            className=" font-semibold text-blue-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
