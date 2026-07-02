import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, TTranslations, translations } from '../i18n/translations';

type TLanguageContext = {
  language: Language;
  t: TTranslations;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<TLanguageContext>({
  language: 'en',
  t: translations.en,
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === 'en' ? 'de' : 'en'));

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
