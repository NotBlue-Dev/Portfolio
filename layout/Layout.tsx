import type { Metadata } from "next";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Enzo Dubocage portfolio",
  description: "Portfolio",
};

export default function Layout({
  children,
  animationComplete = false,
}: Readonly<{
  children: React.ReactNode;
  animationComplete?: boolean;
}>) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      {animationComplete && <Footer />}
    </>
  );
}
