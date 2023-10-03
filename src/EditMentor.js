import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { crtContext } from "./App";

export function EditMentor() {
  const [students, setStudents, mentors, setMentor] = useContext(crtContext);
  const { id } = useParams();
  var navigate = useNavigate();
  var data = mentors[id];
  console.log(data);
  let [mentorName, setname] = useState(data.mentorName);
  let [age, setage] = useState(data.age);
  let [address, setAddress] = useState(data.address);
  let [profession, setProfession] = useState(data.profession);
  let [Course, setCourse] = useState(data.Course);
  let [Id, Setid] = useState(data.id);
  const EditData = {
    mentorName,
    age,
    address,
    profession,
    Course,
    id: Id,
  };
  const onChangeValue = (e) => {
    setCourse(e.target.value);
  };
  const editdetails = () => {
    var index = parseInt(id);
    console.log(mentors.slice(0, index));
    console.log(mentors.slice(index + 1));
    setMentor([
      ...mentors.slice(0, index),
      EditData,
      ...mentors.slice(index + 1),
    ]);
    console.log(EditData, mentors);
    navigate(`/mentors`);
  };
  return (
    <form className="formdata">
      <b>{`EDIT DETAILS OF ${data.mentorName}`}</b>
      <br></br>
      <TextField
        onKeyUp={(e) => setProfession(e.target.value)}
        id="outlined-basic"
        label="Profession"
        variant="outlined"
      />
      <br></br>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">COURSE</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={onChangeValue}
        >
          <FormControlLabel
            value="Full Stack Development"
            control={<Radio />}
            label="Full Stack Development"
          />
          <FormControlLabel
            value="Web Development"
            control={<Radio />}
            label="Web Development"
          />
        </RadioGroup>
      </FormControl>

      <br></br>
      <Button
        onClick={editdetails}
        variant="contained"
        className="btnclass btn btn-primary"
      >
        Submit
      </Button>
      <br></br>
      <label>NAME: {data.mentorName} </label>
      <br></br>
      <label>Profesion:{data.profession} </label>
      <br></br>
      <label>Course: {data.Course} </label>
    </form>
  );
}
