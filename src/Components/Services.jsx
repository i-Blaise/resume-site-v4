import QuoteIcon from "../assets/images/quote-icon.svg";
import ContactModal from "./ContactModal";
import { useState } from 'react'; 

export default function Services() {

    /* -------- modal state -------- */
    const [open, setOpen] = useState(false);
    const [modalMode, setModal]  = useState('contact');

    const handleOpen = mode => {
    setModal(mode);   // sets which variant the modal should show
    setOpen(true);    // actually opens it
    };

    return (
        <div className="flex flex-col lg:flex-row md:flex-rowjustify-between mt-10 bg-[#A78295] rounded-[22px] p-6 py-12 w-full gap-14 lg:gap-0 md:gap-0 text-left">
            <div 
            data-aos="fade-up"
            data-aos-delay="200"         // ms delay
            data-aos-duration="800"
            className="lg:w-[60%] md:w-[60%] text-left lg:px-12 md:px-0 flex flex-col items-start gap-18 lg:gap-8 md:gap-8 md:pb-8">
                <h1 className="font-Inter-Regular text-[51.3px] lg:text-[86.7px] md:text-[86.7px] text-transparent bg-clip-text capitalize bg-[linear-gradient(70.86deg,#331D2C_0%,#543B48_74%)] mt-0 leading-none">Services</h1>
                <div>
                <button 
                onClick={() => handleOpen('quote')}
                type="button" className="
                flex 
                items-center 
                justify-between
                w-auto md:w-auto
                h-[44px] md:h-[52px]
                bg-[#331D2C]
                rounded-[4.33px]
                px-4 md:px-8
                gap-2
                
                cursor-pointer
                transition-transform duration-200 hover:-translate-y-1">
                    <span className="font-Inter-Medium text-[13px] uppercase text-[#EFE1D1] font-semibold">Get a project quote</span>
                    <img
                        src={QuoteIcon}
                        alt="arrow"
                        className="w-4 h-4"
                    />
                </button>
                <p className="font-Inter-Medium text-[12px] capitalise italic text-[#331D2CEB] font-semibold pt-4">Need something outside this list? Let’s chat—I’m happy to craft a custom solution.</p>
                </div>
            </div>
            <div className="flex flex-col lg:w-[40%] md:w-[40%]text-left gap-6">
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB] font-semibold">Full-Stack Product Engineering</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>End-to-end web and mobile builds—responsive UIs, resilient APIs, real-time features, plus CI/CD that ships on demand.</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB] font-semibold">AI / ML Integration</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>Fine-tune or deploy LLM features with Model Context Protocol, OpenAI, or Vertex AI. From data pipelines to inference endpoints, I turn raw data into intelligent products.</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB] font-semibold">Cloud & Dev Ops</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>Architecture, provisioning, and cost-optimization on AWS, GCP, or DigitalOcean. Docker, Kubernetes, Terraform. Ubuntu hardening with Apache, Nginx, Certbot, Fail2Ban.</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#331D2CEB] font-semibold">Technical Consulting <br /> & Mentorship</h2>
                    <ul className="font-Inter-Regular font-normal text-[13px] text-[#331D2C]">
                        <li>Embedded support for roadmap planning, code reviews, and team up-skilling. I help startups move faster without accruing tech debt.</li>
                    </ul>
                </div>
            </div>
            {/* -------- Modal -------- */}
            <ContactModal isOpen={open} onClose={() => setOpen(false)} mode={modalMode} />
        </div>
    )
}