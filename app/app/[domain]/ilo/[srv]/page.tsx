import { getIloDomain } from "@/lib/domain";
import { Metadata } from "next";
import { TabsContent } from "@/components/ui/tabs";
import { IloRadialCardSkeleton, IloFansTab, IloPowerTab, IloTemperaturesTab, IloLineCardSkeleton } from "@/components/viserion/app/ilo/tabContents";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: 'ILO',
};

export default async function IloSrvPage(props: { params: Promise<{ srv: string, domain: string }> }) {
    const params = await props.params;
    const srv = params.srv;
    const domain = params.domain;

    // temp vars
    const credentials = btoa('vinatzer:1130WienLuVA');

    const apiUrl = getIloDomain(srv, domain);
    return (
        <>
            <TabsContent value="fans">
                <Suspense fallback={<IloRadialCardSkeleton />}>
                    <IloFansTab apiUrl={apiUrl} credentials={credentials} />
                </Suspense>
            </TabsContent>
            <TabsContent value="power">
                <Suspense fallback={<IloLineCardSkeleton />}>
                    <IloPowerTab apiUrl={apiUrl} credentials={credentials} />
                </Suspense>
            </TabsContent>
            <TabsContent value="temperatures">
                <Suspense fallback={<IloRadialCardSkeleton />}>
                    <IloTemperaturesTab apiUrl={apiUrl} credentials={credentials} />
                </Suspense>
            </TabsContent>
        </>
    )
}