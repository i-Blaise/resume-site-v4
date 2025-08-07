export default function HeroCard() {
    return (
        <div className="lg:h-[312px] md:h-[312px] h-[656px] bg-[#A78295] rounded-[22px] flex justify-around items-center mt-[6rem] flex-col md:flex-row lg:flex-row">
            <div 
                data-aos="zoom-in"
                data-aos-delay="100"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px] cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                <h1 className="text-[52px]">6</h1>
                <p className="font-Inter-Medium text-[15px]">years building production software</p>
            </div>
            <div 
                data-aos="zoom-in"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px] cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                <h1 className="text-[52px]">7</h1>
                <p className="font-Inter-Medium text-[15px]">industries served (gov, fintech, SaaS…)</p>
            </div>
            <div 
                data-aos="zoom-in"
                data-aos-delay="300"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px] cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                <h1 className="text-[52px]">2</h1>
                <p className="font-Inter-Medium text-[15px]">AI/ML projects live in production</p>
            </div>
            <div 
                data-aos="zoom-in"
                data-aos-delay="400"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px] cursor-pointer transition-transform duration-200 hover:-translate-y-1">
                <h1 className="text-[52px]">29K+</h1>
                <p className="font-Inter-Medium text-[15px]">monthly users on products I helped ship</p>
            </div>
        </div>
    )
}