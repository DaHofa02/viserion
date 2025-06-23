import { RadialChart } from "@/components/viserion/app/radialChart";
import { DualLineChart } from "@/components/viserion/app/lineChart";
import { fetchIloFans, fetchIloPower, fetchIloTemperatures } from "@/lib/ilo";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function IloFansTab({
    apiUrl,
    credentials
}: {
    apiUrl: string;
    credentials: string;
}) {

    const iloFanData = await fetchIloFans({ apiUrl, credentials });

    return (
        <div className="@container flex flex-col gap-4">
            <div className="grid grid-cols-2 md:pr-3 @xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 @7xl:grid-cols-6 gap-4">
                {iloFanData.map((fan, i) => (
                    <RadialChart key={i} label={fan.FanName} value={fan.CurrentReading} unit={fan.Units} />
                ))}
            </div>
        </div>
    );
}

export async function IloTemperaturesTab({
    apiUrl,
    credentials
}: {
    apiUrl: string;
    credentials: string;
}) {

    const iloTempData = await fetchIloTemperatures({ apiUrl, credentials });

    return (
        <div className="@container flex flex-col gap-4">
            <div className="grid grid-cols-2 md:pr-3 @xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 @7xl:grid-cols-6 gap-4">
                {iloTempData.map((temp, i) => (
                    <RadialChart key={i} label={temp.Name} value={temp.CurrentReading} unit={temp.Units} />
                ))}
            </div>
        </div>
    );
}

export async function IloPowerTab({
    apiUrl,
    credentials
}: {
    apiUrl: string;
    credentials: string;
}) {

    const iloWattsData = await fetchIloPower({ apiUrl, credentials });

    const chartData = [
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
        { time: "January", line1: iloWattsData.MinConsumedWatts, line2: iloWattsData.MaxConsumedWatts },
    ];

    return (
        <div className="@container flex flex-col gap-4">
            <div className="md:pr-3 gap-4">
                {<DualLineChart labels={["Min Watts", "Max Watts"]} chartData={chartData} />}
            </div>
        </div>
    );
}

export function IloRadialCardSkeleton() {
    return (
        <div className="@container flex flex-col gap-4">
            <div className="grid grid-cols-2 md:pr-3 @xl:grid-cols-3 @4xl:grid-cols-4 @6xl:grid-cols-5 @7xl:grid-cols-6 gap-4">
                {[...Array(12)].map((_, index) => (
                    <Card key={index} className="flex flex-col bg-transparent backdrop-blur-sm">
                        <CardHeader className="items-center pb-0">
                            <CardTitle><Skeleton className="h-4 w-full" /></CardTitle>
                        </CardHeader>
                        <CardContent className="flex-0 pb-0">
                            <Skeleton className="h-[191px] w-full rounded-xl" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export function IloLineCardSkeleton() {
    return (
        <div className="@container flex flex-col gap-4">
            <div className="md:pr-3 gap-4">
                {[...Array(12)].map((_, index) => (
                    <Card key={index} className="flex flex-col bg-transparent backdrop-blur-sm">
                        <CardHeader className="items-center pb-0">
                            <CardTitle><Skeleton className="h-4 w-full" /></CardTitle>
                        </CardHeader>
                        <CardContent className="flex-0 pb-0">
                            <Skeleton className="h-[191px] w-full rounded-xl" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}