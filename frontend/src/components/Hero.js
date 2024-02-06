import React from "react";
import '../Styles/Hero.css'
import '../Styles/services.css'
import heroimage from '../image/Hero1.jpg'
// video_cards
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../image/a.jpg';
import image2 from '../image/a.jpg';
import image3 from '../image/a.jpg';
import image4 from '../image/a.jpg';
import image5 from '../image/a.jpg';
// video_cards

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
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

  const slidesData = [
    { image: image1, title: 'Slide 1', subtitle: 'Subtitle 1', description: 'Description for slide 1' },
    { image: image2, title: 'Slide 2', subtitle: 'Subtitle 2', description: 'Description for slide 2' },
    { image: image3, title: 'Slide 3', subtitle: 'Subtitle 3', description: 'Description for slide 3' },
    { image: image4, title: 'Slide 4', subtitle: 'Subtitle 4', description: 'Description for slide 4' },
    { image: image5, title: 'Slide 5', subtitle: 'Subtitle 5', description: 'Description for slide 5' },
  ];

    return (
    <>
    <div className="hero">
        <img src={heroimage} />
    <div className="regbtn-container">
        <div className="regbutton">
        <button>CREATE POTFOLIO</button>
    </div>
    </div>
    <div className="contain">
        <div className="box box-1" data-text="Renji"></div>
        <div className="box box-2" data-text="Sora"></div>
        <div className="box box-3" data-text="Kaito"></div>
        <div className="box box-4" data-text="Tsuki"></div>
        <div className="box box-5" data-text="Mitsui"></div>
    </div>
    </div>
{/* Numbering */}
    <section className="Numbering_Section">
        <div className="container grid_four_column">
          <div>
            <h2 className="number">2000</h2>
            <p>Registed Customer</p>
          </div>
          <div>
            <h2 className="number">1500</h2>
            <p>Custom portfolio</p>
          </div>
          <div>
            <h2 className="number">250</h2>
            <p>Template Portfolio</p>
          </div>
          <div>
            <h2 className="number">98%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
    </section>

    <section className="services" id="services">
      <br></br>
  <h4 className="heading">services</h4>

  <div className="services-container">
    <div className="services-box">
      <h3>
      Template Portfolio
      </h3>
      <p>Choose from our curated collection of professionally designed portfolio templates. Effortlessly showcase your work and accomplishments with a polished and visually appealing portfolio.

      </p>
      <a href="#" className="btn">Create Folio</a>
    </div>

    <div className="services-box">
      <h3>
      Custom Portfolio
      </h3>
      <p>Tailor your portfolio to match your unique style and personal brand. Our team will work closely with you to create a custom-designed portfolio that reflects your individuality and highlights your skills and achievements.

      </p>
      <a href="#" className="btn">Create Folio</a>
    </div>

    <div className="services-box">
      <h3>
      Educational Videos
      </h3>
      <p>Explore our engaging video content covering success stories, free educational resources, and business knowledge. Immerse yourself in a variety of topics aimed at enhancing your skills, knowledge, and understanding of the business world.
      </p>
      <a href="#" className="btn">Watch Video</a>
    </div>
  </div>
</section>
{/* Numbering */}

{/* video_section */}
    <div className="videocards">
      <div className="header">
        <h2>Our best interviewers</h2>
      </div>
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div className="card" key={index}>
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
          ))}
        </Slider>
        
      </div>
{/* video_section */}

    <div className="videobtn">
        <button>View video</button>
    </div>

{/* Customer review */}
    <div className="full-boxer">

      <div className="comment-box">
        <div className="box-top">
          <div className="profile">
            <div className="profile_image">
            <img src={heroimage} />
            </div>
            <div className="Name">
              <strong>kavinda manohara</strong>
              <span>@kavinda manohara</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>
          "Kudos to Wavepluse for their exceptional service! Quick, reliable, and the results surpassed my expectations. A company that truly stands out."

          </p>
        </div>
      </div>

      <div className="comment-box">
        <div className="box-top">
          <div className="profile">
            <div className="profile_image">
            <img src={heroimage} />
            </div>
            <div className="Name">
              <strong>kavinda manohara</strong>
              <span>@kavinda manohara</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>
          "Wavepluse consistently delivers top-notch quality in their products/services. Their attention to detail and commitment to excellence make them a trusted choice."

          </p>
        </div>
      </div>

     

     
  

      <div className="comment-box">
        <div className="box-top">
          <div className="profile">
            <div className="profile_image">
            <img src={heroimage} />
            </div>
            <div className="Name">
              <strong>kavinda manohara</strong>
              <span>@kavinda manohara</span>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>
          Experience outstanding customer support at Wavepluse. Swift resolutions and a team that genuinely cares. My journey with them has been a pleasure; I'll definitely be a repeat customer!"
          </p>
        </div>
      </div>
      </div>

      <div className="footer">
        
      </div>


    
    </>

    );
  }
  export default Hero;