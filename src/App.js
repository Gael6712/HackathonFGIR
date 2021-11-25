import Router from "./Router";
import PlayerOrel from "./components/Players/PlayerOrel";
import PlayerQueen from "./components/Players/PlayerQueen";
import PlayerEminem from "./components/Players/PlayerEminem";
import "./App.css";

export default function App() {
  return (
    <>
      <Router />
      <div className="flex">
        <PlayerOrel />
        <PlayerQueen />
        <PlayerEminem />
      </div>
    </>
  );
}
