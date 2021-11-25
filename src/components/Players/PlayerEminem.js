import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersEminem() {
  const { dataEminem } = useContext(ApiMusicContext);
  const playEminem = dataEminem.preview;
  console.log(playEminem);
  return (
    <>
      <video autoPlay controls muted>
        <source src={playEminem} type="audio/mp3" />
      </video>
    </>
  );
}
