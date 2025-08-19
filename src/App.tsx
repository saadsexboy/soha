import React, { useState } from 'react';
import ProposalView from '../ProposalView';
import CelebrationView from '../CelebrationView';

const App: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-pink-50 to-pink-100">
      {accepted ? (
        <CelebrationView />
      ) : (
        <ProposalView onAccept={() => setAccepted(true)} />
      )}
    </div>
  );
};

export default App;


