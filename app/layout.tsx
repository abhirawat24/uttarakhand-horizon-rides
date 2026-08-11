import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uttarakhand Horizon Rides",
  description:
    "Rent bikes and scooters in Uttarakhand and explore the mountains your way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}