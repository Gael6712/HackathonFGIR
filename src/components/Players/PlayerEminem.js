import { useContext, useEffect, useState } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersEminem(props) {
  const {selectedWord} = props;
  let [details, setDetails] = useState({});
  const { dataEminem } = useContext(ApiMusicContext);
  const playEminem = dataEminem.preview;
  console.log(playEminem);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details.name);

  return (
    <>
      <figure className={selectedWord === "eminem" ? "" : "audio-display"}>
        <h1>{details.name}</h1>
        <audio controls src={playEminem}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}
