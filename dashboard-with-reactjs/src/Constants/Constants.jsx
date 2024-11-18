/*
 * ===============================================================================
 * Messages that are recieve from friends in the messages navigation bar
 * This Data FriendMessages  is used with in the Messages
 * component to render all messages obtain from friends
 */

import avatar1 from "/src/assets/illu1.jpg";
import avatar2 from "/src/assets/illu2.jpg";
import avatar3 from "/src/assets/illu3.jpg";
import avatar4 from "/src/assets/illu4.jpg";
import avatar5 from "/src/assets/illu5.jpg";

export const FriendMessagesData = [
  {
    id: 1,
    name: "Wilma William",
    message: "Richard i found you on LinkedIn..",
    time: "Just Now",
    avater: avatar1,
  },
  {
    id: 2,
    name: "John Doe",
    message: "FWD, Is was there any important message given in cless today",
    time: "16 mins",
    avater: avatar2,
  },
  {
    id: 3,
    name: "Abdalla",
    message: "Please take a print of the assignment and send me",
    time: "2 hrs",
    avater: avatar3,
  },
  {
    id: 4,
    name: "Solomon",
    message: "Please apply for Oplano..",
    time: "40 mins",
    avater: avatar4,
  },
  {
    id: 5,
    name: "Mary",
    message: "At what time are we going to meet to do thhe graup assignment?",
    time: "50 mins",
    avater: avatar5,
  },
];

/*
 * ===============================================================================
 * Notifications that are recieve from friends or other medias in the navigation bar
 * This Data NotificationsData  is used with in the Notification
 * component to render all Notifications obtain from other medias
 */

//! Icons from React Icons
import { FaCheck, FaRegUser, FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoWarning } from "react-icons/io5";

export const NotificationsData = [
  {
    id: 1,
    notification: "Congraduations!",
    time: "Just Now",
    color: "#e91e63",
    icon: <FaCheck className="text-lg text-white" />,
  },
  {
    id: 2,
    notification: "Peter Manson is now following",
    time: "6 mins",
    color: "#2196f3",
    icon: <FaRegUser className="text-lg text-white" />,
  },
  {
    id: 3,
    notification: "Wilma, send you a message",
    time: "10 mins",
    color: "#673ab7",
    icon: <AiOutlineMessage className="text-lg text-white" />,
  },
  {
    id: 4,
    notification: "Jerry likes your picture",
    time: "16 mins",
    color: "pink",
    icon: <FaHeart className="text-lg text-white" />,
  },
  {
    id: 5,
    notification: "Warning!!",
    time: "20 mins",
    color: "#f1c500",
    icon: <IoWarning className="text-lg text-white" />,
  },
];

/*
 * ===============================================================================
 * Card One
 * Data informations that's use with in each cards of CardOne in the DashboardOneCardsWripper
 * This helpp to inmprove effeciency
 */
import { LuUsers, LuUser } from "react-icons/lu";
import { FiBook } from "react-icons/fi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";

const cardOneData = [
  {
    id: 1,
    label: "Total Staden...",
    number: "450",
    percentage: "45% increas...",
    color: " #4ddec1",
    value: "45",
    icon: <LuUsers className="text-4xl text-white" />,
  },
  {
    id: 2,
    label: "New Stadents",
    number: "157",
    percentage: "40% increas...",
    color: "#ffc269",
    value: "40",
    icon: <LuUser className="text-4xl text-white" />,
  },
  {
    id: 3,
    label: "Total Courses",
    number: "52",
    percentage: "85% increas...",
    color: "#ff6982",
    value: "85",
    icon: <FiBook className="text-4xl text-white" />,
  },
  {
    id: 4,
    label: "Fees Collectio...",
    number: "13,921",
    percentage: "50% increas...",
    color: "#57a5ff",
    value: "50",
    icon: <HiMiniCurrencyDollar className="text-4xl text-white" />,
  },
];
export default cardOneData;

/*
 * ===============================================================================
 * Card Two
 * Data informations that's use with in each cards of CardTwo in the DashboardOneCardsWripper
 * This helpp to inmprove effeciency
 */
import { FaUsers, FaUser, FaBook } from "react-icons/fa";
import { BsCupFill } from "react-icons/bs";

