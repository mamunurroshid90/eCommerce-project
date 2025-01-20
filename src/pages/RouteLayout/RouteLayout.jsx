import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import Category from "../../components/category/Category";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const RouteLayout = () => {
  return (
    <>
      <div>
        <SearchBar />
        <Category />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RouteLayout;
