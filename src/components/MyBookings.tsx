import { useQuery } from "@tanstack/react-query";
import AxiosClient from "../Axios/AxiosClient";
import Loader from "./Loader";

function MyBookings() {
  const { data: Bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => await AxiosClient().get("/booking/getall"),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="h-screen w-full bg-white">
      {Bookings?.data.results.map((eachBooking: any) => (
        <li>{eachBooking.id}</li>
      ))}
    </div>
  );
}

export default MyBookings;
