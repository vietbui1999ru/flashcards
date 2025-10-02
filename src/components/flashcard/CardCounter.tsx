const FlashcardCardCounter = ({ currentIndex, totalCards }: { currentIndex: number; totalCards: number }) => {
  const cardsLeft = totalCards - currentIndex;

  return (
    <div className="card-counter">
      <span className="current-card">{currentIndex + 1}</span>
      <span className="separator"> / </span>
      <span className="total-cards">{totalCards}</span>
      <span className="cards-left"> ({cardsLeft - 1} left)</span>
    </div>
  );
};

export default FlashcardCardCounter;
