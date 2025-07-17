import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import HeroCard from "../Components/HeroCard";
import StatsCard from "../Components/StatsCard";
import VideoCard from "../Components/VideoCard";
import Work from "../Components/Work";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroCard />
      <StatsCard />
      <hr className="border-t border-gray-100 my-8 w-full opacity-5" />
      {/* Add other components as needed */}
      <VideoCard />
      <Work />
      <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5" />
      <Work />
      <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5 py-8" />
      <Work />
      <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5 py-8" />
    </>
  );
}