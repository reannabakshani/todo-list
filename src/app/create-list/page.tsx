"use client"
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import { TextField } from "@mui/material";

const raleway = Raleway({
  weight: "800",
  subsets: ["latin"],
});



export default function CreateNewList() {
  const [listName, setListName] = useState("");

  const handleSubmit= () => {
    console.log(listName)
  }


  return (
    <main className="flex flex-col min-h-[calc(100vh-5rem)] items-start justify-start p-24 bg-[var(--lightGrey)] w-full flex-wrap pr-20 gap-y-5">
      <h1 className={`${raleway.className} text-2xl`}>Create New List</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
        <TextField
          required
          id="outlined-required"
          label="List name?"
          value={listName}
          onChange={(e)=>{setListName(e.target.value)}}
          className=" focus:border-none focus:outline-none"
        />
        <button type="submit" className="bg-black text-white w-48 h-12 rounded-full flex items-center justify-center gap-x-3 px-3 font-light hover:bg-[var(--mainBlue)] duration-300 cursor-pointer">
          Submit
        </button>
      </form>
    </main>
  );
}
