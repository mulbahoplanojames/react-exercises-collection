import course1 from "/src/assets/course1.jpg";
import course2 from "/src/assets/course2.jpg";
import course3 from "/src/assets/course3.jpg";
import course4 from "/src/assets/course4.jpg";

const allCourses = [
  {
    course_id: "CS101",
    course_title: "Introduction to Computer Science",
    professor: "Dr. John Smith",
    duration: "12 weeks",
    number_of_students: 150,
    course_image: course1,
  },
  {
    course_id: "ENG201",
    course_title: "English Literature: Shakespeare's Works",
    professor: "Prof. Emily Johnson",
    duration: "10 weeks",
    number_of_students: 120,
    course_image: course2,
  },
  {
    course_id: "MATH301",
    course_title: "Advanced Calculus",
    professor: "Dr. Sarah Thompson",
    duration: "8 weeks",
    number_of_students: 90,
    course_image: course3,
  },
  {
    course_id: "CS102",
    course_title: "Introduction to Computer Science",
    professor: "Dr. John Smith",
    duration: "12 weeks",
    number_of_students: 150,
    course_image: course4,
  },
  {
    course_id: "ENG202",
    course_title: "English Literature: Shakespeare's Works",
    professor: "Prof. Emily Johnson",
    duration: "10 weeks",
    number_of_students: 120,
    course_image: course1,
  },
  {
    course_id: "MATH302",
    course_title: "Advanced Calculus",
    professor: "Dr. Sarah Thompson",
    duration: "8 weeks",
    number_of_students: 90,
    course_image: course2,
  },
  {
    course_id: "PHYS101",
    course_title: "Introduction to Physics",
    professor: "Dr. Michael Davis",
    duration: "10 weeks",
    number_of_students: 100,
    course_image: course3,
  },
  {
    course_id: "CHEM201",
    course_title: "Organic Chemistry",
    professor: "Prof. Julia Roberts",
    duration: "12 weeks",
    number_of_students: 80,
    course_image: course4,
  },
  {
    course_id: "HIST301",
    course_title: "World History: Ancient Civilizations",
    professor: "Dr. David Lee",
    duration: "14 weeks",
    number_of_students: 110,
    course_image: course1,
  },
  {
    course_id: "PSYC101",
    course_title: "Introduction to Psychology",
    professor: "Prof. Michelle Adams",
    duration: "8 weeks",
    number_of_students: 130,
    course_image: course2,
  },
  {
    course_id: "ARTS201",
    course_title: "Introduction to Fine Arts",
    professor: "Dr. Daniel Brown",
    duration: "6 weeks",
    number_of_students: 95,
    course_image: course4,
  },
  {
    course_id: "BUSN301",
    course_title: "Business Management Strategies",
    professor: "Prof. Laura Wilson",
    duration: "10 weeks",
    number_of_students: 120,
    course_image: course1,
  },
];

export default allCourses;

/*
 * ===============================================================================================
 * Data for Departments table component
 */

//? Icons from react icons
import { FaPen, FaRegTrashAlt } from "react-icons/fa";

//? Edit button to edit students details
const editBtn = (
  <button className="bg-[#00e396] hover:bg-green-700 text-white text-base py-1 px-1 cursor-pointer rounded-md">
    <FaPen className="text-sm" />
  </button>
);

//? Delete button to delete students
const deleteBtn = (
  <button className="hover:bg-red-700 px-1 py-1 text-base text-white bg-red-400 rounded-md cursor-pointer">
    <FaRegTrashAlt className="text-sm" />
  </button>
);

//? Button Wrapper to wrap edit and delete buttons
const buttonWrapper = (
  <div className="flex gap-2">
    {editBtn}
    {deleteBtn}
  </div>
);

