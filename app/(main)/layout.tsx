import { Navbar } from "@/components/viserion/layouts/navbar"

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