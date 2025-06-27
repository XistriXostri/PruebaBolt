import React from 'react';
import { User, Utensils, Bot, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: User,
      title: t('services.consultation.title'),
      description: t('services.consultation.desc'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Utensils,
      title: t('services.plans.title'),
      description: t('services.plans.desc'),
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.desc'),
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.desc'),
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}