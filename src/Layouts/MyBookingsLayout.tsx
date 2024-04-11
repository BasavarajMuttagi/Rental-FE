import Footer from "../components/Footer";
import MyBookings from "../components/MyBookings";
import TopNav from "../components/TopNav";

function MyBookingsLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh  w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <MyBookings />
      <Footer />
    </div>
  );
}

export default MyBookingsLayout;
