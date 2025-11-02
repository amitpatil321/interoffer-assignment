import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function CharacterAttributes({ totalPoints }) {
  const [other, setOther] = useState("");
  const [points, setPoints] = useState(totalPoints);
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("==", strength, speed);
    const combined = Number(strength) + Number(speed);
    console.log("==", combined);
    let total = totalPoints - combined;
    setTotal(combined);
    //   if (combined > 0) {
    //     console.log("if");
    //     let total = totalPoints - combined;
    //     setTotal(total);
    //   } else setTotal(0);
  }, [strength, speed]);

  useEffect(() => {
    // if (total < 0) {
    // setStrength(speed - total);
    // } else setPoints(total);
  }, [strength]);

  // useEffect(() => {
  //   if (total < 0) {
  //     setStrength(strength - total);
  //   } else setPoints(total);
  // }, [speed]);

  const handleAttributeChange = (event, attributeName) => {
    if (attributeName === "strength") {
      setStrength(event.target.value);
      setOther("speed");
    } else if (attributeName === "speed") {
      setSpeed(event.target.value);
      setOther("strength");
    }
  };

  return (
    <div>
      Character stats: <span id="points">{points}</span> points
      <div>
        <input
          type="range"
          id="strength"
          min="0"
          max={totalPoints}
          value={strength}
          step="1"
          onChange={(event) => handleAttributeChange(event, "strength")}
        />
        Strength {strength}
      </div>
      <div>
        <input
          type="range"
          id="speed"
          min="0"
          max={totalPoints}
          value={speed}
          step="1"
          onChange={(event) => handleAttributeChange(event, "speed")}
        />
        Speed {speed}
      </div>
    </div>
  );
}

document.body.innerHTML = "<div id='root'></div>";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharacterAttributes totalPoints={15} />);
