import { useContext } from "react";
import { CounterContext } from "../../Context/Context";

const ComponentF = () => {
	const counterContext = useContext(CounterContext);

	return (
		<>
			<p>Component F is with in Component E</p>

			<h2>Component F Count -{counterContext.count} </h2>
			<button onClick={() => counterContext.dispatch("increment")}>
				Increment
			</button>
			<button onClick={() => counterContext.dispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => counterContext.dispatch("reset")}>Reset</button>
		</>
	);
};

export default ComponentF;
