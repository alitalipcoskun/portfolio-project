import React from 'react'
import NavItem from '../NavItem/NavItem'
import { Sheet, SheetContent, SheetTrigger } from '@/shadcn_ui/sheet'
import { Button } from '@/shadcn_ui/button'

const SandwichMenu = ({ items }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">navbar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="grid w-[200px] p-4">
                    {items.map((item, key) => {
                        return <NavItem item={item} key={key}></NavItem>
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
};

const MenuIcon = (props) => {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
};

export default SandwichMenu;
