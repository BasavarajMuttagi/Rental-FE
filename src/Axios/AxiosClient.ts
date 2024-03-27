import axios from "axios";
import useRental from "../store";

function AxiosClient() {
  return axios.create({
    baseURL: "https://rental-be.vercel.app",
    headers: {
      Authorization: `Bearer ${useRental.getState().token}`,
    },
  });
}

export default AxiosClient;
