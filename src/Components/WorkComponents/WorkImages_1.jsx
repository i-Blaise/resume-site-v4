import ImageEg from "../../assets/images/image-g.png";

export default function WorkImages() {
    return (
        <>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="relative h-[548px] w-auto lg:w-auto md:h-[554px] bg-cover bg-center bg-no-repeat bg-[#450F2B82] bg-blend-overlay rounded-[13px] mt-6"
            style={{ backgroundImage: `url(${ImageEg})` }}>
            </div>
        </>
    )
}