import logo from "./logo.svg";
import "./App.css";
import Maincomponent from "./Components/Maincomponent";
import { BrowserRouter } from "react-router-dom";
import { MovieContextProvider } from "./Contexts/MovieContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MovieContextProvider>
          <Maincomponent />
        </MovieContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
