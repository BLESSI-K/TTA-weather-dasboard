import './styles/App.css';
import WeatherDashboard from "./components/WeatherDashboard";
import Home from './components/Home';


import { useState } from "react";
// import { LoginComponent } from './components/CONDITIONAL/LoginComponent';
// import WelcomeComponent from './components/CONDITIONAL/WelcomeComponent';

function App() {
  const [showWeatherDashboard, setShowWeatherDashboard] = useState(false);
 return (
    <div className="App">
            <h1>Weather Dashboard</h1>
            {showWeatherDashboard ? (
                <WeatherDashboard onBack={() => setShowWeatherDashboard(false)} />
            ) : (
                <Home onShowWeather={() => setShowWeatherDashboard(true)} />
            )}
            
    </div>
  );
}

export default App;
