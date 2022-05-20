import React from 'react'
import Title from '@/components/title'
import MidtownGarageSale from '@/images/events/garage-sale/Midtown_Garage_Sale.jpg'

export default function Sale() {
  return <>
    <Title>Midtown Garage Sale Extravaganza</Title>

    <div className="; container mx-auto p-8">
      <img src={MidtownGarageSale} alt="Midtown Garage Sale - Hosted by Renaissance, Florence Park &amp; Lewiston Gardens" />

      <h1 className="; text-5xl">Midtown Garage Sale Extravaganza</h1>

      <p className="; my-4">
        The neighborhoods of <a href="https://rnatulsa.org/">Renaissance</a>, <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FlorenceParkTulsa">Florence Park</a>, and <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LewistonGardens">Lewiston Gardens</a> are holding a neighborhood-wide garage sale on May 20-22. This includes over 50 separate sales in the area of S. Harvard to Lewis Ave, and 11th to 21st St.
      </p>

      <p className="; my-4">
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/d/u/1/edit?mid=17FwOVKPDKI48YXSrBFq9Rgw3H5iNKzyy&amp;usp=sharing" className="underline text-blue-600">
          Open Bigger Map
        </a>
      </p>

      <iframe src="https://www.google.com/maps/d/embed?mid=17FwOVKPDKI48YXSrBFq9Rgw3H5iNKzyy&amp;ehbc=2E312F&amp;z=16" style={{border: '1px solid black', width: '100%', height:'50vw'}}></iframe>
    </div>
  </>
}
