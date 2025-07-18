import WorkImg1 from "../../assets/images/bg-image.jpg";
import WorkImg2 from "../../assets/images/bg-image.jpg";

export default function WorkImages() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row gap-6 justify-between items-center mt-6">
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="relative h-[518px] w-[381px] lg:w-[520px] md:h-[520px] bg-cover bg-center bg-no-repeat bg-[#450F2B82] bg-blend-overlay rounded-[13px]"
            style={{ backgroundImage: `url(${WorkImg1})` }}>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="relative h-[518px] w-[381px] lg:w-[828px] md:h-[520px] bg-cover bg-center bg-no-repeat bg-[#450F2B82] bg-blend-overlay rounded-[13px]"
            style={{ backgroundImage: `url(${WorkImg1})` }}>
            </div>
        </div>
    )
}