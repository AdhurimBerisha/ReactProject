import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cards from '../components/Cards'


function Slider() {
    return (
      <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://4kwallpapers.com/images/wallpapers/bmw-s1000rr-sports-bikes-5k-3440x1440-6353.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{color: 'white', padding:'15px'}}>Ride like there is no tomorrow!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/a2/de/01/a2de01e3c95ed88a701b8e8becfcdc99.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 style={{color: 'white', padding:'15px'}}>Pick your poison...</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://4kwallpapers.com/images/wallpapers/biker-dark-motorcycle-3440x1440-1480.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 style={{color: 'white', padding:'15px'}}>Speed or comfort, don't worry we got everything!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Cards/>
      </>
    );
  }


  
  

  
  export default Slider;



