import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "GabiCraft | Art Portfolio",
  description: "GabiCraft — арт портфолио за картини и авторски творби.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bg">
      <body className="m-0 min-h-screen overflow-x-hidden bg-[#fffdf7] font-sans text-[#28231d] antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-320px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
