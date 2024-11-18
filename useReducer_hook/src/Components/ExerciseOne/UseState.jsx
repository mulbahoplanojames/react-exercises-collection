import { useState } from "react";

const styled = {
	marginRight: "10px",
};

const UseState = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>UseState</h1>

			<h2>Count - {count}</h2>
			<button
				style={styled}
				onClick={() =>
					setCount((prevCount) => {
						prevCount + 1;
						console.log(prevCount + 1);
					})
				}
			>
				Increment
			</button>
			<button
				style={styled}
				onClick={() => setCount((prevCount) => prevCount - 1)}
			>
				Decrement
			</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</>
	);
};

export default UseState;
