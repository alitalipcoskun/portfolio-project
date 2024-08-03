import Header from '@/components/Navbar/Navbar'
import { cn } from '@/lib/utils'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

const headerClass = cn(
    "text-3xl font-bold underline",
    fontSans.variable
);


describe("Header Component", () => {
    it("Render the correct text in header component", () => {
        render(<Header />)
        const paragraphElement = screen.getByText("Deneme")
        expect(paragraphElement).toBeInTheDocument();
    });
    it("Render the component with right class", () => {
        render(<Header />)
        const headerElement = screen.getByRole("heading");
        expect(headerElement).toHaveClass(headerClass);
    })
});