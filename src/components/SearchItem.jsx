import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterdData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };

    filterdData();
  }, [term]);

  return <Product cart={cart} setCart={setCart} items={filterData} />;
};

export default SearchItem;
