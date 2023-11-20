"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "./components/navBar";
import theme from "./styles/themes";
import { ThemeProvider } from "@emotion/react";
import MenuBar from "./components/menuBar";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "To Do List",
  description:
    "Allows users to create multiple lists, keep track of task statuses, due dates, prioritise tasks, sort tasks and filter tasks ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
          <NavBar />
          <div className="flex justify-start">
            <MenuBar/>
            {children}
            </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
