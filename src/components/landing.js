import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPage() {
  const carouselData = [
    {
      title: "விநாயகர் மங்கள பாடல்!",
      description:
        "ஐந்து கரத்தனை யானை முகத்தனை இந்தின் இளம்பிறை போலும் எயிற்றனை நந்தி மகன் தனை ஞானக் கொழுந்தினைப் புந்தியில் வைத்தடி போற்றுகின் றேனே.",
      image: "/vinayagar.jpg",
    },
    {
      title: "Content title",
      description:
        "Content description",
      image: "/astro-carousel-2.jpg", // Replace with actual image path
    },
    {
      title: "Content title",
      description:
        "Content description",
      image: "/astro-carousel-3.jpg", // Replace with actual image path
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="mt-12 sm:mt-24 md:mt-28 lg:mt-24 py-8 px-3 sm:py-6 sm:px-2 md:py-20 md:px-1 lg:py-16 lg:px-5">
      <div className="container mx-auto py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 rounded-lg shadow-lg">
        {/* Carousel Section */}
        <div className="mb-10">
          <Slider {...sliderSettings}>
            {carouselData.map((slide, index) => (
              <div key={index}>
                <div
                  className="h-[300px] sm:h-[400px] lg:h-[550px] rounded-lg overflow-hidden shadow-md relative"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white text-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Welcome Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-red-800">
          கற்பக விநாயகர் ஜோதிட ஆராய்ச்சி மையம்
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-800">
            எங்கள் மையத்தில் உங்கள் ஜாதக கணிப்பு மற்றும் பிற ராசி தகவல்களை
            அறிய சிறந்த ஆலோசனைகளை பெறுங்கள்.
          </p>
        </div>
      </div>
    </div>
  );
}