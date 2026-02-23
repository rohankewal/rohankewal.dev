export default function TimelineItem({ year, title, duration, details }) {
  return (
    <li className="mb-6 ml-4 relative">
      <div className="absolute w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full left-[-8px] top-[8px]" />
      <div className="border-l border-gray-200 dark:border-gray-700 pl-8 pb-2">
        <div className="flex items-center gap-3 mb-1">
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium text-white bg-gray-900 dark:bg-gray-100 dark:text-gray-900 rounded-full">
            {year}
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        </div>
        {duration && <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{duration}</div>}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{details}</p>
      </div>
    </li>
  );
}
