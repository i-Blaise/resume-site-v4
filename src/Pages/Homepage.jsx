import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import HeroCard from "../Components/HeroCard";
import StatsCard from "../Components/StatsCard";
import VideoCard from "../Components/VideoCard";
import Work from "../Components/Work";
import Skills from "../Components/Skills";
import Services from "../Components/Services";
import QuoteCard from "../Components/QuoteCard";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

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
      <hr className="border-t border-gray-100 my-26 w-full opacity-5" />
      <Skills />
      <Services />
      <QuoteCard />
      <hr className="border-t border-gray-100 my-8 w-full opacity-5" />
      <CTA />
      <hr className="border-t border-gray-100 my-8 w-full opacity-5" />
      <Footer />
    </>
  );
}