import { useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import TextForm from './TextForm.js';
import About from './About.js';
import Alert from './Alert.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // state for mode 
  const [mode, setMode] = useState("light")

  // state for alert 
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showalert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showalert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      <BrowserRouter>
        <Nav title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3"></div>
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showalert={showalert} />
          } />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
