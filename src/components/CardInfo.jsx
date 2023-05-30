import React from "react";
import "../styles/CardInfo.css";

const CardInfo = ({ data }) => {
  let image =
    data.temp <= 0
      ? "verycold.png"
      : data.temp >= 1 && data.temp <= 15
      ? "cold.webp"
      : data.temp >= 16 && data.temp <= 25
      ? "mildweather.jpeg"
      : data.temp > 25
      ? "hot.jpeg"
      : "";

  return (
    <div className="data">
      <h2>{data.city}</h2>
      <h3>{data.country}</h3>
      <h4>{data.temp}°</h4>
      <p>Temp. Máx. {data.temp_max}°</p>
      <p>Temp. Mín. {data.temp_min}°</p>
      <img src={`./image/iconos/${image}`} alt="" />
    </div>
  );
};

export default CardInfo;
