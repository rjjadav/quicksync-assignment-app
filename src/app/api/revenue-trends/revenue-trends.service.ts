import moment from "moment";
import SampleData, { SalesRecord } from "../sample-csv-data.constant";

export const getRevenueTrends = () => {
    const salesData = SampleData;

    const revenueByDate: Record<string, number> = {};

    salesData.forEach((item: SalesRecord) => {
        const formattedDate = moment(item.date, 'DD-MM-YYYY').format('YYYY-MM-DD');

        if (!revenueByDate[formattedDate]) {
            revenueByDate[formattedDate] = 0;
        }

        revenueByDate[formattedDate] += item.totalRevenue;
    });

    // Convert to array and sort by date
    return Object.entries(revenueByDate)
        .map(([date, revenue]) => ({ date, revenue }))
        .sort((a, b) => moment(a.date).diff(moment(b.date)));

}