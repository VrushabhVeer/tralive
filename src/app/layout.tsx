import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const font = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tralive",
    default: "Tralive | Explore the world",
  },
  description:
    "Discover, plan, and explore your next adventure effortlessly with Tralive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
