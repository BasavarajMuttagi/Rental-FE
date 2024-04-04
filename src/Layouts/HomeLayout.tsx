import CarsCardCarosel from "../components/CarsCardCarosel";
import Footer from "../components/Footer";
import HeroCardsSideBySide from "../components/HeroCardsSideBySide";
import LocationInput from "../components/LocationInput";
import TopNav from "../components/TopNav";

function HomeLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />
      <div>
        <HeroCardsSideBySide />
      </div>
      <LocationInput />
      <CarsCardCarosel
        title={"Popular Cars"}
        url="/api/v1/popular"
        queryKey="Popular"
      />
      <CarsCardCarosel
        title={"Recommended Cars"}
        url="/api/v1/recommended"
        queryKey="Recommended"
      />
      <Footer />
    </div>
  );
}

export default HomeLayout;
