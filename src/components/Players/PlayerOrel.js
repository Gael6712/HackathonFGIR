import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";
export default function PlayersOrel() {
  const { dataOrel } = useContext(ApiMusicContext);
  const playOrel = dataOrel.preview;
  console.log(playOrel);
  return (
    <>
      <video autoPlay controls muted>
        <source src={playOrel} type="audio/mp3" />
      </video>
    </>
  );
}
