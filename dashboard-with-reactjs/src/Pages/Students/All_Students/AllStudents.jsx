import { Outlet } from "react-router-dom";
import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import ListViewButton from "../../../Interfaces/List_View_Button/ListViewButton";
import GridViewButton from "../../../Interfaces/Grid_View_Button/GridViewButton";
import { Suspense } from "react";

// This is a functional component that is responsible for rendering the AllStudents Page
const AllStudents = () => {
  // This section element is used as a container to hold everything on this page
  return (
    <>
      <section className="md:px-5 bg-1 px-3 py-10">
        {/* This is an import of the Dashboard header component */}
        <DashboardOneHeader text="All Students List" />
        <Suspense fallback={spinner}>
          <div className="flex gap-4 pb-10">
            <ListViewButton />
            <GridViewButton />
          </div>
        </Suspense>

        {/* This is an import of the AllStudentsTable component */}
        <div className="">{<Outlet />}</div>
      </section>
    </>
  );
};

const spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-3xl font-bold">Loading...</p>
    </div>
  );
};

export default AllStudents;
