import "./ColorGenerator.css";

import { useEffect, useState } from "react";

const ColorGenerator = (props) => {
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

  const [color, setColor] = useState();

  const [fakeColor1, setFakeColor1] = useState();

  const [fakeColor2, setFakeColor2] = useState();

  const [check, checkColor] = useState();

  const [message, setMessage] = useState(null);

  const [buttonStatus, setbuttonStatus] = useState(false)

  const [groupItems, setGroupItems] = useState([])

  const reRoll = () => {
    props.onScoreChange('reroll')
    checkColor(Math.random())
  }

  const next = () => {
    checkColor(Math.random())
  }

  useEffect(() => {
    setbuttonStatus(false)
    setMessage(null)
    setColor(randomNumber());
    setFakeColor1(randomNumber());
    setFakeColor2(randomNumber());
    setMessage(null)
    
  }, [check])

  useEffect(() => {
    props.onChange(color)
  }, [color])

  useEffect(() => {
    setGroupItems([color,fakeColor1,fakeColor2].sort(() => {
      return Math.random() -0.5;
    }))
  } ,[color,fakeColor1,fakeColor2])


  const checkHex = (e) => {
    if(buttonStatus === true) {
      return
    }
    let val = e.target.dataset.id
    setbuttonStatus(true)
    if(val !== color) {
        setMessage(false)
        props.onScoreChange('wrong')
        return
    } else {
        setMessage(true)
        props.onScoreChange('correct')
    }
  }
  return (
    <div>
      <div className="color-generator" style={{ backgroundColor: color }}></div>
      {message && <h2>Winner!!</h2>}
      {message === false && <h2>Loser.</h2>}
      {message === false && <p>The correct answer was {color} </p>}
      <div className="button-container">
        {groupItems.map((item, index) => (
            <button className={`color-button`} key={index} data-id={item} onClick={checkHex}>{item}</button>
        ))}
      </div>
      {message !== null && <button className="color-button complete" onClick={next}>Next</button>}
      {message == null && <button className="color-button complete" onClick={reRoll}>Re-roll</button>}
    </div>
  );
};

export default ColorGenerator;
