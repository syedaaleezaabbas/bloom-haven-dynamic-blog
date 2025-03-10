import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dancingScript = Dancing_Script({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-dancing-script"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dancingScript.variable}antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
