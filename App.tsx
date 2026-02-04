
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Schedule from './components/Schedule';
import Deadlines from './components/Deadlines';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <Schedule />
        <Deadlines />
        <Register />
      </main>
      <Footer />
    </div>
  );
}

export default App;
