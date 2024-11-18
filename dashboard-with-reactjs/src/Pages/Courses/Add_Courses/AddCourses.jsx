import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import AddCourseForm from "./AddCourseForm";

/**
 * @description AddStudents Component
 * This is a functional component that is responsible for rendering the AddStudents Page
 */
const AddCourses = () => {
  return (
    // section container to hold everything on this page
    <section className="md:px-5 bg-1 px-3 py-10">
      {/* Dashboard Header Component */}
      <DashboardOneHeader text="Add Course" />
      {/* AddCourseForm component to render the form */}
      <AddCourseForm />
    </section>
  );
};

export default AddCourses;
