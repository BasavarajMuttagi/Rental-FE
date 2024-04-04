import axios from "axios";
import useRental from "../store";

function AxiosClient() {
  return axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${useRental.getState().token}`,
    },
  });
}

export default AxiosClient;
