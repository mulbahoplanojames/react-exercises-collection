/*
 * AllDepartmentsTableRow component
 * This component is used to display a single row of student data in the
 * All Students table on the Dashboard
 */
const AllDepartmentsTableRow = (props) => {
  // Destructure props
  const {
    id,
    departmentName,
    headOfDepartment,
    departmentHeadEmail,
    departmentHeadMobile,
    startingYear,
    studentCapacity,
    edit,
  } = props;

  return (
    // Return a <tr> element
    <tr className="hover:bg-slate-200">
      <td>{id}</td>
      <td>{departmentName} </td>
      <td>{headOfDepartment}</td>
      <td>{departmentHeadMobile}</td>
      <td>{departmentHeadEmail}</td>
      <td>{startingYear}</td>
      <td>{studentCapacity}</td>
      <td>{edit}</td>
    </tr>
  );
};

export default AllDepartmentsTableRow;
