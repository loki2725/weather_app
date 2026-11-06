import { useState } from "react";
import Apires from "./api";

function App() {
  let [city, setcity] = useState("");
  let [searchcity, setsearchcity] = useState("");

  const weather = Apires(searchcity);

  return (
    <>
      <div className="flex min-h-screen bg-linear-to-r/decreasing from-indigo-500 to-teal-400 justify-center items-center">
        <div className="flex flex-col p-8 justify-around items-center bg-slate-200 h-72 rounded-3xl shadow-2xl transition-transform hover:scale-105 duration-300">
          <h1 className="text-black text-2xl mb-5">Weather app</h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setsearchcity(city);
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setcity(e.target.value);
              }}
              className="text-black focus:outline-none bg-slate-200 p-4 m-4 border border-gray-500 rounded-xl"
              placeholder="What city you like most"
            />

            <button
              type="submit"
              className="bg-purple-800 hover:cursor-pointer hover:bg-purple-900 shadow-2xl text-white p-4 rounded-xl"
            >
              Get weather
            </button>
          </form>

          {weather && weather.location && (
            <div className="flex flex-col items-center mt-4">
              <h2 className="font-bold text-lg mb-2">
                {weather.location.name}, {weather.location.country}
              </h2>

              <div className="flex items-baseline gap-4">
                <p className="font-medium">{weather.current.temp_c}°C</p>
                <p className="italic">{weather.current.condition.text}</p>
              </div>

              <p className="mt-2 font-medium">
                Feels like: {weather.current.feelslike_c}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
