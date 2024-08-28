import { Product } from "../../app/layout/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog(){
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:5170/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
    return (
        //fragment <> are used when rendering a single element, 
        //in this case we have a ul and a button that are the same level to solve the error we put the fragment as their parent 
        <>
      <ProductList Products={products}/>
      </>
    )
}
