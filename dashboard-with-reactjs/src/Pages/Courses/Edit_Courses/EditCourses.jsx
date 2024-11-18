import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import EditCourseForm from "./EditCoursesForm";

/**
 * @description EditStudents Component
 * This is a functional component that is responsible for rendering the EditStudents Page
 */
const EditCourses = () => {
  return (
    // section container to hold everything on this page
    <section className="md:px-5 bg-1 px-3 py-10">
      {/* Dashboard Header Component */}
      <DashboardOneHeader text="Add Course" />
      {/* EditCourseForm component to render the form */}
      <EditCourseForm />
    </section>
  );
};

export default EditCourses;
