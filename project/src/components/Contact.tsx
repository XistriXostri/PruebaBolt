import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '+1 (555) 123-4567',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'hello@nutribot.com',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: '123 Health Street, Wellness City, WC 12345',
      color: 'text-orange-600'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Fri: 9AM-6PM, AI Chat: 24/7',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-50 ${info.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Nutrition Support</h3>
              <p className="text-gray-600 mb-4">
                Need immediate nutrition guidance? Our AI assistant is available 24/7 for urgent questions.
              </p>
              <button 
                onClick={() => document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Start AI Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>General Consultation</option>
                  <option>Weight Management</option>
                  <option>Sports Nutrition</option>
                  <option>Dietary Restrictions</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your nutrition goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}