"use client"

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export function RadialChart({
    value,
    label,
    unit,
}: {
    value: number;
    label: string;
    unit: string;
}
) {
    var units = "";
    switch (unit) {
        case "Percent":
            units = "%";
            break;
        case "Celsius":
            units = "°C";
            break;
        default:
            units = unit;
            break;
    }

    const angle = (360 / 100) * value;

    const chartData = [
        { browser: "safari", fans: value, fill: "var(--color-safari)" },
    ]

    const chartConfig = {
        fans: {
            label: label,
        },
        safari: {
            label: "Safari",
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig

    return (
        <Card className="flex flex-col bg-transparent backdrop-blur-sm">
            <CardHeader className="items-center pb-0">
                <CardTitle>{label}</CardTitle>
            </CardHeader>
            <CardContent className="flex-0 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={angle}
                        innerRadius={60}
                        outerRadius={90}
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                            polarRadius={[66, 54]}
                        />
                        <RadialBar dataKey="fans" background cornerRadius={10} />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-4xl font-bold"
                                                >
                                                    {chartData[0].fans.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    {units.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
