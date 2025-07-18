import QuoteIcon from "../assets/images/quote-icon.svg";

export default function Services() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-rowjustify-between mt-10 bg-[#A78295] rounded-[22px] p-6 py-12 w-full gap-14 lg:gap-0 md:gap-0 text-left">
            <div 
            data-aos="fade-up"
            data-aos-delay="200"         // ms delay
            data-aos-duration="800"
            className="lg:w-[60%] md:w-[60%] text-left lg:px-12 md:px-12 flex flex-col justify-between items-start gap-18 lg:gap-0 md:gap-0">
                <h1 className="font-Inter-Regular text-[51.3px] lg:text-[86.7px] md:text-[86.7px] text-transparent bg-clip-text capitalize bg-[linear-gradient(70.86deg,#331D2C_0%,#543B48_74%)] mt-0 leading-none">Services</h1>
                <button type="button" className="
                flex 
                items-center 
                justify-between
                w-[216px] md:w-[230px]
                h-[44px] md:h-[52px]
                bg-[#331D2C]
                rounded-[4.33px]
                px-4 md:px-8
                
                cursor-pointer
                transition-transform duration-200 hover:-translate-y-1">
                    <span className="font-Inter-Medium text-[13px] uppercase text-[#EFE1D1] font-semibold">Get a quote</span>
                    <img
                        src={QuoteIcon}
                        alt="arrow"
                        className="w-4 h-4"
                    />
                </button>
            </div>
            <div className="flex flex-col lg:w-[40%] md:w-[40%]text-left gap-6">
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB]  font-semibold">Product Design</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>From ideation and wireframing to modern interface design and user testing, I
                        design mobile app and websites users truly desire.</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB]  font-semibold">Branding</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>I help teams visualize business identities with modern, memorable and minimal
                        visual identity design.</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB]  font-semibold">Consulting <br />
                    & Management</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>Startups and teams hire me to be embedded on their team for direct support on
                        approach, expansion, revision, and enhancing their products.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}