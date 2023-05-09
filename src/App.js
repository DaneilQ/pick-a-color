import {useState} from 'react';
import './App.css';

import ColorPicker from './components/ColorPicker/ColorPicker';
import Card from './components/UI/Card/Card';
import ColorGenerator from './components/ColorGenerator/ColorGenerator';

function App() {
  const [bgColor, changingBg] = useState('#000000');

  const styleBg = (e) => {
    changingBg(e)
  }

  return (
    <div className="App" style={{'backgroundColor' : bgColor}}>
      <Card title='Guess the color!'>
        <ColorGenerator/>
      </Card>
    </div>
  );
}

export default App;
