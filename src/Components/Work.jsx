import { useState } from "react";
import WorkHeader from "./WorkComponents/WorkHeader";
import WorkImages_2 from "./WorkComponents/WorkImages_2";
import WorkInfo from "./WorkComponents/WorkInfo";
import WorkImages_3 from "./WorkComponents/WorkImages_3";
import WorkImages_1 from "./WorkComponents/WorkImages_1";

import portfolioData from "../Components/Data/portfolio-data";

const imagesComponents = {
  1: WorkImages_1,
  2: WorkImages_2,
  3: WorkImages_3,
};

export default function Work() {
  const itemsPerPage = 3;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + itemsPerPage, portfolioData.length));
  };

  return (
    <>
      {portfolioData.slice(0, visibleItems).map((item) => {
        const { id, name, intro, info, url, images, techStack } = item;
        const Images = imagesComponents[images.length] || WorkImages_1;

        return (
          <div key={id} className="container mx-auto px-4">
            <WorkHeader number={id} name={name} intro={intro} />
            <Images images={images} />
            <WorkInfo description={info} liveUrl={url} techStack={techStack} />
                  <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5" />
          </div>
        );
      })}

      {visibleItems < portfolioData.length && (
        <>
        <div className="text-center mt-18 font-Inter-SemiBold text-[13px] font-bold flex flex-row justify-center items-center">
        <button 
        onClick={loadMore}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="
                w-[120px] md:w-[90px] lg:w-[180px]
                h-[44px] md:h-[52px]
                bg-[linear-gradient(145deg,#B47B8F_10%,rgba(239,225,209,0.02)_35%,#EFD0BC_70%,#A78295_95%),linear-gradient(315deg,#F0E1D2,#D8B5A1)]
                rounded-[22px]
                px-4 md:px-8
                cursor-pointer transition-transform duration-200 hover:-translate-y-1
                text-[#331D2C]">
            <span className="uppercase">Load More</span>
            {/* <img src={RightArrow} alt="arrow" className="w-10 h-10" /> */}
        </button>
        </div>
        <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5" />
        </>
      )}

    </>
  );
}
