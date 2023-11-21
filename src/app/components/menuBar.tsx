import { Divider } from "@mui/material";
import React, { useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Link from "next/link";

export default function MenuBar() {
  const [navItem, setNavItem] = useState({
    home: true,
    lists: [
      {
        name: "all tasks",
        on: false,
        index: 1,
      },
    ],
  });

  return (
    <>
      <div className="w-44 min-h-[calc(100vh-10rem)] h-full flex flex-col items-center justify-start mt-20 pb-20 gap-y-5 mx-8 text-base ">
        <div className="px-3 mr-auto">Menu</div>
        <Link
          href={`/`}
          className={`${
            navItem.home === true ? "bg-[var(--mainBlue)] text-white" : ""
          } w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light mb-5`}
        >
          <HomeOutlinedIcon />
          Home
        </Link>
        <div className="w-48 gap-y-5 flex flex-col justify-start items-start mb-20">
          <div className="px-3">Lists</div>
          {navItem.lists.map((item) => (
            <div
              key={item.index}
              className={`${
                item.on === true ? "bg-[var(--mainBlue)] text-white" : ""
              } w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light`}
            >
              <ChecklistIcon />
              {item.name}
            </div>
          ))}
        </div>

        <Link
          href={`/create-task`}
          className="mt-auto bg-black text-white w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light"
        >
          <AddOutlinedIcon /> Add New Task
        </Link>
        <Link
          href={`/create-list`}
          className="bg-black text-white w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light"
        >
          <AddOutlinedIcon /> Add New List
        </Link>
      </div>

      <Divider orientation="vertical" />
    </>
  );
}
