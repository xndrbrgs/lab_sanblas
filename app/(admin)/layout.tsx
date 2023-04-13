import "@/styles/globals.css";

export const metadata = {
  title: 'Lab San Blas Content Manager',
  description: 'Sanity CMS for Lab San Blas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
