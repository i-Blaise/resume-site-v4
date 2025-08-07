// ContactModal.jsx
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function ContactModal({ isOpen, onClose, mode = 'contact'}) {
  const dialogRef = useRef(null);
  const isQuote = mode === 'quote';

  /* --- ESC closes modal --- */
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  /* --- focus trap --- */
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement;
    dialogRef.current?.focus();
    return () => prev?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* overlay (click = close) */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        tabIndex={-1}
        onClick={e => e.stopPropagation()}          /* prevent backdrop close */
        className="
          relative z-[101]
          w-full max-w-lg
          bg-[#EFE1D1] text-[#331D2C]
          rounded-md shadow-xl
          p-6 md:p-8
          animate-[fadeIn_300ms_ease-out]
        "
      >
        {/* header */}
        <div className="flex items-start justify-between mb-4">
          <h2 id="contact-title" className="text-xl font-Inter-SemiBold">
            {isQuote ? 'Get a quote' : 'Start the conversation'}
          </h2>
          <button
            type="button"                        /* important! */
            aria-label="Close contact form"
            onClick={onClose}
            className="text-2xl leading-none hover:scale-110 transition-transform"
          >
            &times;
          </button>
        </div>

        {/* form */}
        <form
          action="https://formspree.io/f/yourFormID"   /* ← replace */
          method="POST"
          className="space-y-4"
        >
          <label className="block">
            <span className="sr-only">Your name</span>
            <input
              name="name"
              type="text"
              required
              placeholder="Name"
              className="w-full rounded border border-[#A78295]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A78295]"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your phone number</span>
            <input
              name="phone_number"
              type="number"
              required
              placeholder="Phone Number"
              className="w-full rounded border border-[#A78295]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A78295]"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded border border-[#A78295]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A78295]"
            />
          </label>

          {isQuote && (
            <>
                {/* Project type ------------------------------------- */}
                <label className="block relative">
                <select
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full rounded border border-[#A78295]/40 px-3 py-2
                            appearance-none bg-transparent
                            focus:outline-none focus:ring-2 focus:ring-[#A78295]"
                >
                    <option value="" disabled>Project type</option>
                    <option>Web app</option>
                    <option>Marketing site</option>
                    <option>Mobile app</option>
                    <option>Other</option>
                </select>
                {/* custom ▼ icon */}
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    ▾
                </span>
                </label>

                {/* Budget range ------------------------------------- */}
                <label className="block relative">
                <select
                    name="budget"
                    required
                    defaultValue=""
                    className="w-full rounded border border-[#A78295]/40 px-3 py-2
                            appearance-none bg-transparent
                            focus:outline-none focus:ring-2 focus:ring-[#A78295]"
                >
                    <option value="" disabled>Budget range</option>
                    <option>&lt; $5 k</option>
                    <option>$5 k – $15 k</option>
                    <option>$15 k – $30 k</option>
                    <option>&gt; $30 k</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                    ▾
                </span>
                </label>

                {/* Desired launch date ------------------------------ */}
                <label className="block">
                    <span className="block mb-1 text-sm font-Inter-SemiBold">
                        Desired launch date
                    </span>

                    <input
                        type="date"
                        name="deadline"
                        required
                        className="w-full rounded border border-[#A78295]/40 px-3 py-2
                                bg-transparent
                                focus:outline-none focus:ring-2 focus:ring-[#A78295]"
                    />
                </label>
            </>
            )}


          <label className="block">
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Tell me a little about your project…"
              className="w-full rounded border border-[#A78295]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A78295]"
            />
          </label>

          <button
            type="submit"
            className="
              w-full h-[44px] md:h-[52px]
              bg-[#331D2C]
              rounded-[4.33px]
              font-Inter-SemiBold text-[13px] font-semibold uppercase
              text-[#EFE1D1]
              cursor-pointer transition-transform duration-200 hover:-translate-y-1">
            {isQuote ? 'Get estimate' : 'Send'}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}
