import {useEffect, useState} from 'react';
import './App.css';


import Card from './components/UI/Card/Card';
import ColorGenerator from './components/ColorGenerator/ColorGenerator';

function App() {
  const [bgColor, changingBg] = useState('#000000');

  let actualScore = localStorage.getItem('score') || 0;

  const [score,setScore] = useState();

  const styleBg = (e) => {
    changingBg(e)
  }

  const deleteScore = () => {
    localStorage.removeItem('score')
    setScore(0)
  }

  const checkScore = (e) => {

    if(e === 'wrong') {
      setScore(prevScore => {
        let result = prevScore - 2;
        localStorage.setItem('score', result)
        return result
      })
    } else if(e === 'correct') {
      setScore(prevScore => {
        let result = prevScore + 2;

        localStorage.setItem('score', result)
        return result
      })
    } else {
      setScore(prevScore => {
        let result = prevScore - 1;
        localStorage.setItem('score', result)
        return result
      })
    }

  }
  useEffect(() => {
    setScore(actualScore)
  },[])

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
          { score <= -10 && <p>Jesus, you're f*cking bad at this.</p>}
          { score >= 10 && <p>Godlike.</p>}
          { score !== 0 && <button onClick={deleteScore} className='color-button'>Delete score</button>}
        </Card>
        <Card>
          <h3>Developed by Daniel Quintero.</h3>
          <a style={{'color' : bgColor}} href='http://www.danielq.dev'>danielq.dev</a>
        </Card>
      </div>
    </div>
  );
}

export default App;
