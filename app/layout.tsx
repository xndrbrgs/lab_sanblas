import "@/styles/globals.css";
import { Roboto } from 'next/font/google';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Laboratio San Blas",
  description: "Sirviendo al por mayor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
