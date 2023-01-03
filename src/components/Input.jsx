import React from "react"
import "../index.css"

import { useWeather } from "../context/Weather"
const Input = () => {
  const weather = useWeather()

  return (
    <input
      className="input"
      placeholder="Search here"
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  )
}

export default Input
