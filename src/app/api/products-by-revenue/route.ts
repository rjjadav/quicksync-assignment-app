import { NextResponse } from 'next/server'
import { prepareTopProductsByRevenue } from './products-by-revenue.service';


export async function GET() {
    const revenueData = prepareTopProductsByRevenue();
    return NextResponse.json(revenueData);
}
