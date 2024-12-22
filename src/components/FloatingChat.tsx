import { useEffect, useState } from 'react';

export const FloatingChat = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4">
      {isChatOpen ? (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/GfjBc9_aXcpCGiJUlLukm"
          width="400"
          height="500"
          className="rounded-lg shadow-lg"
          frameBorder="0"
        ></iframe>
      ) : (
        <img
          src="https://www.chatbase.co/images/chat-bubble.svg"
          alt="Chat"
          onClick={() => setIsChatOpen(true)}
          className="w-16 h-16 cursor-pointer hover:opacity-90 transition-opacity"
        />
      )}
    </div>
  );
};