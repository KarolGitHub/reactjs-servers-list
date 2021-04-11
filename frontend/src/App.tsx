import React from 'react';
import ServerListContainer from './components/ServerListContainer';

const App: React.FC = () => {
  return (
    <main>
      <div className='menu-bar'></div>
      <ServerListContainer />
    </main>
  );
};

export default App;
