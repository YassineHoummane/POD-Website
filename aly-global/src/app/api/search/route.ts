import { NextRequest, NextResponse } from 'next/server';
import { searchProducts } from '@/lib/data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';

  const results = searchProducts(q);

  return NextResponse.json(results, {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
