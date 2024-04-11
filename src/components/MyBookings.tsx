import { useQuery } from "@tanstack/react-query";
import AxiosClient from "../Axios/AxiosClient";
import Loader from "./Loader";
import BookedCardCarousel from "./BookedCardCarousel";

function MyBookings() {
  const { data: Bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    refetchOnMount: "always",
    staleTime: 0,
    queryFn: async () => {
      await delayPromise();
      return await AxiosClient().get("/booking/getall");
    },
  });

  if (isLoading) return <Loader />;

  if (Bookings?.data.results.length == 0) {
    return (
      <div className="space-y-6 py-7 h-screen flex justify-between items-center">
        <div className="w-full text-center flex items-center justify-center ">
          No Cars Available
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen w-full bg-white overflow-y-scroll">
      <BookedCardCarousel data={Bookings?.data.results} />
    </div>
  );
}

export default MyBookings;

const delayPromise = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};
