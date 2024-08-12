"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn_ui/card"
import Modal from "../Modal/Modal"
import parse from 'html-react-parser'

const UICard = ({ title, description, content, actual_content, content_len, kind, className }) => {
    return (
        <Card className={`p-4 border rounded-lg shadow-md max-w-xs max-h-[400px] overflow-hidden place-items-center ${className}`}>
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                    {description}
                    {parse("<br/>")}
                    {kind}
                </CardDescription>
            </CardHeader>
            <CardContent title={title} actual_description={actual_description} date={date} kind={kind}>
                <p className="text-base text-gray-700">
                    {content}
                </p>
                {content_len > 100 ? <Modal title={title} actual_description={actual_description} date={date} kind={kind}></Modal> : ""}
            </CardContent>
        </Card>
    )
}

export default UICard
