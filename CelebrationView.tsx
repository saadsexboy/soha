import React from 'react';
import AnimatedBear from './AnimatedBear';
import FloatingHearts from './FloatingHearts';
import Confetti from './Confetti';
import FallingPetals from './FallingPetals';

const CelebrationView: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-4">
      <FloatingHearts />
      <FallingPetals />
      <Confetti />
      <div className="z-10">
        <h1 className="font-pacifico text-5xl md:text-7xl text-red-500 mb-8 text-shadow-love">
          Love You Tooo!
        </h1>
        <AnimatedBear isDancing={true} />
      </div>
    </div>
  );
};

export default CelebrationView;