"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export function DualLineChart({
    labels,
    chartData,
}: {
    labels: string[];
    chartData: {
        time: string,
        line1: number,
        line2: number
    }[];
}) {
    const chartConfig = {
        line1: {
            label: labels[0],
            color: "var(--chart-1)",
        },
        line2: {
            label: labels[1],
            color: "var(--chart-2)",
        },
    } satisfies ChartConfig
    return (
        <Card className="bg-transparent backdrop-blur-sm">
            <CardHeader>
                <CardTitle>Line Chart - Multiple</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="max-h-3/10 w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Line
                            dataKey="line1"
                            type="monotone"
                            stroke="var(--color-line1)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="line2"
                            type="monotone"
                            stroke="var(--color-line2)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    hideLabel
                                    className="w-[180px]"
                                    formatter={(value, name) => (
                                        <>
                                            <div
                                                className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-(--color-bg)"
                                                style={
                                                    {
                                                        "--color-bg": `var(--color-${name})`,
                                                    } as React.CSSProperties
                                                }
                                            />
                                            {chartConfig[name as keyof typeof chartConfig]?.label ||
                                                name}
                                            <div className="text-foreground ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums">
                                                {value}
                                                <span className="text-muted-foreground font-normal">
                                                    W
                                                </span>
                                            </div>
                                        </>
                                    )}
                                />
                            }
                            cursor={false}
                            defaultIndex={chartData.length - 1}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
