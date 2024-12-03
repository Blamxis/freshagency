import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  prefix?: string;
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  prefix = '',
  words,
  speed = 150,
  deleteSpeed = 75,
  delayBetweenWords = 3000,
  className = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentWord = words[currentWordIndex];

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenWords);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (displayText === currentWord) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, isWaiting, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {prefix}
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterText;