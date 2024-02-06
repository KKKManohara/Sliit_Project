import React from 'react';
import '../Styles/video.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import image1 from '../image/2.jpg';
import image2 from '../image/Hero1.jpg';
import image3 from '../image/a.jpg';
import image4 from '../image/a.jpg';
import image5 from '../image/a.jpg';

function videocards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Define data for each slide
  const slidesData = [
    { image: image1, title: 'Slide 1', subtitle: 'Subtitle 1', description: 'Description for slide 1' },
    { image: image2, title: 'Slide 2', subtitle: 'Subtitle 2', description: 'Description for slide 2' },
    { image: image3, title: 'Slide 3', subtitle: 'Subtitle 3', description: 'Description for slide 3' },
    { image: image4, title: 'Slide 4', subtitle: 'Subtitle 4', description: 'Description for slide 4' },
    { image: image4, title: 'Slide 5', subtitle: 'Subtitle 5', description: 'Description for slide 5' },
    // Add more slides as needed
  ];

  return (
    <div>
      
      <div className="video-cards">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div className="card">
          <div key={index}>
            <div className="card-top">
            <img src={slide.image} alt={slide.title} />
            <div className="card-description">
              <h1>{slide.title}</h1>
              </div>
              <div className="card-bottom">
              <h3>{slide.subtitle}</h3>
              <p className="name">{slide.description}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
}
export default videocards;
