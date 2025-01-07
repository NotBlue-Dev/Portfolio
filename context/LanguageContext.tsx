import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface LanguageContextType {
  language: "fr" | "en-US";
  setLanguage: (language: "fr" | "en-US") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const [language, setLanguage] = useState<"fr" | "en-US">(router.locale as "fr" | "en-US");
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within an LanguageProvider');
  }
  return context;
};