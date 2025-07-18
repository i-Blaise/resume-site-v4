import { FaInstagram  } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function CTA() {
    return (
        <div id="footer" className="flex items-center justify-between p-10 py-5 w-full text-center bg-[#3F2E3E] text-[#A78295] rounded-[22px]">
            <div className="flex gap-6">
                <a href=""><FaInstagram className="text-[#A7829587] transition-transform duration-200 hover:-translate-y-1" /></a>
                <a href=""><FaLinkedinIn className="text-[#A7829587] transition-transform duration-200 hover:-translate-y-1" /></a>
                <a href=""><FaGithub className="text-[#A7829587] transition-transform duration-200 hover:-translate-y-1" /></a>
                <a href=""><FaXTwitter className="text-[#A7829587] transition-transform duration-200 hover:-translate-y-1" /></a>
            </div>
            <div>
                <a href=""><p className="transition-transform duration-200 hover:-translate-y-1">© Artfrica Studios</p></a>
            </div>
        </div>
    )
}