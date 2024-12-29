import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Send email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to My Newsletter!',
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>You'll now receive updates about new blog posts and tech insights.</p>
        <p>Best regards,<br>Solomon Chika</p>
      `,
    })

    // Send notification to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'solomon.chika1@gmail.com',
      subject: 'New Newsletter Subscriber',
      html: `
        <h3>New Newsletter Subscription</h3>
        <p>Email: ${email}</p>
      `,
    })

    return NextResponse.json(
      { message: 'Subscription successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    )
  }
} 