import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="h-175 bg-yellow-600 p-20 rounded-md shadow-lg bodyloguin">
        <div className="flex flex-col items-center mb-6">
          <Image
<<<<<<< HEAD
            src="/LOGOPRETO.png"// você vai precisar colocar essa imagem na pasta public
            alt="Logo Leão"
            width={350}
            height={350}
=======
          className="-m-15 mb-1"
            src="/LOGOPRETO.png" // você vai precisar colocar essa imagem na pasta public
            alt="Logo Leão"
            width={362}
            height={150}
>>>>>>> 709d56321bf1743ea4883789c3ad434b4fdcd50f
          />
          
        </div>
        <h3 className="text-center text-shadow-lg/30 text-white text-2xl font-semibold mb-6">SEJA BEM-VINDO (A)!</h3>
        <form className="space-y-4">
          <div>
            <label className="w-15 text-shadow-lg/30 font-bold block text-white mb-1">CNPJ:</label>
            <input
              type="text"
              className="text-[#4B4B4B] rounded-[20] bg-sky-50 shadow-xl w-full p-2 border-white-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="CNPJ: "
            />
          </div>
          <div>
            <label className="w-15 text-shadow-lg/30 font-bold block text-white mb-1">SENHA:</label>
            <input
              type="password"
              className="text-[#4B4B4B] rounded-[20] bg-sky-50 shadow-xl w-full p-2 border-white-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="  Senha: "
            />
            <p  className="text-shadow-lg/30 block text-white mb-1 justify-self-end text-[15px] m-1 underline"> Esqueceu sua senha? </p>
          </div>
          <br></br>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="font-bold rounded-[15] w-35 shadow-lg/30 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Confirmar
            </button>
            <button
              type="button"
              className="font-bold rounded-[15] w-35 shadow-lg/30 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
