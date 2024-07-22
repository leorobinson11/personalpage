import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 150, delay = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (typing) {
      if (index < text.length) {
        setTimeout(() => {
          setDisplayedText(text.slice(0, index + 1));
          setIndex(index + 1);
        }, speed);
      } else {
        setTimeout(() => setTyping(false), delay);
      }
    } else {
      if (index > 0) {
        setTimeout(() => {
          setDisplayedText(text.slice(0, index - 1));
          setIndex(index - 1);
        }, speed);
      } else {
        setTimeout(() => setTyping(true), delay);
      }
    }
  }, [index, typing, text, speed, delay]);

  return (
    <div>
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;