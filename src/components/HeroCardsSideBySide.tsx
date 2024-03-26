import HeroCard from "../components/HeroCard";
import leftHeroBg from "../assets/leftHeroBg.svg";
import rightHeroBg from "../assets/rightHeroBg.svg";
import urus_performante_polizia from "../assets/2024_ferrari_sf90_xx_1_2560x1440.webp";
import urus from "../assets/2021_koenigsegg_gemera_1_2560x1440.webp";

function HeroCardsSideBySide() {
  return (
    <div className="p-6 space-x-4 flex  overflow-x-scroll md:overflow-x-hidden">
      <HeroCard
        bgUrl={leftHeroBg}
        imageUrl={urus}
        text1="The Best Platform for Car Rental"
        text2="Ease of doing a car rental safely and reliably. Of course at a low price."
      />
      <HeroCard
        bgUrl={rightHeroBg}
        imageUrl={urus_performante_polizia}
        text1="Easy way to rent a car at a low price"
        text2="Providing cheap car rental services and safe and comfortable facilities."
      />
    </div>
  );
}

export default HeroCardsSideBySide;
