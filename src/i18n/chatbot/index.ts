import es from './es';
import en from './en';
import pt from './pt';
import fr from './fr';

// Tipo para asegurar que todas las traducciones del chatbot tengan la misma estructura
type ChatbotTranslations = typeof es;

export const chatbotLanguages: Record<string, ChatbotTranslations> = {
    es: es,
    en: en,
    pt: pt,
    fr: fr,
};

export function getChatbotTranslations(locale: string): ChatbotTranslations {
    // Retorna las traducciones del chatbot para el locale especificado o las del idioma por defecto (es)
    return chatbotLanguages[locale] || chatbotLanguages.es;
}

