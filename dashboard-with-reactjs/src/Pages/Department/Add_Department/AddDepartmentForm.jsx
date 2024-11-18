//Component for the Add Students Form page
const AddDepartmentForm = () => {
  return (
    <section className="h-fit w-full pb-10 bg-white rounded-md shadow-md">
      {/* Header with the form title */}
      <h1 className=" px-5 py-2 text-lg font-semibold border-b-[2px] border-gray-400 border-dotted">
        Add Department
      </h1>
      {/* Main form content */}
      <div className=" px-5 py-6">
        <DepartmentName_HeadOfDepartment />
        <DepartmentStartDate_StudentCapicity />
        <DepartmentDetails />
      </div>
      {/* Buttons to submit and cancel the form */}
      <div className="pl-[24rem] ">
        <button className="tw_btn mr-8 bg-blue-500">Submit</button>
        <button className="tw_btn bg-red-500">Cancel</button>
      </div>
    </section>
  );
};

const DepartmentName_HeadOfDepartment = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        {/* First Name input field */}
        <input
          type="text"
          placeholder="Department Name"
          className="border-b-[2px] inline-block w-full py-2 mr-5 outline-none focus:border-blue-500"
        />
        {/* Last Name input field */}
        <input
          type="text"
          placeholder="Head Of Department"
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500 "
        />
      </div>
    </div>
  );
};

const DepartmentStartDate_StudentCapicity = () => {
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
        />
        <input
          type="text"
          placeholder="Student Capicity"
          className="w-full py-6 border-b-[2px] outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const DepartmentDetails = () => {
  return (
    <div className=" px-5 py-10">
      <input
        type="text"
        required
        name="DepartmentDetails"
        id="DepartmentDetails"
        placeholder="Department Details"
        className="inline-block w-full py-6 mr-5 border-b-[2px] outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default AddDepartmentForm;
