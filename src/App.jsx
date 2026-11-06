import { useState } from "react";
import Apires from "./api";

function App() {
  let [city, setcity] = useState("");
  let [searchcity, setsearchcity] = useState("");

  const weather = Apires(searchcity);

  return (
    <>
      <div className="flex min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-teal-900 justify-center items-center p-4 font-sans selection:bg-teal-400 selection:text-slate-900">
        <div className="flex flex-col w-full max-w-md p-8 items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
          {/* Header */}
          <div className="flex flex-col items-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300 mb-1">
              Live Forecast
            </span>
            <h1 className="text-white text-3xl font-extrabold tracking-tight">
              Weather App
            </h1>
          </div>

          {/* Search Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setsearchcity(city);
            }}
            className="flex flex-col sm:flex-row w-full gap-3"
          >
            <input
              type="text"
              onChange={(e) => {
                setcity(e.target.value);
              }}
              className="flex-1 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-teal-400/80 bg-black/25 px-4 py-3.5 border border-white/10 rounded-2xl transition-all"
              placeholder="What city you like most"
            />

            <button
              type="submit"
              className="bg-linear-to-r from-teal-400 to-indigo-500 hover:from-teal-300 hover:to-indigo-400 hover:cursor-pointer active:scale-95 text-slate-950 font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-500/20 transition-all duration-200 whitespace-nowrap"
            >
              Get weather
            </button>
          </form>

          {/* Weather Results Display */}
          {weather && weather.location && (
            <div className="flex flex-col items-center w-full mt-8 pt-6 border-t border-white/15 text-white">
              <h2 className="font-semibold text-xl tracking-wide text-white/90 text-center">
                {weather.location.name},{" "}
                <span className="text-teal-300 font-normal">
                  {weather.location.country}
                </span>
              </h2>

              <div className="flex flex-col items-center my-5">
                <p className="text-6xl font-black tracking-tighter bg-linear-to-b from-white to-white/70 bg-clip-text text-transparent">
                  {weather.current.temp_c}°C
                </p>
                <p className="mt-2 px-4 py-1 rounded-full bg-white/10 border border-white/10 text-teal-200 text-sm font-medium tracking-wide capitalize">
                  {weather.current.condition.text}
                </p>
              </div>

              <div className="w-full bg-black/20 rounded-2xl p-3.5 mt-2 flex justify-center items-center border border-white/5">
                <p className="text-sm text-white/70 font-medium">
                  Feels like:{" "}
                  <span className="text-white font-bold ml-1">
                    {weather.current.feelslike_c}°C
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
