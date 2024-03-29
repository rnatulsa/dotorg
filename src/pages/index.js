import React from 'react'
import Title from '@/components/title'
import { DateTime } from 'luxon'
import { css } from 'twin.macro'

import { Gallery, GalleryText, GalleryButtons, GalleryButton } from '@/components/gallery'
import { UpcomingEventsSection, UpcomingEvent } from '@/components/home/upcoming-events'
import { WhatsNewsSection, WhatsNewsItem } from '@/components/home/whats-news'

import RNAalbum7 from '@/images/wix/home-page/gallery/RNAalbum7.jpg';
const IMAGES = [
  require('@/images/wix/home-page/gallery/HouseSpring.jpg'),
  require('@/images/wix/home-page/gallery/HouseSummer.jpg'),
  require('@/images/wix/home-page/gallery/HouseWinter.jpg'),
  require('@/images/wix/home-page/gallery/RNAalbum1.jpg'),
  require('@/images/wix/home-page/gallery/RNAalbum2.jpg'),
  require('@/images/wix/home-page/gallery/RNAalbum3.jpg'),
  require('@/images/wix/home-page/gallery/RNAalbum4.jpg'),
  require('@/images/wix/home-page/gallery/RNAalbum7.jpg'),
  require('@/images/wix/home-page/gallery/RNAalbum8.jpg'),
]

import RNAshirt1 from '@/images/wix/home-page/news/RNAshirt1.jpg'
import Alert from '@/images/wix/home-page/news/Alert.jpg'
import NewRNAsign1 from '@/images/wix/home-page/news/NewRNAsign1.jpg'

import { renderComponents } from '@/lib/contentful/render'
import { fetchEvents } from '@/lib/contentful/entries'
import { writeRedirects } from '@/lib/contentful/netlify-redirects'
import { formatDateTime } from '@/lib/utils'

export async function getStaticProps() {
  await writeRedirects()

  return {
    props: {
      events: (await fetchEvents({ order: 'fields.date' })).slice(0, 2)
    }
  }
}

function UpcomingEventContent({ event }) {
  const { title, date, location, content } = event.fields

  return <div>
    {date && <p><b>{formatDateTime(date, { size: 'short', year: false, weekday: true }).replace(' at 12am', '')}</b></p>}
    {location && <p>{location}</p>}
    {content && renderComponents({ ...content, content: content.content.slice(0, 1) })}
  </div>
}

export default function Home({ events }) {
  return <>
    <Title>Home</Title>

    <Gallery images={IMAGES} css={css`
      height: calc((100vw - 0px) * 0.5625);
      max-height: 75vh;
      min-height: 20vh;
    `}>
      <GalleryText>
        Bringing the best of our past <span>into our future</span>
      </GalleryText>
      <GalleryButtons>
        <GalleryButton href={'/about-us'} text={'Welcome'} />
      </GalleryButtons>
    </Gallery>

    <UpcomingEventsSection title="Upcoming Events">
      {events.map((event, i) => (
        <UpcomingEvent key={i} title={event.fields.title} href={`/events#${event.fields.slug}`}>
          <UpcomingEventContent event={event} />
        </UpcomingEvent>
      ))}
      <UpcomingEvent title="RNA Happy Hour" href="/events#happy-hour">
        <div>
          <p><b>Every Last Friday 5:30–7:30</b></p>
          <p>Campbell Hotel Lounge at 11th & Columbia</p>
          <p>Informal and relaxed, practically to the point of unconsciousness.</p>
        </div>
      </UpcomingEvent>
      <UpcomingEvent title="“Second Friday” Meet-n-Greet" href="/events#second-friday">
        <div>
          <p><b>Every 2nd Friday</b></p>
          <p>Renaissance Brewery at 12th & Lewis</p>
          <p>A social event for residents of our neighborhood.</p>
        </div>
      </UpcomingEvent>
    </UpcomingEventsSection>

    <WhatsNewsSection title="What’s News?">
      <WhatsNewsItem title="RNA Merchandise" image={RNAshirt1} href="/news#rna-merchandise">
        <p>Finally! Now you can show your neighborhood pride by sporting our very own Renaissance logo merchandise. Many shirt designs and colors are available as well as other items such as coffee mugs and tote bags. Get yours today!</p>
      </WhatsNewsItem>
      <WhatsNewsItem title="Alert Neighbors" image={Alert} href="/news#alert-neighbors">
        <p>Concerned about crime in the neighborhood? Take action! We have an Alert Neighbors program for our neighborhood but it needs your participation. Each block needs a block captain to coordinate contact information for neighbors on the block.</p>
      </WhatsNewsItem>
      <WhatsNewsItem title="New Entry Signs" image={NewRNAsign1} href="/news#new-entry-signs">
        <p>Each entry point to Renaissance now has a new logo sign. The old signs were faded and were missing from several places. Thank you to all who donated to help RNA cover the cost! Logo design by long-time resident Randy Stalcup.</p>
      </WhatsNewsItem>
    </WhatsNewsSection>

    <Gallery images={[RNAalbum7]} css={css`
      height: calc((100vw - 0px) * 0.5625);
      max-height: 40vh;
      min-height: 20vh;
    `}>
      <GalleryText>
        We need your support!<br /><span>send your</span> <span>annual dues today</span>
      </GalleryText>
      <GalleryButtons>
        <GalleryButton href={'/dues'} text={'Send Dues'} />
      </GalleryButtons>
    </Gallery>
  </>
}
