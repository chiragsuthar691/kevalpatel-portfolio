import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../components/themeProvider/index";
import Navbar from "@/components/header";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keval Patel",
  description: "Sr. Business Development Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Provider>
            <Navbar />
            {children}{" "}
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
