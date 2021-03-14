import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import "./TestContainer.css";
const TestContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-cont">
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            words={words}
            characters={characters}
            wpm={wpm}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <h1>
            <TryAgain
              words={words}
              characters={characters}
              startAgain={startAgain}
              wpm={wpm}
            />
          </h1>
        </div>
      )}
    </div>
  );
};
export default TestContainer;
