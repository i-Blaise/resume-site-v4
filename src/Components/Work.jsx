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
    return (
        <>
            {portfolioData.map((items, index) => {
                const { id, name, intro, info, url, images } = items;
                const Images = imagesComponents[items.images.length] || WorkImages_1;
                const number = id; // Assuming id is the number you want to display
                return (
                    <>
                        <div key={index} className="container mx-auto px-4">
                            <WorkHeader number={number} name={name} intro={intro} />
                            {/* <WorkImages_1 images={items.images} /> */}
                            <Images images={images} />
                            <WorkInfo description={info} liveUrl={url} />
                        </div>
                    
                        <hr className="border-t border-gray-100 lg:my-22 md:my-22 my-11 w-full opacity-5" />
                    </>
                );
            })}
        </>
    );
}