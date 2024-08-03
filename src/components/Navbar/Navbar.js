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
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Ali Talip Coşkun</span>
        </Link>
        <div className="hidden md:flex gap-4">
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
function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
export default Navbar;

