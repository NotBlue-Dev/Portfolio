import type { Metadata } from "next";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Enzo Dubocage portfolio",
  description: "Portfolio",
};

export default function Layout({
  children,
  showFooter = true,
}: Readonly<{
  children: React.ReactNode;
  showFooter?: boolean;
}>) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
}