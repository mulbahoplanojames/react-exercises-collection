import { useContext } from "react";
import ComponentF from "./ComponentF";
import { CounterContext } from "../../Context/Context";

const ComponentE = () => {
	const counterContext = useContext(CounterContext);

	return (
		<div>
			<h2>Component E is with in Component C</h2>

			<h2>Component E Count = {counterContext.count} </h2>
			<button onClick={() => counterContext.dispatch("increment")}>
				Increment
			</button>
			<button onClick={() => counterContext.dispatch("decrement")}>
				Decrement
			</button>
			<button onClick={() => counterContext.dispatch("reset")}>Reset</button>
			<ComponentF />
		</div>
	);
};

export default ComponentE;
