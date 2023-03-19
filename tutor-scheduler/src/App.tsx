import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import DateTimePicker from "./components/datepicker";

import Grid from "@mui/material/Grid";

const addAppointment = () => {
  console.log("added");
};

const deleteAppointment = () => {
  console.log("deleted");
};

function App() {
  return (
    <Grid container spacing={5} padding={5}>
      <Grid item xs={3}>
        <div style={{ background: "white", marginLeft: "1.25em" }}>
          <DateTimePicker />
        </div>
      </Grid>
      <Grid item xs={4}>
        {/* <Toggle /> */}
      </Grid>
      <Grid item xs={5}>
        <Stack mt={2} sx={{ width: "100%" }} direction="row" spacing={1}>
          <Button variant="contained" onClick={addAppointment}>
            <AddIcon /> Add Appointment
          </Button>
          <Button color="error" variant="contained" onClick={deleteAppointment}>
            <DeleteIcon /> Delete Appointment
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            Error! sorry appointment time not available
          </Alert>
          <Alert severity="success">
            Success appointment added — check it out!
          </Alert>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
