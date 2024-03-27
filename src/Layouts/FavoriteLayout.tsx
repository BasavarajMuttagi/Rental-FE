import CarsCardCarosel from "../components/CarsCardCarosel";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";

function FavoriteLayout() {
  return (
    <div className="bg-[#F6F7F9] h-dvh w-screen overflow-y-scroll overflow-x-hidden no-scrollbar">
      <TopNav />

      <div className="overflow-y-scroll no-scrollbar w-full min-h-[600px]">
        <CarsCardCarosel
          title={"Favorite"}
          url="/favorite/getall"
          queryKey="Favorite"
        />
      </div>

      <Footer />
    </div>
  );
}

export default FavoriteLayout;
