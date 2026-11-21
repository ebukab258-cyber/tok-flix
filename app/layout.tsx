import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TOK FLIX — Stories Beyond Imagination",
  description: "Discover African stories, original films, and trending videos on TOK FLIX.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
