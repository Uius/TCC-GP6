import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";


const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  let { cnpj, password } = body ?? {};

  if (!cnpj || !password) {
    return NextResponse.json({ error: "cnpj e password são obrigatórios" }, { status: 400 });
  }

  try {
    // Busca usuário pelo CNPJ e senha diretamente
    const user = await prisma.user.findFirst({
      where: { 
        cnpj,
        passwordHash: password // Compara direto com o campo no banco
      }
    });

    if (!user) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    // Retorna apenas os dados do usuário
    return NextResponse.json({
      user: {
        id: user.id,
        cnpj: user.cnpj,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    }, { status: 200 });

  } catch (err) {
    console.error("Erro /api/auth/login:", err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}