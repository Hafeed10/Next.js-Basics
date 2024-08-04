import { products } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

function Products() {
  return (
    <div>
    {products.map((product)=>(
      <Link href={`/products/${product.id}`} key={product.id}>
      <div  className='border m-2'>
        <h1 className='font-bold text-3xl'>{product.name}</h1>
        <h2>{product.price}</h2>
      </div>
      </Link>
    ))}
    </div>
  )
}

export default Products
