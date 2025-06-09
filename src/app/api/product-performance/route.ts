import { NextResponse } from 'next/server'
import { getRevenueProductwise } from './product-performance.service';


export async function GET() {
    const revenueData = getRevenueProductwise();
    return NextResponse.json(revenueData);
}
