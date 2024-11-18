import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import EditDepartmentForm from "./EditDepartmentForm";

/**
 * @description EditDepartment Component
 * This is a functional component that is responsible for rendering the EditDepartment Page
 */
const EditDepartment = () => {
  return (
    // section container to hold everything on this page
    <section className="md:px-5 bg-1 px-3 py-10">
      {/* Dashboard Header Component */}
      <DashboardOneHeader text="Edit Department" />
      {/* EditDepartmentForm component to render the form */}
      <EditDepartmentForm />
    </section>
  );
};

export default EditDepartment;
