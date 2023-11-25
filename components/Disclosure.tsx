import { useState } from "react";

export default function Disclosure({ title, children }: { title: string, children: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="rounded-md overflow-hidden">
      <button
        onClick={toggleOpen}
        className="py-2 w-full text-left text-xl transition-colors capitalize"
      >
        {title}
        <span className="float-right transform transition-transform" style={{ transform: `rotate(${isOpen ? '180deg' : '0deg'})` }}>
          {/* Icono de flecha hacia abajo o hacia arriba */}
          &#9660;
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ overflow: 'hidden' }}
      >
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};
