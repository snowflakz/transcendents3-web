import React, { useEffect } from 'react';

declare global {
  interface Window {
    chatbase: any;
  }
}

const ChatWidget: React.FC = () => {
  useEffect(() => {
    // The chatbase script is already loaded via the HTML script tag
    // We can optionally configure or interact with the chat widget here
    // For example, we could customize the appearance or behavior
    
    // Optional: Configure the chat widget if needed
    // if (window.chatbase) {
    //   window.chatbase('configure', {
    //     // Add any custom configuration here
    //   });
    // }
  }, []);

  // This component doesn't render anything visible
  // The chat widget is handled entirely by the Chatbase script
  return null;
};

export default ChatWidget;
