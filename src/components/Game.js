import Menu from "./Menu";
import Tetris from "./Tetris";
import Switch from "./Switch";
import arrowsImg from "../arrow-keys.png"
import spaceBarImg from "../space-bar.png"

import { useGameOver } from "../hooks/useGameOver";
import { useState } from "react";

const Game = ({ rows, columns }) => {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => resetGameOver();

  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="Game">
      {gameOver ? (
        <div>
          <Menu onClick={start} />
          <Switch rounded={true} isToggled={isToggled} onToggle={onToggle} name='Music' />
          <div className="controls-contianer">
            <p className="controls-text">Controls</p>
            <div className="controls-keys">
              <img src={spaceBarImg} width={140} />
              <img src={arrowsImg} width={140}/>
            </div>
          </div>
        </div>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} musicOn={isToggled}/>
      )}
    </div>
  );
};

export default Game;
