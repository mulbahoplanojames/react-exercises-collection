/*
 * AllStudentsTableRow component
 * This component is used to display a single row of student data in the
 * All Students table on the Dashboard
 */
const AllStudentsTableRow = (props) => {
  // Destructure props
  const {
    avatar, // Student avatar URL
    studentname, // Student name
    department, // Student department
    email, // Student email
    mobile, // Student mobile
    rollnumber, // Student roll number
    rating, // Student rating
    admissiondate, // Student admission date
    action, // Action buttons (Edit, Delete, etc.)
  } = props;

  return (
    // Return a <tr> element
    <tr className="hover:bg-slate-200">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-8 h-8">
            <img src={avatar} alt={avatar} />
          </div>
        </div>
      </td>
      <td>
        <div>{rollnumber}</div>
      </td>
      <td>
        <div>{studentname}</div>
      </td>
      <td>
        <span className="text-sm">{department}</span>
      </td>
      <td>{mobile}</td>
      <td>{email}</td>
      <td>{admissiondate}</td>
      <td>{action}</td>
    </tr>
  );
};

export default AllStudentsTableRow;
