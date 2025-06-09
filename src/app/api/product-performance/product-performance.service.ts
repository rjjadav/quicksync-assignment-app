import SampleData, { SalesRecord } from "../sample-csv-data.constant";

export const getRevenueProductwise = () => {
    const productRevenue: Record<string, number> = {};

    SampleData.forEach((item: SalesRecord) => {
        if (!productRevenue[item.productName]) {
            productRevenue[item.productName] = 0;
        }
        productRevenue[item.productName] += item.totalRevenue;
    });

    return Object.entries(productRevenue).map(([productName, revenue]) => ({
        productName,
        revenue,
    }));
}