export const allDepartments = [
  {
    id: 1,
    departmentName: "Computer Science",
    headOfDepartment: "Dr. Emily Johnson",
    Phone: "+1234567890",
    Email: "csdept@example.com",
    startingYear: 1985,
    studentCapacity: 300,
    Edit: buttonWrapper,
  },
  {
    id: 2,
    departmentName: "Electrical Engineering",
    headOfDepartment: "Prof. Michael Smith",
    Phone: "+1987654321",
    Email: "ee_dept@example.com",
    startingYear: 1978,
    studentCapacity: 250,
    Edit: buttonWrapper,
  },
  {
    id: 3,
    departmentName: "Mathematics",
    headOfDepartment: "Dr. Sarah Adams",
    Phone: "+1122334455",
    Email: "mathdept@example.com",
    startingYear: 1960,
    studentCapacity: 200,
    Edit: buttonWrapper,
  },
  {
    id: 4,
    departmentName: "Physics",
    headOfDepartment: "Prof. John Davis",
    Phone: "+1555666777",
    Email: "physicsdept@example.com",
    startingYear: 1950,
    studentCapacity: 180,
    Edit: buttonWrapper,
  },
  {
    id: 5,
    departmentName: "Chemistry",
    headOfDepartment: "Dr. Laura Wilson",
    Phone: "+1444333222",
    Email: "chemdept@example.com",
    startingYear: 1965,
    studentCapacity: 220,
    Edit: buttonWrapper,
  },
  {
    id: 6,
    departmentName: "Biology",
    headOfDepartment: "Prof. Robert Clark",
    Phone: "+1777888999",
    Email: "biologydept@example.com",
    startingYear: 1972,
    studentCapacity: 190,
    Edit: buttonWrapper,
  },
  {
    id: 7,
    departmentName: "History",
    headOfDepartment: "Dr. Jessica Brown",
    Phone: "+1666777888",
    Email: "historydept@example.com",
    startingYear: 1958,
    studentCapacity: 170,
    Edit: buttonWrapper,
  },
  {
    id: 8,
    departmentName: "English Literature",
    headOfDepartment: "Prof. Daniel White",
    Phone: "+1999888777",
    Email: "englitdept@example.com",
    startingYear: 1968,
    studentCapacity: 210,
    Edit: buttonWrapper,
  },
  {
    id: 9,
    departmentName: "Economics",
    headOfDepartment: "Dr. Olivia Taylor",
    Phone: "+1888777666",
    Email: "econdept@example.com",
    startingYear: 1975,
    studentCapacity: 230,
    Edit: buttonWrapper,
  },
  {
    id: 10,
    departmentName: "Psychology",
    headOfDepartment: "Prof. Samuel Adams",
    Phone: "+1222111333",
    Email: "psychdept@example.com",
    startingYear: 1963,
    studentCapacity: 250,
    Edit: buttonWrapper,
  },
  {
    id: 11,
    departmentName: "Sociology",
    headOfDepartment: "Dr. Sophia Miller",
    Phone: "+1444555666",
    Email: "socdept@example.com",
    startingYear: 1979,
    studentCapacity: 180,
    Edit: buttonWrapper,
  },
  {
    id: 12,
    departmentName: "Political Science",
    headOfDepartment: "Prof. Nathan Clark",
    Phone: "+1333444555",
    Email: "poliscidept@example.com",
    startingYear: 1956,
    studentCapacity: 200,
    Edit: buttonWrapper,
  },
  {
    id: 13,
    departmentName: "Philosophy",
    headOfDepartment: "Dr. Lily Moore",
    Phone: "+1888222333",
    Email: "philodept@example.com",
    startingYear: 1966,
    studentCapacity: 190,
    Edit: buttonWrapper,
  },
  {
    id: 14,
    departmentName: "Art History",
    headOfDepartment: "Prof. Ethan Harris",
    Phone: "+1222999888",
    Email: "arthistdept@example.com",
    startingYear: 1970,
    studentCapacity: 160,
    Edit: buttonWrapper,
  },
  {
    id: 15,
    departmentName: "Music",
    headOfDepartment: "Dr. Grace Turner",
    Phone: "+1777666555",
    Email: "musicdept@example.com",
    startingYear: 1969,
    studentCapacity: 180,
    Edit: buttonWrapper,
  },
];
