import { Link } from "react-router-dom";
import { allStudentsTableData } from "../../../Constants/Constants";
import AllStudentsTableRow from "../../../Components/Table_Rows/AllStudentsTableRow";
import AllDepartmentsTableRow from "../../../Components/Table_Rows/AllDepartmentsTableRow";
import { allDepartments } from "../../../Data/Data_Two";

/**
 * @description This is a component for All Students Table, this component is used with in
 * the All Studen component to display or render All Students Informations or details in
 * a tabular form.
 * @returns {JSX.Element}
 */
const AllDepartmentTable = () => {
  return (
    // !Container div
    <>
      <div className="rounded-xl overflow-y-clip h-fit w-full overflow-x-auto bg-white">
        <p className="px-6 py-3 text-lg font-bold border-b-4 border-dotted">
          All Students List
        </p>

        {/* // !Buttons  */}
        <div className=" px-6 py-4">
          <Link to="">
            <button className="px-4 py-1 text-base text-white bg-blue-400 rounded-sm">
              Add New<span className="pl-2">+</span>
            </button>
          </Link>
        </div>

        {/* //! Table and Table Data  */}
        <table className="table text-center bg-white border">
          {/* head */}
          <thead>
            <tr className="text-base font-bold border">
              <th>#</th>
              <th>Dept. Name</th>
              <th>Head Of Dept.</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Starting Year</th>
              <th>Student Capacity</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {allDepartments.map((data) => (
              <AllDepartmentsTableRow
                key={data.id}
                id={data.id}
                departmentName={data.departmentName}
                headOfDepartment={data.headOfDepartment}
                departmentHeadEmail={data.Email}
                departmentHeadMobile={data.Phone}
                startingYear={data.startingYear}
                studentCapacity={data.studentCapacity}
                edit={data.Edit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllDepartmentTable;
