import React from "react";
import './Acceuil.css'
import { Link } from 'react-router-dom';

const Acceuil = () => {
  return (
    <div class= 'presentation'>
      <h1 class="btn hover-glitch">Welcome to our hackathon project</h1>
      <p>This is a real challenge, do you wish to continue ?</p>
      <div>
      <Link to="/hangman">
        <button class="button">Yes</button>
        <button class="button" type="button" data-hover="Yes" data-active="I'M ACTIVE"><span>No</span></button>
       </Link > 
      </div>
      <div>
      <ul class="separation">
          <li class="lihover" data-hover="/ Fait en moins de 10 heures de code et 3 heures de brainstorming">
             <span>/ Made in less than 10 coding hours and 3 hours of brainstorming </span>
          </li>
          <li>
             / Made in teamwork with Fabrice Sérapion, Gaël Aury, Ifeoma Nwaoha, Rafael Dubois 
          </li>
          <li>
             / Using the Deezer API and many online ressources, like codepen dev fullstackoverflow
          </li>
          <li>
             / New Game concept crossing the hangman game and a music blindtest, never seen before ! (We think)
          </li>
      </ul>
      </div>
    </div>
  );
};

export default Acceuil;
