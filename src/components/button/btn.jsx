import React from "react";

export const Btn = ({ name, Icon, className }) => {
  return (
    <div>
      <button
        className={`relative py-1 px-4  border border-neutral-700  text-sm text-gray-400 flex items-center justify-center gap-2  hover:text-neutral-300 hover:border-cyan-400 ${className} `}
      >
        <div className="absolute -bottom-px inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent text-center"></div>
        {Icon}
        <span>{name}</span>
      </button>
    </div>
  );
};
