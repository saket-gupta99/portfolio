import { useDarkMode } from "../hooks/useDarkMode";

export default function Toggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <label className="relative inline-block w-16 lg:w-17 h-8 cursor-pointer">
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only peer"
        checked={!isDarkMode}
        onChange={toggleDarkMode}
      />
      <div className="w-full h-full bg-gray-300 dark:bg-green-500 rounded-full peer-checked:bg-pink-600 transition-colors"></div>
      <div className="absolute left-1 top-1 w-7 h-6 bg-white rounded-full transition-transform peer-checked:translate-x-6 flex items-center justify-center"></div>
    </label>
  );
}
