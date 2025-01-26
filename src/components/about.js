export default function About() {
  return (
    <div className="my-4 py-8 px-3 sm:py-6 sm:px-2 md:py-4 md:px-1 lg:py-2 lg:px-1">
      <div className="container mx-auto py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-red-800 underline">
          எங்களை பற்றி
        </h1>

        {/* Grid Layout for Sections */}
        <div className="grid grid-cols-1 gap-6">
          {/* Section 1 */}
          <div className="p-4 sm:p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-3">
              💍 திருமண இணைவு தேடுதல்
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
              எங்கள் மையத்தில் நீங்கள் மற்றும் உங்கள் குடும்பத்திற்குத் தேவையான
              திருமண பொருத்தங்களை மிகச்சரியாகக் காண உதவுகிறோம்.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-4 sm:p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-3">
              🏠 வாஸ்து பரிந்துரைகள்
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
              உங்கள் வீடு மற்றும் வேலைத்தளங்களில் வாஸ்து அமைப்புகளை சரிசெய்யும்
              பரிந்துரைகளை வழங்கி, நன்மைகள் மற்றும் அமைதியை பெற உதவுகிறோம்.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-4 sm:p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-3">
              🔢 எண் கணிதம் (Numerology)
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
              உங்கள் பிறந்த தேதியை அடிப்படையாகக் கொண்டு எண்கள் மூலம் உங்கள்
              வாழ்க்கையின் முக்கிய அம்சங்களைப் புரிந்துகொள்ளவும்.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-4 sm:p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-3">
              🌟 ராசி செயல்பாடுகள்
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
              12 இராசிகளின் தனித்துவம் மற்றும் அவற்றின் தினசரி, வார, மாத செயல்பாடுகள்
              பற்றிய விபரங்களை இங்கே அறியலாம்.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
