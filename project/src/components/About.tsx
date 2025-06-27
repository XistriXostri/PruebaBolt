import React from 'react';
import { Heart, Shield, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Heart,
      title: 'Personalized Care',
      color: 'text-red-500'
    },
    {
      icon: Shield,
      title: 'Evidence-Based',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      color: 'text-blue-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Nutritionist consultation" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-8 -right-8 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.content')}
            </p>

            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {feature.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">🏆</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified Nutrition Professional</h4>
                  <p className="text-gray-600">Licensed and board-certified with advanced AI integration training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}