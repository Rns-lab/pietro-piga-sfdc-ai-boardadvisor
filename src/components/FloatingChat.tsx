import { useEffect, useState } from 'react';

export const FloatingChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (!window.chatInitialized) {
      const script = document.createElement('script');
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.async = true;
      script.setAttribute('chatbotId', 'GfjBc9_aXcpCGiJUlLukm');
      script.setAttribute('domain', 'www.chatbase.co');
      document.body.appendChild(script);
      window.chatInitialized = true;
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isChatOpen ? (
        <div className="relative">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/GfjBc9_aXcpCGiJUlLukm"
            width="400"
            height="500"
            className="rounded-lg shadow-lg"
            frameBorder="0"
          ></iframe>
          <button
            onClick={() => setIsChatOpen(false)}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6"
          >
            ✕
          </button>
        </div>
      ) : (
        <img
          src="https://www.chatbase.co/images/chat-bubble.svg"
          alt="Chat"
          onClick={() => setIsChatOpen(true)}
          className="w-16 h-16 cursor-pointer"
        />
      )}
    </div>
  );
};
