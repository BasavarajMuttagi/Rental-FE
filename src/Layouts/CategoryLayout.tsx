import CarsCardCarosel from "../components/CarsCardCarosel";
import Footer from "../components/Footer";

import SidePanel from "../components/SidePanel";
import TopNav from "../components/TopNav";

function CategoryLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <div className="overflow-y-scroll sm:flex sm:overflow-y-hidden h-full">
        <div>
          <SidePanel />
        </div>
        <div className="overflow-y-scroll no-scrollbar w-full">
          <CarsCardCarosel title={""} url="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryLayout;
