import { Divider } from "@mui/material";
import React, { useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

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
      <div className="w-44 h-full flex flex-col items-center justify-start mt-20 mb-5 gap-y-5 mx-8 text-base">
        <div className="px-3 mr-auto">Menu</div>
        <div
          className={`${
            navItem.home === true ? "bg-[var(--mainBlue)] text-white" : ""
          } w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light mb-5`}
        >
          <HomeOutlinedIcon />
          Home
        </div>
        <div className="w-48 gap-y-5 flex flex-col justify-start items-start">
          <div className="px-3">Lists</div>
          {navItem.lists.map((item) => (
            <div
              className={`${
                item.on === true ? "bg-[var(--mainBlue)] text-white" : ""
              } w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light`}
            >
              <ChecklistIcon />
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <Divider orientation="vertical" />
    </>
  );
}
