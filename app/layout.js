import NavBar from "@/components/NavBar";
import { inter } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "Carl Tobias - Creative Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#222831]`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

