import './App.css'
import './components/flashcard/FlashcardCard.tsx'
import './components/layout/Header.tsx'
import './components/flashcard/CardCounter.tsx'
import FlashCardContainer from './components/layout/FlashcardContainer.tsx'
import './components/layout/Decoration.tsx'
import './components/flashcard/ControlButtons.tsx'

function App() {

  return (
    <div className="app">
      <FlashCardContainer />
    </ div>
  )
}

export default App
