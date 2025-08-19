import React, { useState, useRef } from 'react';
import AnimatedBear from './AnimatedBear';

interface ProposalViewProps {
  onAccept: () => void;
}

const getPhrase = (count: number) => {
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Pleaseee?",
    "Don't do this to me :(",
    "I'm gonna cry...",
    "You're breaking my heart ;(",
  ];
  return phrases[Math.min(count, phrases.length - 1)];
};

const PulsingHeart: React.FC = () => (
    <svg 
        className="w-8 h-8 md:w-10 md:h-10 text-red-400 animate-heart-pulse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);


const ProposalView: React.FC<ProposalViewProps> = ({ onAccept }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(16);
  const [isNoFleeing, setIsNoFleeing] = useState(false);
  const [noPosition, setNoPosition] = useState<React.CSSProperties>({});
  
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(prev => prev + 8);
    
    if (!isNoFleeing) {
        setIsNoFleeing(true);
    }

    if (containerRef.current && noButtonRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const noButtonRect = noButtonRef.current.getBoundingClientRect();

        const newTop = Math.random() * (containerRect.height - noButtonRect.height);
        const newLeft = Math.random() * (containerRect.width - noButtonRect.width);

        setNoPosition({ top: `${newTop}px`, left: `${newLeft}px` });
    }
  };

  const noButtonClassName = [
    "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg",
    "transition-all duration-300 ease-in-out",
    isNoFleeing ? 'absolute' : 'relative'
  ].join(' ');

  return (
    <div ref={containerRef} className="relative w-full h-full flex flex-col justify-center items-center p-4 text-center">
      <AnimatedBear />
      
      <div className="flex justify-center items-center mt-6 mb-2 gap-2 md:gap-4">
        <PulsingHeart />
        <h1 className="text-3xl md:text-5xl text-pink-500 drop-shadow-md font-bold text-center">
            Soha, Do You Love me?
        </h1>
        <PulsingHeart />
      </div>

      <p className="text-lg md:text-xl text-pink-400 mb-6">You are my everything ❤️</p>

      <div className="mt-4 flex justify-center items-center gap-4">
         <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300 transform-gpu z-10"
            style={{ fontSize: `${yesButtonSize}px`, padding: `${yesButtonSize/2}px ${yesButtonSize}px`}}
            onClick={onAccept}
        >
            Yes
        </button>
        <button
            ref={noButtonRef}
            className={noButtonClassName}
            style={isNoFleeing ? noPosition : {}}
            onMouseEnter={handleNoClick}
            onClick={handleNoClick}
        >
            {getPhrase(noCount)}
        </button>
      </div>
    </div>
  );
};

export default ProposalView;