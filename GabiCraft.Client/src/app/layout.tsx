import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "GabiCraft",
  description: "GabiCraft — Next.js frontend connected to an ASP.NET Core Web API.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="page-shell">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
