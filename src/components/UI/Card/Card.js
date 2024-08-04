import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shadcn_ui/card"

const UICard = ({ title, description, content }) => {
    return (
        <Card className="p-4 border rounded-lg shadow-md">
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
            </CardContent>
        </Card>
    )
}

export default UICard
