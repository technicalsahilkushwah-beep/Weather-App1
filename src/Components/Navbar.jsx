import React, { useState } from "react";
import { motion } from "framer-motion";

const WeatherApp = () => {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [check, setCheck] = useState(null);

  const API_KEY = "3feb743bc8e210b5a23949609a3ba891";

  const featchweather = async () => {
    if (weather.trim() === "") {
      setError("Please enter a city name 🌆");
      return;
    }
    setLoading(true);
    setError(null);
    setCheck(null)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found ❌");
      }
      const data = await response.json();
      setCheck(data);
      setWeather("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 overflow-hidden">
      {/* 🌥️ Animated Moving Clouds */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className=" w-52 opacity-40"
        animate={{ x: ["-250px", "120vw"] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear", delay: 10 }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute bottom-10 left-[-180px] w-36 opacity-60"
        animate={{ x: ["-180px", "120vw"] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear", delay: 5 }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "120vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-20 left-[-200px] w-40 opacity-50"
        animate={{ x: ["-200px", "200vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/414/414825.png"
        alt="cloud"
        className="absolute top-50 left-[-200px] w-40 opacity-50"
        animate={{ x: ["200px", "150vw"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* ☁️ Weather Card */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 shadow-2xl rounded-3xl p-10 w-[90%] max-w-md border border-white/20 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-6 drop-shadow-lg">⛅ Weather Forecast</h1>

        <div className="flex items-center justify-center gap-3">
          <input type="text" value={weather} onChange={(e) => setWeather(e.target.value)}placeholder="Enter city name..." className="w-2/3 px-3 py-2 rounded-xl outline-none bg-white/20 text-white placeholder-gray-200 backdrop-blur-md focus:ring-2 focus:ring-yellow-400 transition-all duration-300"/>
          <button onClick={featchweather} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition-all duration-300" >
            Search
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {loading && (
            <p className="text-white font-semibold animate-pulse">Loading...</p>
          )}
          {error && (
            <p className="bg-red-500/40 text-white rounded-lg px-4 py-2 font-medium shadow-md">{error} </p>
          )}
          {check && (
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2"> {check.name}</h2>
              <p className="text-lg text-white font-medium">
                🌡️ Temperature:{" "}
                <span className="font-bold text-yellow-200">
                  {check.main.temp}°C
                </span>
              </p>
              <p className="text-lg text-white font-medium">
                ☁️ Condition:{" "}
                <span className="font-bold text-yellow-200 capitalize">{check.weather[0].description}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WeatherApp;
