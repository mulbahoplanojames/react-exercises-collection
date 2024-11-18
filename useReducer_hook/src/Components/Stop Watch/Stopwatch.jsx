import { useReducer, useRef, useEffect } from "react";

const initialStateValue = {
	isRunning: false,
	time: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "start":
			return { ...state, isRunning: true };
		case "stop":
			return { ...state, isRunning: false };
		case "reset":
			return { isRunning: false, time: 0 };
		case "tick":
			return { ...state, time: state.time + 1 };
		default:
			throw new Error();
	}
};

const Stopwatch = () => {
	const [state, dispatch] = useReducer(reducer, initialStateValue);

	const idRef = useRef(0);

	useEffect(() => {
		if (!state.isRunning) {
			return;
		}
		idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

		//CleanUp function
		return () => {
			clearInterval(idRef.current);
			idRef.current = 0;
		};
	}, [state.isRunning]);

	return (
		<>
			<>
				<h1>StopWatch</h1>

				<h1>{state.time}</h1>

				<button onClick={() => dispatch({ type: "start" })}>Start</button>
				<button
					style={{ margin: "0px 20px" }}
					onClick={() => dispatch({ type: "stop" })}
				>
					Stop
				</button>
				<button onClick={() => dispatch({ type: "reset" })}>ReSet</button>
			</>
		</>
	);
};

export default Stopwatch;
