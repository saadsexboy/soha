import React, { useEffect, useState } from 'react';

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute" style={style}></div>
);

const Confetti: React.FC = () => {
    const [pieces, setPieces] = useState<React.ReactNode[]>([]);
    const confettiCount = 150;

    useEffect(() => {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        
        const createPiece = (i: number) => {
            const style: React.CSSProperties = {
                left: `${Math.random() * 100}vw`,
                top: `${(Math.random() * -10) - 10}vh`, // Start randomly above the screen
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                transform: `rotate(${Math.random() * 360}deg)`,
                animationName: 'confetti-fall',
                animationDuration: `${Math.random() * 3 + 4}s`,
                animationDelay: `${Math.random() * 5}s`,
                animationTimingFunction: 'ease-out',
                animationFillMode: 'forwards',
            };
            return <ConfettiPiece key={i} style={style} />;
        };

        const pieceArray = Array.from({ length: confettiCount }, (_, i) => createPiece(i));
        setPieces(pieceArray);
    }, []);

    return <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-50">{pieces}</div>;
};

export default Confetti;