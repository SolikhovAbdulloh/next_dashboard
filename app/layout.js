import Headers from "@/components/header";
import "./globals.css";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, team, club }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}  antialiased`}>
        <main className="flex items-start">
          <div>
            <Headers />
          </div>
          {children}
          {team}
          {club}
        </main>
      </body>
    </html>
  );
}
