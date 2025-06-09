import SampleData from "../sample-csv-data.constant";

interface SalesRepPerformance {
    salesRep: string;
    totalRevenue: number;
    numberOfDeals: number;
    avgDealSize: number;
    region: string;
}


export const prepareSalesRepPerformanceData = () => {
    const repMap = new Map<string, { revenue: number; deals: number; region: string }>();

    SampleData.forEach((entry) => {
        const key = entry.salesRep;
        if (!repMap.has(key)) {
            repMap.set(key, { revenue: 0, deals: 0, region: entry.region });
        }
        const stats = repMap.get(key)!;
        stats.revenue += entry.totalRevenue;
        stats.deals += 1;
    });

    const result: SalesRepPerformance[] = [];
    repMap.forEach((value, key) => {
        result.push({
            salesRep: key,
            totalRevenue: value.revenue,
            numberOfDeals: value.deals,
            avgDealSize: parseFloat((value.revenue / value.deals).toFixed(2)),
            region: value.region,
        });
    });

    return result;
}