import { Card } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'ILO',
};

const dnsEntrys = [
    {
        type: "A",
        domainName: "ilo.srv-00.viserion.cc",
        ipAdress: "192.168.69.10",
        ttl: "Auto",
    },
    {
        type: "A",
        domainName: "ilo.srv-01.viserion.cc",
        ipAdress: "192.168.69.11",
        ttl: "Auto",
    },
]

export default function DNSLocalPage() {
    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Domain Name</TableHead>
                        <TableHead>IP Address / Hostname</TableHead>
                        <TableHead>TTL</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dnsEntrys.map((dnsEntry, i) => (
                        <TableRow key={i}>
                            <TableCell>{dnsEntry.type}</TableCell>
                            <TableCell>{dnsEntry.domainName}</TableCell>
                            <TableCell>{dnsEntry.ipAdress}</TableCell>
                            <TableCell>{dnsEntry.ttl}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </Card>
    )
}
