import React from 'react'
import Title from '@/components/title'
import Link from 'next/link'

export default function Sale() {
  return <>
    <Title>Midtown Garage Sale Extravaganza</Title>

    <div className="; container mx-auto p-8 text-center">
      <p>The Garage Sale has ended. Thanks for everyone who participated and stopped by!</p>
      <p><Link href="/events">Upcoming Events</Link></p>
    </div>
  </>
}
