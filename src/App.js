import { createContext, useContext, useState } from "react";
import "./App.css";
import { Students } from "./Students";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AddStudent from "./AddStudent";
import { Backdrop, Paper } from "@mui/material";
import Mentors from "./Mentors";
import { EditStudent } from "./EditStudent";
import StudentMentor from "./StudentMentor";
import AddMentor from "./AddMentor";
import { EditMentor } from "./EditMentor";

// import EditStudent from "./EditStudent";
export const crtContext = createContext();

function App() {
  let [students, setStudents] = useState([
    {
      name: "Sudharshan Kamavaram",
      age: 25,
      address: "G-4,Daredia Sky Garden,Kompally Hyderabad-500014",
      profession: "Software Engineer",
      Course: "Full Stack Development",
      ECTC: "10 LPA",
      CTC: "4 LPA",
      Mentors: [],
      classtaking: "Full Stack Development",
      id: 0,
    },
    {
      name: "Vishnu Kamavaram",
      age: 31,
      address: "A-112,Krishvi Gavakshi, Bangalore-500411",
      profession: "Software Engineer",
      Course: "Web Development",
      ECTC: "1 Cr",
      CTC: "65 LPA",
      Mentors: [],
      classtaking: "Web Development",
      id: 1,
    },
    {
      name: "Jagan Macharla",
      age: 21,
      address: "Flat No. 119,Sri Vidhya Apartments, Chennai-500421",
      profession: "Jr. Software Engineer",
      Course: "Full Stack Development",
      ECTC: "10 LPA",
      CTC: "3.25 LPA",
      Mentors: [],
      classtaking: "Full Stack Development",
      id: 2,
    },
    {
      name: "Sowmya",
      age: 21,
      address: "A-112,Krishvi Gavakshi, Bangalore-500411",
      profession: "Cloud Engineer",
      Course: "Web Development",
      ECTC: "50 LPA",
      CTC: "31 LPA",
      Mentors: [],
      classtaking: "Web Development",
      id: 3,
    },
    {
      name: "Rajesh",
      age: 21,
      address: "A-404, Sri Vidhya Housing Layout, Kurnool",
      profession: "Java Develpoer",
      Course: "Full Stack Development",
      ECTC: "8 LPA",
      CTC: "3 LPA",
      Mentors: [],
      classtaking: "Full Stack Development",
      id: 4,
    },
    {
      name: "Sinduja",
      age: 21,
      address: "A-404, Sri Vidhya Layout, Guntur",
      profession: "Java Develpoer",
      Course: "Web Development",
      ECTC: "8 LPA",
      CTC: "4 LPA",
      Mentors: [],
      classtaking: "",
      id: 5,
    },
    {
      name: "Sreenivasulu",
      age: 45,
      address: "2/D Swamy Vivekananda colony, Hyderabad",
      profession: "Bank Manager",
      Course: "Web Development",
      ECTC: "45 LPA",
      CTC: "12 LPA",
      Mentors: [],
      classtaking: "",
      id: 6,
    },
    {
      name: "Uma Maheswari",
      age: 44,
      address: "2/D Swamy Vivekananda colony, Hyderabad",
      profession: "House Wife",
      Course: "Full Stack Development",
      ECTC: "24 LPA",
      CTC: "12 LPA",
      Mentors: [],
      classtaking: "",
      id: 7,
    },
  ]);
  let [mentors, setMentor] = useState([
    {
      mentorName: "Sanjay",
      Course: "Full Stack Development",
      Students: [],
      age: 25,
      address: "G-4,Daredia Sky Garden,Kompally Hyderabad-500014",
      profession: "Software Engineer",
      id: 0,
    },
    {
      mentorName: "Ragav Kumar",
      Course: "Web Development",
      Students: [],
      age: 25,
      address: "G-4,Daredia Sky Garden,Kompally Hyderabad-500014",
      profession: "Software Engineer",
      id: 1,
    },
    {
      mentorName: "Neelima",
      Course: "Full Stack Development",
      Students: [],
      age: 25,
      address: "G-4,Daredia Sky Garden,Kompally Hyderabad-500014",
      profession: "Software Engineer",
      id: 2,
    },
    {
      mentorName: "Ragav Juwal",
      Course: "Web Development",
      Students: [],
      age: 25,
      address: "G-4,Daredia Sky Garden,Kompally Hyderabad-500014",
      profession: "Software Engineer",
      id: 3,
    },
  ]);
  var navigate = useNavigate();

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/AddStudent")}>
              Add Student
            </Button>
            <Button color="inherit" onClick={() => navigate("/Addmentor")}>
              Add Mentor
            </Button>
            <Button color="inherit" onClick={() => navigate("/studentmentor")}>
              Student Mentor
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <crtContext.Provider value={[students, setStudents, mentors, setMentor]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/Addstudent" element={<AddStudent />} />
          <Route path="/Addmentor" element={<AddMentor />} />
          {/* <Route path="/viewstudent" element={<ViewStudent />} /> */}
          <Route path="/viewstudent/:id" element={<StudentDetails />} />
          <Route path="/editstudent/:id" element={<EditStudent />} />
          <Route path="/editmentor/:id" element={<EditMentor />} />
          <Route path="/studentmentor" element={<StudentMentor />} />
          <Route path="/viewmentor/:id" element={<MentorDetails />} />
        </Routes>
      </crtContext.Provider>
    </div>
  );
}
function Home() {
  var navigate = useNavigate();
  return (
    <div className="Home">
      <div className="StudentHome">
        <img src="https://www.gettingsmart.com/wp-content/uploads/2021/09/0f799fcf-c984-46b3-b154-48ac539c22b9_thewhyofeducation_web201-1536x1136.png"></img>
        <br></br>
        <Button onClick={() => navigate("/students")} variant="contained">
          STUDENT
        </Button>
      </div>
      <div className="StudentHome">
        <img src="https://shssharkattack.com/wp-content/uploads/2022/12/connecting-across-content-areas_orig-475x249.png"></img>
        <br></br>
        <Button onClick={() => navigate("/Mentors")} variant="contained">
          Mentors
        </Button>
      </div>
    </div>
  );
}

function StudentDetails() {
  const [students, setStudents] = useContext(crtContext);
  const { id } = useParams();
  var navigate = useNavigate();
  var data = students[id];
  console.log(data);
  return (
    <Paper elevation={20} className="Details">
      <h3>Name: {data.name}</h3>
      <h3>Address: {data.address}</h3>
      <h3>Profession: {data.profession}</h3>
      <h3>Course: {data.Course}</h3>
      <h3>Expected CTC: {data.ECTC}</h3>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        variant="outlined"
      >
        BACK
      </Button>
    </Paper>
  );
}
function MentorDetails() {
  const [students, setStudents, mentors, setMentor] = useContext(crtContext);
  const { id } = useParams();
  var navigate = useNavigate();
  console.log(id);
  var data = mentors[id];
  console.log(data);
  return (
    <Paper elevation={20} className="Details">
      <h3>Name: {data.mentorName}</h3>
      <h3>Address: {data.address}</h3>
      <h3>Profession: {data.profession}</h3>
      <h3>Course: {data.Course}</h3>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        variant="outlined"
      >
        BACK
      </Button>
    </Paper>
  );
}

export default App;
