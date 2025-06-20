export function getIloDomain(srv: string, domain: string): string {
    return `ilo.${srv}.${domain}`;
}