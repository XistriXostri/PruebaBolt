import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.chat': 'AI Nutrition Chat',
    
    // Hero Section
    'hero.title': 'Transform Your Health with Expert Nutrition Guidance',
    'hero.subtitle': 'Personalized nutrition plans and AI-powered support to help you achieve your wellness goals',
    'hero.cta': 'Start Your Journey',
    'hero.chat': 'Chat with AI Nutritionist',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive nutrition solutions tailored to your needs',
    'services.consultation.title': 'Personal Consultation',
    'services.consultation.desc': 'One-on-one sessions with certified nutritionist',
    'services.plans.title': 'Custom Meal Plans',
    'services.plans.desc': 'Personalized meal plans based on your goals',
    'services.ai.title': 'AI Nutrition Support',
    'services.ai.desc': '24/7 AI-powered nutrition guidance and support',
    'services.monitoring.title': 'Progress Monitoring',
    'services.monitoring.desc': 'Track your journey with regular check-ins',
    
    // About
    'about.title': 'About Our Practice',
    'about.content': 'We combine traditional nutrition expertise with cutting-edge AI technology to provide personalized, accessible, and effective nutrition guidance. Our mission is to make healthy living achievable for everyone.',
    
    // Chat
    'chat.title': 'AI Nutrition Assistant',
    'chat.placeholder': 'Ask me about nutrition, meal planning, or health goals...',
    'chat.send': 'Send',
    'chat.connecting': 'Connecting to AI nutritionist...',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to start your nutrition journey? Contact us today',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.chat': 'Chat de Nutrición IA',
    
    // Hero Section
    'hero.title': 'Transforma Tu Salud con Orientación Nutricional Experta',
    'hero.subtitle': 'Planes de nutrición personalizados y soporte con IA para ayudarte a alcanzar tus objetivos de bienestar',
    'hero.cta': 'Comienza Tu Jornada',
    'hero.chat': 'Habla con Nutricionista IA',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones nutricionales integrales adaptadas a tus necesidades',
    'services.consultation.title': 'Consulta Personal',
    'services.consultation.desc': 'Sesiones individuales con nutricionista certificado',
    'services.plans.title': 'Planes de Comida Personalizados',
    'services.plans.desc': 'Planes de comida personalizados basados en tus objetivos',
    'services.ai.title': 'Soporte Nutricional con IA',
    'services.ai.desc': 'Orientación y soporte nutricional con IA disponible 24/7',
    'services.monitoring.title': 'Monitoreo de Progreso',
    'services.monitoring.desc': 'Sigue tu progreso con revisiones regulares',
    
    // About
    'about.title': 'Acerca de Nuestra Práctica',
    'about.content': 'Combinamos la experiencia nutricional tradicional con tecnología de IA de vanguardia para brindar orientación nutricional personalizada, accesible y efectiva. Nuestra misión es hacer que la vida saludable sea alcanzable para todos.',
    
    // Chat
    'chat.title': 'Asistente de Nutrición IA',
    'chat.placeholder': 'Pregúntame sobre nutrición, planificación de comidas o objetivos de salud...',
    'chat.send': 'Enviar',
    'chat.connecting': 'Conectando con nutricionista IA...',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para comenzar tu jornada nutricional? Contáctanos hoy',
    'contact.phone': 'Teléfono',
    'contact.email': 'Correo electrónico',
    'contact.address': 'Dirección',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}