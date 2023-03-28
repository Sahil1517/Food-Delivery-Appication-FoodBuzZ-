import React from "react";
import Card from "./compponents/Card";
import Carousel from "./compponents/Carousel";
import Footer from "./compponents/Footer";
import Navbar from "./compponents/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <Carousel/>
        <div className="m-3">
        <Card/>
        </div>
        <Footer/>
      </div>
    </>
  );
}
