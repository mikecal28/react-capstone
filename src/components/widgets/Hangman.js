import React, { useState, useEffect } from "react";

import tile000 from "../../assets/tile000.png";
import tile001 from "../../assets/tile001.png";
import tile002 from "../../assets/tile002.png";
import tile003 from "../../assets/tile003.png";
import tile004 from "../../assets/tile004.png";
import tile005 from "../../assets/tile005.png";
import tile006 from "../../assets/tile006.png";
import words from "../data/hangmanData";

function Hangman() {
  const [score, setScore] = useState(0);
  const [gameWord, setGameWord] = useState("");
  const [guess, setGuess] = useState("");
  const [guessArray, setGuessArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (guess !== "") {
      const gameWordArray = gameWord.split("");
      setGuessArray((guessArray) => [...guessArray, guess.toLowerCase()]);

      if (!gameWordArray.includes(guess.toLowerCase())) {
        setScore((score) => (score < 6 ? (score += 1) : 6));
        setGuess("");
      }
      setGuess("");
    }
  };

  const renderInputs = () => {
    return gameWord
      ? gameWord.split("").map((char, idx) => (
          <div key={idx} className="chars">
            {guessArray.includes(char) ? char : ""}
          </div>
        ))
      : null;
  };

  useEffect(() => {
    setGameWord(words[Math.floor(Math.random() * words.length)].toLowerCase());
  }, []);

  return (
    <div className="hangman">
      <h1>Hangman</h1>
      <div className="hangman-container">
        <div className="hangman-wrapper">
          <img
            src={
              score === 0
                ? tile000
                : score === 1
                ? tile001
                : score === 2
                ? tile002
                : score === 3
                ? tile003
                : score === 4
                ? tile004
                : score === 5
                ? tile005
                : score === 6
                ? tile006
                : null
            }
            alt="hangman-pic"
          />
        </div>
        <input
          onChange={(e) => setGuess(e.target.value)}
          className="guess"
          type="text"
          placeholder="?"
          maxLength="1"
          value={guess}
        />
        <button onClick={handleSubmit}>Submit</button>
        <div className="correct-guesses">{renderInputs()}</div>
        {score === 6 && <h2>{gameWord}</h2>}
      </div>
    </div>
  );
}

export default Hangman;
