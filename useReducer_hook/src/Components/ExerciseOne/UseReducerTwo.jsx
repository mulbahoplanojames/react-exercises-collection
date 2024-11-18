import { useReducer } from "react";

const styled = {
	marginRight: "10px",
};

const initialState = {
	firstCounter: 0,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { firstCounter: state.firstCounter + 1 };
		case "decrement":
			return { firstCounter: state.firstCounter - 1 };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

const UseReducerTwo = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h1>UseReducerTwo</h1>

			<h2>Count - {count.firstCounter}</h2>
			<button style={styled} onClick={() => dispatch({ type: "increment" })}>
				Increment
			</button>
			<button style={styled} onClick={() => dispatch({ type: "decrement" })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</>
	);
};

export default UseReducerTwo;
