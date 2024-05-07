import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left py-2"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span>{title}</span>
          <svg className="shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${expanded ? '!rotate-180' : ''}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${expanded ? '!rotate-180' : ''}`} />
          </svg>
        </button>
      </h2>
      <div
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
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
