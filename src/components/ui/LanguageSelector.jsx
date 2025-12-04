import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../lib/utils';

export function LanguageSelector({ className }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={cn("flex items-center gap-1 bg-gray rounded-full p-1", className)}>
      <button
        onClick={() => setLanguage('de')}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
          language === 'de'
            ? "bg-primary text-white"
            : "text-muted-foreground hover:text-primary-foreground"
        )}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          "px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200",
          language === 'en'
            ? "bg-primary text-white"
            : "text-muted-foreground hover:text-primary-foreground"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

