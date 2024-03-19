import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        <small>
          <a
            href="https://github.com/anafretes/react-week4-weather"
            target="_blank"
            rel="noreferrer">
            Open-sourced code
          </a>
          , built by <a href="mailto:home@derpycomputer.com">Ana Fretes</a> for{" "}
          <a href="https://www.shecodes.io" target="_blank" rel="noreferrer">
            SheCodes
          </a>
        </small>
      </p>
    </div>
  );
}
