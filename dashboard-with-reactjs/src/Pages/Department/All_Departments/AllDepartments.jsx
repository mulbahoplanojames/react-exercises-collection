import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import AllDepartmentTable from "./AllDepartmentTable";

const AllDepartments = () => {
  return (
    <>
      <section className="md:px-5 bg-1 px-3 py-10">
        <DashboardOneHeader text="All Departments" />

        <AllDepartmentTable />
      </section>
    </>
  );
};

export default AllDepartments;
