"use client"

import * as React from "react"
import { NavigationMenu} from "@/components/ui/navigation-menu"
import NavList from "../NavList/NavList"


const NavItems = [
  {name: "Home", href: ""},
  {name: "About Me", href: ""},
  {name: "Experience", href: ""} 
]

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavList items = {NavItems}></NavList>
    </NavigationMenu>
  )
}

export default Navbar;


