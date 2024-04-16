import React from 'react'
import Title from '@/components/title'
import Link from 'next/link'
import MidtownYardSale from '@/images/events/yard-sale/2024/midtown-yard-sale-2024.png'

export default function Sale() {
  return <>
    <Title>Midtown Yard Sale Extravaganza</Title>

    <div className="; container mx-auto p-8 text-center flex-col space-y-4">
      <h1 className="; text-5xl font-bold">Midtown Yard&nbsp;Sale Extravaganza</h1>
      <h2 className="; text-3xl font-bold">June 7-9, 2024</h2>
      <p>The Renaissance Neighborhood Association has partnered with Florence Park to hold a multi-neighborhood-wide yard sale.</p>
      <p>There is no cost for you to participate! Just gather your treasures and display them in your yard or garage. The Neighborhood Associations will advertise in the Tulsa World, Craigslist, FB Marketplace/Groups and other online sites. The associations will also put out several big signs around key locations of our neighborhood but you will need to put out signs to direct traffic to your specific location. You can choose to participate on any or all of the days.</p>
      <p>Sign up to participate here: <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf6fGzZMzRti7lttQI4wCx2xD3psqh8YUQ-NTaEv5oqHRuDSQ/viewform">Google Form</a></p>
      <p>Once you sign up, your address will be placed on the sale map that will be accessible to potential buyers.</p>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSf6fGzZMzRti7lttQI4wCx2xD3psqh8YUQ-NTaEv5oqHRuDSQ/viewform">
          <img className="; mx-auto" src={MidtownYardSale} alt="Midtown Yard Sale - Hosted by Renaissance &amp; Florence Park" />
        </a>
      </p>
    </div>
  </>
}
