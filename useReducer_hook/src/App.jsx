// import UseReducer from "./Components/ExerciseOne/UseReducer";
// import UseReducerTwo from "./Components/ExerciseOne/UseReducerTwo";
// import UseState from "./Components/ExerciseOne/UseState";
import ComponentA from "./Components/ExerciseTwo Reducer and Context/ComponentA";
import ComponentB from "./Components/ExerciseTwo Reducer and Context/ComponentB";
import ComponentC from "./Components/ExerciseTwo Reducer and Context/ComponentC";

const App = () => {
	return (
		<>
			<ComponentA text={"Hello"} />
			<p>
				-----------------------------------------------------------------------------------
			</p>
			<ComponentB />
			<p>
				-----------------------------------------------------------------------------------
			</p>
			<ComponentC />
		</>
	);
};

export default App;
