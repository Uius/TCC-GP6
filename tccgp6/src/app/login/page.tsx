import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="bg-yellow-700 p-10 rounded-md w-full max-w-md shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/lion.png" // você vai precisar colocar essa imagem na pasta public
            alt="Logo Leão"
            width={80}
            height={80}
          />
          <h1 className="text-2xl font-bold text-white">TRUST</h1>
          <h2 className="text-2xl font-light text-white">MANAGER</h2>
        </div>
        <h3 className="text-center text-white text-xl font-semibold mb-6">LOGIN</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-white mb-1">NOME:</label>
            <input
              type="text"
              className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="NOME: "
            />
          </div>
          <div>
            <label className="block text-white mb-1">CIDADE:</label>
            <input
              type="text"
              className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-white mb-1">CNPJ:</label>
            <input
              type="text"
              className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-white mb-1">SENHA:</label>
            <input
              type="password"
              className="w-full p-2 rounded-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Confirmar
            </button>
            <button
              type="button"
              className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
