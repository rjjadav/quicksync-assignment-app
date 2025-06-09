import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prepareSalesRepPerformanceData } from './sales-rep-performance.service';


export async function GET(request: NextRequest) {
    const revenueData = prepareSalesRepPerformanceData();
    return NextResponse.json(revenueData);
}
