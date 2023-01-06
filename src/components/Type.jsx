import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css"

function Type() {
  return (
    <div className="type">

        <Typewriter
              options={{
                strings: [
                  "Hey , I am  Monu Yadav !",
                  "A Full Stack Web Developer",
                  "With Intuitive Problem",
                  "Solving Skills ."

                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
    </div>
   
  );
}

export default Type;