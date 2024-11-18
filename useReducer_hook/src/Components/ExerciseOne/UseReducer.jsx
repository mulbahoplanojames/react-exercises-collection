import { useReducer } from "react";

const styled = {
	marginRight: "10px",
};

const initialState = 0;

const reducer = (state, action) => {
	switch (action) {
		case "increment":
			// console.log(state + 1);
			return state + 1;
			break;
		case "decrement":
			return state - 1;
			break;
		case "reset":
			return initialState;
			break;
		default:
			return state;
			break;
	}
};

const UseReducer = () => {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h1>UseReducer</h1>

			<h2>Count - {count}</h2>
			<button style={styled} onClick={() => dispatch("increment")}>
				Increment
			</button>
			<button style={styled} onClick={() => dispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
		</>
	);
};

export default UseReducer;
