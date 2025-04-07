import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRELOADER_DURATION = 10000; // 10 seconds
const TYPING_SPEED = 10; // milliseconds per character
const MESSAGE_PAUSE = 50; // pause between messages
const PERCENTAGE_UPDATE_INTERVAL = 200; // Update percentage every 200ms
const PERCENTAGE_INCREMENT = 2; // Increment by 2% each update

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  const loadingMessages = [
    'Initializing Portfolio...',
    'Loading UI components...',
    'Fetching projects...',
    'Connecting to AI...',
    'Rendering animations...',
    'Welcome to Pratham\'s Portfolio!'
  ];

  // Typing effect for messages
  useEffect(() => {
    if (!isLoading) return;

    let currentText = '';
    const message = loadingMessages[messageIndex];
    let charIndex = 0;

    setIsTyping(true);
    const typingInterval = setInterval(() => {
      if (charIndex < message.length) {
        currentText += message[charIndex];
        setCurrentMessage(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        if (messageIndex < loadingMessages.length - 1) {
          setTimeout(() => {
            setMessageIndex(prev => prev + 1);
          }, MESSAGE_PAUSE);
        }
      }
    }, TYPING_SPEED);

    return () => clearInterval(typingInterval);
  }, [messageIndex, isLoading]);

  // Blinking cursor effect
  useEffect(() => {
    if (!isLoading) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isLoading]);

  // Main timer to hide preloader and update percentage
  useEffect(() => {
    if (!isLoading) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const currentPercentage = Math.min(Math.floor(elapsedTime / (PRELOADER_DURATION / 100)) * PERCENTAGE_INCREMENT, 100);
      setLoadingPercentage(currentPercentage);
      
      if (elapsedTime >= PRELOADER_DURATION) {
        setLoadingPercentage(100);
        clearInterval(interval);
        setIsLoading(false);
      }
    }, PERCENTAGE_UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--terminal-bg)]/90 p-4 sm:p-0 preloader-active"
        >
          <div className="w-full max-w-2xl font-mono text-[var(--terminal-text)] bg-[var(--terminal-bg)] rounded-lg shadow-2xl overflow-hidden border border-[var(--terminal-accent)]/30">
            {/* Terminal Title Bar */}
            <div className="bg-[var(--terminal-bg)] px-4 py-2 flex items-center justify-between border-b border-[var(--terminal-accent)]/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
              </div>
              <div className="text-sm text-[var(--terminal-secondary)]">guest@portfolio — -zsh</div>
              <div className="w-16"></div>
            </div>
            <div className="p-6">
  
              <div className="space-y-2">
                {Array.from({ length: messageIndex + 1 }).map((_, index) => (
                  <div key={index} className="flex">
                    <span className="text-[var(--terminal-prompt)] mr-2">$</span>
                    <span className={index === messageIndex && index === loadingMessages.length - 1 ? 'text-[var(--terminal-accent)]' : ''}>
                      {index === messageIndex ? (
                        <>
                          {currentMessage}
                          {isTyping && (
                            <span
                              className={`inline-block w-2 h-4 ml-1 bg-[var(--terminal-accent)] ${
                                showCursor ? 'opacity-100' : 'opacity-0'
                              }`}
                            />
                          )}
                        </>
                      ) : (
                        loadingMessages[index]
                      )}
                    </span>
                  </div>
                ))}
                <div className="mt-8">
                  <div className="h-2 bg-[var(--terminal-bg)] rounded overflow-hidden border border-[var(--terminal-accent)]/20">
                    <motion.div
                      className="h-full bg-[var(--terminal-accent)]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: PRELOADER_DURATION / 2000, ease: "linear" }}
                    />
                  </div>
                  <div className="mt-2 text-center text-sm text-[var(--terminal-accent)]">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {loadingPercentage}%
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;