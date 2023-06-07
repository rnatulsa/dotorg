import React from 'react'
import Title from '@/components/title'
import MidtownGarageSale from '@/images/events/garage-sale/midtown-garage-sale-2023.jpg'
import { DateTime } from 'luxon'
import styles from '@/styles/sale.module.css'

const MAP_IDS = {
  '2023-06-09': '1vgU3Ex1znhVqqKvH0wL2s3MKicx5Htg', // Friday
  '2023-06-10': '1X5CFGHbzokvIPdXvCaNVBQsctgb6eMM', // Saturday
  '2023-06-11': '1ImSqvlVlXdt3_i48n4eki_-f4BsD9Zw', // Sunday
}

export default function Sale() {
  const [mapID, setMapID] = React.useState()
  const [clicked, setClicked] = React.useState(false)

  React.useEffect(() => {
    const date = DateTime.now().setZone('America/Chicago').toISODate()
    const key = Object.keys(MAP_IDS).find(key => key === date)
    key && setMapID(MAP_IDS[key])
  })

  return <>
    <Title>Midtown Garage Sale Extravaganza</Title>

    <div className="; container mx-auto p-8">
      <img src={MidtownGarageSale} alt="Midtown Garage Sale - Hosted by Renaissance &amp; Florence Park" />

      <h1 className="; text-5xl my-4">Midtown Garage Sale Extravaganza</h1>

      <p className="; my-4">
        The neighborhoods of <a href="https://rnatulsa.org/">Renaissance</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FlorenceParkTulsa">Florence Park</a> are holding a neighborhood-wide garage sale on June 9-11.
      </p>

      <p className="; my-4">
        This includes over 40 separate sales in the area of S. Harvard to Lewis Ave, and 11th to 21st St.
      </p>

      {mapID && (
        <>
          <p className="; my-4">
            <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/d/viewer?mid=${mapID}&z=15`} className="underline text-blue-600">
              Open Bigger Map
            </a>
          </p>

          <div onClick={() => setClicked(true)} onMouseLeave={() => setClicked(false)}>
            <iframe src={`https://www.google.com/maps/d/embed?mid=${mapID}&ehbc=2E312F&z=15`} className={clicked ? styles.map_iframe_clicked : styles.map_iframe} style={{ border: '1px solid black', width: '100%', height: '50vw' }}></iframe>
          </div>
        </>
      )}
    </div>
  </>
}
