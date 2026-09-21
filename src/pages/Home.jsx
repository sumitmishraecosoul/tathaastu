import React from "react";
import SiteNavbar from "../layout/SiteNavbar";
import Footer from "../layout/Footer";
import AstroHomePage from "../components/Home/AstroHomePage";

export default function Home() {
  return (
    <div className="bg-[#F8FFF6] text-[#073349]">
      <SiteNavbar />
      <AstroHomePage />
      <Footer />
    </div>
  );
}