export const cardTwoData = [
  {
    id: 1,
    label: "Total Staden...",
    number: "4,586",
    percentage: "10.32%",
    icon: <FaUsers className="text-4xl text-orange-400" />,
  },
  {
    id: 2,
    label: "New Studen..",
    number: "323",
    percentage: "21.19%",
    icon: <FaUser className="text-4xl  text-[#00e396]" />,
  },
  {
    id: 3,
    label: "Total Courses",
    number: "103",
    percentage: "17.64%",
    icon: <FaBook className="text-4xl  text-[#673ab7]" />,
  },
  {
    id: 4,
    label: "Visitors",
    number: "2,352",
    percentage: "19.27%",
    icon: <BsCupFill className="text-4xl text-[#989898]" />,
  },
];

/*
 * ===============================================================================
 * All Students Grid View Data
 * This data is use with in the GridView Component to display the grid view of the students
 * in the AllStudents component Dashboard
 */

export const allStudentsGridViewData = [
  {
    id: 1,
    avatar: avatar7,
    name: "John Smith",
    subject: "Mathematics",
    location: "123 Main Street, Otherville, CA, 90210 (-122.4194)",
    city: "Anytown",
    contact: "+1 (123) 456-7890",
  },

  {
    id: 2,
    avatar: avatar2,
    name: "Alice Johnson",
    subject: "Physics",
    location: "456 Elm Street, Maplewood, NY, 10001 (-118.2437)",
    city: "Otherville",
    contact: "+1 (987) 654-3210",
  },
  {
    id: 3,
    avatar: avatar10,
    name: "Michael Brown",
    subject: "Biology",
    location: "789 Oak Avenue, Springside, IL, 60601 (-74.0060)",
    city: "Maplewood",
    contact: "+1 (345) 678-9012",
  },
  {
    id: 4,
    avatar: avatar11,
    name: "Emily Wilson",
    subject: "Chemistry",
    location: "555 Cedar Lane, Riverdale, CA, 90210 (-118.2437)",
    city: "Springside",
    contact: "+1 (901) 234-5678",
  },
  {
    id: 5,
    avatar: avatar8,
    name: "David Lee",
    subject: "Computer Science",
    location: "777 Willow Drive, Hilltop, IL, 60601 (-74.0060)",
    city: "Riverdale",
    contact: "+1 (567) 890-1234",
  },
  {
    id: 6,
    avatar: avatar6,
    name: "Sarah Taylor",
    subject: "History",
    location: "888 Birch Street, Lakeside, CA, 90210 (-122.4194)",
    city: "Hilltop",
    contact: "+1 (234) 567-8901",
  },
  {
    id: 7,
    avatar: avatar9,
    name: "Kevin Martinez",
    subject: "English",
    location: "999 Spruce Avenue, Meadowbrook, CA, 90210 (-122.4194)",
    city: "Lakeside",
    contact: "+1 (678) 901-2345",
  },
  {
    id: 8,
    avatar: avatar7,
    name: "Sophia Garcia",
    subject: "Art",
    location: "1010 Magnolia Road, Woodland, NY, 10001 (-118.2437)",
    city: "Meadowbrook",
    contact: "+1 (012) 345-6789",
  },
  {
    id: 9,
    avatar: avatar4,
    name: "Daniel Hernandez",
    subject: "Music",
    location: "1111 Cedar Lane, Mountainview, CA, 90210 (-122.4194)",
    city: "Woodland",
    contact: "+1 (890) 123-4567",
  },
  {
    id: 10,
    avatar: avatar6,
    name: "Olivia Perez",
    subject: "Geography",
    location: "1212 Willow Drive, Hillsboro, NY, 10001 (-118.2437)",
    city: "Mountainview",
    contact: "+1 (456) 789-0123",
  },
  {
    id: 11,
    avatar: avatar11,
    name: "William Nguyen",
    subject: "Economics",
    location: "123 Main Street, Otherville, CA, 90210 (-122.4194)",
    city: "Hillsboro",
    contact: "+1 (567) 890-1234",
  },
  {
    id: 12,
    avatar: avatar5,
    name: "Kevin Martinez",
    subject: "English",
    location: "999 Spruce Avenue, Meadowbrook, CA, 90210 (-122.4194)",
    city: "Lakeside",
    contact: "+1 (678) 901-2345",
  },
];

/*
 * ===============================================================================
 * All Students Table Data
 * This data is use with in the AllStudentsTable Component to display or render All Students Datas
 * or informations about the Students in side of the table role.
 */

import avatar6 from "/src/assets/user2.jpg";
import avatar7 from "/src/assets/user3.jpg";
import avatar8 from "/src/assets/user4.jpg";
import avatar9 from "/src/assets/user5.jpg";
import avatar10 from "/src/assets/user6.jpg";
import avatar11 from "/src/assets/user1.jpg";

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

