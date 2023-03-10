import "./Tetris.css";

import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";

import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";
import music from "../assets/TetrisTheme.mp3"
import qKey from "../assets/q-key.png"

const Tetris = ({ rows, columns, setGameOver, musicOn}) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  });

  return (
    <div className="Tetris">
      <div className="controls-quit">
        <img src={qKey} alt="q" width={35} />
        <p>To quit</p>
      </div>
      <Board board={board} />
      <GameStats gameStats={gameStats} />
      <Previews tetrominoes={player.tetrominoes} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
      {musicOn && (
        <audio src={music} autoPlay loop></audio>
      )}
    </div>
  );
};

export default Tetris;
