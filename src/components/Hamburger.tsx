function Hamburger({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button className="w-10 h-10 relative focus:outline-none z-30" onClick={onClick}>
      <span className="sr-only">Toggle Menu</span>
      <div className="w-full h-full flex items-center justify-center rounded-full transition-transform duration-500">
        <div className="relative w-6 h-6">
          <span
            className={`block dark:bg-slate-200 absolute h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-2.5" : "top-1"
            }`}
          ></span>
          <span
            className={`block dark:bg-slate-200 absolute h-0.5 w-full bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "top-2.5"
            }`}
          ></span>
          <span
            className={`block dark:bg-slate-200 absolute h-0.5 w-full bg-black transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 bottom-2.5" : "bottom-1"
            }`}
          ></span>
        </div>
      </div>
    </button>
  );
}

export default Hamburger;
