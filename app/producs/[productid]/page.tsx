
type paramsType = {params : {productid:string}}
import { products } from '@/utils/constants';
import React from 'react';

function ProductId({params}:paramsType) {
  console.log(params);
  const id:number = parseInt(params.productid) 
  let product = products[id]
  return (
    <div>
     <h1>Product {product.name}</h1>
     <h2>Price{product.price}</h2>
    </div>
  );
}

export default ProductId;
