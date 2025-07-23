import WorkImg1 from "../../assets/images/bg-image.jpg";
import WorkImg2 from "../../assets/images/bg-image.jpg";
import ImageEg from "../../assets/images/image-g.png";

export default function WorkImages({ images = []}) {
    if (images.length < 3) return null;

    return (
        <>
            <div 
                data-aos="fade-in"
                data-aos-delay="100"         // ms delay
                data-aos-duration="800"
                className="relative h-[550px] w-auto lg:w-auto md:h-[554px] bg-cover bg-center bg-no-repeat rounded-[13px] mt-6"
            style={{ backgroundImage: `url(${images[0]})` }}>
            </div>
            <div 
                data-aos="fade-in"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col lg:flex-row md:flex-row gap-6 justify-between items-center mt-6">
                <div className="relative h-[518px] w-[320px] lg:w-[520px] md:w-[520px] md:h-[520px] bg-cover bg-center bg-no-repeat rounded-[13px]"
                style={{ backgroundImage: `url(${images[1]})` }}>
                </div>
                <div 
                data-aos="fade-in"
                data-aos-delay="300"         // ms delay
                data-aos-duration="800"
                className="relative h-[518px] w-[320px] lg:w-[828px] md:h-[520px] bg-cover bg-center bg-no-repeat rounded-[13px]"
                style={{ backgroundImage: `url(${images[2]})` }}>
                </div>
            </div>
        </>
    )
}