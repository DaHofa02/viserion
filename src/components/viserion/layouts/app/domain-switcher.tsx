"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DomainSwitcher({
    domains,
}: {
    domains: {
        name: string;
        logo: string;
        domain: string;
    }[]
}) {
    const { isMobile } = useSidebar();
    const [activeDomain, setActiveDomain] = React.useState(domains[0]);

    if (!activeDomain) {
        return null;
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                <Avatar className="size-9 md:size-10 rounded-lg">
                                    <AvatarImage src={activeDomain.logo} alt={activeDomain.name} />
                                    <AvatarFallback className="rounded-lg">{activeDomain.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{activeDomain.name}</span>
                                <span className="truncate text-xs">{activeDomain.domain}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56"
                        align="start"
                        side={isMobile ? "bottom" : "right"}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-muted-foreground text-xs">
                            Domains
                        </DropdownMenuLabel>
                        {domains.map((domain, index) => (
                            <DropdownMenuItem
                                key={domain.name}
                                onClick={() => setActiveDomain(domain)}
                                className="gap-2 p-2"
                            >
                                <div className="flex size-6 items-center justify-center rounded-md border">
                                    <Avatar className="size-6 rounded-md">
                                        <AvatarImage src={domain.logo} alt={domain.name} />
                                        <AvatarFallback>{domain.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                </div>
                                {domain.name}
                                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="gap-2 p-2">
                            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                                <Plus className="size-4" />
                            </div>
                            <div className="text-muted-foreground font-medium">Add domain</div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
