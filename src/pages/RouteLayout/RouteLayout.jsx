import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Category from "../../components/category/Category";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import CartButton from "../../components/cartButton/CartButton";

const RouteLayout = ({ toggleCart }) => {
  return (
    <>
      <div>
        <SearchBar toggleCart={toggleCart} />
        <Category />
        <Outlet />
        <CartButton toggleCart={toggleCart} />
        <Footer />
      </div>
    </>
  );
};

export default RouteLayout;
