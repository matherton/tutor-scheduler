import { useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export default function DateTimeCalendar() {
  const tomorrow = dayjs().add(1, "day");
  const [value, setValue] = useState<Dayjs | null>(tomorrow);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        defaultValue={tomorrow}
        minDate={tomorrow}
        value={value}
        onChange={(newValue) => {
          console.log("Appointment Booked for ", newValue?.toDate());
        }}
      />
    </LocalizationProvider>
  );
}
