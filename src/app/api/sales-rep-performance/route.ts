import { NextResponse } from 'next/server'
import { prepareSalesRepPerformanceData } from './sales-rep-performance.service';


export async function GET() {
    const revenueData = prepareSalesRepPerformanceData();
    return NextResponse.json(revenueData);
}
