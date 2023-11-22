import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Link from "next/link";

type ListType = {
  name: string;
  id: number;
};

export default function MenuBar() {
  const [storedLists, setStoredLists] = useState<ListType[]>([]);
  const [navItem, setNavItem] = useState({
    home: true,
    lists: [ {name: "all tasks", id: -1}],
  });

  useEffect(() => {
    const localLists = localStorage.getItem("localLists");
    if (localLists) {
      setStoredLists(JSON.parse(localLists));
      console.log(
        navItem
      )
      setNavItem((prevNavItem) => ({ ...prevNavItem, lists: [prevNavItem.lists[0], ...JSON.parse(localLists)] }));
    }
  }, []);

  console.log(navItem.lists);

  return (
    <>
      <div className="w-80 max-h-[calc(100vh-5rem)] overflow-y-scroll flex flex-col items-center justify-start gap-y-5 px-8 pt-20 pb-20 text-base ">
        <div className="px-3 mr-auto">Menu</div>
        <div>
          <Link
            href={`/`}
            className={`${
              navItem.home === true ? "bg-[var(--mainBlue)] text-white" : ""
            } w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light mb-5`}
          >
            <HomeOutlinedIcon />
            Home
          </Link>
        </div>
        <div className="w-48 gap-y-5 flex flex-col justify-start items-start mb-20">
          <div className="px-3">Lists</div>
          {navItem.lists.map((item) => (
            <div
              key={item.id}
              // className={`
              // ${item.on === true ? "bg-[var(--mainBlue)] text-white" : ""}
              // w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light`}
              className="w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light"
            >
              <ChecklistIcon />
              {item.name}
            </div>
          ))}
        </div>
        <div>
          <Link
            href={`/create-task`}
            className="mt-auto bg-black text-white w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light"
          >
            <AddOutlinedIcon /> Add New Task
          </Link>
        </div>
        <div>
          <Link
            href={`/create-list`}
            className="bg-black text-white w-48 h-12 rounded-full flex items-center justify-start gap-x-3 px-3 font-light"
          >
            <AddOutlinedIcon /> Add New List
          </Link>
        </div>
      </div>

      <Divider orientation="vertical" />
    </>
  );
}
