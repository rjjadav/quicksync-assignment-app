import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prepareTopProductsByRevenue } from './products-by-revenue.service';


export async function GET(request: NextRequest) {
    const revenueData = prepareTopProductsByRevenue();
    return NextResponse.json(revenueData);
}
