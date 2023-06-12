import React from 'react'
import Title from '@/components/title'
import Link from 'next/link'
import MidtownYardSale from '@/images/events/yard-sale/2023/midtown-yard-sale-2023.jpg'

export default function Sale() {
  return <>
    <Title>Midtown Yard Sale Extravaganza</Title>

    <div className="; container mx-auto p-8 text-center flex-col space-y-4">
      <h1 className="; text-5xl font-bold">Midtown Yard&nbsp;Sale Extravaganza</h1>
      <p>The Yard Sale has ended. Thanks for everyone who participated and stopped by!</p>
      <p><Link href="/events">Upcoming Events</Link></p>
      <p>
        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/WFvvUu6PgNtw1M4D9">Sign up</a> to receive information about next year’s sale.
      </p>
      <p>
        <img className="; mx-auto" src={MidtownYardSale} alt="Midtown Yard Sale - Hosted by Renaissance &amp; Florence Park" />
      </p>
    </div>
  </>
}
