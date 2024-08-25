
import React from 'react'
import Link from 'next/link';





const NavItem = (props) => {
    const { item } = props;
    const {href, name} = item;
    return (
        <Link href={`${href}`} className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            {name}
        </Link>
    )
};

export default NavItem;
