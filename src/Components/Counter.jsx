import React, { useState } from 'react'

const Counter = () => {
  const [weather,setWeather]=useState("")
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const [check,setCheck]=useState(null)

  const API_KEY = "3feb743bc8e210b5a23949609a3ba891"

  const featchweather = async () =>{
    if(weather.trim()==""){
      setError("entre a city name")
      return
    }
    setLoading(true)
    setError(null)
    try {
      const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=${API_KEY}&units=metric`)
      if(!response.ok){
        throw new Error ("city not found")
      }
      const data = await response.json()
      setCheck(data)
      setWeather("")
    } catch (err) {
      setError(err.message)
    } finally{
      setLoading(false)
    }
  }
  return (
    <section>
      <div>
        <h1>Weather App</h1>
      </div>

      <div>
        <input type="text" value={weather} onChange={(e)=>setWeather(e.target.value)} placeholder='City'/>
        <button onClick={featchweather}>Search</button>
      </div>
    
    <div>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {check &&(
        <>
        <h2>{check.name}</h2>
          <p>Temperature: {check.main.temp}°C</p>
          <p>Condition: {check.weather[0].description}</p>
        </>
      )}
    </div>
    </section>
  )
}

export default Counter