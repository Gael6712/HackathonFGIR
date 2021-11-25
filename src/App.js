import Router from "./Router";
import PlayerEminem from "./components/Players/PlayerEminem";
import PlayerOrel from "./components/Players/PlayerOrel";
import PlayerQueen from "./components/Players/PlayerQueen";
import "./App.css";

export default function App() {
  return (
    <>
      <Router />
      <PlayerOrel />
      <div></div>
      <PlayerQueen />
      <div></div>
      <PlayerEminem />
    </>
  );
}
