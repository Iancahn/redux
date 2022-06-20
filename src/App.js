import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';


function App() {
  // const [count, setCount] = useState(0);

  // function prevCount() {
  //   setCount(prev => prev - 1)
  // }

  // function nextCount() {
  //   setCount(next => next + 1)
  // }

  const counter = useSelector((state) => state.counter);
  const signedIn = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <Nav />
      {signedIn && (
        <h1>You are signed in now</h1>
      )}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase the count</button>
    </div >
  )
}

export default App;

// // test
// import React, { useEffect, useState } from 'react';
// import s from './App.css';
// import axios from 'axios';

// function App() {
//   const [weather, setWeather] = useState(null);
//   const [input, setInput] = useState("");
//   useEffect(() => {
//     const location = axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=Polokwane&aqi=yes`)
//       .then(data => {
//         setWeather(data.data)
//       })
//       .catch(err => console.log(err));
//   }, []);
//   //Event
//   const weatherInput = (e) => {
//     setInput(e.target.value);
//   };
//   const searchWeather = () => {
//     axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`)
//       .then(data => {
//         setWeather(data.data);
//       })
//   }
//   return (
//     <div className="App">
//       {weather && (
//         <div>
//           <div className="search">
//             <input onChange={weatherInput} type="text" />
//             <button onClick={searchWeather} >Search</button>
//             <div>
//               <div className="weather-info">
//                 <h1>{weather.location.name}</h1>
//                 <h2>{weather.location.region}</h2>
//                 <div className="condition">
//                   <h3>The current weather is {weather.current.temp_c}° Celcius</h3>
//                   <img src={weather.current.condition.icon} alt='The current weather condition icon' />
//                   <h3>The current weather is {weather.current.temp_f}° Fahrenheit</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };
