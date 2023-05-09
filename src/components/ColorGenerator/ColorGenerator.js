import "./ColorGenerator.css";

import { useEffect, useState } from "react";

const ColorGenerator = () => {
  const generateRandomNumber = (min, max) => {
    return Math.ceil(Math.random() * max - min);
  };

  const generateRandomLetter = () => {
    const letters = "abcdef";
    const number = generateRandomNumber(1, 6);
    return letters[number];
  };

  const randomNumber = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      const check = generateRandomNumber(1, 10);
      let randomVal;
      if (check >= 5) {
        randomVal = generateRandomNumber(1, 10);
      } else {
        randomVal = generateRandomLetter();
      }

      arr = [randomVal, ...arr];
    }
    return "#" + arr.toString().replace(/,/g, "");
  };

  const [color, setColor] = useState(() => {
    return randomNumber();
  });

  const [fakeColor1, setFakeColor1] = useState(() => {
    return randomNumber();
  });

  const [fakeColor2, setFakeColor2] = useState(() => {
    return randomNumber();
  });

  let groupItems = [color,fakeColor1,fakeColor2]

  let shuffledNumbers = groupItems.sort(() => {
    return Math.random() - 0.5;
  });
  const checkHex = (e) => {
    let val = e.target.dataset.id
    if(val !== color) {
        console.log('nope')
        return
    } else {
        console.log('winner')
    }
  }
  return (
    <div>
      <div className="color-generator" style={{ backgroundColor: color }}></div>
      <div className="button-container">
        {shuffledNumbers.map((item, index) => (
            <button className="color-button" key={index} data-id={item} onClick={checkHex}>{item}</button>
        ))}
      </div>
      <button className="color-button complete">Re-roll</button>
    </div>
  );
};

export default ColorGenerator;
