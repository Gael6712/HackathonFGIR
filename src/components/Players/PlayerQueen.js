import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";
export default function PlayersQueen() {
  const { dataQueen } = useContext(ApiMusicContext);

  const playQueen = dataQueen.preview;

  return (
    <>
      <audio autoPlay controls>
        <source src={playQueen} type="audio/mp3" />
      </audio>
    </>
  );
}
