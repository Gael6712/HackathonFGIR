import { useContext, useState} from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersTupac(props) {
  const {selectedWord} = props;
  const { dataTupac } = useContext(ApiMusicContext);
  const playTupac = dataTupac.preview;
  console.log(playTupac)
  const [player, setPlayer] = useState(0);

  const handleSetPlayer = () => {
    setPlayer(player + 1);
  };

  console.log(player);

  return (
    <>
      <figure className={selectedWord === "tupac" ? "" : "audio-display"}>
      {player < 3 ? (
          <audio onPlay={handleSetPlayer} controls src={playTupac}>
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