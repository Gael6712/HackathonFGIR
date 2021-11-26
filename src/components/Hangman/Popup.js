import React, { useEffect, useState } from 'react';
import { checkWin } from '../../helpers/helpers';



const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  let [detailsmnm, setDetailsmnm] = useState({});
  let [detailsorel, setDetailsOrel] = useState({});
  let [detailsqueen, setDetailsQueen] = useState({});
  let [details2pac, setDetails2Pac] = useState({});


  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = `Congratulations! You won! 😃 It was ${selectedWord}`;
    playable = false;
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the artist was: ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13`
    )
      .then((res) => res.json())
      .then((data) => setDetailsmnm(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/259467`
    )
      .then((res) => res.json())
      .then((data) => setDetailsOrel(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/412`
    )
      .then((res) => res.json())
      .then((data) => setDetailsQueen(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/167095`
    )
      .then((res) => res.json())
      .then((data) => setDetails2Pac(data));
  }, []);



  
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2><br/>
        { (selectedWord === 'eminem')
          ? <img src={detailsmnm.picture_medium} alt="mnms" />
          : (selectedWord === 'orelsan')
          ? <img src={detailsorel.picture_medium} alt="aurelien" />
          : (selectedWord === 'queen')
          ? <img src={detailsqueen.picture_medium} alt="couing" />
          : <img src={details2pac.picture_medium} alt="8pac" />
        } 
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup
