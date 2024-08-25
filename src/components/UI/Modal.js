
import React from 'react'

import { Button } from '@/shadcn_ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/shadcn_ui/dialog'



const Modal = ({ title, dates, description, kind}) => {
    return <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline">More...</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>Detailed Information</DialogTitle>
                <DialogDescription>
                    {kind}
                </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                    <h2>{title}</h2>
                    <p>{dates}</p>
                    <p>{description}</p>
                </div>

            </div>
            <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                    <Button className= "container mt-1" type="button" variant="secondary">
                        Close
                    </Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

export default Modal