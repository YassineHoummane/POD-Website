import { NextRequest, NextResponse } from 'next/server';
import { searchProducts } from '@/lib/data';
export async function GET(req: NextRequest) {
  const q = new URL(req.url).searchParams.get('q') ?? '';
  return NextResponse.json(searchProducts(q), { headers: { 'Cache-Control': 'no-store' } });
}
