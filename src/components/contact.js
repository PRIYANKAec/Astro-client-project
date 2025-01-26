"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const phoneNumber = "+919840716807";
      const message = `📩 வணக்கம்! நான் உங்கள் இணையதளத்தை பார்வையிட்டேன் மற்றும் எனது விவரங்களை பகிர்கிறேன்:\n\n📛 பெயர்: ${data.name}\n📅 பிறந்த தேதி: ${data.dob}\n📍 பிறந்த இடம்: ${data.birthplace}\n⏰ பிறந்த நேரம்: ${data.birthtime}\n📞 தொடர்பு எண்: ${data.phone}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div className="my-4 py-8 px-3 sm:py-6 sm:px-2 md:py-4 md:px-1 lg:py-2 lg:px-1">
      <div className="container mx-auto py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-red-800">
          தொடர்பு கொள்ள
        </h1>
        <div className="p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-4">
            📝 தொடர்பு படிவம்
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label
                htmlFor="name"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                பெயர்
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                placeholder="உங்கள் பெயர்"
              />
            </div>

            <div>
              <Label
                htmlFor="dob"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                பிறந்த தேதி:
              </Label>
              <Input
                type="date"
                id="dob"
                name="dob"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
              />
            </div>

            <div>
              <Label
                htmlFor="birthplace"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                பிறந்த இடம்:
              </Label>
              <Input
                type="text"
                id="birthplace"
                name="birthplace"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                placeholder="உங்கள் பிறந்த இடத்தை உள்ளிடவும்"
              />
            </div>

            <div>
              <Label
                htmlFor="birthtime"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                பிறந்த நேரம்:
              </Label>
              <Input
                type="time"
                id="birthtime"
                name="birthtime"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
              />
            </div>

            <div>
              <Label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                தொடர்பு எண்:
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                placeholder="உங்கள் தொடர்பு எண்"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white font-bold py-2 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition duration-300"
            >
              சமர்ப்பிக்கவும்
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="mt-6">
          <div className="p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-4">
              📞 எங்களை தொடர்பு கொள்ள
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              மையத்தின் விவரங்களை கீழே காணலாம்:
            </p>
            <ul className="mt-4 space-y-3 text-lg text-gray-800">
              <li>
                📍 <span className="font-bold">முகவரி:</span> எண். 68, ரோஜா
                காம்ப்ளக்ஸ், சன்னதி வீதி, (சிவன் கோவில் அருகில்) ஜெயங்கொண்டம்
                (அஞ்சல்) அரியலூர் மாவட்டம் - 621 802. தமிழ்நாடு. இந்தியா
              </li>
              <li>
                📞 <span className="font-bold">தொலைபேசி:</span> +91 98407-16807
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
