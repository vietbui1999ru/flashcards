import Header from './Header.tsx'
import FlashcardCardCounter from '../flashcard/CardCounter.tsx'
import FlashcardCard from '../flashcard/FlashcardCard.tsx'
import { flashcards } from '../../data/flashcards.ts'
import { useState } from 'react'
import type { MathFlashcard } from '../../utils/mathGenerator.ts'
import ControlButtons from '../flashcard/ControlButtons.tsx'

// const randomizeIndex = (max: number): number => {
//   return Math.floor(Math.random() * max)
// }
//

const FlashCardContainer = () => {
  const lenData: number = flashcards.length
  // In FlashcardContainer
  const [shuffledCards, setShuffledCards] = useState<MathFlashcard[]>(() => {
    // Shuffle array on initial mount
    return [...flashcards].sort(() => Math.random() - 0.5);
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Then use shuffledCards[currentIndex] instead of flashcards[currentIndex]
  let currentCard = shuffledCards[currentIndex]
  const handlePrevious = () => {
    if (currentIndex === 0) {
      setShuffledCards(shuffledCards)
      currentCard = shuffledCards[lenData - 1]
      setCurrentIndex(lenData - 1)
    } else {
      currentCard = shuffledCards[currentIndex - 1]
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex === lenData - 1) {
      setShuffledCards(shuffledCards)
      currentCard = shuffledCards[0]
      setCurrentIndex(0)
    } else {
      currentCard = shuffledCards[currentIndex + 1]
      setCurrentIndex(currentIndex + 1)
    }
  }
  return (
    <div className="flashcard-container">
      <Header time={2 * shuffledCards.length} />
      <FlashcardCardCounter currentIndex={currentIndex} totalCards={lenData} />

      <FlashcardCard key={currentIndex} index={currentIndex + 1} flashcard={currentCard} />
      <ControlButtons onPrevious={handlePrevious} onNext={handleNext} />
    </div>
  )
}
export default FlashCardContainer
