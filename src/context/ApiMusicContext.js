import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiMusicContext = createContext();
const MusicContextProvider = (props) => {
  /**=============================================================== */
  // Queen API
  const [dataQueen, setDataQueen] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/7868651"
      )

      .then((res) => res.data)
      .then((dataQueenn) => {
        setDataQueen(dataQueenn);
      });
  }, []);

  /**=============================================================== */
  // OrelSan API
  const [dataOrel, setDataOrel] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/7868651"
      )

      .then((res) => res.data)
      .then((dataOrel) => {
        setDataOrel(dataOrel);
      });
  }, []);
  /**=============================================================== */
  // Eminem API
  const [dataEminem, setDataEminem] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/916424"
      )

      .then((res) => res.data)
      .then((dataEminem) => {
        setDataEminem(dataEminem);
      });
  }, []);
  /**=============================================================== */
  return (
    <ApiMusicContext.Provider
      value={{
        dataQueen: dataQueen,
        setDataQueen: setDataQueen,
        // =====//
        dataOrel: dataOrel,
        setDataOrel: setDataOrel,
        // =====//
        dataEminem: dataEminem,
        setDataEminem: setDataEminem,
      }}
    >
      {props.children}
    </ApiMusicContext.Provider>
  );
};
export default MusicContextProvider;
/**
 *
 * " https:api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime"
 */
