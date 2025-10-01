
export interface MathFlashcard {
	id: number;
	question: string;
	answer: string;
	a: number;
	b: number;
}
const getRandomNumber = () => {
	return Math.floor(Math.random() * 201) - 100;
}

const operations = ['+', '-', '*', '/', '%']

const getRandomOperation = () => {
	return operations[Math.floor(Math.random() * operations.length)];
}

const calculateAnswer = (a: number, b: number, operation: string): [number, boolean] => {
	let ans: number = 0
	switch (operation) {
		case '+':
			ans = a + b
			break
		case '-':
			ans = a - b
			break
		case '*':
			ans = a * b
			break
		case '/':
			if (b === 0) {
				console.error('Division by Zero');
				return [0, false]
			}
			ans = a / b
			break
		case '%':
			if (b === 0) {
				console.error('Division by Zero');
				return [0, false]
			}
			ans = a % b
			break
		default:
			console.error('Invalid operation');
			return [0, false]

	}
	return [ans, true]
}

const generateQuestion = (id: number): MathFlashcard => {
	let a: number = 0;
	let b: number = 0;
	let op: string = "";
	let ans: number = 0;
	let isValid: boolean = false;
	while (!isValid) {
		a = getRandomNumber();
		b = getRandomNumber();
		op = getRandomOperation();
		[ans, isValid] = calculateAnswer(a, b, op)
	}
	const object: MathFlashcard = {
		id: id,
		question: `${a} ${op} ${b}`,
		answer: ans.toPrecision(5),
		a: a,
		b: b,
	};
	return object
}

export default generateQuestion;


