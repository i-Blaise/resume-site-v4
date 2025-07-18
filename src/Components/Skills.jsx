export default function Skills() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-rowjustify-between mt-10 bg-[#3F2E3E7D] rounded-[22px] p-6 py-12 w-full gap-4 lg:gap-0 md:gap-0 text-left">
            <div 
            data-aos="fade-up"
            data-aos-delay="200"         // ms delay
            data-aos-duration="800"
            className="lg:w-[60%] md:w-[60%] text-left lg:px-12 md:px-12">
                <h1 className="font-Inter-Regular text-[51.3px] lg:text-[86.7px] md:text-[86.7px] text-transparent bg-clip-text capitalize bg-[linear-gradient(59.74deg,#EFE1D1_0%,#A78295_74%)] leading-none">Skills</h1>
            </div>
            <div className="flex flex-col lg:w-[40%] md:w-[40%]text-left gap-6">
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">Design Tools 🎨</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>Figma / Adobe Xd, Ai, Ps, Ae</li>
                        <li>Hotjar & Mixpanel / Maze</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">Design Process 🔍</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>Researching / Benchmarking / Auditing</li>
                        <li>Wireframing / Prototyping / User testing</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">Development 💻</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>Webflow / Framer</li>
                        <li>Squarespace</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}