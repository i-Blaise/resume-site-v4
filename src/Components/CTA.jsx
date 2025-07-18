import RightArrow from "../assets/images/right-arrow.svg";

export default function CTA() {
    return (
        <div className="flex flex-col items-center justify-center p-6 py-12 w-full text-center lg:gap-10 md:gap-10 gap-6">
            <p 
            data-aos="fade-up"
            data-aos-delay="100"         // ms delay
            data-aos-duration="800"
            className="font-Inter-Regular md:text-[19px] lg:text-[19px] text-[#A78295]">Let's grab a coffee and</p>
            <h1 
            data-aos="fade-up"
            data-aos-delay="200"         // ms delay
            data-aos-duration="800"
            className="font-Inter-Medium lg:text-[121px] md:text-[121px] text-[58.7px] font-medium text-transparent bg-clip-text bg-[linear-gradient(158.21deg,#A78295_26%,#EFE1D1_60%)]">Connect for collab</h1>
            <button
            data-aos="fade-up"
            data-aos-delay="300"         // ms delay
            data-aos-duration="800"
            className="
                flex flex-row items-center justify-between

                /* width & height */
                w-[216px] md:w-[251px]
                h-[44px] md:h-[52px]

                /* background gradient */
                bg-[linear-gradient(230.4deg,#A78295_9%,rgba(239,225,209,0.008)_40%),linear-gradient(0deg,#EFE1D1,#EFE1D1)]

                rounded-[4.33px]
                px-4 md:px-8

                cursor-pointer
                transition-transform duration-200 hover:-translate-y-1
                text-[#331D2C]
                font-Inter-SemiBold text-[13px] font-semibold
            "
            >
            <span className="uppercase">Contact me</span>
            <img
                src={RightArrow}
                alt="arrow"
                className="w-10 h-10"
            />
            </button>
        </div>
    )
}