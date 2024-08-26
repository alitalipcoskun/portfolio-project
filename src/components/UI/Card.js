"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn_ui/card"
import Modal from "./Modal"
import parse from 'html-react-parser'

const UICard = ({ title, dates, content, description, actual_description, content_len, kind, className }) => {
    return (
        <Card className={`p-4 border rounded-lg shadow-md max-w-xs max-h-[400px] overflow-hidden place-items-center ${className}`}>
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                    {dates}
                    {parse("<br/>")}
                    {kind}
                </CardDescription>
            </CardHeader>
            <CardContent title={title} description={actual_description} date={dates} kind={kind}>
                <p className="text-base text-gray-700">
                    {description}
                </p>
                {content_len > 100 ? <Modal title={title} description={actual_description} dates={dates} kind={kind}></Modal> : ""}
            </CardContent>
        </Card>
    )
}

export default UICard
