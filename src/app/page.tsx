"use client";

import { CircularProgress, Typography } from "@mui/material";
import theme from "./styles/themes";
import List from "./components/list";
import { Raleway } from "next/font/google";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-start flex-col justify-start p-24 bg-[var(--lightGrey)] w-full pr-20">
      <div>
        <div className={`${raleway.className}`}>your lists</div>
      </div>

      <div className={`${raleway.className}`}>all tasks</div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All items" {...a11yProps(0)} />
            <Tab label="To Do" {...a11yProps(1)} />
            <Tab label="Completed" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <List />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <List status="in progress" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <List status="completed" />
        </CustomTabPanel>
      </Box>
      {/* <List/> */}
    </main>
  );
}
