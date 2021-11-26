import React, { useEffect, useState } from "react";
import "./Test.css";
/*eslint-disable */

export default function Test() {
  const [dataL, setDataL] = useState([]);
  const [rihInfo, setRiInfo] = useState({});
  const [trackR, setTrackR] = useState([]);
  useEffect(() => {
    fetch(
      `https://private-anon-fee770964a-lyricsovh.apiary-proxy.com/v1/Rihanna/Umbrella`
    )
      .then((res) => res.json())
      .then((data) => setDataL(data));
  }, []);
  console.log(dataL.lyrics);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/564`
    )
      .then((res) => res.json())
      .then((data) => setRiInfo(data));
  }, []);
  console.log(rihInfo);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/925106"
    )
      .then((res) => res.json())
      .then((data) => setTrackR(data));
  }, []);
  console.log(trackR.preview);

  return (
    <div className="containKa">
      <div className="flexInfo">
        <div>
          <img src={rihInfo.picture_medium} alt="" />
        </div>
        <div className="rigthBox">
          <h1>{rihInfo.name}</h1>
          <p>{rihInfo.nb_fan} fans</p>
          <p>{rihInfo.nb_album} albums</p>
        </div>
        <div className="audioB">
          <audio autoPlay controls src={trackR.preview} />
        </div>
      </div>
      <p>
        <marquee
          className="test"
          direction="up"
          behavior="scroll"
          scrollamount="7"
        >
          {" "}
          {dataL.lyrics}
        </marquee>
      </p>
    </div>
  );
}
