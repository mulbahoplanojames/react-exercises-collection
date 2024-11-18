import { useState } from "react";

const EditDepartmentForm = () => {
  const [departmentName, setDepartmentName] = useState("Computer Science");
  const [headOfDepartment, setHeadOfDepartment] = useState("John Doe");
  const [startDate, setStartDate] = useState("12-12-2022");
  const [studentCapicity, setStudentCapicity] = useState("120");
  const [details, setDetails] = useState(
    "This department is about web development and mobile app development"
  );

  return (
    <section className="h-fit w-full pb-10 bg-white rounded-md shadow-md">
      {/* Header with the form title */}
      <h1 className=" px-5 py-2 text-lg font-semibold border-b-[2px] border-gray-400 border-dotted">
        Edit Department
      </h1>
      {/* Main form content */}
      <div className=" px-5 py-6">
        <DepartmentName_HeadOfDepartment
          departmentName={departmentName}
          setDepartmentName={setDepartmentName}
          headOfDepartment={headOfDepartment}
          setHeadOfDepartment={setHeadOfDepartment}
        />
        <DepartmentStartDate_StudentCapicity
          startDate={startDate}
          setStartDate={setStartDate}
          studentCapicity={studentCapicity}
          setStudentCapicity={setStudentCapicity}
        />
        <DepartmentDetails details={details} setDetails={setDetails} />
      </div>
      {/* Buttons to submit and cancel the form */}
      <div className="pl-[24rem] ">
        <button className="tw_btn mr-8 bg-blue-500">Submit</button>
        <button className="tw_btn bg-red-500">Cancel</button>
      </div>
    </section>
  );
};

const DepartmentName_HeadOfDepartment = (props) => {
  const {
    departmentName,
    setDepartmentName,
    headOfDepartment,
    setHeadOfDepartment,
  } = props;

  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          placeholder="Department Name"
          className="border-b-[2px] inline-block w-full py-2 mr-5 outline-none focus:border-blue-500"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Head Of Department"
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500 "
          value={headOfDepartment}
          onChange={(e) => setHeadOfDepartment(e.target.value)}
        />
      </div>
    </div>
  );
};

const DepartmentStartDate_StudentCapicity = (props) => {
  const { startDate, setStartDate, studentCapicity, setStudentCapicity } =
    props;

  return (
    <div className=" px-5 pb-4">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          required
          name="startDate"
          id="startDate"
          onFocus={(e) => (e.target.type = "date")}
          placeholder="Department Start Date"
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Student Capicity"
          className="w-full py-6 border-b-[2px] outline-none focus:border-blue-500"
          value={studentCapicity}
          onChange={(e) => setStudentCapicity(e.target.value)}
        />
      </div>
    </div>
  );
};

const DepartmentDetails = (props) => {
  const { details, setDetails } = props;

  return (
    <div className=" px-5 py-10">
      <input
        type="text"
        required
        name="DepartmentDetails"
        id="DepartmentDetails"
        placeholder="Department Details"
        className="inline-block w-full py-6 mr-5 border-b-[2px] outline-none focus:border-blue-500"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
    </div>
  );
};

export default EditDepartmentForm;
