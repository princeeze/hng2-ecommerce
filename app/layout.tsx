import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maukal - Home",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
