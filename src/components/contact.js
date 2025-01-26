"use client";

import Navbar from "./navbar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const phoneNumber = "+919865310135"; // Replace with the WhatsApp Business API phone number
      const message = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(url, "_blank");
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" flex-1 mx-auto py-10 px-4">
        {/* Contact Header */}
        <h1 className="text-4xl font-bold mb-8 text-center text-red-800 underline">
          தொடர்பு கொள்ள
        </h1>

        <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              📝 தொடர்பு படிவம்
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit} >
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
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  மின்னஞ்சல்
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                  placeholder="உங்கள் மின்னஞ்சல்"
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

              <div>
                <Label
                    htmlFor="dob"
                    className="block text-lg font-medium text-gray-800 mb-1"
                >
                    பிறந்த தேதி:
                </Label>
                <Input
                    type="date" // Using 'date' type for date selection
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

                <Label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-800 mb-1"
                >
                  உங்கள் செய்தி
                </Label>
                <Textarea
                  id="message"
                  rows="4"
                  name="message"
                  required
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400"
                  placeholder="உங்கள் செய்தியை இங்கே பதிவு செய்யவும்"
                ></Textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
              >
                சமர்ப்பிக்கவும்
              </button>
            </form>
          </div>






        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="p-6 bg-yellow-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              📞 எங்களை தொடர்பு கொள்ள
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              மையத்தின் விவரங்களை கீழே காணலாம்:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="text-lg text-gray-800">
                📍 முகவரி: 123, ஜோதிடம் தெரு, சென்னை, தமிழ்நாடு - 600001
              </li>
              <li className="text-lg text-gray-800">
                📞 தொலைபேசி: +91 98407-16807
              </li>
              <li className="text-lg text-gray-800">
                ✉️ மின்னஞ்சல்: contact@astrologycenter.com
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';