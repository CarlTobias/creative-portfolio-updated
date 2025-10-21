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
    <html lang="en">
      <body className={`text-[#EEEEEE] ${inter.className} antialiased`}>
        <div className="fixed inset-0 -z-50 bg-gradient-to-b from-neutral-950 to-neutral-800" />

        <div className="min-h-screen flex flex-col relative z-10">
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
