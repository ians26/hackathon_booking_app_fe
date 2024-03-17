import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar/sidebar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Sidebar />
        <main className="ml-[300px] mt-3">{children}</main>
      </body>
    </html>
  );
}
