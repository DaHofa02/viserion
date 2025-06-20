"use client"

import {
    SquareTerminal,
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuSkeleton,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/viserion/layouts/app/nav-main"
import { NavUser } from "@/components/viserion/layouts/app/nav-user"
import { DomainSwitcher } from "@/components/viserion/layouts/app/domain-switcher"
import { Suspense } from "react"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "https://github.com/evilrabbit.png",
    },
    domains: [
        {
            name: "Viserion",
            logo: "/logo.webp",
            domain: "viserion.cc",
        },
        {
            name: "DaHofa",
            logo: "",
            domain: "dahofa.xyz",
        },
        {
            name: "DigitalLionMotion",
            logo: "",
            domain: "digitallionmotion.com",
        },
    ],
    navMain: [
        {
            title: "ILO",
            url: "/app/ilo",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "srv-00",
                    url: "/app/ilo/srv-00",
                },
                {
                    title: "srv-01",
                    url: "/app/ilo/srv-01",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" variant="floating" {...props}>
            <SidebarHeader>
                <Suspense fallback={<SidebarMenuSkeleton />}>
                    <DomainSwitcher domains={data.domains} />
                </Suspense>
            </SidebarHeader>
            <SidebarContent>
                <Suspense fallback={<SidebarMenuSkeleton />}>
                    <NavMain items={data.navMain} />
                </Suspense>
            </SidebarContent>
            <SidebarFooter>
                <Suspense fallback={<SidebarMenuSkeleton />}>
                    <NavUser user={data.user} />
                </Suspense>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar >
    )
}
