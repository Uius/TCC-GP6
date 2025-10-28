import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { cnpj, password } = body ?? {};

  if (!cnpj || !password) {
    return NextResponse.json({ error: "cnpj e password são obrigatórios" }, { status: 400 });
  }

  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    return NextResponse.json({ error: "JWT_SECRET não definido no .env" }, { status: 500 });
  }

  const user = await prisma.user.findUnique({ where: { cnpj } });
  if (!user) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  const passwordValid = await argon2.verify(user.passwordHash, password).catch(() => false);
  if (!passwordValid) {
    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  }

  const token = jwt.sign({ sub: user.id, cnpj: user.cnpj }, JWT_SECRET, { expiresIn: "7d" });

  // cria resposta JSON com token e usuário
  const responsePayload = {
    token,
    user: {
      id: user.id,
      cnpj: user.cnpj,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  };

  const res = NextResponse.json(responsePayload, { status: 200 });

  // seta cookie httpOnly (não remove o token do JSON para compatibilidade)
  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 dias
  });

  return res;
}