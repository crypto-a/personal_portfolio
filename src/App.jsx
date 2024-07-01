import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dark from './pages/Dark';
import { useSelector } from 'react-redux';


function App() {
  const themeMode = useSelector((state) => state.image.themeMode);
  useEffect(() => {

    var head = document.head;
    var link; 

    if (themeMode === "dark") {
        
      link = document.createElement("link");

        link.id = "darkcss";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = `assets/css/darkresponsive.css`;

        head.appendChild(link);
        return () => { head.removeChild(link); }
    } else {
      link = document.getElementById("darkcss");
        
        if (link != null) head.removeChild(link);
    }
}, [themeMode]);
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dark" element={<Dark />} />
        </Routes>
    </div>
  );
}

export default App;
