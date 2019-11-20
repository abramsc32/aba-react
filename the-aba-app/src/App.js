import React from 'react';
import './App.css';
import { Routes } from './routes'
import Nav from './components/shared/Nav'




function App() {
  return (
    <div className="App">
     <header>
      <Nav/>
     </header>
     <main>
       <Routes/>
     </main>
    </div>
  );
}

export default App;
