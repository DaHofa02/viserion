import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Breadcrumbs from "@/components/viserion/app/breadcrumb";

export default function BreadcrumbHeader() {
    return (
        <div className="flex items-center p-1 px-4 border rounded-3xl shadow-sm backdrop-blur-sm">
            <SidebarTrigger className="-ml-1" />
            <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4 hidden md:block"
            />
            <Breadcrumbs />
        </div>
    );
}