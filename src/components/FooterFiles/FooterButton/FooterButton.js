import { Button } from '@/shadcn_ui/button'
import React from 'react'
import parse from 'html-react-parser'
import Link from 'next/link'

const FooterButton = (props) => {
  return (
    <Link href = {props.link} target="_blank">
    <Button>
        {parse(props.svg)}
        <p className="hidden md:block">{props.name}</p>
      </Button>
    </Link>
  )
}

export default FooterButton
