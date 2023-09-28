import Navbar from "../components/navigation/Navbar";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Cláudio Dantas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#F5F5F5] dark:bg-neutral-800">
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
