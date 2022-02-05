import React from "react";
import { Route, Routes } from "react-router-dom";
import Addnew from "../../Pages/Addnew/Addnew";
import SearchResult from "../../Pages/SearchResult/SearchResult";
import Watched from "../../Pages/Watched/Watched";
import Watchlist from "../../Pages/Watchlist/Watchlist";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Watched />} />
        <Route path="/wishlist" element={<Watchlist />} />
        <Route path="/addnew" element={<Addnew />} />
        <Route path="/searched" element={<SearchResult />} />
      </Routes>
    </div>
  );
};

export default Body;
