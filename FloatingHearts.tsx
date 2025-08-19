import React, { useEffect, useState } from 'react';

const Heart: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <svg 
        className="absolute w-8 h-8 text-red-400 animate-fall"
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);


const FloatingHearts: React.FC = () => {
    const [hearts, setHearts] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        const createHeart = (i: number) => {
            const style: React.CSSProperties = {
                left: `${Math.random() * 100}vw`,
                top: `${(Math.random() * -10) - 10}vh`,
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 7}s`,
                animationIterationCount: 'infinite',
            };
            return <Heart key={i} style={style} />;
        };

        const heartArray = Array.from({ length: 20 }, (_, i) => createHeart(i));
        setHearts(heartArray);
    }, []);

    return <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-30">{hearts}</div>;
};

export default FloatingHearts;