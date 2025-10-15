import { Lock, User, CreditCard, Upload, Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FloatingActionMenu = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const menuItems = [
    {
      icon: Lock,
      labelKey: 'floatingMenu.requestQuote',
      bgColor: 'bg-primary-yellow',
      textColor: 'text-black',
      hoverColor: 'hover:bg-yellow-400',
      action: () => {
        window.location.href = '/contact';
      }
    },
    {
      icon: User,
      labelKey: 'floatingMenu.account',
      bgColor: 'bg-white',
      textColor: 'text-primary-green',
      hoverColor: 'hover:bg-gray-50',
      border: 'border border-primary-green',
      action: () => {
        console.log('Account clicked');
        // Add account functionality here
      }
    },
    {
      icon: CreditCard,
      labelKey: 'floatingMenu.payInvoice',
      bgColor: 'bg-primary-green',
      textColor: 'text-white',
      hoverColor: 'hover:bg-teal-700',
      action: () => {
        console.log('Pay Invoice clicked');
        // Add payment functionality here
      }
    },
    {
      icon: Upload,
      labelKey: 'floatingMenu.upload',
      bgColor: 'bg-white',
      textColor: 'text-gray-600',
      hoverColor: 'hover:bg-gray-50',
      border: 'border border-gray-300',
      action: () => {
        console.log('Upload clicked');
        // Add upload functionality here
      }
    }
  ];

  return (
    <>
      {/* Desktop Version - Always Expanded */}
      <div className="hidden lg:block fixed right-3 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={item.action}
                className={`flex items-center px-3 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${item.bgColor} ${item.textColor} ${item.hoverColor} ${item.border || ''}`}
              >
                <Icon className="h-3 w-3 mr-2" />
                <span className="text-xs font-medium whitespace-nowrap">{t(item.labelKey)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Version - Collapsible */}
      <div className="lg:hidden fixed right-3 top-1/2 transform -translate-y-1/2 z-50">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-2 w-10 h-10 bg-primary-yellow text-black rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        >
          {isExpanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Collapsible Menu Items */}
        <div className={`flex flex-col space-y-2 transition-all duration-300 ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  item.action();
                  setIsExpanded(false); // Close menu after action
                }}
                className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${item.bgColor} ${item.textColor} ${item.hoverColor} ${item.border || ''}`}
                title={t(item.labelKey)}
              >
                <Icon className="h-4 w-4" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Chat Bot Icon - Bottom Right (Always Visible) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-12 h-12 lg:w-14 lg:h-14 bg-primary-green text-white rounded-full shadow-lg hover:shadow-xl hover:bg-teal-700 transition-all duration-200 flex items-center justify-center transform hover:scale-105"
          title={t('floatingMenu.chatBot')}
        >
          <Bot className="h-5 w-5 lg:h-6 lg:w-6" />
        </button>
      </div>
    </>
  );
};

export default FloatingActionMenu;
