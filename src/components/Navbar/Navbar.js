"use client"
import Link from "next/link"
import SandwichMenu from "../SanwichMenu/SandwichMenu"
import NavItem from "../NavItem/NavItem"



const NavItems = [
  { name: "Home", href: "" },
  { name: "About Me", href: "" },
  { name: "Projects", href: "" },
  {name: "Contact", href: ""}
]

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800">
        <Link href="" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">Ali Talip Coşkun</span>
        </Link>
        <div className="hidden lg:flex gap-4">
          {
            NavItems.map((item, idx) => {
                return <NavItem item= {item} key = {idx}/>
            })
          }
           </div>
        <SandwichMenu items={NavItems} />
    </div>
  )
}

export default Navbar;

