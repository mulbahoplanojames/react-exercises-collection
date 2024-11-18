import { createContext, useReducer } from "react";

// Creating a context API
export const CounterContext = createContext(null);

const initialState = 0;

const reducer = (state, action) => {
	switch (action) {
		case "increment":
			return state + 1;
		case "incrementTwo":
			return state + 5;
		case "decrement":
			return state - 1;
		case "reset":
			return initialState;

		default:
			return state;
	}
};

const CountContextProvider = (props) => {
	// Creating a Reducer Hook
	const [count, dispatch] = useReducer(reducer, initialState);

	// Creating an object to hold the context values
	const countValue = {
		count,
		dispatch,
	};

	return (
		<CounterContext.Provider value={countValue}>
			{props.children}
		</CounterContext.Provider>
	);
};

export default CountContextProvider;
