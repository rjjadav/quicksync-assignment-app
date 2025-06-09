import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getRevenueProductwise } from './product-performance.service';


export async function GET(request: NextRequest) {
    const revenueData = getRevenueProductwise();
    return NextResponse.json(revenueData);
}
