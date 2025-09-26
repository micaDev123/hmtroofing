import { useState } from 'react';
import { MessageSquare, User, CreditCard, Upload, X } from 'lucide-react';

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: MessageSquare,
      label: 'Request Quote',
      color: 'bg-primary-yellow text-gray-dark',
      action: () => {
        // Navigate to contact form or open quote modal
        console.log('Request Quote clicked');
      }
    },
    {
      icon: User,
      label: 'Account',
      color: 'bg-white text-gray-dark border border-gray-300',
      action: () => {
        console.log('Account clicked');
      }
    },
    {
      icon: CreditCard,
      label: 'Pay Invoice',
      color: 'bg-white text-gray-dark border border-gray-300',
      action: () => {
        console.log('Pay Invoice clicked');
      }
    },
    {
      icon: Upload,
      label: 'Upload',
      color: 'bg-white text-gray-dark border border-gray-300',
      action: () => {
        console.log('Upload clicked');
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Menu Items */}
      {isOpen && (
        <div className="mb-4 space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-end animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="bg-gray-dark text-white px-3 py-2 rounded-lg text-sm mr-3 shadow-lg">
                  {item.label}
                </span>
                <button
                  onClick={item.action}
                  className={`w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-dark text-white rotate-45' 
            : 'bg-primary-yellow text-gray-dark hover:bg-yellow-400'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingActionMenu;
