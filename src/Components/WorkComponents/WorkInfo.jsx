export default function WorkInfo() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row lg:h-[303px] md:h-[303px] h-[400px] bg-[#3F2E3E7D] rounded-[22px] items-center mt-6 lg:px-16 md:px-16 px-[8px]pb-[16px] pt-[16px] lg:gap-4 md:gap-4">
            <div className="lg:w-[362px] md:w-[362px] w-[310px] flex h-auto">
                <h1
                className="
                    font-Inter-Medium 
                    lg:text-[121px] 
                    md:text-[121px] 
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
            <div className="lg:w-[769px] md:w-[769px] w-[310px] flex flex-col items-start h-auto">
                <p className="font-Inter-Regular lg:text-[17px] md:text-[17px] text-[14px] text-[#A78295] text-left">As the design director of the project, we designed an end-to-end experience for abler®,
                helping panic attack victims with the hard moments and getting customized insights to track
                their coping mechanism progress.
                </p>
                <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-14 font-Inter-SemiBold text-[13px] font-bold">
                    <button
                    className="
                    lg:w-[251px]
                    md:w-[251px]
                    w-[216px]
                    lg:h-[52px]
                    md:h-[52px]
                    h-[44px]

                    /* angled gradient on top, solid base underneath */
                    bg-[linear-gradient(230.4deg,#A78295_9%,rgba(239,225,209,0.008)_40%),linear-gradient(0deg,#EFE1D1,#EFE1D1)]

                    rounded-[4.33px]
                    py-[16px]
                    px-[8px]
                    cursor-pointer
                    transition-transform duration-600 hover:-translate-y-1.5
                    text-[#331D2C]">
                    Visit App
                    </button>

                    <button
                    className="
                    lg:w-[251px]
                    md:w-[251px]
                    w-[216px]
                    lg:h-[52px]
                    md:h-[52px]
                    h-[44px]

                    /* angled gradient on top, solid base underneath */
                    bg-[linear-gradient(0deg,#3F2E3E,#3F2E3E),linear-gradient(228.88deg,#573F55_9%,rgba(63,46,62,0.008)_40%)]

                    rounded-[4.33px]
                    py-[16px]
                    px-[8px]
                    cursor-pointer
                    transition-transform duration-600 hover:-translate-y-1.5
                    text-[#EFE1D1]">
                    Case Study
                    </button>
                </div>
            </div>
        </div>
    )
}