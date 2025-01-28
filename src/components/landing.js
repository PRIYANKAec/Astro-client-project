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
      title: "முருகன் அருள் மழை",
      description:
        "முருகன், குமரன், குகன், என்று மொழிந்து உருகும் செயல் தந்து, உணர்வு என்று அருள்வாய் பொரு புங்கவரும், புவியும் பரவும் குருபுங்கவ, எண் குண பஞ்சரனே..",
      image: "/murugan.jpeg",
    },
    {
      title: "",
      description:
        "நமச்சிவாய வாழ்க! நாதன் தாள் வாழ்க! இமைப்பொழுதும் என் நெஞ்சில் நீங்காதான் தாள் வாழ்க கோகழி ஆண்ட குருமணிதன் தாள் வாழ்க ஆகமம் ஆகிநின்று அண்ணிப்பான் தாள் வாழ்க ஏகன் அநேகன் இறைவன் அடிவாழ்க",
      image: "/god3.jpg",
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
            கற்பக விநாயகர் ஜோதிடம்
          </h1>
          <div className="text-base text-start sm:text-xl md:text-2xl leading-relaxed text-gray-800">
            <div>ஜோதிடம் வாழ்வியல் வழிகாட்டி!!!</div>

            <ul className="list-disc pl-5">
              <li>கர்மாவின் பலன்களை எடுத்துரைக்கும் படிப்பினையும் கொடுப்பனையும் சொல்லிக் கொடுக்கும்..</li>
              <li>விதி, மதி, கதி, இவற்றின் துணை கொண்டு கணிக்கப்படுகிறது...</li>
              <li>ராசி & கோச்சாரம் மட்டும் பலன் கூறுவது பொருத்தமாக வருவதில்லை...</li>
              <li>உங்கள் ஜனன ஜாதகத்தில் உள்ள?</li>
              <li>கிரகங்களின் தன்மை அதன் நட்சத்திர சாரம்..</li>
              <li>ராசி & லக்னம் நின்ற கிரகங்களின் திசை, புத்தி, அந்தரம் கிரகப்பெயர்ச்சி, திதி, யோகம், கர்ணம், இவற்றைக் கொண்டு வாழ்வில் நடக்கக்கூடிய நிகழ்வுகளை துல்லியமாக அறியலாம்....</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}