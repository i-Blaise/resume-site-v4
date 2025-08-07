export default function Skills() {
    return (
        <div className="flex flex-col lg:flex-row md:flex-rowjustify-between mt-10 bg-[#3F2E3E7D] rounded-[22px] p-6 py-12 w-full gap-4 lg:gap-0 md:gap-0 text-left">
            <div 
            data-aos="fade-up"
            data-aos-delay="200"         // ms delay
            data-aos-duration="800"
            className="lg:w-[60%] md:w-[60%] text-left lg:px-12 md:px-0 md:pb-12">
                <h1 className="font-Inter-Regular text-[51.3px] lg:text-[86.7px] md:text-[86.7px] text-transparent bg-clip-text capitalize bg-[linear-gradient(59.74deg,#EFE1D1_0%,#A78295_74%)] leading-none">Skills</h1>
            </div>
            <div className="flex flex-col lg:w-[40%] md:w-[40%] text-left gap-6">
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">CORE LANGUAGES ⚙️</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>PHP · Python · JavaScript · SQL</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">FRAMEWORKS & LIBRARIES 🏗</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>React · Flask · FastAPI · Django · Laravel </li>
                        <li>Tailwind · REST API design · WebSockets</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">CLOUD & LINUX ADMIN ☁️🐧</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>AWS (EC2, S3, RDS) · GCP (Cloud Run) · DigitalOcean (Droplets, Spaces)</li>
                        <li>Ubuntu Server provisioning & hardening</li>
                        <li>Apache · Nginx + Certbot · Automated backups</li>
                        <li>Security hardening with Fail2Ban, UFW, Let's Encrypt</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">AI / ML 🧠</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>Pandas · PyTorch · LangChain</li>
                        <li>LLM integrations: Model Context Protocol (MCP), OpenAI API, Google Vertex AI  </li>
                        <li>MLflow experiment tracking · Model serving with FastAPI</li>
                    </ul>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-delay="200"         // ms delay
                data-aos-duration="800"
                className="flex flex-col gap-2">
                    <h2 className="font-Inter-Medium text-[17.3px] uppercase text-[#EFE1D1]">SOFT SKILLS 🤝</h2>
                    <ul className="font-Inter-Light text-[13px] text-[#EFE1D1DB]">
                        <li>Technical mentoring · Cross-functional collaboration · Agile facilitation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}