export const allStudentsTableData = [
  {
    id: 1,
    avatar: avatar1,
    rollnumber: "12345",
    name: "John Doe",
    department: "Computer Science",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    admissiondate: "2023-09-01",
    action: buttonWrapper,
  },
  {
    id: 2,
    avatar: avatar2,
    rollnumber: "98463",
    name: "Mary Johson",
    department: "Computer Science",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    admissiondate: "2023-09-01",
    action: buttonWrapper,
  },
  {
    id: 3,
    avatar: avatar3,
    rollnumber: "35789",
    name: "Solomon Peterson",
    department: "Computer Science",
    mobile: "123-456-7890",
    email: "john.doe@example.com",
    admissiondate: "2023-09-01",
    action: buttonWrapper,
  },
  {
    id: 4,
    avatar: avatar4,
    rollnumber: "24680",
    name: "Michael Brown",
    department: "Physics",
    mobile: "234-567-8901",
    email: "michael.brown@example.com",
    admissiondate: "2023-06-10",
    action: buttonWrapper,
  },
  {
    id: 5,
    avatar: avatar5,
    rollnumber: "13579",
    name: "Emily Wilson",
    department: "Chemistry",
    mobile: "876-543-2109",
    email: "emily.wilson@example.com",
    admissiondate: "2023-05-05",
    action: buttonWrapper,
  },
  {
    id: 6,
    avatar: avatar1,
    rollnumber: "98765",
    name: "David Lee",
    department: "Biology",
    mobile: "543-210-9876",
    email: "david.lee@example.com",
    admissiondate: "2023-04-01",
    action: buttonWrapper,
  },
  {
    id: 7,
    avatar: avatar8,
    rollnumber: "43210",
    name: "Sarah Taylor",
    department: "Psychology",
    mobile: "321-098-7654",
    email: "sarah.taylor@example.com",
    admissiondate: "2023-03-15",
    action: buttonWrapper,
  },
  {
    id: 8,
    avatar: avatar9,
    rollnumber: "98761",
    name: "Kevin Martinez",
    department: "Sociology",
    mobile: "654-321-0987",
    email: "kevin.martinez@example.com",
    admissiondate: "2023-02-28",
    action: buttonWrapper,
  },
  {
    id: 9,
    avatar: avatar5,
    rollnumber: "54329",
    name: "Sophia Garcia",
    department: "History",
    mobile: "890-123-4567",
    email: "sophia.garcia@example.com",
    admissiondate: "2023-01-10",
    action: buttonWrapper,
  },
  {
    id: 10,
    avatar: avatar6,
    rollnumber: "12354",
    name: "Daniel Hernandez",
    department: "English",
    mobile: "123-890-4567",
    email: "daniel.hernandez@example.com",
    admissiondate: "2022-12-25",
    action: buttonWrapper,
  },
  {
    id: 11,
    avatar: avatar8,
    rollnumber: "67892",
    name: "Olivia Perez",
    department: "Art",
    mobile: "890-456-1234",
    email: "olivia.perez@example.com",
    admissiondate: "2022-11-20",
    action: buttonWrapper,
  },
  {
    id: 12,
    avatar: avatar9,
    rollnumber: "24682",
    name: "William Nguyen",
    department: "Geography",
    mobile: "234-890-5678",
    email: "william.nguyen@example.com",
    admissiondate: "2022-10-05",
    action: buttonWrapper,
  },
  {
    id: 13,
    avatar: avatar9,
    rollnumber: "13572",
    name: "Emma Rodriguez",
    department: "Political Science",
    mobile: "876-234-9012",
    email: "emma.rodriguez@example.com",
    admissiondate: "2022-09-01",
    action: buttonWrapper,
  },
  {
    id: 14,
    avatar: avatar10,
    rollnumber: "98769",
    name: "James Kim",
    department: "Economics",
    mobile: "543-901-2345",
    email: "james.kim@example.com",
    admissiondate: "2022-08-15",
    action: buttonWrapper,
  },
  {
    id: 15,
    avatar: avatar11,
    rollnumber: "43216",
    name: "Ava Chen",
    department: "Philosophy",
    mobile: "321-678-9012",
    email: "ava.chen@example.com",
    admissiondate: "2022-07-10",
    action: buttonWrapper,
  },
  {
    id: 16,
    avatar: avatar1,
    rollnumber: "98763",
    name: "Logan Wong",
    department: "Environmental Science",
    mobile: "654-901-2346",
    email: "logan.wong@example.com",
    admissiondate: "2022-06-05",
    action: buttonWrapper,
  },
  {
    id: 17,
    avatar: avatar2,
    rollnumber: "54328",
    name: "Mia Patel",
    department: "Communications",
    mobile: "890-234-5678",
    email: "mia.patel@example.com",
    admissiondate: "2022-05-01",
    action: buttonWrapper,
  },
  {
    id: 18,
    avatar: avatar3,
    rollnumber: "12357",
    name: "Ethan Wilson",
    department: "Music",
    mobile: "123-567-8901",
    email: "ethan.wilson@example.com",
    admissiondate: "2022-04-15",
    action: buttonWrapper,
  },
  {
    id: 19,
    avatar: avatar4,
    rollnumber: "67894",
    name: "Isabella Gonzalez",
    department: "Drama",
    mobile: "890-567-1234",
    email: "isabella.gonzalez@example.com",
    admissiondate: "2022-03-10",
    action: buttonWrapper,
  },
  {
    id: 20,
    avatar: avatar5,
    rollnumber: "24684",
    name: "Noah Ramirez",
    department: "Physical Education",
    mobile: "234-901-5678",
    email: "noah.ramirez@example.com",
    admissiondate: "2022-02-05",
    action: buttonWrapper,
  },
  {
    id: 21,
    avatar: avatar6,
    rollnumber: "13574",
    name: "Charlotte Lewis",
    department: "Nursing",
    mobile: "876-345-9012",
    email: "charlotte.lewis@example.com",
    admissiondate: "2022-01-01",
    action: buttonWrapper,
  },
  {
    id: 22,
    avatar: avatar7,
    rollnumber: "98767",
    name: "Benjamin Martinez",
    department: "Veterinary Science",
    mobile: "543-901-6789",
    email: "benjamin.martinez@example.com",
    admissiondate: "2021-12-25",
    action: buttonWrapper,
  },
  {
    id: 23,
    avatar: avatar8,
    rollnumber: "43212",
    name: "Amelia Clark",
    department: "Architecture",
    mobile: "321-678-9012",
    email: "amelia.clark@example.com",
    admissiondate: "2021-11-20",
    action: buttonWrapper,
  },
  {
    id: 24,
    avatar: avatar9,
    rollnumber: "98765",
    name: "Henry Thompson",
    department: "Linguistics",
    mobile: "654-901-2345",
    email: "henry.thompson@example.com",
    admissiondate: "2021-10-15",
    action: buttonWrapper,
  },
  {
    id: 25,
    avatar: avatar10,
    rollnumber: "54326",
    name: "Harper Rodriguez",
    department: "Anthropology",
    mobile: "890-234-5678",
    email: "harper.rodriguez@example.com",
    admissiondate: "2021-09-10",
    action: buttonWrapper,
  },
  {
    id: 26,
    avatar: avatar11,
    rollnumber: "12359",
    name: "Evelyn Harris",
    department: "Sustainability Studies",
    mobile: "123-678-9012",
    email: "evelyn.harris@example.com",
    admissiondate: "2021-08-05",
    action: buttonWrapper,
  },
  {
    id: 27,
    avatar: avatar8,
    rollnumber: "67896",
    name: "Liam Martinez",
    department: "Astronomy",
    mobile: "890-567-2345",
    email: "liam.martinez@example.com",
    admissiondate: "2021-07-01",
    action: buttonWrapper,
  },
  {
    id: 28,
    avatar: avatar4,
    rollnumber: "24686",
    name: "Mila Baker",
    department: "Fashion Design",
    mobile: "234-901-6789",
    email: "mila.baker@example.com",
    admissiondate: "2021-06-15",
    action: buttonWrapper,
  },
  {
    id: 29,
    avatar: avatar6,
    rollnumber: "13576",
    name: "Jackson Carter",
    department: "Criminal Justice",
    mobile: "876-345-9012",
    email: "jackson.carter@example.com",
    admissiondate: "2021-05-10",
    action: buttonWrapper,
  },
  {
    id: 30,
    avatar: avatar11,
    rollnumber: "98769",
    name: "Penelope White",
    department: "Journalism",
    mobile: "543-901-2345",
    email: "penelope.white@example.com",
    admissiondate: "2021-04-05",
    action: buttonWrapper,
  },
];
