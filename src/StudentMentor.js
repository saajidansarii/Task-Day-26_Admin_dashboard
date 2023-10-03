import { Paper } from "@mui/material";
import { useContext, useState } from "react";
import { crtContext } from "./App";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
export default function StudentMentor() {
  const [students, setStudents, mentors, setMentor] = useContext(crtContext);
  var webStudents = [];
  var fullStackStudents = [];
  var webMentors = [];
  var fullStackMentors = [];
  var webLength = 0;
  var fullStackLength = 0;

  for (var x of students) {
    var data = {
      name: x.name,
      id: x.id,
    };
    x.Course === "Full Stack Development"
      ? fullStackStudents.push(data)
      : webStudents.push(data);
  }
  for (var x of mentors) {
    var data = {
      name: x.mentorName,
      id: x.id,
    };
    x.Course === "Full Stack Development"
      ? fullStackMentors.push(data)
      : webMentors.push(data);
  }

  webLength = webStudents.length / webMentors.length;
  fullStackLength = Math.round(
    fullStackStudents.length / fullStackMentors.length
  );
  //   console.log(
  //     webLength,
  //     webStudents.length,
  //     webMentors.length,
  //     webMentors,
  //     webStudents
  //   );
  //   console.log(
  //     fullStackLength,
  //     fullStackStudents.length,
  //     fullStackMentors.length,
  //     fullStackMentors,
  //     fullStackStudents
  //   );
  var i = 0;
  var studentrange = [];
  var j = 0;

  return (
    <div className="mentorsStudents">
      <div className="webdevelopment">
        <h2>WEB Development</h2>
        {webMentors.map((mentor, index) => {
          studentrange = webStudents.slice(i, i + webLength);
          i = i + webLength;
          return <MentorStudent mentor={mentor} studentrange={studentrange} />;
        })}
      </div>
      <div className="fullstackdevelopmet">
        <h2>FULL STACK Development</h2>
        {fullStackMentors.map((mentor) => {
          studentrange = fullStackStudents.slice(j, j + fullStackLength);
          j = j + fullStackLength;
          return <MentorStudent mentor={mentor} studentrange={studentrange} />;
        })}
      </div>
    </div>
  );
}

function MentorStudent({ mentor, studentrange }) {
  let [show, setShow] = useState(false);
  var navigate = useNavigate();
  console.log(mentor);
  return (
    <div className="mentorsBack">
      <Paper style={{ backgroundColor: "rgb(245, 126, 126)" }} elevation={10}>
        <div className="MentorStudent">
          <div>
            <h1>{mentor.name}</h1>
          </div>

          <EditIcon onClick={() => navigate(`/editmentor/${mentor.id}`)} />
          <InfoIcon
            color="primary"
            onClick={() => navigate(`/viewmentor/${mentor.id}`)}
          />
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
      </Paper>
      <hr></hr>
      {show ? (
        <div>
          {studentrange.map((student) => {
            return (
              <div className="Students">
                <h1>{student.name}</h1>
                <InfoIcon
                  color="primary"
                  onClick={() => navigate(`/viewstudent/${student.id}`)}
                />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
