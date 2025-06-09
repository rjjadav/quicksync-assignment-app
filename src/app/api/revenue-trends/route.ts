import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getRevenueTrends } from './revenue-trends.service'

export async function GET(request: NextRequest) {
    const revenueTrends = getRevenueTrends();
    return NextResponse.json(revenueTrends);
}