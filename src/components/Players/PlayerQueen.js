import { useContext, useState} from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersQueen() {
  
  const { dataQueen } = useContext(ApiMusicContext);
  const playQueen = dataQueen.preview;
  const [player, setPlayer] = useState(0);

  const handleSetPlayer = () => {
    setPlayer(player + 1);
  };

  console.log(player);
  
  return (
    <>
      <figure>
        {player < 3 ? (
          <audio onPlay={handleSetPlayer} controls src={playQueen}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        ) : (
          <p>Enough plays ! Time to give an answer !</p>
        )}
      </figure>
    </>
  );
}
