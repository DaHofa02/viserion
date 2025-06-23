'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { titleCase } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
    const pathname = usePathname();

    const segments = pathname
        .split('/')
        .filter(Boolean)

    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');
        let label = titleCase(segment);
        /*if (segment === "app") {
            return;
        }*/

        if (index === 0) {
            label = "Dashboard";
        }

        return [
            <BreadcrumbItem key={`item-${href}`} className="hidden md:block">
                <BreadcrumbLink href={href}>
                    {label}
                </BreadcrumbLink>
            </BreadcrumbItem>,
            index < segments.length - 1 && (
                <BreadcrumbSeparator key={`sep-${href}`} className="hidden md:block" />
            )
        ];
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
