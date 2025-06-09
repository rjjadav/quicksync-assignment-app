import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { prepareSalesByRegion } from './sales-by-region.service';

export async function GET(request: NextRequest) {
    const regionSales = prepareSalesByRegion();
    return NextResponse.json(regionSales);
}
