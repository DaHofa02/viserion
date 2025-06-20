
import { fetchWithNoSSL } from '@/lib/fetchdata';

export async function fetchIloFans({
    apiUrl,
    credentials,
}: {
    apiUrl: string;
    credentials: string;
}) {
    try {
        const data = await fetchWithNoSSL({
            host: apiUrl,
            path: '/rest/v1/Chassis/1/Thermal',
            method: 'GET',
            credentials,
        });

        return (data as { Fans: FanData[] }).Fans;
    } catch (error) {
        throw Error(error instanceof Error ? error.message : String(error));
    }
}

export async function fetchIloTemperatures({
    apiUrl,
    credentials,
}: {
    apiUrl: string;
    credentials: string;
}) {
    try {
        const data = await fetchWithNoSSL({
            host: apiUrl,
            path: '/rest/v1/Chassis/1/Thermal',
            method: 'GET',
            credentials,
        });

        return (data as { Temperatures: TemperaturesData[] }).Temperatures;
    } catch (error) {
        throw Error(error instanceof Error ? error.message : String(error));
    }
}

export async function fetchIloPower({
    apiUrl,
    credentials,
}: {
    apiUrl: string;
    credentials: string;
}) {
    try {
        const data = await fetchWithNoSSL({
            host: apiUrl,
            path: '/rest/v1/Chassis/1/Power',
            method: 'GET',
            credentials,
        });

        return (data as { PowerMetrics: PowerData }).PowerMetrics;
    } catch (error) {
        throw Error(error instanceof Error ? error.message : String(error));
    }
}

