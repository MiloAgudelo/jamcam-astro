/// <reference types="astro/client" />

interface Window {
  trackEvent?: (eventName: string, eventData?: Record<string, string | number | boolean | null>) => void;
  startChatbot?: () => void;
}

