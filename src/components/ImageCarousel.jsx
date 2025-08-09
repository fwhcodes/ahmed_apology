import { useState, useEffect } from 'react'
import './ImageCarousel.css'

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  // Placeholder images - you can replace these with your actual images
  const images = [
    {
      src: '/ahmed_apology/1.jpeg',
      alt: 'Gotham at Night',
      caption: '4th september.'
    },
    {
      src: '/ahmed_apology/2.jpeg',
      alt: 'Catwoman Silhouette',
      caption: 'Shirt you gave me heheh'
    },
    {
      src: '/ahmed_apology/3.jpeg',
      alt: 'Court of Owls',
      caption: 'I will show this to our kids.'
    },
    {
      src: '/ahmed_apology/4.jpeg',
      alt: 'Batman and Catwoman',
      caption: 'Modeltown park adventure.'
    },
    {
      src: '/ahmed_apology/5.jpeg',
      alt: 'Gotham Rooftops',
      caption: 'Qawali night.'
    },
    {
      src: '/ahmed_apology/6.jpeg',
      alt: 'Bat Signal',
      caption: 'NCA date heheheh.'
    },
    {
      src: '/ahmed_apology/7.jpeg',
      alt: 'Catwoman Apology',
      caption: 'From Catwoman: I am sorry for neglecting my little baby. I will pay more attention.'
    }
  ]

  useEffect(() => {
    let interval
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlay, images.length])

  const goToImage = (index) => {
    setCurrentImage(index)
  }

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Our Precious Memories</h2>
       
      </div>
      
      <div 
        className="carousel-wrapper"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        <button className="nav-button prev" onClick={goToPrevious}>
          ❮
        </button>
        
        <div className="carousel-main">
          <div className="image-container">
            <img 
              src={images[currentImage].src} 
              alt={images[currentImage].alt}
              className="carousel-image"
              style={{
                boxShadow: '0 0 40px #d4af37, 0 0 80px #181820',
                filter: 'drop-shadow(0 0 24px #d4af37) drop-shadow(0 0 40px #181820)'
              }}
            />
            <div className="image-overlay">
              <img src="/ahmed_apology/batman svg.webp" alt="Batman Logo" style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '60px',
                height: 'auto',
                opacity: 0.7,
                filter: 'drop-shadow(0 0 24px #d4af37) drop-shadow(0 0 40px #181820)'
              }} />
            </div>
          </div>
          
          <div className="image-caption">
            <p>{images[currentImage].caption}</p>
          </div>
        </div>
        
        <button className="nav-button next" onClick={goToNext}>
          ❯
        </button>
      </div>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
      
      <div className="carousel-controls">
        <button 
          className={`auto-play-btn ${isAutoPlay ? 'playing' : 'paused'}`}
          onClick={() => setIsAutoPlay(!isAutoPlay)}
        >
          {isAutoPlay ? '⏸️ Pause' : '▶️ Play'}
        </button>
      </div>
      

    </div>
  )
}

export default ImageCarousel
