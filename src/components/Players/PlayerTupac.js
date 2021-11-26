import { useContext} from "react";
import { ApiMusicContext } from "../../context/ApiMusicContext";

export default function PlayersTupac() {
  
  const { dataTupac } = useContext(ApiMusicContext);
  const playTupac = dataTupac.preview;
  console.log(playTupac)

  return (
    <>
      <figure>
        
        <audio controls src={playTupac}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </>
  );
}