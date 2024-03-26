import CarDetail from "../components/CarDetail";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import ReviewLayout from "./ReviewLayout";

function DetailLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />

      <div className="space-y-10 ">
        <CarDetail />
        <ReviewLayout />
      </div>
      <Footer />
    </div>
  );
}

export default DetailLayout;
