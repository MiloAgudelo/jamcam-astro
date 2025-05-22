import es from './es';
import en from './en';
import pt from './pt';
import fr from './fr';

// Un tipo para asegurar que todas las traducciones tengan la misma estructura
type Translations = typeof es;

export const languages: Record<string, Translations> = {
  es: es,
  en: en,
  pt: pt,
  fr: fr,
};

export function getTranslations(locale: string): Translations {
  // Retorna las traducciones para el locale especificado o las del idioma por defecto (es)
  return languages[locale] || languages.es;
}
