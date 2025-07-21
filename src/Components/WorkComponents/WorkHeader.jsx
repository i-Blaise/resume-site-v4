export default function WorkHeader() {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row h-[281px] lg:h-[240px] md:h-[240px] bg-[#A78295] rounded-[22px] py-10 lg:px-16 md:px-16 px-8">
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex justify-start items-center lg:w-[368px] md:w-[368px] h-[145px]">
                <h1 className="font-Inter-Medium lg:text-[121px] md:text-[121px] text-[41px] text-transparent bg-clip-text bg-[#3F2E3E59]">01</h1>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col justify-start lg:w-[550px] h-[145px] px-2 py-4 text-left">
                <h2 className="font-Inter-Medium font-medium text-[35px] text-[#3F2E3E]">abler</h2>
                <p className="font-Inter-Medium mt-2 text-[17px]">A comprehensive mobile app designed to help panic attack
                victims in coping.</p>
            </div>
        </div>
    )
}