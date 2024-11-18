import { useContext } from "react";
import { CounterContext } from "../../Context/Context";

const ComponentD = () => {
	const counterContext = useContext(CounterContext);

	return (
		<>
			<p>Component D is with in Component B</p>
			<h2>Component E Count = {counterContext.count} </h2>
			<button onClick={() => counterContext.dispatch("increment")}>
				Increment
			</button>
			<button onClick={() => counterContext.dispatch("incrementTwo")}>
				IncrementTwo
			</button>
			<button onClick={() => counterContext.dispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => counterContext.dispatch("reset")}>Reset</button>
		</>
	);
};

export default ComponentD;
