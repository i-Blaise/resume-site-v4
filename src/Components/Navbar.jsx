import { useState } from 'react'; 
import ContactModal from './ContactModal';
import MemojiFace from '../assets/images/memoji-face.png';
import Resume from '../assets/resume.pdf'

export default function Navbar() {

  /* -------- modal state -------- */
  const [open, setOpen] = useState(false);
  const [modalMode, setModal]  = useState('contact');

  const handleOpen = mode => {
  setModal(mode);   // sets which variant the modal should show
  setOpen(true);    // actually opens it
  };

  return (
    <nav className="flex items-center justify-center">
        <ul className="flex items-center justify-between p-1 px-2 bg-[#3F2E3E] rounded-[10.83px] w-[312px] h-auto">
            <li><img className='w-[52px] h-[52px]' src={MemojiFace} alt="Memoji Face" /></li>
            <a href="#work"><li className="text-[#A78295] uppercase font-Inter-Medium text-[12px] cursor-pointer hover:text-[#927182]">Work</li></a>
            <a href={Resume} target="_blank" rel="noopener noreferrer"><li className="text-[#A78295] uppercase font-Inter-Medium text-[12px] cursor-pointer hover:text-[#927182]">CV</li></a>
            <li>
            <button
              onClick={() => handleOpen('contact')}
              type="button"
              className="flex items-center justify-center w-[78px] h-[35px] bg-[#A78295] rounded-[6.5px] text-[#331D2C] text-[14px] font-Inter-Medium hover:bg-[#927182] transition cursor-pointer">
                Chat
            </button>
            </li>
        </ul>
        {/* -------- Modal -------- */}
        <ContactModal isOpen={open} onClose={() => setOpen(false)} mode={modalMode} />
    </nav>
  );
}