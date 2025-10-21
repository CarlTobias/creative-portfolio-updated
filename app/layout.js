import NavBar from "@/components/NavBar";
import { inter } from "@/app/fonts";
import "./globals.css";

export const metadata = {
  title: "Carl Tobias - Creative Portfolio",
  description: "",
  icons: {
    icon: [{ url: "/assets/images/LogoCarl.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`text-[#EEEEEE] ${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

