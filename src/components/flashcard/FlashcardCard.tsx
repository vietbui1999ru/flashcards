import { useState } from 'react';
import Card from '../ui/card';
import type { MathFlashcard } from '../../utils/mathGenerator';

interface FlashcardCardProps {
  flashcard: MathFlashcard;
  index: number;
}

const FlashcardCard = ({ flashcard, index }: FlashcardCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);  // Just flip, nothing else!
  };

  return (
    <Card
      scaleFactor="body"
      variant="transparent"
      material="glass"
      materialProps={{ thickness: "normal" }}
      isClickable={true}
      onClick={handleFlip}
    >
      <div className="flashcard-content">
        {(!isFlipped) ? (
          <div className="flashcard-question">
            <h2>Question {index}</h2>
            <p className="question-text">{flashcard.question}</p>
          </div>
        ) : (
          <div className="flashcard-answer">
            <h2>Answer</h2>
            <p className="answer-text">{flashcard.answer}</p>
          </div>
        )}
      </div>
    </Card>
  );
};
export default FlashcardCard;
