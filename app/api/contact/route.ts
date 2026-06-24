import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    // Core validation checks
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required transmission parameters missing (name, email, or message).' },
        { status: 400 }
      );
    }

    // Basic email pattern regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid transmission destination. Check email format.' },
        { status: 400 }
      );
    }

    // Log the contact message to server stdout safely (simulating DB insertion / email integration)
    console.log('--- SECURE TRANSMISSION RECEIVED ---');
    console.log(`Source Identity: ${name}`);
    console.log(`Source Location: ${email}`);
    console.log(`Organization   : ${company || 'N/A'}`);
    console.log(`Data Payload   : ${message}`);
    console.log('------------------------------------');

    return NextResponse.json(
      { success: true, message: 'Transmission established successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Transmission error:', error);
    return NextResponse.json(
      { error: 'Internal system fault occurred during transmission pipeline.' },
      { status: 500 }
    );
  }
}
