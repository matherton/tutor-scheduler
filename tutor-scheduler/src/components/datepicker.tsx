import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

export default function DateTimeCalendar() {
  const timeDateNow = dayjs();
  const tomorrow = timeDateNow.add(1, "day");
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        defaultValue={dayjs()}
        minDate={tomorrow}
        onChange={(newValue) => {
          // your code of onChange functionality
          console.log(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
