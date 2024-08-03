import * as React from "react"
import { NavigationMenuList } from "@/components/ui/navigation-menu"
import NavItem from "../NavItem/NavItem";
import { NavigationMenuIndicator } from "@radix-ui/react-navigation-menu";


const NavList = (props) => {
  const { items } = props;
    return (
    <NavigationMenuList>
            {items.map((item, idx) => {
                console.log(item, idx)
                return <NavItem key= {idx} item = {item}></NavItem>
            })}
            <NavigationMenuIndicator></NavigationMenuIndicator>
    </NavigationMenuList>
  )
}

export default NavList
