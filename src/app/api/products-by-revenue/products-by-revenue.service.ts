import SampleData from "../sample-csv-data.constant";

export const prepareTopProductsByRevenue = () => {
    const productMap: Record<string, number> = {};

    SampleData.forEach((entry) => {
        const product = entry.productName;
        const revenue = parseFloat(entry.totalRevenue.toString());

        productMap[product] = (productMap[product] || 0) + revenue;
    });

    const sorted = Object.entries(productMap)
        .map(([product, revenue]) => ({ name: product, value: revenue }))
        .sort((a, b) => b.value - a.value);

    return sorted;
}