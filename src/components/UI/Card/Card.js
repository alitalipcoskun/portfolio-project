import { Button } from "@/shadcn_ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn_ui/card"
import Modal from "../Modal/Modal"

const UICard = ({ title, description, content,  actual_content, content_len, kind}) => {

    
    return (
        <Card className="p-4 border rounded-lg shadow-md max-w-xs max-h-[400px] overflow-hidden place-items-center">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">
                    {title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent title = {title} actual_content={actual_content} description = {description} kind={kind}>
                <p className="text-base text-gray-700">
                    {content}
                </p>
                {content_len > 100 ? <Modal title={title} actual_content={actual_content} description={description} kind={kind}></Modal>: ""}
            </CardContent>
        </Card>
    )
}

export default UICard
