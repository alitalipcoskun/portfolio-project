
import React from 'react'
import Link from 'next/link';





const NavItem = (props) => {
    const { item } = props;
    return (
        <Link href={`${item.href}`} className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
            {item.name}
        </Link>
    )
};

export default NavItem;
