import { ChevronLeft, Plus, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <ChevronLeft size={24} className="text-black dark:text-white" />
      </button>

      <h1 className="text-lg font-semibold text-black dark:text-white">Feed</h1>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isDark ? (
            <Sun size={24} className="text-yellow-400" />
          ) : (
            <Moon size={24} className="text-gray-700" />
          )}
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
          <Plus size={24} className="text-black dark:text-white" />
        </button>
      </div>
    </nav>
  );
}
