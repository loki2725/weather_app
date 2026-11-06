import { useState } from "react";
import { useEffect } from "react";

function Apires(city) {
  const apiKey = "84fb87e7609f408d906130105261503";
  let [data, setdata] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`,
    )
      .then((res) => res.json())
      .then((data) => setdata(data));
    console.log(data);
  }, [city]);
  return data;
}

export default Apires;
