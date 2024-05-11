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

export const metadata = {
  title: {
    template: "%s | Tralive",
    default: "Tralive | Explore the world",
  },
  description:
    "Discover, plan, and explore your next adventure effortlessly with Tralive.",
  openGraph: {
    title: "Tralive",
    description:
      "Discover, plan, and explore your next adventure effortlessly with Tralive.",
    type: "article",
    url: "https://tralive.vercel.app/",
    images: [
      {
        url: "https://tralive.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraveling-cuate.fc8f45d6.png&w=2048&q=75",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tralive",
    description:
      "Discover, plan, and explore your next adventure effortlessly with Tralive.",
    images: [
      "https://tralive.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftraveling-cuate.fc8f45d6.png&w=2048&q=75",
    ],
  },
}

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
