import { Lock, User, CreditCard, Upload, Bot } from 'lucide-react';

const FloatingActionMenu = () => {
  const menuItems = [
    {
      icon: Lock,
      label: 'Request Quote',
      bgColor: 'bg-primary-yellow',
      textColor: 'text-black',
      hoverColor: 'hover:bg-yellow-400',
      action: () => {
        window.location.href = '/contact';
      }
    },
    {
      icon: User,
      label: 'Account',
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
      label: 'Pay Invoice',
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
      label: 'Upload',
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
      {/* Fixed Utility Bar on Right Side */}
      <div className="fixed right-3 top-1/2 transform -translate-y-1/2 z-50">
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
                <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Separate Chat Bot Icon - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-14 h-14 bg-primary-green text-white rounded-full shadow-lg hover:shadow-xl hover:bg-teal-700 transition-all duration-200 flex items-center justify-center transform hover:scale-105"
          title="Chat Bot (Coming Soon)"
        >
          <Bot className="h-6 w-6" />
        </button>
      </div>
    </>
  );
};

export default FloatingActionMenu;
