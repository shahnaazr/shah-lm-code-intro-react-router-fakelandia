import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "../src/components/router/router";

const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
