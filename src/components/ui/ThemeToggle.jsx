import { Sun, Moon } from 'lucide-react';
import { useThemeContext } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-lg text-muted-grey hover:text-charcoal dark:hover:text-ivory hover:bg-soft-sage/50 dark:hover:bg-muted-grey/10 transition-all duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-lime-accent" />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
