import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../components/home/Header'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
