import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trust Manager",
  description: "Sistema desenvolvido por Arthur Amatti, Victor Hugo e William Rodrigues",
  icons: {
    icon: "/LOGOLEAO.png",       
    shortcut: "/LOGOLEAO.png",   
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

//*import { redirect } from "next/navigation";

//export default function RootLayout({ children }: { children: React.ReactNode }) {
  //if (typeof window !== "undefined" && !localStorage.getItem("usuario")) {
    //redirect("/login");
  //}

  //return (
    //<html lang="pt-BR">
      //<body>{children}</body>
    //</html>
 // );
//}