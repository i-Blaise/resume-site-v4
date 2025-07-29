export default function WorkHeader({ number, name, intro}) {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row h-auto lg:h-auto md:h-auto bg-[#A78295] rounded-[22px] py-6 lg:px-16 md:px-16 px-8">
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex justify-start items-center lg:w-[368px] md:w-[368px]">
                <h1 className="font-Inter-Medium lg:text-[121px] md:text-[102px] text-[41px] text-transparent bg-clip-text bg-[#3F2E3E59]">{String(number).padStart(2, "0")}</h1>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col justify-start lg:w-[550px] px-2 py-4 text-left">
                <h2 className="font-Inter-Medium font-medium text-[35px] text-[#3F2E3E]">{name}</h2>
                <p className="font-Inter-Medium mt-2 text-[17px]">{intro} </p>
            </div>
        </div>
    )
}