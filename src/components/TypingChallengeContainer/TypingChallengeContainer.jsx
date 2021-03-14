import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details Section */}
      <div className="details-container">
        {/* Words Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        {/* Characters Typed */}
        <ChallengeDetailsCard cardName="characters" cardValue={characters} />
        {/* Speed */}
        <ChallengeDetailsCard cardName="wpm" cardValue={wpm} />
      </div>
      {/* The React Challenge */}
      <div className="typewriter-container">
        <TypingChallenge
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};
export default TypingChallengeContainer;
