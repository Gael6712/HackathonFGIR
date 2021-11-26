import { useContext} from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersEminem() {
  
  const { dataEminem } = useContext(ApiMusicContext);
  const playEminem = dataEminem.preview;
  console.log(playEminem);
  const [player, setPlayer] = useState(0);

  const handleSetPlayer = () => {
    setPlayer(player + 1);
  };

  console.log(player);

  return (
    <>
      <figure>
        <h1>{details.name}</h1>
        {player < 6 ? (
          <audio onPlay={handleSetPlayer} controls src={playEminem}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        ) : <p>Enough plays ! Time to give an answer !</p>}
      </figure>
    </>
  );
}
