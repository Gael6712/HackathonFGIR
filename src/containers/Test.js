import React, { useEffect, useState } from "react";
import "./Test.css";

export default function Test() {
  const [dataL, setDataL] = useState([]);
  useEffect(() => {
    fetch(
      `https://private-anon-fee770964a-lyricsovh.apiary-proxy.com/v1/Rihanna/Umbrella`
    )
      .then((res) => res.json())
      .then((data) => setDataL(data));
  }, []);
  console.log(dataL.lyrics);

  return (
    <div>
      <p>
        <marquee
          className="test"
          direction="up"
          behavior="scroll"
          scrollamount="4"
        >
          {" "}
          {dataL.lyrics}
        </marquee>
      </p>
    </div>
  );
}
