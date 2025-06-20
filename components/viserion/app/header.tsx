
import React from "react";
import BreadcrumbHeader from "@/components/viserion/app/breadcrumbHeader";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { titleCase } from "@/lib/utils";

const Header: React.FC<HeaderProps> = ({
    tabs,
    children
}) => (
    <>
        {tabs ? (
            <Tabs defaultValue={tabs[0].value} className="w-10/10">
                <header className="flex h-16 shrink-0 items-center gap-2 sticky top-0 z-1">
                    <BreadcrumbHeader />
                    <TabsList>
                        {tabs.map((tab) => (
                            <TabsTrigger value={tab.value}>{titleCase(tab.value)}</TabsTrigger>
                        ))}
                    </TabsList>
                </header>
                <section>
                    {children}
                </section>
            </Tabs>
        ) : (
            <>
                <header className="flex h-16 shrink-0 items-center gap-2 sticky top-0 z-1">
                    <BreadcrumbHeader />
                </header>
                <section>
                    {children}
                </section>
            </>
        )}
    </>
);

export default Header;