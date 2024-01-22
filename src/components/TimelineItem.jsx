import React from 'react';

export default function TimelineItem({ year, title, duration, details }) {
  return (
    <li className="mb-8 ml-4 relative">
      <div className="absolute w-4 h-4 bg-stone-900 rounded-full left-[-10px] top-[6px] border-2 border-white dark:border-gray-800" />
      <div className="border-l border-stone-200 pl-8 pb-4">
        <div className="flex items-center gap-2 mb-2 text-sm md:text-base">
          <span className="inline-block px-3 py-1 font-semibold text-white bg-stone-900 rounded-full">
            {year}
          </span>
          <h3 className="text-xl font-semibold text-stone-800">{title}</h3>
        </div>
        <div className="text-sm text-stone-600">{duration}</div>
        <p className="mt-2 text-base font-normal text-stone-700">{details}</p>
      </div>
    </li>
  );
}
