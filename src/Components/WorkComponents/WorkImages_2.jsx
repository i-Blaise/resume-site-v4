export default function WorkImages({ images = []}) {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row gap-6 justify-between items-center mt-6 w-full">
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="relative h-[518px] w-full lg:w-[50%] md:h-[520px] bg-cover bg-center bg-no-repeat rounded-[13px]"
            style={{ backgroundImage: `url(${images[0]})` }}>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="relative h-[518px] w-full lg:w-[50%] md:h-[520px] bg-cover bg-center bg-no-repeat rounded-[13px]"
            style={{ backgroundImage: `url(${images[1]})` }}>
            </div>
        </div>
    )
}