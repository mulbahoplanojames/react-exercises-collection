import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import AddStudentsForm from "./AddStudentsForm";

/**
 * @description AddStudents Component
 * This is a functional component that is responsible for rendering the AddStudents Page
 */
const AddStudents = () => {
  return (
    // section container to hold everything on this page
    <section className="md:px-5 bg-1 px-3 py-10">
      {/* Dashboard Header Component */}
      <DashboardOneHeader text="Add Student" />
      {/* AddStudentsForm component to render the form */}
      <AddStudentsForm />
    </section>
  );
};

export default AddStudents;
