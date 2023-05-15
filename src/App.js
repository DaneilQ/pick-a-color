import { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/UI/Card/Card";
import ColorGenerator from "./components/ColorGenerator/ColorGenerator";

function App() {
  const [bgColor, changingBg] = useState("#000000");

  let actualScore = localStorage.getItem("score") || 0;

  const [score, setScore] = useState();

  const styleBg = (e) => {
    changingBg(e);
  };

  const deleteScore = () => {
    localStorage.removeItem("score");
    setScore(0);
  };

  const checkScore = (e) => {
    if (e === "wrong") {
      setScore((prevScore) => {
        let result = prevScore - 2;
        localStorage.setItem("score", result);
        return result;
      });
    } else if (e === "correct") {
      setScore((prevScore) => {
        let result = prevScore + 2;

        localStorage.setItem("score", result);
        return result;
      });
    } else {
      setScore((prevScore) => {
        let result = prevScore - 1;
        localStorage.setItem("score", result);
        return result;
      });
    }
  };
  useEffect(() => {
    setScore(actualScore);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <div className="flex-vert card-1">
      <Card title="Guess the color!">
        <ColorGenerator onChange={styleBg} onScoreChange={checkScore} />
      </Card>
      </div>
      <div className="flex-vert card-2">
        <Card title="Score">
          <h2>{score}</h2>
          {score <= -10 && <p>Jesus, you're f*cking bad at this.</p>}
          {score >= 10 && <p>Godlike.</p>}
          {score !== 0 && (
            <button onClick={deleteScore} className="color-button">
              Delete score
            </button>
          )}
        </Card>
        <Card title="Instructions:">
          <p>Guess the color displayed by clicking on its HEX value.</p>
          <p>Correct answer: +2 points.</p>
          <p>Incorrect answer: -2 points.</p>
          <p>Re-roll: -1 point.</p>
        </Card>
        <Card>
          <svg
            width="80"
            height="40"
            viewBox="0 0 404 144"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75.2788 143.364C64.3781 143.364 54.3311 141.657 45.1378 138.242C36.0758 134.696 28.1301 129.705 21.3008 123.27C14.6028 116.835 9.34946 109.283 5.5408 100.615C1.86346 91.947 0.024797 82.4253 0.024797 72.05C0.024797 61.6747 1.86346 52.153 5.5408 43.485C9.34946 34.817 14.6685 27.2653 21.4978 20.83C28.3271 14.3947 36.3385 9.46966 45.5318 6.05499C54.7251 2.50899 64.8378 0.735998 75.8698 0.735998C88.0838 0.735998 99.0501 2.77166 108.769 6.84299C118.619 10.9143 126.893 16.8243 133.591 24.573L113.103 43.485C108.112 38.2317 102.662 34.3573 96.7518 31.862C90.8418 29.2353 84.4065 27.922 77.4458 27.922C70.7478 27.922 64.6408 28.9727 59.1248 31.074C53.6088 33.1753 48.8151 36.196 44.7438 40.136C40.8038 44.076 37.7175 48.7383 35.4848 54.123C33.3835 59.5077 32.3328 65.4833 32.3328 72.05C32.3328 78.4853 33.3835 84.3953 35.4848 89.78C37.7175 95.1647 40.8038 99.8927 44.7438 103.964C48.8151 107.904 53.5431 110.925 58.9278 113.026C64.4438 115.127 70.4851 116.178 77.0518 116.178C83.3558 116.178 89.4628 115.193 95.3728 113.223C101.414 111.122 107.258 107.641 112.906 102.782L131.03 125.831C123.544 131.478 114.81 135.812 104.829 138.833C94.9788 141.854 85.1288 143.364 75.2788 143.364ZM101.874 121.694V69.883H131.03V125.831L101.874 121.694ZM189.24 141V29.104H145.112V3.09999H265.282V29.104H221.154V141H189.24ZM346.525 143.364C335.887 143.364 325.971 141.657 316.778 138.242C307.716 134.696 299.836 129.705 293.138 123.27C286.44 116.835 281.186 109.283 277.378 100.615C273.7 91.947 271.862 82.4253 271.862 72.05C271.862 61.6747 273.7 52.153 277.378 43.485C281.186 34.817 286.44 27.2653 293.138 20.83C299.967 14.3947 307.913 9.46966 316.975 6.05499C326.037 2.50899 335.952 0.735998 346.722 0.735998C358.673 0.735998 369.442 2.83733 379.03 7.04C388.748 11.1113 396.891 17.1527 403.458 25.164L382.97 44.076C378.242 38.6913 372.988 34.6857 367.21 32.059C361.431 29.301 355.127 27.922 348.298 27.922C341.862 27.922 335.952 28.9727 330.568 31.074C325.183 33.1753 320.521 36.196 316.581 40.136C312.641 44.076 309.554 48.7383 307.322 54.123C305.22 59.5077 304.17 65.4833 304.17 72.05C304.17 78.6167 305.22 84.5923 307.322 89.977C309.554 95.3617 312.641 100.024 316.581 103.964C320.521 107.904 325.183 110.925 330.568 113.026C335.952 115.127 341.862 116.178 348.298 116.178C355.127 116.178 361.431 114.865 367.21 112.238C372.988 109.48 378.242 105.343 382.97 99.827L403.458 118.739C396.891 126.75 388.748 132.857 379.03 137.06C369.442 141.263 358.607 143.364 346.525 143.364Z"
              fill={bgColor}
            />
          </svg>
          <h3>Developed by Daniel Quintero.</h3>
          <a style={{ color: bgColor }} href="http://www.danielq.dev">
            danielq.dev
          </a>
        </Card>
      </div>
    </div>
  );
}

export default App;
