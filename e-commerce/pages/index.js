import React from "react";
import { client } from "../lib/client";

import { Product, FooterBanner, HeroBanner } from "../components";
import product from "../ecomm/schemas/product";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div>
        <h2>Best Selling Product</h2>
        <p>speakers of many variations</p>
      </div>
      <div>{["product1", " product2"].map((product) => product)}</div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
};

export default Home;
