import { Navbar } from "@/components/ui/viserion/navbar"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <header>
            <Navbar />
            {children}
        </header>);
}