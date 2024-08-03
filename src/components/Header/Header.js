import React from 'react'
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


const Header = () => {
  return (
    <h1 className={cn(
      "text-3xl font-bold underline",
      fontSans.variable
    )}>
      Deneme
    </h1>
  )
}

export default Header
