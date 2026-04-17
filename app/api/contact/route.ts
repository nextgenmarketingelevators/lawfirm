import { NextResponse } from 'next/server';

interface ContactPayload {
  full_name?: string;
  email_address?: string;
  phone_number?: string;
  service?: string;
  message?: string;
  timestamp?: string;
  source?: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.RELAYEZ_WEBHOOK_URL;
  const webhookSecret = process.env.RELAYEZ_WEBHOOK_SECRET;

  if (!webhookUrl || !webhookSecret) {
    console.error('Missing RelayEZ configuration');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  if (
    !isNonEmptyString(body.full_name) ||
    !isNonEmptyString(body.email_address) ||
    !isNonEmptyString(body.phone_number) ||
    !isNonEmptyString(body.service) ||
    !isNonEmptyString(body.message)
  ) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const payload = {
    event: 'form.submitted',
    timestamp: isNonEmptyString(body.timestamp) ? body.timestamp : new Date().toISOString(),
    source: isNonEmptyString(body.source) ? body.source : 'contact_form',
    basic_info: {
      full_name: body.full_name.trim(),
      email_address: body.email_address.trim(),
      phone_number: body.phone_number.trim()
    },
    inquiry_details: {
      service: body.service.trim(),
      message: body.message.trim()
    }
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RelayEZ-Secret': webhookSecret
      },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('RelayEZ error:', response.status, response.statusText, errorText);
      return NextResponse.json(
        { error: 'Webhook request failed' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact proxy error:', error);
    return NextResponse.json(
      { error: 'Unable to submit contact form' },
      { status: 502 }
    );
  }
}
