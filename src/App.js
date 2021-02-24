import React from 'react';
import './App.css';
import UserProvider from './providers/UserProvider';
import Authentication from './components/Authentication/Authentication';
function App() {
  return (
    <UserProvider>
      <Authentication />
    </UserProvider>
  );
}

export default App;
