export default function HeroCard() {
    return (
        <div className="lg:h-[312px] md:h-[312px] h-[656px] bg-[#A78295] rounded-[22px] flex justify-around items-center mt-[6rem] flex-col md:flex-row lg:flex-row">
            <div 
                data-aos="zoom-in"
                data-aos-delay="100"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px]">
                <h1 className="text-[52px]">6</h1>
                <p className="font-Inter-Medium text-[15px]">Half a decaude of software engineering</p>
            </div>
            <div 
                data-aos="zoom-in"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px]">
                <h1 className="text-[52px]">7</h1>
                <p className="font-Inter-Medium text-[15px]">Half a decaude of software engineering</p>
            </div>
            <div 
                data-aos="zoom-in"
                data-aos-delay="300"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px]">
                <h1 className="text-[52px]">2</h1>
                <p className="font-Inter-Medium text-[15px]">Half a decaude of software engineering</p>
            </div>
            <div 
                data-aos="zoom-in"
                data-aos-delay="400"         // ms delay
                data-aos-duration="800"
                className="md:w-[150px] lg:w-[150px] w-[300px]">
                <h1 className="text-[52px]">29</h1>
                <p className="font-Inter-Medium text-[15px]">Half a decaude of software engineering</p>
            </div>
        </div>
    )
}