import { useEffect, useState } from 'react';

export const FloatingChat = () => {
  const [isVisible, setIsVisible] = useState(true);
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

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-transform duration-300 ${!isVisible ? 'translate-y-[200%]' : ''}`}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/GfjBc9_aXcpCGiJUlLukm"
        width="400"
        height="500"
        className="rounded-lg shadow-lg"
        frameBorder="0"
      ></iframe>
    </div>
  );
};