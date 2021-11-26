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
      .then((dataQueen) => {
        setDataQueen(dataQueen);
      });
  }, []);

  /**=============================================================== */
  // OrelSan API
  const [dataOrel, setDataOrel] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/414838122"
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
  // Tupac API
  const [dataTupac, setDataTupac] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/12901222"
      )

      .then((res) => res.data)
      .then((dataTupac) => {
        setDataTupac(dataTupac);
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
        // =====//
        dataTupac: dataTupac,
        setDataTupac: setDataTupac,
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
