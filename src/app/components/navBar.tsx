
import React from "react";
import { Divider, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./searchBar";
import { Noto_Sans_Mandaic, Raleway } from "next/font/google";

const noto = Raleway({
  weight: '800',
  subsets: ['latin'],
})

export default function NavBar() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="flex items-center justify-between h-20 w-full px-20">
          <div className="flex items-center justify-center">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className="md:hidden flex"
            >
              <MenuIcon />
            </IconButton>
            <h4 className={`${noto.className} text-2xl`}>To Do.</h4>
          </div>
          <SearchBar />
        </div>
      </div>
      <Divider></Divider>
    </>
  );
}
