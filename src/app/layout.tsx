import { fetchMetadata } from "@/utils/FetchMetadata";
import { Metadata } from "next";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetchMetadata();
  const { title, description, author } = res?.data?.attributes;
  return {
    title,
    description,
    authors: [{ name: author }],
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className=" font-IranYekanNumber" dir="rtl" lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#CCFFE5" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
