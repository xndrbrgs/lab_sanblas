import "@/styles/globals.css";
import localFont from 'next/font/local';
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const myFont = localFont({
  src: './fonts/PPMori-Regular.otf',
  display: 'swap'
});

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
    <html lang="en" className={myFont.className}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
