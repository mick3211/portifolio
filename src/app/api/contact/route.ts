import * as sg from '@sendgrid/mail';
import { NextResponse } from 'next/server';

const emailFrom = process.env.SENDGRID_FROM;
const emailTo = process.env.SENDGRID_TO;
const sgKey = process.env.SENDGRID_API_KEY;

if (!emailFrom || !emailTo || !sgKey)
    throw new Error(
        'As variáveis de ambiente não estão definidas corretamente'
    );

sg.setApiKey(sgKey);
export async function POST(req: Request) {
    const body = await req.json();
    const text = `Nova mensagem de ${body.name} - ${body.content}`;
    const html = `<div>
                            <h1>Nova mensagem de ${body.name}</h1>
                            <p>${body.content}</p>
                            <strong>Email para contato ${body.email}</strong>
                          </div>`;

    const msg = {
        to: emailTo as string,
        from: emailFrom as string,
        subject: body.subject,
        text,
        html,
    };

    try {
        await sg.send(msg);
        return NextResponse.json('Email enviado com sucesso');
    } catch (e) {
        console.log(e);
        NextResponse.json('Não foi possível enviar o email', { status: 500 });
    }
}
