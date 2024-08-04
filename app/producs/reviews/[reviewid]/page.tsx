import { notFound } from 'next/navigation'

import React from 'react'

function ReviewId({params}: {params : {productid:string,reviewid:string}}) {
    const {productid, reviewid} = params

    if (parseInt(reviewid) > 1000) notFound();

  return (
    <div>
    product id:{productid} ReviewId :{reviewid}
    </div>
  )
}

export default ReviewId
