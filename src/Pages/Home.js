import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Header from "../Components/Header";
import ProductsList from "../Components/ProductsList";

const HomePage = () => {
  return (
    <>
      <Header />
      <Filter />
      <ProductsList />
    </>
  );
};

export default HomePage;
