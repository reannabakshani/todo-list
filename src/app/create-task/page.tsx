"use client";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import {
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

const noto = Raleway({
  weight: "800",
  subsets: ["latin"],
});

type taskType = {
  name: string;
  priority: string;
  list: string;
  due: string | null | Dayjs;
  status: string;
};

export default function CreateNewTask() {
  const [task, setTask] = useState<taskType>({
    name: "",
    priority: "",
    list: "",
    due: dayjs(),
    status: "",
  });
  const [storedTasks, setStoredTasks] = useState([])
  
  useEffect(()=>{
    const localTasks = localStorage.getItem("localTasks");
    if (localTasks) {
      setStoredTasks(JSON.parse(localTasks));
    }
  }, [])

  const handleSubmit = () => {
    console.log(task);
    localStorage.setItem("localTasks", JSON.stringify([...storedTasks, {...task, dateMade: new Date}]))
  };

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
    fieldName: string
  ) => {
    setTask({
      ...task,
      [fieldName]: e.target.value,
    });
  };

  return (
    <main className="flex flex-col min-h-[calc(100vh-5rem)] items-start justify-start p-24 bg-[var(--lightGrey)] w-full flex-wrap pr-20 gap-y-5">
      <h1 className={`${noto.className} text-2xl`}>Create New Task</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <TextField
          required
          id="outlined-required"
          label="Task name?"
          value={task.name}
          onChange={(event) => {
            handleOnChange(event, "name");
          }}
          className=" focus:border-none focus:outline-none"
        />

        <FormControl required={true}>
          <FormLabel id="demo-row-radio-buttons-group-label" required>
            Priority
          </FormLabel>
          <RadioGroup
            aria-required
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={task.priority}
            onChange={(event) => {
              handleOnChange(event, "priority");
            }}
          >
            <FormControlLabel
              value="High"
              control={<Radio required />}
              label="High"
            />
            <FormControlLabel
              value="Med"
              control={<Radio required />}
              label="Med"
            />
            <FormControlLabel
              value="Low"
              control={<Radio required />}
              label="Low"
            />
          </RadioGroup>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={task.due}
            onChange={(newDue) => {
              setTask({ ...task, due: newDue });
            }}
          />
        </LocalizationProvider>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
          defaultValue="yet to start"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task.status}
            label="Status"
            onChange={(event) => {
              handleOnChange(event, "status");
            }}
          >
            <MenuItem value={"in progress"}>In progress</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
            <MenuItem value={"overdue"}>Overdue</MenuItem>
          </Select>
        </FormControl>
        <button
          type="submit"
          className="bg-black text-white w-48 h-12 rounded-full flex items-center justify-center gap-x-3 px-3 font-light hover:bg-[var(--mainBlue)] duration-300 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
