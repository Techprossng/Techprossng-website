import React from "react";
import "./App.css";
import Testimonial from "./Components/Testimonial/testimonial";
import OurTeam from "./Components/Our-team/ourTeam";

function App() {
  return (
    <>
      <div className="mx-20 my-16">
        <Testimonial />
      </div>
      <div className="mx-20 my-16">
        <OurTeam />
      </div>
    </>
  );
}

export default App;
