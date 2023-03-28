import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import "./App.css";

import { useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

function App() {
  const tomorrow = dayjs().add(1, "day");
  const [displaySucess, setDisplaySucess] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(tomorrow);

  const addAppointment = () => {
    if (value === null) {
      window.alert(
        "Error: Please select an appointment time and date with Dr John Lecturer using the Date Picker!"
      );
      return;
    }
    setDisplaySucess(true);
    setError(false);
  };

  const deleteAppointment = () => {
    setError(!error);
    setDisplaySucess(false);
    /* setTimeout(() => {
      setValue(tomorrow);
    }, 10000); */
  };

  const submittedApp = value?.format("MMM, ddd D h:mm A");

  return (
    <Grid container spacing={5} padding={5}>
      <Grid item xs={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            className="pickerStlye"
            defaultValue={tomorrow}
            minDate={tomorrow}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setError(false);
            }}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={8}>
        <Stack mt={2} sx={{ width: "100%" }} direction="row" spacing={1}>
          <Button variant="contained" onClick={addAppointment}>
            <AddIcon /> Book Appointment
          </Button>
          <Button color="error" variant="contained" onClick={deleteAppointment}>
            <DeleteIcon /> Delete Appointment
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          {displaySucess ? (
            <Alert severity="success">
              {`Success appointment submitted ${submittedApp}.`}
            </Alert>
          ) : (
            <Alert severity="info">
              Please select a date and then time you wish to book an appointment
              with Dr John Lecturer from the date picker above.
            </Alert>
          )}
          {error ? (
            <Alert severity="error">{`${submittedApp} appointment canceled!`}</Alert>
          ) : (
            ""
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
