"use client";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export default function Contact() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("AM");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hour}:${minute} ${period}`;

    try {
      const phoneNumber = "+919894297378";
      const message = `📩 வணக்கம்! நான் உங்கள் இணையதளத்தை பார்வையிட்டேன் மற்றும் எனது விவரங்களை பகிர்கிறேன்:\n\n📛 பெயர்: ${data.name}\n📅 பிறந்த தேதி: ${data.dob}\n📍 பிறந்த இடம்: ${data.birthplace}\n⏰ பிறந்த நேரம்: ${formattedTime}\n📞 தொடர்பு எண்: ${data.phone}`;
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(url, "_blank");
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  const hours = Array.from({ length: 12 }, (_, i) => i + 1); // 1 to 12
  const minutes = Array.from({ length: 60 }, (_, i) =>
    i < 10 ? `0${i}` : `${i}`
  ); // 00 to 59
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31
  const months = Array.from({ length: 12 }, (_, i) => i + 1); // 1 to 12
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Last 100 years

  return (
    <div className="my-4 px-3 sm:px-2 sm:py-11 md:px-1 md:py-20 lg:px-5 lg:py-12">
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
              <Label className="block text-lg font-medium text-gray-800 mb-1">
                பிறந்த தேதி:
              </Label>
              <div className="flex space-x-2">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-1/3 h-9 border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 flex border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Day</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-1/3 h-9 border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 flex border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Month</option>
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-1/3 h-9 border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 flex border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label
                htmlFor="birthtime"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                பிறந்த நேரம்:
              </Label>
              <div className="flex space-x-2">
                <select
                  value={hour}
                  onChange={(e) => setHour(e.target.value)}
                  className="w-1/3 h-9 border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 flex border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Hour</option>
                  {hours.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
                <select
                  value={minute}
                  onChange={(e) => setMinute(e.target.value)}
                  className="w-1/3 h-9 border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 flex border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">Minute</option>
                  {minutes.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                  className="w-1/3 h-9 border-gray-300 rounded-lg shadow-sm focus:ring-red-400 focus:border-red-400 flex border border-input bg-transparent px-3 py-1 text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
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
            <ul className="mt-4 space-y-3 text-lg text-gray-800">
            <li className="font-semibold text-red-900">கற்பக​ விநாயகர் ஜோதிட ஆராய்ச்சி மையம் </li>
            <li><span className="font-bold">👤 ஜோதிடர்​:</span> ஆறுமுகம் பெரியசாமி</li>
              <li>
                📍 <span className="font-bold">முகவரி:</span> சன்னதி தெரு
                ஜெயங்கொண்டம் அரியலூர் - மாவட்டம் - 621802
              </li>
              <li>
                📞 <span className="font-bold">தொலைபேசி:</span> +91 9840716807, 9894297378
              </li>
              <li className="font-semibold">⚠️ முன் அனுமதி அவசியம்!!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = "force-dynamic";
