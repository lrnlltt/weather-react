import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
            <Weather DefaultCity="Melbourne"/>
      </div>
      <footer>
          This was coded by Lauren Elliott, and is {" "}<a href="https://github.com/lrnlltt/weather-react" target="_blank">open-sourced on GitHub</a>.
        </footer>
    </div>
  );
}
