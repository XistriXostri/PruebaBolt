import React from 'react';
import { Heart, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        'Personal Consultation',
        'Meal Planning',
        'AI Nutrition Support',
        'Progress Tracking'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Nutrition Blog',
        'Healthy Recipes',
        'Research Articles',
        'FAQ'
      ]
    },
    {
      title: 'Support',
      links: [
        'Contact Us',
        'Help Center',
        'Community Forum',
        'AI Chat Support'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-bold text-white">NutriBot</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Combining expert nutrition guidance with AI technology to help you achieve your health goals. 
              Your journey to better health starts here.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 NutriBot. {t('footer.rights')}</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                {t('footer.terms')}
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500 text-sm flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for your health</span>
          </div>
        </div>
      </div>
    </footer>
  );
}