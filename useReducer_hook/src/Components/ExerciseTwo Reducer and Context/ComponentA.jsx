import ComponentF from "./ComponentF";

const ComponentA = ({ text }) => {
	return (
		<div>
			ComponentA
			<ComponentF text={text} />
		</div>
	);
};

export default ComponentA;
