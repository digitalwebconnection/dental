// app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = { title: "Seves" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1d2d74] text-white">
        <Navbar />
        <main className="pt-14">{children}</main>
      </body>
    </html>
  );
}
