import ArrowDown from "../assets/images/icon-arrow-down.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mt-14 mb-14 px-4">
      <h1
        className="
            bg-[linear-gradient(141.63deg,_#A78295_26%,_#EFE1D1_60%)]
            bg-clip-text
            text-transparent
            font-Inter-Medium
            capitalize
            text-5xl
            sm:text-5xl sm:leading-[1.1]
            md:text-7xl md:leading-[1.1]
            lg:text-[121px] lg:leading-[136px]
            text-center
            w-[55%] sm:w-[50%] md:w-[60%] lg:w-[90%]"
        >
        Thinker. Blinker. Boundary breaker.
      </h1>

        <div className="mt-14 w-full max-w-xl md:max-w-[545px] flex flex-col items-center">
            <p className="font-Inter-Regular text-base leading-relaxed text-[#A78295] text-center md:text-[19.5px] md:leading-[26.8px]">   
                My name is <span className="text-[#EFE1D1]">Blaise Sonzie Mennia, a software engineer</span> with almost a decade of experience in product design (aka
                UI/UX). Passionately translating ideas into extraordinary
                clean digital experiences users truly desire.
            </p>
            <a href="/" className="inline-block transition-transform duration-600 hover:-translate-y-1.5">
                <img className="mt-6 h-8 w-8 md:h-10 md:w-10" src={ArrowDown} alt="Arrow Down" />
            </a>
        </div>
      
    </header>
  );
}