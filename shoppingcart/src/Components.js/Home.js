import React from "react";
import Carousel from 'react-bootstrap/Carousel'

  function IndividualIntervalsExample() {
    return (
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://sslimages.shoppersstop.com/sys-master/root/hac/hd0/28356842553374/private-brands_Top-Banner-web20220928_sows.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img 
            className="d-block w-100"
            src="https://sslimages.shoppersstop.com/sys-master/root/he3/hf2/28397948076062/Festive-Look-Book-for-Her-Static-Bhai-Dooj-Web--202203101-ods.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sslimages.shoppersstop.com/sys-master/root/h18/hc9/28356856086558/Shoetopia-Web20220928_ous.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
export default IndividualIntervalsExample
  
