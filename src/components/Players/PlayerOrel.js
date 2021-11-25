import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";
export default function PlayersOrel() {
  const { dataOrel } = useContext(ApiMusicContext);
  const playOrel = dataOrel.preview;
  return (
    <>
      <audio autoPlay controls>
        <source src={playOrel} type="audio/mp3" />
      </audio>
    </>
  );
}
