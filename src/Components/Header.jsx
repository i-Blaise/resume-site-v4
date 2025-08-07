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
            sm:text-[58px] sm:leading-[66px]
            md:text-[121px] md:leading-[136px]
            lg:text-[121px] lg:leading-[136px]
            text-center
            w-[380px] md:w-[60%] lg:w-[90%]"
        >
        Builder. Bridger. Boundary-Buster.
      </h1>

        <div className="mt-14 w-full max-w-xl md:max-w-[545px] flex flex-col items-center">
            <p className="font-Inter-Regular text-base leading-relaxed text-[#A78295] text-center md:text-[19.5px] md:leading-[26.8px]">
                Hi, I'm <span className="text-[#EFE1D1]">Blaise Sonzie Mennia, a full-stack engineer</span> who delivers responsive interfaces, reliable APIs, and automated delivery pipelines. I now bring the same discipline to <span className="text-[#EFE1D1]">AI and machine learning</span>, curating data, training models, and shipping intelligent features to production.
            </p>
            <a href="#hero" className="inline-block transition-transform duration-600 hover:-translate-y-1.5">
                <img className="mt-6 h-8 w-8 md:h-10 md:w-10" src={ArrowDown} alt="Arrow Down" />
            </a>
        </div>
      
    </header>
  );
}