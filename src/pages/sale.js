import React from 'react'
import Title from '@/components/title'
import MidtownGarageSale from '@/images/events/garage-sale/midtown-garage-sale-2023.jpg'
import GarageSaleMap from '@/images/events/garage-sale/2023/midtown-garage-sale-2023-friday-map.png'
import GarageSaleAddresses from '@/images/events/garage-sale/2023/midtown-garage-sale-2023-friday-addresses.png'
import { DateTime } from 'luxon'

const DAYS = {
  '2023-06-09': {
    label: 'Friday',
    mapID: '19-8qAhkFUbj8fRPtVuoPWnRtN8NyzoY',
    pdfURL: 'https://assets.ctfassets.net/lievuslt1eqf/762wIwaCY24fK0TPbLuv6t/305ac466614e0b11e4e4c036fa325d05/midtown-garage-sale-2023-friday.pdf'
  },
  // '2023-06-10': {
  //   label: 'Friday',
  //   mapID: '',
  //   pdfURL: ''
  // },
  // '2023-06-11': {
  //   label: 'Friday',
  //   mapID: '',
  //   pdfURL: ''
  // },
}

function LinkButton({ href, children }) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} className="underline text-blue-600 flex space-x-2 mx-auto text-xl">
      {children}
    </a>
  )
}

export default function Sale() {
  const [day, setDay] = React.useState()

  const update = () => {
    const now = DateTime.now().setZone('America/Chicago')
    const date = now.toISODate()
    if (DAYS[date] && now.hour >= 7) {
      setDay(DAYS[date])
    }
  }

  React.useEffect(() => {
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  })

  return <>
    <Title>Midtown Yard Sale Extravaganza</Title>

    <div className="; container mx-auto p-8 text-center space-y-4">
      <h1 className="; text-5xl font-bold">Midtown Yard&nbsp;Sale Extravaganza</h1>

      <div className="; text-left space-y-4 lg:text-center">
        <p>
          The neighborhoods of <a href="https://rnatulsa.org/">Renaissance</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FlorenceParkTulsa">Florence Park</a> are holding a neighborhood-wide yard sale on June 9–11.
        </p>

        <p>
          This includes over 40 separate sales in the area of S. Harvard to Lewis Ave and 11th to 21st St.
        </p>

        <p>
          Cancellations and updated hours due to weather will be posted here as needed.
        </p>

        <p>
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/WFvvUu6PgNtw1M4D9">Sign up</a> to receive information about next year’s sale.
        </p>
      </div>

      <div>
        {day ? (
          <>
            <div className="; flex justify-center my-8">
              <div className="; flex flex-col space-y-4">
                <LinkButton href={`https://www.google.com/maps/d/viewer?mid=${day.mapID}&z=15`}>
                  {/* https://heroicons.com/ `map` */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <span>Interactive Map - {day.label}</span>
                </LinkButton>
                <LinkButton href={day.pdfURL}>
                  {/* https://heroicons.com/ `printer` */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                  </svg>
                  <span>Printable Map - {day.label}</span>
                </LinkButton>
              </div>
            </div>

            <div className="; lg:flex lg:justify-center">
              <div><img className="; mx-auto" src={GarageSaleMap} alt="Midtown Yard Sale - Hosted by Renaissance &amp; Florence Park" /></div>
              <div><img className="; mx-auto" src={GarageSaleAddresses} alt="Midtown Yard Sale - Hosted by Renaissance &amp; Florence Park" /></div>
            </div>
          </>
        ) : (
          <>
            <p className="; font-bold italic my-4">Check back the day of after 7am for maps and addresses.</p>
            <img className="; mx-auto" src={MidtownGarageSale} alt="Midtown Yard Sale - Hosted by Renaissance &amp; Florence Park" />
          </>
        )}
      </div>

    </div>
  </>
}
