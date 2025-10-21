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
      <body
        className={`text-[#EEEEEE] ${inter.className} antialiased`}
        style={{
          background: "linear-gradient(to bottom, #0a0a0a, #262626)",
        }}
      >
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

