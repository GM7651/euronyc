import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EuroNYC German Auto - Expert German Car Service",
  description: "Professional service and repair for BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche in New York City. Expert technicians specializing in German automotive engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
