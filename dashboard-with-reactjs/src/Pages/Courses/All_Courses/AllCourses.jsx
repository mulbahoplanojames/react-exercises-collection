import DashboardOneHeader from "../../../Components/Dashboard_1_Header/DashboardOneHeader";
import allCourses from "../../../Data/Data_Two";
const AllCourses = () => {
  return (
    <>
      <section className="md:px-5 bg-1 px-3 py-10">
        <DashboardOneHeader text="All Courses List" />

        <div className="h-fit w-full bg-white rounded-lg">
          <h1 className="px-6 py-2 text-xl font-bold border-b-2 border-dotted">
            All Courses
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 px-6 py-5">
            {allCourses.map((course) => (
              <CourseCard
                key={course.course_id}
                title={course.course_title}
                professor={course.professor}
                duration={course.duration}
                image={course.course_image}
                students={course.number_of_students}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const CourseCard = (props) => {
  const { title, professor, duration, image, students } = props;

  return (
    <>
      <div className="h-fit w-[210px] px-1 border-[2px]">
        <div className="w-full h-[120px] bg-blue-700 mb-2 overflow-hidden">
          <img src={image} alt="" className="object-cover w-full h-full" />
        </div>
        <h1 className=" pb-2 pl-3 text-xl">{title}</h1>
        <p className="pb-3 pl-3">Dureation: {duration}</p>
        <p className="pb-3 pl-3">Professor: {professor}</p>
        <p className="pb-3 pl-3">Students: {students}</p>
        <button className="hover:opacity-75 px-4 py-1 mb-3 text-lg text-white bg-blue-500 rounded-sm shadow-md">
          Read More
        </button>
      </div>
    </>
  );
};

export default AllCourses;
