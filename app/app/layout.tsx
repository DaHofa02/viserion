export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <header>
            {children}
        </header>);
}