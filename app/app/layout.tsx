"use client";

import { AppSidebar } from "@/components/viserion/layouts/app/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import Header from "@/components/viserion/app/header";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    let showTabs = false;
    let tabs: Tab[] | undefined = undefined;
    switch (true) {
        case pathname.includes("ilo/"):
            showTabs = true;
            tabs = [
                {
                    value: "fans",
                },
                {
                    value: "power",
                },
                {
                    value: "temperatures",
                },
            ];
            break;
        default:
            break;
    }
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <Header {...(showTabs ? { tabs } : {})}>
                    {children}
                </Header>
            </SidebarInset>
        </SidebarProvider >
    )
}
