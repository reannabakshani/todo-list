"use client";

import { CircularProgress } from "@mui/material";
import theme from "./styles/themes";
import List from "./components/list";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-start flex-col justify-start p-24 bg-[var(--lightGrey)] w-full pr-20">
      {/* <div className="min-w-[20rem] h-72 bg-white rounded-2xl flex items-center justify-center">
      <CircularProgress variant="determinate" value={75} sx={{color: theme.palette.secondary.contrastText}} />
      </div> */}
      <div>
        <div className={`${raleway.className}`}>your lists</div>
      </div>

      <div className={`${raleway.className}`}>all tasks</div>
      <List />
    </main>
  );
}
