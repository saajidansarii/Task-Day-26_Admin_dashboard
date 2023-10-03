import { useContext, useState } from "react";
import { crtContext } from "./App";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function Student({ student, index, classassigned }) {
  let [show, setShow] = useState(false);
  let [classtaking, setClasstaking] = useState(student.classtaking);
  const stylesheet = {
    display: show ? "block" : "none",
  };
  let [students, setstudents] = useContext(crtContext);
  const [togglestyle, setTogglestyle] = useState(true);
  const removeStudent = (id) => {
    console.log(id);
    var index = parseInt(id);
    for (let i = index + 1; i < students.length; i++) {
      student = students[i];
      id = student.id;
      student.id = student.id - 1;
    }
    setstudents([...students.slice(0, index), ...students.slice(index + 1)]);
  };
  var navigate = useNavigate();
  return (
    <div id={index} className="StudentCard">
      <div className="studentHeading">
        <div>
          <h2>{student.name}</h2>
        </div>
        <EditIcon onClick={() => navigate(`/editstudent/${index}`)} />
        <InfoIcon
          color="primary"
          onClick={() => navigate(`/viewstudent/${index}`)}
        />
        <DeleteIcon color="error" onClick={() => removeStudent(student.id)}>
          Delete
        </DeleteIcon>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
      <div style={stylesheet}>
        <div>
          <b>Profesion:</b> {student.profession}
        </div>
        <div>
          <b>Course:</b> {student.Course}
        </div>
        <div>
          <b>ECTC:</b> {student.ECTC}
        </div>
        {!classassigned ? (
          <ClassSelection
            id={index}
            student={student}
            classtaking={classtaking}
            setClasstaking={setClasstaking}
          />
        ) : null}
      </div>
    </div>
  );
}

function ClassSelection({ id, student }) {
  const [students, setStudents] = useContext(crtContext);
  const updateStudent = (number) => {
    console.log(number);
    student["classtaking"] = `${number}`;
    var index = parseInt(id);
    setStudents([
      ...students.slice(0, index),
      student,
      ...students.slice(index + 1),
    ]);
  };
  return (
    <div className="ClassSelection">
      <Button
        startIcon={<AddIcon />}
        onClick={() => updateStudent("Web Development")}
        variant="outlined"
      >
        Web Development
      </Button>
      <Button
        startIcon={<AddIcon />}
        onClick={() => updateStudent("Full Stack Development")}
        variant="outlined"
      >
        Full Stack Development
      </Button>
    </div>
  );
}
