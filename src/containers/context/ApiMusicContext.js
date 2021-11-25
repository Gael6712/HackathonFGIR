import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiMusicContext = createContext();
const MusicContextProvider = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3155488"
      )

      .then((res) => res.data)
      .then((data) => {
        setData(data);
      });
  }, []);
  
  return (
    <ApiMusicContext.Provider value={{ data: data, setData: setData }}>
      {props.children}
    </ApiMusicContext.Provider>
  );
};
export default MusicContextProvider;
/**
 *
 * " https:api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime"
 */
