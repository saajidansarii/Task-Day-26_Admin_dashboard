import { useContext, useState } from "react";
import { crtContext } from "./App";
import { Student } from "./Student";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
export function Students() {
  let [students, setStudents] = useContext(crtContext);
  let classes = [];
  let distinctclasses = [];
  let Noclasses = [];
  let studentClassObj = {};
  classes = students.filter((student) => {
    const haskey = student.classtaking in studentClassObj;

    if (student.classtaking !== "" && haskey) {
      studentClassObj[student.classtaking].push(student);
    } else if (student.classtaking !== "" && !haskey) {
      studentClassObj[student.classtaking] = [student];
    }

    if (student.classtaking !== "" && !classes.includes(student.classtaking)) {
      return student.classtaking;
    }
  });
  distinctclasses = classes.map((student) => {
    if (
      student.classtaking !== "" &&
      !distinctclasses.includes(student.classtaking)
    ) {
      return student.classtaking;
    }
  });
  var student1 = {};
  students.filter((student, index) => {
    if (student.classtaking === "") {
      student1 = { ...student, index: index };
      Noclasses.push(student1);
    }
  });

  let unique = [...new Set(distinctclasses)];
  let [Class, setClass] = useState(unique);
  return (
    <div className="Students">
      <div className="withClasses">
        {Class.map((classdata) => {
          return (
            <div className="EachClassOutLine">
              {classdata ? (
                <ClassDetails
                  class1={classdata}
                  studentClassObj={studentClassObj}
                />
              ) : null}
            </div>
          );
        })}
      </div>
      {Noclasses.length !== 0 ? (
        <div className="withoutClass">
          <h1>classes to be assigned</h1>
          <hr></hr>
          {Noclasses.map((student, index) => {
            return (
              <Student
                student={student}
                key={student.id}
                index={student.index}
                classassigned={false}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
function ClassDetails({ class1, studentClassObj }) {
  let [show, setShow] = useState(false);
  // console.log("studentClassObj", studentClassObj, class1);
  return (
    <div>
      <Paper style={{ backgroundColor: "rgb(126 210 245)" }} elevation={10}>
        <div className="classtoggle">
          <div>
            <h2>{class1}</h2>
          </div>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
      </Paper>
      {show ? <ClassCard classdetails={studentClassObj[class1]} /> : null}
      <br></br>
    </div>
  );
}

function ClassCard({ classdetails }) {
  let details = classdetails;
  return (
    <div>
      {details ? (
        <div>
          {details.map((student, index) => {
            return (
              <div>
                <Student
                  student={student}
                  index={student.id}
                  classassigned={true}
                />
                <hr></hr>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
