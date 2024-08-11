import mumImage from './MumImage.jpg';
import './App.css';

import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';




function App() {
  const [theme, setTheme] = useState("Click the button to generate a theme");

const themes = ["Masquerade", "70s", "80s", "90s", "Mamma Mia", "Mamma Mia 2: Here We Go Again", "Beach", "Denim", "Neon", "Prehistoric", "Wild Wild West", "Superhero", "Under the sea", "Abba", "Sparkles", "WWE", "Prom", "Apres ski", "PJ party", "Margaritaville", "Hollywood", "60s", "Tailgate", "Wigs and Hats"];
  return (
    <div className="App">
      <header className="App-header">
        <img style={{ margin: '10px' }} src={mumImage}  className="App-logo" alt="logo" />
        <p>
          {theme}
        </p>
      <Button onClick={() => {
        var item = themes[Math.floor(Math.random()*themes.length)];
        setTheme(item);
        }}
        variant="contained">Generate a Theme
      </Button>
      </header>
    </div>
  );
}

export default App;
