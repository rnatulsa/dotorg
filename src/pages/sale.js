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

      <p className="; my-4 italic">
        Check this page on the morning of Friday May 20 for a live map of the sale locations.
      </p>

      {/* <iframe
        style={{border: '1px solid black', width: '100%', height:'50vw'}}
        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-95.96467494964601%2C36.132883744079486%2C-95.93399047851564%2C36.14821958118677&amp;layer=mapnik&amp;marker=36.1405433730337%2C-95.94933271408081"
      />
      <div><small><a target="_blank" rel="noopener noreferrer" href="https://www.openstreetmap.org/?mlat=36.1405&amp;mlon=-95.9493#map=16/36.1406/-95.9493">View Larger Map</a></small></div> */}

    </div>
  </>
}
