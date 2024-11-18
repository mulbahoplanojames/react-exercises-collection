import AllStudentsTable from "../../../../Components/Tables/All_Students_Table/AllStudentsTable";

/**
 * ListView component is a wrapper component that renders the AllStudentsTable component.
 *  It's a presentational component that handles how the AllStudentsTable component is displayed.
 * @returns {ReactElement} The ListView component
 */

const ListView = () => {
	return (
		<>
			<AllStudentsTable />
		</>
	);
};

export default ListView;
