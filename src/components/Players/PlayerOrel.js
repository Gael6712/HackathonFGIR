import { useContext, useEffect, useState } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersOrel(props) {
  const {selectedWord} = props;
  let [details, setDetails] = useState({});
  const { dataOrel } = useContext(ApiMusicContext);
  const playOrel = dataOrel.preview;

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/259467`
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  console.log(details.name);

  return (
    <>
      <figure className={selectedWord === "orelsan" ? "" : "audio-display"}>
        <h1>{details.name}</h1>
        <audio controls src={playOrel}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}
