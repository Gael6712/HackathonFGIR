import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersEminem() {
  const { dataEminem } = useContext(ApiMusicContext);
  const playEminem = dataEminem.preview;
  return (
    <>
      <audio autoPlay controls>
        <source src={playEminem} type="audio/mp3" />
      </audio>
    </>
  );
}
