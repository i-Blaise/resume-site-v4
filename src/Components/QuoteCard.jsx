export default function QuoteCard() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-rowjustify-between mt-10 bg-[#3F2E3E7D] rounded-[22px] p-6 py-12 w-full gap-4 lg:gap-0 md:gap-0 text-left">
            <div 
            data-aos="fade-up"
            data-aos-delay="200"         // ms delay
            data-aos-duration="800"
            className="lg:w-[60%] md:w-[60%] text-left lg:px-12 md:px-12">
                <h1 className="font-Inter-Regular text-[51.3px] lg:text-[121.3px] md:text-[121.3px] text-transparent bg-clip-text capitalize bg-[linear-gradient(21.05deg,#EFE1D1_0%,#A78295_74%)] leading-none">"</h1>
            </div>
            <div className="flex flex-col lg:w-[40%] md:w-[40%]text-left gap-6">
                <p 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="font-Inter-Regular lg:text-[19.5px] md:text-[19.5px] uppercase font-medium text-[14px] text-[#F0CCCC6B]">
                    Working with Blaise on a high-impact federal project was a masterclass in collaboration. His blend of <span className="text-[#EFE1D1]">engineering rigour and design intuition elevated every sprint, and his relentless eye for detail</span> gave our clients the confidence to push the vision further.
                </p>
                <p 
                data-aos="fade-up"
                data-aos-delay="300"         // ms delay
                data-aos-duration="800"
                className="font-Inter-Regular text-[#EFE1D159]">Richie Nainaney / OrikamiLab</p>
            </div>
        </div>
    )
}