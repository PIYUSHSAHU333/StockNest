import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import Footer from "../Footer";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftImage
        imageURL={"media/images/kite.png"}
        heading={"Kite"}
        description={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        learnmore={""}
        tryDemo={""}
        googlePlay={""}
        appStore={""}
      />
      <RightImage
        imageURL={"media/images/coin.png"}
        heading={"Console"}
        description={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnmore={""}
      />
      <LeftImage
        imageURL={"media/images/coin.png"}
        heading={"Coin"}
        description={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        learnmore={""}
        tryDemo={""}
        googlePlay={""}
        appStore={""}
      />
      <RightImage
        imageURL={"media/images/kiteconnect.png"}
        heading={"Kite connect api"}
        description={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnmore={""}
      />
      <LeftImage
        imageURL={"media/images/varsity.png"}
        heading={"Varsity mobile"}
        description={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        learnmore={""}
        tryDemo={""}
        googlePlay={""}
        appStore={""}
      />
      
      <Universe />
    </>
  );
}

export default ProductsPage;
