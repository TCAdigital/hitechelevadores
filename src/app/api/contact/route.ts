import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, type, message } = await req.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Hi-Tech Site" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "contato@hitechelevadores.com.br",
      subject: `Nova Solicitação - ${type || "Geral"} - ${name}`,
      html: `
        <h2>Nova Solicitação de Cotação</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Nome:</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Telefone:</td><td style="padding:8px;">${phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">E-mail:</td><td style="padding:8px;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Tipo:</td><td style="padding:8px;">${type || "Não informado"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Mensagem:</td><td style="padding:8px;">${message || "Sem mensagem"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Erro ao enviar mensagem." }, { status: 500 });
  }
}
