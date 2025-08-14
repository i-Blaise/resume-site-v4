import RightArrow from '../../assets/images/right-arrow.svg';

export default function WorkInfo({ description, liveUrl, techStack = []}) {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row h-auto bg-[#3F2E3E7D] rounded-[22px] items-center mt-6 lg:px-16 md:px-16 px-[8px] py-10 lg:py-14 md:py-14 lg:gap-4 md:gap-4">
            <div 
                data-aos="fade-up"
                data-aos-delay="100"         // ms delay
                data-aos-duration="800"
                className="lg:w-[362px] md:w-[362px] w-[310px] flex h-auto px-8 lg:px-0 md:px-0">
                <h1
                className="
                    font-Inter-Medium 
                    lg:text-[121px] 
                    md:text-[102px] 
                    text-[47.7px]
                    text-left
                    lowercase 

                    /* make text transparent & clip bg to text */
                    text-transparent 
                    bg-clip-text 

                    /* apply a top‑to‑bottom gradient */
                    bg-gradient-to-b 
                    from-[rgba(167,130,149,0.43)] 
                    to-[rgba(167,130,149,0.19)]
                    ">
                    info-
                </h1>
            </div>
            <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="lg:w-[769px] md:w-[435px] w-[310px] flex flex-col items-start h-auto px-8">
                {/* <p className="text-sm text-[#EFE1D1] mb-2">
                    <strong>Tech Stack:</strong> {techStack.length > 0 ? techStack.join(" | ") : "N/A"}
                </p> */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {techStack.map((tech, index) => (
                        <span key={index} className="bg-[#ffffff12] text-sm px-3 py-1 rounded-full font-semibold text-[#efe1d185] transition duration-300 hover:bg-[#efe1d185] cursor-pointer">{tech}</span>
                    ))}
                </div>
                <p className="font-Inter-Regular lg:text-[17px] md:text-[17px] text-[14px] text-[#A78295] text-left">{description}</p>
                <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-14 font-Inter-SemiBold text-[13px] font-bold">
                    {liveUrl && (
                        <a target='_blank' href={liveUrl}>
                            <button 
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="800"
                                className="
                                    flex flex-row items-center justify-between
                                    w-[216px] md:w-[180px] lg:w-[251px]
                                    h-[44px] md:h-[52px]
                                    bg-[linear-gradient(230.4deg,#A78295_9%,rgba(239,225,209,0.008)_40%),linear-gradient(0deg,#EFE1D1,#EFE1D1)]
                                    rounded-[4.33px]
                                    px-4 md:px-8
                                    cursor-pointer transition-transform duration-200 hover:-translate-y-1
                                    text-[#331D2C]">
                                <span className="uppercase">Live website</span>
                                <img src={RightArrow} alt="arrow" className="w-10 h-10" />
                            </button>
                        </a>
                    )}
                    {/* <a href={liveUrl}><button 
                    data-aos="fade-up"
                    data-aos-delay="300"    
                    data-aos-duration="800"
                    className="
                        flex flex-row items-center justify-between

                        w-[216px] md:w-[251px]
                        h-[44px] md:h-[52px]

                        bg-[linear-gradient(230.4deg,#A78295_9%,rgba(239,225,209,0.008)_40%),linear-gradient(0deg,#EFE1D1,#EFE1D1)]

                        rounded-[4.33px]
                        px-4 md:px-8

                        cursor-pointer
                        transition-transform duration-200 hover:-translate-y-1
                        text-[#331D2C]
                    "
                    >
                    <span className="uppercase">Live website</span>
                    <img
                        src={RightArrow}
                        alt="arrow"
                        className="w-10 h-10"
                    />
                    </button></a> */}

                    {/* <button 
                    data-aos="fade-up"
                    data-aos-delay="300"         // ms delay
                    data-aos-duration="800"
                    className="
                    lg:w-[251px]
                    md:w-[180px]
                    w-[216px]
                    lg:h-[52px]
                    md:h-[52px]
                    h-[44px]

                    
                    bg-[linear-gradient(0deg,#3F2E3E,#3F2E3E),linear-gradient(228.88deg,#573F55_9%,rgba(63,46,62,0.008)_40%)]

                    rounded-[4.33px]
                    py-[16px]
                    px-[8px]
                    cursor-pointer
                    transition-transform duration-200 hover:-translate-y-1.5
                    text-[#EFE1D1]
                    uppercase">
                    Case Study
                    </button> */}
                </div>
            </div>
        </div>
    )
}