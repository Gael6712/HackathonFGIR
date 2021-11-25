import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";
export default function PlayersOrel() {
  const { dataOrel } = useContext(ApiMusicContext);
  const playOrel = dataOrel.preview;
  console.log(playOrel);
  return (
    <>
      <figure>
        <audio controls src={playOrel}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}
