import { useState } from 'react'
import ImageCarousel from './components/ImageCarousel'
import ApologyMessage from './components/ApologyMessage'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="rain"></div>
      <div className="owl-symbol"></div>
      <div className="bat-signal">
        <img src="/batman svg.webp" alt="Batman Logo" className="batman-logo" style={{
          position:'absolute',
          top:'50%',
          left:'50%',
          transform:'translate(-50%,-50%)',
          opacity:0.9,
          width: '80px',
          height: 'auto'
        }} />
      </div>
      <div className="comic-panel-bg"></div>
      {/* Comic panel layout */}
      <div className="comic-panels">
        <div className="comic-panel">
          <img src="/1.jpeg" alt="4th September" className="panel-image" />
          <div className="panel-title">4th September</div>
          <div className="panel-caption">A special day that marked the beginning of our story together.</div>
        </div>
        <div className="comic-panel">
          <img src="/2.jpeg" alt="The Shirt" className="panel-image" />
          <div className="panel-title">Your Gift</div>
          <div className="panel-caption">The shirt you gave me - a symbol of your love and care.</div>
        </div>
        <div className="comic-panel">
          <img src="/3.jpeg" alt="Future Memories" className="panel-image" />
          <div className="panel-title">Future Legacy</div>
          <div className="panel-caption">Precious moments I will share with our children someday.</div>
        </div>
        <div className="comic-panel">
          <img src="/4.jpeg" alt="Modeltown Park" className="panel-image" />
          <div className="panel-title">Modeltown Park</div>
          <div className="panel-caption">Our adventure together in the park - laughter and love.</div>
        </div>
      </div>
      <div className="content-container">
        <header className="catwoman-header">
          <div className="cat-ears"></div>
          
          {/* Batman SVG Logo */}
          <div className="batman-header-logo">
            <img src="/batman svg.webp" alt="Batman Logo" style={{
              width: '200px',
              height: 'auto',
              filter: 'drop-shadow(0 0 20px #d4af37)',
              transition: 'all 0.3s ease'
            }} />
          </div>
          
          <h1 className="gotham-title">
            🐾 From the Shadows of Gotham 🐾
          </h1>
          <p className="subtitle">
            A message from Selina Kyle (Fatima Waseem) to the Dark Knight (Ahmed Ayyan)
          </p>
          
          {/* Background Music */}
          <div className="music-player">
            <audio controls loop className="background-music">
              <source src="/Nirvana - Something In The Way (Audio).mp3" type="audio/mpeg"/>
              Your browser does not support the audio element.
            </audio>
            <p className="music-label">🎵 "Something in the Way" - Nirvana 🎵</p>
          </div>
        </header>
        <main className="main-content">
          <ApologyMessage />
          <ImageCarousel />
        </main>
        <footer className="gotham-footer">
          <p>✨ The Court of Owls watches, but love conquers all ✨</p>
          <div className="owl-eyes">🦉👁️‍🗨️👁️‍🗨️🦉</div>
          <p className="court-quote">"Beware the Court of Owls, that watches all the time..."</p>
        </footer>
      </div>
    </div>
  );
}

export default App
