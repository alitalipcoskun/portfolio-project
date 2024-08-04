import { Button } from "@/shadcn_ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn_ui/card"

const UICard = ({ title, description, content,  actual_content, content_len}) => {

    
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
            <CardContent>
                <p className="text-base text-gray-700">
                    {content}
                </p>
                {content_len > 100 ? <Button>More...</Button>: ""}
            </CardContent>
        </Card>
    )
}

export default UICard
