import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import EditStudentForm from "./EditStudentForm";

/**
 * Component for Edit Student Page
 * This component is used to Edit Student's Details
 */
const EditStudent = () => {
  return (
    <>
      {/* Edit Student Page Wrapper */}
      <section className="md:px-5 bg-1 px-3 py-10">
        {/* Dashboard One Header for Edit Student Page */}
        <DashboardOneHeader text="Edit Student" />
        {/* Edit Student Form Component */}
        <EditStudentForm />
      </section>
    </>
  );
};

export default EditStudent;
