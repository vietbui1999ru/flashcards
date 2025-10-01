import type { MathFlashcard } from '../utils/mathGenerator.ts'
import generateQuestion from '../utils/mathGenerator.ts';

export const generateFlashcards = (count: number): MathFlashcard[] => {
	return Array.from({ length: count }, (_, index) => {
		// What goes here?
		// Call generateQuestion with what parameter?
		return generateQuestion(index + 1);
	});
}

const listFlashcards: MathFlashcard[] = generateFlashcards(10);

export const flashcards: MathFlashcard[] = listFlashcards;

