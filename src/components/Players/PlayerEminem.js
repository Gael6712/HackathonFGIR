import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersEminem() {
  const { dataEminem } = useContext(ApiMusicContext);
  const playEminem = dataEminem.preview;
  console.log(playEminem);
  return (
    <>
      <figure>
        <audio controls src={playEminem}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}
