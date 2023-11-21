"use client"

import { CircularProgress } from "@mui/material"
import theme from "./styles/themes"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-between p-24 bg-[var(--lightGrey)] w-full flex-wrap pr-20">
      <div className="min-w-[20rem] h-72 bg-white rounded-2xl flex items-center justify-center">
      <CircularProgress variant="determinate" value={75} sx={{color: theme.palette.secondary.contrastText}} />
      </div>
      
    </main>
  )
}
