const filters = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI / ML" },
  { key: "swe", label: "Software Engineering" },
];

export default function WorkFilter({ activeFilter, onFilterChange }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      className="flex flex-wrap justify-center gap-3 mb-10"
    >
      {filters.map(({ key, label }) => {
        const isActive = activeFilter === key;
        return (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`
              px-5 py-2 rounded-full text-[13px] font-Inter-SemiBold font-bold uppercase tracking-wider
              transition-all duration-300 cursor-pointer
              ${
                isActive
                  ? "bg-[linear-gradient(145deg,#B47B8F_10%,rgba(239,225,209,0.02)_35%,#EFD0BC_70%,#A78295_95%),linear-gradient(315deg,#F0E1D2,#D8B5A1)] text-[#331D2C] scale-105"
                  : "bg-[#ffffff0a] text-[#A78295] border border-[#A7829533] hover:bg-[#ffffff14] hover:text-[#EFE1D1]"
              }
            `}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
