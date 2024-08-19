
import Link from "next/link"

import NavItem from "./NavItem"
import SandwichMenu from "./SandwichMenu";



const NavItems = [
  { name: "Home", href: "" },
  { name: "About", href: "" },
  { name: "Projects", href: "" },
  { name: "Contact", href: "" }
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly py-2 w-full bg-white dark:bg-gray-800 fixed">
      <div>
        <Link href="" className="container flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-semibold">Ali Talip Coşkun</span>
        </Link>
      </div>
      <div className="container hidden lg:flex flex-row-reverse gap-4 bg-white">
        {
          NavItems.map((item, idx) => {
            return <NavItem item={item} key={idx} />
          })
        }
      </div>
      <SandwichMenu items={NavItems} />
    </div>
  )
};

export default Navbar;

