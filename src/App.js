import "./App.css";
import PlayerEminem from "./components/Players/PlayerEminem";
import PlayerOrel from "./components/Players/PlayerOrel";
import PlayerQueen from "./components/Players/PlayerQueen";
import Router from "./Router";

export default function App() {
  return (
    <>
      <Router />
      <PlayerOrel />
      <PlayerQueen />
      <PlayerEminem />
    </>
  );
}
