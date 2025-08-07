import bgImg from '../assets/images/bg-image.jpg';

export default function HeroCard() {
    return (
            <div data-aos="fade-up" id='hero'
            className="relative h-[363px] lg:h-[560px] md:h-[560px] bg-cover bg-center bg-no-repeat bg-[#450F2B82] bg-blend-overlay rounded-[22px] opacity-0 translate-y-6 transition-all"
            style={{ backgroundImage: `url(${bgImg})`, alt: 'Developer standing outdoors, wearing sunglasses, with lush greenery behind' }}
            >
            {/* Bottom-aligned text container */}
            <div
            className="absolute bottom-0 left-0 w-full px-6 sm:px-10 md:px-16 pb-8 flex flex-col md:flex-row gap-12 md:gap-6 text-white justify-between text-left">
                
                {/* Left Heading */}
                <div
                data-aos="zoom-in"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="pt-4 md:pt-7 md:w-1/2">
                <h1 className="font-Inter-Regular text-[#DBB8CA] text-[30px] sm:text-[36px] md:text-[41px] leading-tight md:leading-[49px]">
                    {/* Bringing brand <br /> aspirations to life. */}
                    Shipping real-world software <br /> for real-world sectors
                </h1>
                </div>

                {/* Right Paragraph */}
                <div 
                data-aos="zoom-in"
                data-aos-delay="300"         // ms delay
                data-aos-duration="800"
                className="pt-2 md:pt-4 md:w-1/2 md:px-9 lg:px-11">
                <p className="font-Inter-Medium text-[#EFE1D1] text-[16px] sm:text-[17px] leading-relaxed">
                    Six years, five industries, one mission: build software that feels effortless to the user and bullet-proof in production. From government portals and fintech rails to SaaS tooling and telecom platforms, I translate business nuance into stable APIs, intuitive UIs, and—more recently—AI-driven features that learn and improve on the fly.
                </p>
                </div>
                
            </div>
            </div>

    )
}