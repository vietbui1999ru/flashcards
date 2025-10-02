import { useEffect, useState } from "react";
interface HeaderProps {
	time: number;
}

const Header = ({ time }: HeaderProps) => {
	const [timeLeft, setTimeLeft] = useState<number>(time)
	useEffect(() => {
		// Create interval that runs every 1000ms (1 second)
		const interval = setInterval(() => {
			setTimeLeft((timeLeft) => Math.max(0, timeLeft - 1));
		}, 1000)
		/* how many milliseconds? */;

		// Cleanup function - MUST return this!
		return () => {
			// How do you stop an interval?
			clearInterval(interval);
		};
	}, []);
	const formatTime = (seconds: number): string => {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
	};
	//              ↑ Add leading zero if needed
	return (
		<header className="header">
			<h1>Ultimate Mental Math Quiz</h1>
			<h3>Test your arithmetic skills with random math questions!</h3>
			<h2>Time left:</h2>
			<h2 className="countdown">{formatTime(timeLeft)}</h2>
		</header>
	)
}

export default Header
