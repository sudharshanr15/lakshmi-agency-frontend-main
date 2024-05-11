import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/ReactToastify.min.css";
import "./globals.css";

import ApplicationWrapper from "@/wrappers/ApplicationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Lakshmi Agency",
    default: "Lakshmi Agency"
  },
  description: "From Lakshmi Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApplicationWrapper>
          {children}
        </ApplicationWrapper>
      </body>
    </html>
  );
}
