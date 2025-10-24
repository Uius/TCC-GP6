"use client";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { width } = useWindowSize(); // 👈 pega a largura da tela em tempo real

  return (
    <div
      className={`min-h-screen ${
        width < 640
          ? "p-2 bg-blue-50" // 👈 estilos para MOBILE
          : width < 1024
          ? "p-4 bg-green-50" // 👈 estilos para TABLET
          : "p-8 bg-gray-50" // 👈 estilos para DESKTOP
      }`}
    >
      {children} {/* 👈 aqui dentro vai TODO o conteúdo do site */}
    </div>
  );
}
