import "./styles.css";
import Form from "./Form";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Form />
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}
