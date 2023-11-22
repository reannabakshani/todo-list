import dayjs, { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});

export default function List() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [edit, setEdit] = useState({ dateMade: "", toEdit: false });
  const [current, setCurrent] = useState<TaskType>({
    name: "",
    priority: "",
    list: "",
    due: dayjs(),
    status: "",
    dateMade: "",
  });

  type TaskType = {
    name: string;
    priority: string;
    list: string;
    due: string | Dayjs | null;
    status: string;
    dateMade: string;
  };

  useEffect(() => {
    const storage = localStorage.getItem("localTasks");
    if (storage) {
      setTasks(JSON.parse(storage));
    }
  }, []);

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
    fieldName: string
  ) => {
    setCurrent({
      ...current,
      [fieldName]: e.target.value,
    });
  };

  const handleEditSave = () => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.dateMade === current.dateMade) {
          return current;
        } else {
          return task;
        }
      });
      localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const handleDelete = () => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter(
        (task) => task.dateMade !== current.dateMade
      );

      localStorage.setItem("localTasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div className="h-full w-full flex flex-col items-start justify-start flex-grow">
      <div className=" flex flex-wrap justify-between gap-x-8 gap-y-5 w-full h-auto">
        {tasks.map((task: TaskType) => (
          <>
            {edit.toEdit && task.dateMade === edit.dateMade ? (
              <div
                className="h-auto w-3/12 bg-white p-5 flex flex-col items-start justify-start rounded-3xl gap-y-5 flex-grow"
                key={task.dateMade}
              >
                <div className="flex items-start justify-start gap-x-2 flex-wrap w-full">
                  <FormControl className="w-28">
                    <InputLabel id="demo-simple-select-label">
                      Priority
                    </InputLabel>
                    <Select
                      defaultValue={current.priority}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={current.priority}
                      className="rounded-full h-7 w-28 text-sm"
                      label="Priority"
                      onChange={(event) => {
                        handleOnChange(event, "priority");
                      }}
                    >
                      <MenuItem value={"High"}>High</MenuItem>
                      <MenuItem value={"Med"}>Med</MenuItem>
                      <MenuItem value={"Low"}>Low</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className="w-28">
                    <InputLabel id="demo-simple-select-label">
                      Status
                    </InputLabel>
                    <Select
                      defaultValue={current.status}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={current.status}
                      className="rounded-full h-7 w-28 text-sm"
                      label="Status"
                      onChange={(event) => {
                        handleOnChange(event, "status");
                      }}
                    >
                      <MenuItem value={"yet to start"}>Yet to start</MenuItem>
                      <MenuItem value={"in progress"}>In progress</MenuItem>
                      <MenuItem value={"completed"}>Completed</MenuItem>
                      <MenuItem value={"overdue"}>Overdue</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  required
                  id="outlined-required"
                  label="Task name?"
                  value={current.name}
                  onChange={(event) => {
                    handleOnChange(event, "name");
                  }}
                  className=" focus:border-none focus:outline-none"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="w-36"
                    value={dayjs(current.due)}
                    onChange={(newDue) => {
                      console.log(newDue);
                      console.log(current.due);
                      setCurrent({
                        ...current,
                        due: JSON.parse(JSON.stringify(newDue)),
                      });
                    }}
                  />
                </LocalizationProvider>
                <div className="flex items-end justify-end w-full gap-x-3">
                  <IconButton
                    className="bg-[var(--lightGrey)] text-[var(--lightText)]  mr-auto"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    <DeleteIcon className=" " />
                  </IconButton>
                  <div
                    className={`bg-[var(--lightGrey)] w-auto rounded-full px-3 text-sm py-1 text-[lightText] cursor-pointer`}
                    onClick={() => {
                      setEdit({ dateMade: "", toEdit: false });
                    }}
                  >
                    cancel
                  </div>
                  <div
                    className={`bg-black w-auto rounded-full px-3 text-sm py-1 text-white cursor-pointer`}
                    onClick={() => {
                      setEdit({ dateMade: "", toEdit: false });

                      if (current !== task) {
                        handleEditSave();
                      }
                    }}
                  >
                    save
                  </div>
                </div>
              </div>
            ) : (
              <div
                className=" h-min w-3/12 bg-white p-5 flex flex-col items-start justify-start rounded-3xl gap-y-2 flex-grow"
                key={task.dateMade}
              >
                <div className="flex items-start justify-start gap-x-2 flex-wrap">
                  <div
                    className={`${
                      task.priority === "High" ? " bg-[var(--highPri)]" : ""
                    } ${task.priority === "Med" ? " bg-[var(--medPri)]" : ""} ${
                      task.priority === "Low" ? " bg-[var(--lowPri)]" : ""
                    } w-auto rounded-full px-3 text-sm py-1 text-white`}
                  >
                    {task.priority}
                  </div>
                  <div
                    className={`bg-[var(--status)] w-auto rounded-full px-3 text-sm py-1 text-white`}
                  >
                    {task.status}
                  </div>
                </div>
                <div className={`text-lg font-medium`}>{task.name}</div>
                <div className="text-base text-[var(--lightText)]">
                  due:{" "}
                  {task.due?.toString().substring(0, 10).replaceAll("-", "/")}
                </div>
                <div className="flex items-end justify-end w-full">
                  <div></div>
                  <IconButton
                    className="bg-[var(--lightGrey)] text-[var(--lightText)]"
                    onClick={() => {
                      setEdit({
                        ...edit,
                        dateMade: task.dateMade,
                        toEdit: !edit.toEdit,
                      });
                      setCurrent(task);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
