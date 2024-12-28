import type { Metadata } from "next";
import TopNavbar from "../components/TopNavbar";

export const metadata: Metadata = {
  title: "Enzo Dubocage portfolio",
  description: "Portfolio",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      {/* <TheatreStudio /> */}
    </>
  );
}
