import React from 'react'

const Star = () => {
    const details = [
        { star: "அஸ்வினி", deities: ["சரஸ்வதி தேவி"] },
        { star: "பரணி", deities: ["அக்னீஸ்வரர்", "சுந்தரநாயகி"] },
        { star: "கார்த்திகை", deities: ["ஸ்ரீ காத்ரசுந்தரேஸ்வரர்", "துங்கபாலஸ்தனாம்பிகை"] },
        { star: "ரோகிணி", deities: ["ஸ்ரீ பக்தவத்ஸலப் பெருமாள்", "ஸ்ரீ அபிஷேகவல்லித் தாயார்"] },
        { star: "மிருகசீரிஷம்", deities: ["ஸ்ரீ ஆதிநாராயண பெருமாள்"] },
        { star: "திருவாதிரை", deities: ["சோழீஸ்வரர்", "நிஸ்துலாம்பிகை"] },
        { star: "புனர்பூசம்", deities: ["பிரம்மபுரீஸ்வரர்", "திருநிலைநாயகி"] },
        { star: "பூசம்", deities: ["சாரநாதப் பெருமாள்", "சாரநாயகி"] },
        { star: "ஆயில்யம்", deities: ["சாட்சிநாதர்", "கருப்பண்ண", "சொல்லி"] },
        { star: "மகம்", deities: ["சுவேதாரண்யேஸ்வரர்", "பிரம்மவித்தியாம்பபிகை"] },
        { star: "பூரம்", deities: ["சங்கருணாதேசுவரர்", "சௌந்திரநாயகி"] },
        { star: "உத்திரம்", deities: ["கரவீரேஸ்வரர்", "பிரத்யஷமின்னம்பிகை"] },
        { star: "அஸ்தம்", deities: ["ஸ்ரீ கிரபாஷபாரேஸ்வரர்", "அன்னபூரணி"] },
        { star: "சித்திரை", deities: ["பஞ்சநதீஸ்வரர்", "தட்சணாமூர்த்தி"] },
        { star: "சுவாதி", deities: ["ஸ்ரீ மகாலிங்கேஸ்வரர்", "பிருஹத்சுந்தரஜாம்பிகை"] },
        { star: "விசாகம்", deities: ["கஜேந்திரவரதபப் பெருமாள்", "ரமாமணிவல்லி"] },
        { star: "அனுஷம்", deities: ["ஸ்ரீ நிவாசப்பெருமாள்"] },
        { star: "கேட்டை", deities: ["கிருத்திவாசேஸ்வரர்", "வீரட்டேவரர்"] },
        { star: "மூலம்", deities: ["மயூரநாதர்", "அபயாம்பிகை"] },
        { star: "பூராடம்", deities: ["ஸ்ரீ ஆகாசபுரீஸ்வரர்"] },
        { star: "உத்திராடம்", deities: ["எழுத்தறி நாதேஸ்வரர்", "நித்திய கல்யாணி", "சுகந்தகுந்தளாம்பாள்"] },
        { star: "திருவோணம்", deities: ["மகாலிங்கேஸ்வரர்"] },
        { star: "அவிட்டம்", deities: ["புஷ்பவனேஸ்வரர்", "சௌந்தரநாயகி"] },
        { star: "சதயம்", deities: ["அக்னீஸ்வரர்", "குளிகாம்பாள்", "கருந்தார் குழலி"] },
        { star: "பூரட்டாதி", deities: ["பிரம்மபுரீஸ்வரர்", "வண்டமரும் பூங்குழலி"] },
        { star: "உத்திரட்டாதி", deities: ["வன்புருஷோத்தம பெருமாள்", "புருஷோத்தம நாயகி"] },
        { star: "ரேவதி", deities: ["நீலகண்டேஸ்வரர்", "அமிர்தகரவல்லி"] },
    ];

    return (
        <div className="my-4 py-8 px-3 sm:py-6 sm:px-2 md:py-4 md:px-1 lg:py-2 lg:px-1">
            <div className="container mx-auto py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-red-800">
                    நட்சத்திரம் மற்றும் தெய்வங்கள்
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {details.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-3">
                                {item.star}
                            </h2>
                            <ul className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                                {item.deities.map((deity, i) => (
                                    <li key={i}>🔸 {deity}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Star
