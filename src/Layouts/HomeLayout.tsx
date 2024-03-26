import CarsCardCarosel from "../components/CarsCardCarosel";
import Footer from "../components/Footer";
import HeroCardsSideBySide from "../components/HeroCardsSideBySide";
import TopNav from "../components/TopNav";

function HomeLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <div>
        <HeroCardsSideBySide />
      </div>
      <CarsCardCarosel title={"Popular Cars"} url="/popular" />
      <CarsCardCarosel title={"Recommended Cars"} url="/recommended" />
      <Footer />
    </div>
  );
}

export default HomeLayout;
