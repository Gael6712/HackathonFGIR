import { useContext } from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersQueen() {
  const { dataQueen } = useContext(ApiMusicContext);
  const playQueen = dataQueen.preview;
  console.log(playQueen);
  return (
    <>
      <avideo autoPlay controls muted>
        <source src={playQueen} type="audio/mp3" />
      </avideo>
    </>
  );
}
