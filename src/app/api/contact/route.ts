import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData } from '@/types';

// Basic validation - enhance with your email service (SendGrid, Resend, etc.)
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Integrate with your email service here
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'contact@jclabs.dev',
    //   to: 'jareschoicalabs@gmail.com',
    //   subject: `New Contact: ${body.name}`,
    //   html: `<p><strong>From:</strong> ${body.name} (${body.email})</p><p><strong>Message:</strong></p><p>${body.message.replace(/\n/g, '<br>')}</p>`,
    // });

    // For now, log to console in development
    console.log('📧 Contact Form Submission:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

    return NextResponse.json(
      { success: true, message: 'Message received. We will respond shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
