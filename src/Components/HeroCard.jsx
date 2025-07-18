import bgImg from '../assets/images/bg-image.jpg';

export default function HeroCard() {
    return (
            <div id='hero'
            className="relative h-[363px] lg:h-[560px] md:h-[560px] bg-cover bg-center bg-no-repeat bg-[#450F2B82] bg-blend-overlay rounded-[22px]"
            style={{ backgroundImage: `url(${bgImg})` }}
            >
            {/* Bottom-aligned text container */}
            <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 md:px-16 pb-8 flex flex-col md:flex-row gap-12 md:gap-6 text-white justify-between text-left">
                
                {/* Left Heading */}
                <div className="pt-4 md:pt-7 md:w-1/2">
                <h1 className="font-Inter-Regular text-[#DBB8CA] text-[30px] sm:text-[36px] md:text-[41px] leading-tight md:leading-[49px]">
                    Bringing brand <br /> aspirations to life.
                </h1>
                </div>

                {/* Right Paragraph */}
                <div className="pt-2 md:pt-4 md:w-1/2 md:px-9 lg:px-11">
                <p className="font-Inter-Medium text-[#EFE1D1] text-[16px] sm:text-[17px] leading-relaxed">
                    Backboned with years of experience in diverse sectors including Government, E-commerce,
                    Fintech and payment solutions, SaaS products, and telecommunications, I design human-centric
                    experiences that really work for users.
                </p>
                </div>
                
            </div>
            </div>

    )
}