// ContactModal.jsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";

export default function ContactModal({ isOpen, onClose, mode = "contact" }) {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const isQuote = mode === "quote";

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  /* --- ESC closes modal --- */
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  /* --- focus trap --- */
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.activeElement;
    dialogRef.current?.focus();
    return () => prev?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const SERVICE_ID =
    import.meta.env?.VITE_EMAILJS_SERVICE_ID ||
    process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID =
    import.meta.env?.VITE_EMAILJS_TEMPLATE_ID ||
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY =
    import.meta.env?.VITE_EMAILJS_PUBLIC_KEY ||
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });

      setStatus({
        loading: false,
        ok: true,
        msg: isQuote
          ? "Request received! We’ll send your estimate shortly."
          : "Message sent! We’ll get back to you soon.",
      });

      // Optional: auto-close after success
      setTimeout(() => {
        onClose?.();
        formRef.current?.reset();
        setStatus({ loading: false, ok: null, msg: "" });
      }, 4200);
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        ok: false,
        msg: "Couldn't send right now. Please try again or email us directly.",
      });
    }
  };

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
        onClick={(e) => e.stopPropagation()} /* prevent backdrop close */
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
            {isQuote ? "Get a quote" : "Start the conversation"}
          </h2>
          <button
            type="button" /* important! */
            aria-label="Close contact form"
            onClick={onClose}
            className="text-2xl leading-none hover:scale-110 transition-transform"
          >
            &times;
          </button>
        </div>

        {/* form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
          /* IMPORTANT: remove action/method - EmailJS handles sending */
        >
          {/* Honeypot (spam trap) */}
          <input type="text" name="hp_field" className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Identify which modal sent it */}
          <input type="hidden" name="form_type" value={isQuote ? "Quote" : "Contact"} />

          <label className="block">
            <span className="sr-only">Your name</span>
            <input
              name="user_name"
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
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full rounded border border-[#A78295]/40 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A78295]"
            />
          </label>

          <label className="block">
            <span className="sr-only">Your email</span>
            <input
              name="user_email"
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
                  <option value="" disabled>
                    Project type
                  </option>
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
                  <option value="" disabled>
                    Budget range
                  </option>
                  <option>&lt; GHS 5k</option>
                  <option>GHS 5k - GHS 15k</option>
                  <option>GHS 15k - GHS 30k</option>
                  <option>&gt; GHS 30k</option>
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
            disabled={status.loading}
            className="
              w-full h-[44px] md:h-[52px]
              bg-[#331D2C]
              rounded-[4.33px]
              font-Inter-SemiBold text-[13px] font-semibold uppercase
              text-[#EFE1D1]
              cursor-pointer transition-transform duration-200 hover:-translate-y-1
              disabled:opacity-60
            "
          >
            {status.loading ? "Sending..." : isQuote ? "Get estimate" : "Send"}
          </button>

          {status.ok === true && (
            <p className="text-green-700 text-sm pt-1 font-semibold">{status.msg}</p>
          )}
          {status.ok === false && (
            <p className="text-red-700 text-sm pt-1 font-semibold">{status.msg}</p>
          )}
        </form>
      </div>
    </div>,
    document.body
  );
}
