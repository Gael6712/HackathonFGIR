import { useContext} from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersQueen() {
  
  const { dataQueen } = useContext(ApiMusicContext);
  const playQueen = dataQueen.preview;
  
  return (
    <>
      <figure>
        <h1>{details.name}</h1>
        {player < 6 ? (
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
