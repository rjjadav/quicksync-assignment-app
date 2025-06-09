import SampleData from "../sample-csv-data.constant";

export const prepareSalesByRegion = () => {
    const revenueByRegion: Record<string, number> = {};

    SampleData.forEach((item) => {
        if (!revenueByRegion[item.region]) {
            revenueByRegion[item.region] = 0;
        }
        revenueByRegion[item.region] += item.totalRevenue;
    });

    return Object.entries(revenueByRegion).map(([region, revenue]) => ({
        region,
        revenue,
    }));
}