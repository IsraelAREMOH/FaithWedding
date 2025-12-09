import HeroSection from "../Components/HeroSection";
import TradSection from "../Components/TradSection";
import CeremonySection from "../Components/CeremonySection";
import CoupleSection from "../Components/coupleSection";
import WelcomeModal from "../Components/WelcomeModal";

const Home = () => {
  return (
    <div className="flex flex-col gap-0">
      <WelcomeModal />
      <HeroSection />
      <TradSection />
      <CeremonySection />
      <CoupleSection />
    </div>
  );
};

export default Home;
