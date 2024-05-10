import Image from "next/image";
import React, { useState } from "react";
import plus from "@/assets/plus.png";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-2 w-full md:w-10/12">
      <h2>
        <button
          className="flex items-center gap-5 w-full text-left py-2 border-b"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <Image className="w-4" src={plus} alt="plus" loading="lazy" />
          <span className="font-medium">{title}</span>
        </button>
      </h2>
      <div
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!expanded}
      >
        <div className="overflow-hidden">
          <p className="pb-3">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
