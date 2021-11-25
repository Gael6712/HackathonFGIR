import React from 'react';

const Lecteur = () => {
    return (
        <>
            <video controls autoplay name="media">
                <source src="https://cdns-preview-c.dzcdn.net/stream/c-c6099e818548df3284b02303905754d7-18.mp3" type="audio/mpeg"></source>
            </video>
        </>
    );
}

export default Lecteur;