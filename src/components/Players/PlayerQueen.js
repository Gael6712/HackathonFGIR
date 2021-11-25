import { useContext, useEffect, useState } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersQueen(props) {
  const {selectedWord} = props;
  let [details, setDetails] = useState({});
  const { dataQueen } = useContext(ApiMusicContext);
  const playQueen = dataQueen.preview;

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/412`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details.name);
  return (
    <>
      <figure className={selectedWord === "queen" ? "" : "audio-display"}>
        <h1>{details.name}</h1>
        <audio controls src={playQueen}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}
