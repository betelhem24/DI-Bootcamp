import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center my-5">Travel Destinations</h1>
        <Carousel
          showArrows={true}
          showThumbs={true}
          showStatus={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img 
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/cities/jrfyzvgzvhs1iylduuhj.jpg" 
              alt="Hong Kong" 
            />
            <p className="legend">Hong Kong</p>
          </div>
          
          <div>
            <img 
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/cities/c1cklkyp6ms02tougufx.webp" 
              alt="Macao" 
            />
            <p className="legend">Macao</p>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1200&h=630&fit=crop" 
              alt="Japan" 
            />
            <p className="legend">Japan</p>
          </div>
          
          <div>
            <img 
              src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/cities/liw377az16sxmp9a6ylg.webp" 
              alt="Las Vegas" 
            />
            <p className="legend">Las Vegas</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;