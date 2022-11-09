import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Page2 from "./components/Page2/Page2";
function App() {
  const [type, settype] = useState("");
  return (
    <>
      <div className="w-screen">
        <div className="relative">
          <Navbar className="z-20"/>
          <Hero settype={settype}/>
        </div>
        <div className="mt-40">
          <Page2 type={type}/>
        </div>
      </div>
    </>
  );
}

export default App;
