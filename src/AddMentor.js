import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { crtContext } from "./App";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AddMentor() {
  const [students, setstudents, mentors, setMentor] = useContext(crtContext);
  let [mentorName, setname] = useState("");
  let [Age, setAge] = useState("");
  let [address, setAddress] = useState("");
  let [profession, setProfession] = useState("");
  let [Course, setCourse] = useState("");
  let [student, setstudent] = useState([]);
  let [id, setId] = useState(mentors.length);

  const onChangeValue = (e) => {
    setCourse(e.target.value);
    setId(id);
  };
  const newMentor = {
    mentorName,
    Age,
    address,
    profession,
    student,
    Course,
    id,
  };
  var navigate = useNavigate();
  const AddMentors = () => {
    console.log(newMentor);
    setMentor([...mentors, newMentor]);
    navigate(`/mentors`);
  };

  return (
    <form className="formdata">
      <TextField
        onKeyUp={(e) => setname(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <br></br>
      <TextField
        onKeyUp={(e) => setAge(e.target.value)}
        id="outlined-basic"
        label="Age"
        variant="outlined"
      />
      <br></br>
      <TextField
        onKeyUp={(e) => setAddress(e.target.value)}
        id="outlined-basic"
        label="Address"
        variant="outlined"
      />
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
          {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        </RadioGroup>
      </FormControl>
      <br></br>
      <Button
        onClick={AddMentors}
        variant="contained"
        className="btnclass btn btn-primary"
      >
        Submit
      </Button>
    </form>
  );
}
