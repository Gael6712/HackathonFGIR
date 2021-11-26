import { useContext, useState} from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";
export default function PlayersOrel() {
  
  const { dataOrel } = useContext(ApiMusicContext);
  const playOrel = dataOrel.preview;
  const [player, setPlayer] = useState(0);

  const handleSetPlayer = () => {
    setPlayer(player + 1);
  };

  console.log(player);

  return (
    <>
      <figure>
        {player < 3 ? (
          <audio onPlay={handleSetPlayer} controls src={playOrel}>
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
