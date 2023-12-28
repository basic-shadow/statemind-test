import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/layout/Provider";
import "./globals.css";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Statemind",
  description: "Statemind next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
