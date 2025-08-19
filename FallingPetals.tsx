import React, { useEffect, useState } from 'react';

const Petal: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div className="absolute" style={style}></div>
);

const FallingPetals: React.FC = () => {
    const [petals, setPetals] = useState<React.ReactNode[]>([]);
    const petalCount = 30;

    useEffect(() => {
        const createPetal = (i: number) => {
            const style: React.CSSProperties = {
                left: `${Math.random() * 100}vw`,
                top: `${(Math.random() * -10) - 10}vh`,
                width: `${Math.random() * 10 + 10}px`,
                height: `${Math.random() * 5 + 5}px`,
                backgroundColor: 'rgba(255, 183, 197, 0.8)', // pink with transparency
                borderRadius: '0 50% 0 50%',
                animationName: 'petal-fall',
                animationDuration: `${Math.random() * 5 + 5}s`,
                animationDelay: `${Math.random() * 7}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite'
            };
            return <Petal key={i} style={style} />;
        };

        const petalArray = Array.from({ length: petalCount }, (_, i) => createPetal(i));
        setPetals(petalArray);
    }, []);

    return <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-20">{petals}</div>;
};

export default FallingPetals;
