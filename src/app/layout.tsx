import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "react-toastify/ReactToastify.min.css";
import "./globals.css";

import ApplicationWrapper from "@/wrappers/ApplicationWrapper";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"]
});

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
      <body className={poppins.className}>
        <ApplicationWrapper>
          {children}
        </ApplicationWrapper>
      </body>
    </html>
  );
}
