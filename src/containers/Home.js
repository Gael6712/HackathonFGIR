import React from "react";
import Hangman from "../components/Hangman/Hangman";
import PlayersEminem from "../components/Players/PlayerEminem";
import PlayersOrel from "../components/Players/PlayerOrel";
import PlayersQueen from "../components/Players/PlayerQueen";
import PlayersTupac from "../components/Players/PlayerTupac";

export default function Home() {
  return (
    <div>
      <Hangman />
      <div className="flex">
        <PlayersOrel />
        <PlayersQueen />
        <PlayersEminem />
        <PlayersTupac />
      </div>
    </div>
  );
}
