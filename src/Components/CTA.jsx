// CTA.jsx
import { useState } from "react";
import RightArrow   from "../assets/images/right-arrow.svg";
import ContactModal from "./ContactModal";

export default function CTA() {
  /* -------- modal state -------- */
  const [open, setOpen] = useState(false);
  const [modalMode, setModal]  = useState('contact');

  const handleOpen = mode => {
    setModal(mode);   // sets which variant the modal should show
    setOpen(true);    // actually opens it
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 py-12 w-full text-center lg:gap-10 md:gap-10 gap-6">
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
        className="font-Inter-Regular md:text-[19px] lg:text-[19px] text-[#A78295]"
      >
        Ready to ship the next big idea?
      </p>

      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="font-Inter-Medium lg:text-[121px] md:text-[121px] text-[58.7px] font-medium text-transparent bg-clip-text bg-[linear-gradient(158.21deg,#A78295_26%,#EFE1D1_60%)]"
      >
        Let's build together
      </h1>

      {/* -------- CTA button -------- */}
      <button
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        onClick={() => handleOpen('contact')}
        className="
          flex items-center justify-between
          h-[44px] md:h-[52px]
          bg-[linear-gradient(230.4deg,#A78295_9%,rgba(239,225,209,0.008)_40%),linear-gradient(0deg,#EFE1D1,#EFE1D1)]
          rounded-[4.33px]
          px-4 md:px-8
          transition-transform duration-200 hover:-translate-y-1
          text-[#331D2C] cursor-pointer">
        <span className="font-Inter-SemiBold text-[13px] font-semibold uppercase">
          Start the conversation
        </span>
        <img src={RightArrow} alt="" className="w-10 h-10" />
      </button>

      {/* -------- Modal -------- */}
      <ContactModal isOpen={open} onClose={() => setOpen(false)} mode={modalMode} />
    </div>
  );
}
