import { NextResponse } from 'next/server'
import { getRevenueTrends } from './revenue-trends.service'

export async function GET() {
    const revenueTrends = getRevenueTrends();
    return NextResponse.json(revenueTrends);
}