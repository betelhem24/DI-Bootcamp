/**
 * Week 7 Day 5 Daily Challenge - React Carousel
 * Demonstrates the use of react-responsive-carousel package
 * to create an interactive image carousel for travel destinations.
 */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * Main App component that renders a carousel of travel destinations.
 * Uses react-responsive-carousel for smooth transitions and navigation.
 */
function App() {
  /**
   * Carousel configuration object.
   * Defines behavior and appearance of the carousel component.
   */
  const carouselConfig = {
    showArrows: true,      // Display navigation arrows
    showThumbs: true,      // Show thumbnail previews
    showStatus: true,      // Display current slide status
    infiniteLoop: true,    // Enable continuous looping
    autoPlay: true,        // Auto-advance slides
    interval: 3000,        // 3 seconds between slides
  };

  /**
   * Array of destination objects for the carousel.
   * Each object contains image source, alt text, and label.
   * Images sourced from the README requirements: Hong Kong, Macao, Japan, Las Vegas.
   */
  const destinations = [
    {
      src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
      alt: 'Skyline of Hong Kong at night',
      label: 'Hong Kong',
    },
    {
      src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
      alt: 'City view of Macao',
      label: 'Macao',
    },
    {
      src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/ctzq6u1kkw6n0htm9pxx.webp',
      alt: 'Cityscape of Tokyo, Japan',
      label: 'Japan',
    },
    {
      src: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp',
      alt: 'Las Vegas city lights at night',
      label: 'Las Vegas',
    },
  ];

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center my-5">Travel Destinations</h1>

        <Carousel {...carouselConfig}>
          {destinations.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={item.alt} />
              <p className="legend">{item.label}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
