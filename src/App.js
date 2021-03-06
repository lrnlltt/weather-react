import "./styles.css";
import "./App.css"

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
            <Weather DefaultCity="Melbourne"/>
      </div>
      <footer>
          <p className="link">
            This was coded by Lauren Elliott, and is 
            <a href="https://github.com/lrnlltt/weather-react" target="_blank">
              {" "}open-sourced on GitHub
            </a>.
          </p>
        </footer>
    </div>
  );
}
