import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    console.log("Entrou aqui tbm")
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'henrique.aa01@gmail.com',
      subject: 'Alguém gostaria de entrar em contato com você!',
      react: EmailTemplate({ name, email, message }),
    });
    
    if (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
