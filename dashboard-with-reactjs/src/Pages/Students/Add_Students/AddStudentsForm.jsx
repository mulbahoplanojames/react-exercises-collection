import { useState } from "react";

//Component for the Add Students Form page
const AddStudentsForm = () => {
  const [firstName, setFirstNeme] = useState("Jonh");

  return (
    <section className="h-fit w-full pb-10 bg-white rounded-md shadow-md">
      {/* Header with the form title */}
      <h1 className=" px-5 py-2 text-lg font-semibold border-b-[2px] border-gray-400 border-dotted">
        Basic Information
      </h1>
      {/* Main form content */}
      <div className=" px-5 py-6">
        <Names firstname={firstName} setFirstNeme={setFirstNeme} />
        <RollNumber_Email />
        <RegistrationDate_Class />
        <Gender_MobileNumber />
        <BirthDate_BloodGroup />
        <Address />
      </div>
      {/* Buttons to submit and cancel the form */}
      <div className="pl-[24rem] ">
        <button className="tw_btn mr-8 bg-blue-500">Submit</button>
        <button className="tw_btn bg-red-500">Cancel</button>
      </div>
    </section>
  );
};

/**
 * Component for the First Name and Last Name input fields
 */
const Names = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        {/* First Name input field */}
        <input
          type="text"
          placeholder="First Name"
          className="border-b-[2px] inline-block w-full py-2 mr-5 outline-none focus:border-blue-500"
        />
        {/* Last Name input field */}
        <input
          type="text"
          placeholder="Last Name"
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500 "
        />
      </div>
    </div>
  );
};

/**
 * Component for the Roll Number and Email input fields
 */
const RollNumber_Email = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="number"
          required
          placeholder="Roll No"
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500"
        />
        <input
          type="email"
          required
          placeholder="Email"
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const RegistrationDate_Class = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          required
          name="registrationdate"
          id="registrationdate"
          onFocus={(e) => (e.target.type = "date")}
          placeholder="Registration Date"
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500"
        />
        <select
          name="gender"
          id="gender"
          placeholder="Gender"
          className="inline-block w-full py-2 mr-5 bg-transparent border-b-[2px] outline-none focus:border-blue-500"
        >
          <option value="gender" disabled selected hidden>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

const Gender_MobileNumber = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <select
          name="class"
          id="class"
          className="inline-block w-full py-2 mr-5 bg-transparent border-b-[2px] outline-none focus:border-blue-500"
        >
          <option value="class" disabled selected hidden>
            Class
          </option>
          <option value="male">Computer Science</option>
          <option value="female">Finance</option>
          <option value="other">Mathematics</option>
          <option value="other">International Relogion</option>
          <option value="other">Public and Private Law</option>
        </select>
        <input
          type="text"
          placeholder="Mobile Number"
          className=" w-full py-2 border-b-[2px] outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

const BirthDate_BloodGroup = () => {
  return (
    <div className=" px-5 py-10">
      <div className="gap-x-8 grid grid-cols-2">
        <input
          type="text"
          name="birthdate"
          id="birthdate"
          required
          onFocus={(e) => (e.target.type = "date")}
          placeholder="Birth Date"
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500 "
        />
        <input
          type="text"
          name="bloodgroup"
          placeholder="Blood Group"
          id="bloodgroup"
          className="inline-block w-full py-2 mr-5 border-b-[2px] outline-none focus:border-blue-500 "
        />
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div className=" px-5 pb-4">
      <input
        type="text"
        placeholder="Address"
        className="inline-block w-full py-6 border-b-[2px] outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default AddStudentsForm;
