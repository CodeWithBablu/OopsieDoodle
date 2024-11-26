import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="fixed z-40 top-5 right-5 flex justify-center items-center p-2 border-gray-700 hover:bg-gray-300/40 dark:hover:bg-zinc-700/90 rounded-xl">
      <Sun onClick={() => setTheme("light")} size={24} fill="white" className={`text-gray-200 absolute transition-transform ${theme === "dark" ? "scale-100" : "scale-0"
        }`} />
      <Moon onClick={() => setTheme("dark")} size={24} fill="white" className={`text-gray-900 transition-transform ${theme === "dark" ? "scale-0" : "scale-100"
        }`} />
    </button>
  );
}