import { Button } from '@/shadcn_ui/button'
import React from 'react'
import parse  from 'html-react-parser'

const FooterButton = (props) => {
  return (
    <Button>
      {parse(props.svg)}
      <p className= "hidden md:block">{props.name}</p>
    </Button>
  )
}

export default FooterButton
