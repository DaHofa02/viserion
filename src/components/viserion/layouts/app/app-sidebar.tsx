"use client"

import {
    MonitorUp,
    Network,
    Mail,
    Database,
    PanelsTopLeft,
    MonitorPlay,
    Waypoints,
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
        name: "DaHofa",
        email: "me@dahofa.xyz",
        avatar: "https://media-vie1-1.cdn.whatsapp.net/v/t61.24694-24/462722506_365840699889580_8717927582947595059_n.jpg?ccb=11-4&oh=01_Q5Aa1wFjqiugOlOA_4B4kr813YXLLcAKv1iYaN7t36IvE9xClw&oe=6865A8E8&_nc_sid=5e03e0&_nc_cat=106",
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
        {
            name: "Klangschalenparadies",
            logo: "",
            domain: "klangschalenparadies.at",
        },
    ],
    navBasicLabel: "Basic",
    navBasic: [
        {
            title: "Website",
            url: "/app/website",
            icon: PanelsTopLeft,
            isActive: true,
        },
        {
            title: "Database",
            url: "/app/database",
            icon: Database,
            isActive: true,
        },
        {
            title: "Mail",
            url: "/app/mail",
            icon: Mail,
            isActive: true,
        },
    ],
    navAdvancedLabel: "Advanced",
    navAdvanced: [
        {
            title: "DNS",
            url: "/app/dns",
            icon: Network,
            isActive: true,
            items: [
                {
                    title: "Cloudflare",
                    url: "/app/dns/cloudflare",
                },
                {
                    title: "Local",
                    url: "/app/dns/local",
                },
            ],
        },
        {
            title: "Reverse Proxy",
            url: "/app/reverseproxy",
            icon: Waypoints,
            isActive: true,
            items: [
                {
                    title: "Entrys",
                    url: "/app/reverseproxy/entrys",
                },
                {
                    title: "Certificates",
                    url: "/app/reverseproxy/certificates",
                },
            ],
        },
        {
            title: "ILO",
            url: "/app/ilo",
            icon: MonitorUp,
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
        {
            title: "Proxmox",
            url: "/app/proxmox",
            icon: MonitorPlay,
            isActive: true,
            items: [
                {
                    title: "VMs",
                    url: "/app/proxmox/vms",
                },
                {
                    title: "LXC",
                    url: "/app/proxmox/lxc",
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
                    <NavMain label={data.navBasicLabel} items={data.navBasic} />
                </Suspense>
                <Suspense fallback={<SidebarMenuSkeleton />}>
                    <NavMain label={data.navAdvancedLabel} items={data.navAdvanced} />
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
