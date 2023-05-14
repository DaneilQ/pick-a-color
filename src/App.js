import {useState} from 'react';
import './App.css';


import Card from './components/UI/Card/Card';
import ColorGenerator from './components/ColorGenerator/ColorGenerator';

function App() {
  const [bgColor, changingBg] = useState('#000000');

  const [score,setScore] = useState(0);

  const styleBg = (e) => {
    changingBg(e)
  }

  const checkScore = (e) => {

    if(e === 'wrong') {
      setScore(prevScore => {
        return prevScore - 2;
      })
    } else if(e === 'correct') {
      setScore(prevScore => {
        return prevScore + 2;
      })
    } else {
      setScore(prevScore => {
        return prevScore - 1;
      })
    }
  }

  return (
    <div className="App" style={{'backgroundColor' : bgColor}}>
      <Card title='Guess the color!'>
        <ColorGenerator onChange={styleBg} onScoreChange={checkScore}/>
      </Card>
      <div className='flex-vert'>
      <Card title="Instructions:">
          <p>Guess the color displayed by clicking on its HEX value.</p>
            <p>Correct answer: +2 points.</p>
            <p>Incorrect answer: -2 points.</p>
            <p>Re-roll: -1 point.</p>
        </Card>
        <Card title='Score'>
          <h2>{score}</h2>
        </Card>
      </div>
    </div>
  );
}

export default App;
