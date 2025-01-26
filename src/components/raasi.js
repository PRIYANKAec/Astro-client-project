import React from 'react'

const Raasi = () => {
    const raasiData = [
        {
            name: "மேஷம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "சுக்கிரன், சூரியன், சனி திசா புத்தி அந்தரம் நடைபெறும் போது..",
                "தெற்கு மற்றும் வடக்கு திசையில் இருந்து வரன் அமையும்....",
            ],
        },
        {
            name: "ரிஷபம்",
            image: "/astro-logo.png",
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம் ....",
                "புதன், செவ்வாய், குரு திசை மற்றும் புத்தி அந்தரம்",
                "மேற்கு மற்றும் கிழக்கு திசையில் இருந்து வரன் அமையும்....",
            ],
        },
        {
            name: "மிதுனம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "சந்திரன், சுக்கிரன், குரு, செவ்வாய்",
                "திசை மற்றும் புத்தி அந்திரம்..",
                "நடைபெறும் போது...",
                "வடக்கு மற்றும் தெற்கு திசையில் இருந்து வரன் அமையும்...",
            ],
        },
        {
            name: "கடகம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "சூரியன், குரு, சனி, சுக்கிரன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "கிழக்கு மற்றும் வடக்கு திசையில் இருந்து வரன் அமையும் ..."
            ],
        },
        {
            name: "சிம்மம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "புதன், சனி, குரு",
                "இசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ...",
                "கிழக்கு மற்றும் தெற்கு இசையில் இருந்து வரன் அமையும் ..."
            ],
        },
        {
            name: "கன்னி",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "சுக்கிரன், சனி, குரு, சந்திரன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "வடக்கு மற்றும் தெற்கு திசையில் இருந்து வரன் அமையும் ...."
            ],
        },
        {
            name: "துலாம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "செவ்வாய், சனி, சூரியன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "கிழக்கு மற்றும் தெற்கு திசையில் இருந்து வரன் அமையும் ...."
            ],
        },
        {
            name: "விருச்சிகம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "குரு , சுக்கிரன், புதன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "வடக்கு மற்றும் கிழக்கு திசையில் இருந்து வரன் அமையும்..."
            ],
        },
        {
            name: "தனுசு",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "சனி , செவ்வாய், புதன், சுக்கிரன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "தெற்கு மற்றும் கிழக்கு திசையில் இருந்து வரன் அமையும் ...."
            ],
        },
        {
            name: "மகரம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "சனி , சந்திரன், சுக்கிரன், செவ்வாய்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "கிழக்கு மற்றும் வடக்கு திசையில் இருந்து வரன் அமையும் ....."
            ],
        },
        {
            name: "கும்பம்",
            image: "/astro-logo.png", // Replace with actual image path
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம்..",
                "குரு , புதன், சூரியன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "நடைபெறும் போது ..",
                "கிழக்கு மற்றும் தெற்கு திசையில் இருந்து வரன் அமையும் ....."
            ],
        },
        {
            name: "மீனம்",
            image: "/astro-logo.png",
            details: [
                "ராசி & லக்கினம்",
                "திருமணத்துக்கு உகந்த காலம் ....",
                "செவ்வாய் , புதன் , சனி, சந்திரன்",
                "திசை மற்றும் புத்தி அந்தரம் ...",
                "வடக்கு மற்றும் தெற்கு திசையில் இருந்து வரன் அமையும் .....",
            ],
        },
    ];

    return (
        <div className="my-4 py-8 px-3 sm:py-6 sm:px-2 md:py-4 md:px-1 lg:py-2 lg:px-1">
            <div className="container mx-auto py-8 px-4 sm:py-10 sm:px-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-200 rounded-lg shadow-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-red-800">
                    ராசி விவரங்கள்
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {raasiData.map((raasi, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 bg-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={raasi.image}
                                    alt={`${raasi.name} Picture`}
                                    className="w-24 h-24 rounded-full mb-4"
                                />
                                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-700 mb-3">
                                    {raasi.name}
                                </h2>
                            </div>
                            <ul className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-800">
                                {raasi.details.map((detail, i) => (
                                    <li key={i} className="mb-1">
                                        🔸 {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Raasi
