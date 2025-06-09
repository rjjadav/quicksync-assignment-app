import { NextResponse } from 'next/server'
import { prepareSalesByRegion } from './sales-by-region.service';

export async function GET() {
    const regionSales = prepareSalesByRegion();
    return NextResponse.json(regionSales);
}
