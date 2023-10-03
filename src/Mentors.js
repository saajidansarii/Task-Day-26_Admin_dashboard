import { Paper } from "@mui/material";
import { useContext, useState } from "react";
import { crtContext } from "./App";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Mentors() {
  const [students, setstudents, mentors, setMentor] = useContext(crtContext);
  console.log(mentors);

  return (
    <div className="Mentors">
      {mentors.map((data) => {
        return <MentorDetails data={data} />;
      })}
    </div>
  );
}

function MentorDetails({ data }) {
  const [students, setStudents, mentors, setMentor] = useContext(crtContext);
  let [show, setShow] = useState(false);
  const stylesheet = {
    display: show ? "block" : "none",
  };
  const removeStudent = (id) => {
    var index = parseInt(id);
    for (let i = index + 1; i < mentors.length; i++) {
      var mentor = mentors[i];
      id = mentor.id;
      mentor.id = mentor.id - 1;
    }
    setMentor([...mentors.slice(0, index), ...mentors.slice(index + 1)]);
  };
  return (
    <div className="mentorCard">
      <Paper style={{ backgroundColor: "rgb(126 210 245)" }} elevation={10}>
        <div className="Mentor">
          <div>
            <h2>{data.mentorName}</h2>
          </div>
          <DeleteIcon
            color="error"
            id={data.id}
            onClick={() => removeStudent(data.id)}
          >
            Delete
          </DeleteIcon>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
      </Paper>
      <div style={stylesheet}>
        <br></br>
        <div>
          <b>Profesion:</b> {data.profession}
        </div>
        <div>
          <b>Course:</b> {data.Course}
        </div>
        <div>
          <b>Address:</b> {data.address}
        </div>
      </div>
      <br></br>
    </div>
  );
}
