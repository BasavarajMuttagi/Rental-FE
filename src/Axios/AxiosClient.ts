import axios from "axios";


function AxiosClient() {
  return  axios.create({
    baseURL:'https://rental-be.vercel.app',
  })
}

export default AxiosClient;
