
import Link from "next/link"
import SandwichMenu from "../SandwichMenu/SandwichMenu"
import NavItem from "../NavItem/NavItem"



const NavItems = [
  { name: "Home", href: "" },
  { name: "About Me", href: "" },
  { name: "Projects", href: "" },
  {name: "Contact", href: ""}
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-2 w-100 bg-white dark:bg-gray-800">
        <Link href="" className="container flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">Ali Talip Coşkun</span>
        </Link>
        <div className="container hidden lg:flex justify-end gap-4 bg-white">
          {
            NavItems.map((item, idx) => {
                return <NavItem item= {item} key = {idx}/>
            })
          }
           </div>
        <SandwichMenu items={NavItems} />
    </div>
  )
};

export default Navbar;

