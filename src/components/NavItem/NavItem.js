import React from 'react'
import {
    navigationMenuTriggerStyle,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import './styles.css';
import Link from 'next/link';





const NavItem = (props) => {
    const { item } = props;
    return (
        <NavigationMenuItem>
                <Link href={`${item.href}`} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.name}
                    </NavigationMenuLink>
                </Link>
        </NavigationMenuItem>
    )
}

export default NavItem
