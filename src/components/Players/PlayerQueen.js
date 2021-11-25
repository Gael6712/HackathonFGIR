import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersQueen() {
  const { dataQueen } = useContext(ApiMusicContext);
  const playQueen = dataQueen.preview;
  console.log(playQueen);
  return (
    <>
      <figure>
        <audio controls src={playQueen}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}
