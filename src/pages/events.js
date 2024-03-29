import React from 'react'

import Title from '@/components/title'
import Banner from '@/components/banner'
import Section from '@/components/section'
import ShadowImage from '@/components/shadow-image'
import Gallery from '@/components/gallery'

import EventBanner3 from '@/images/wix/banners/EventBanner-3.jpg'
import BreweryTender from '@/images/wix/events/BreweryTender.jpg'
import YardSale from '@/images/wix/8ddcb11aa53c45ce954624a4aea25994.jpg'
import CampbellNow1 from '@/images/wix/CampbellNow1.jpg'

import First from '@/images/wix/events/scavenger-hunt/first.png'
import Second from '@/images/wix/events/scavenger-hunt/second.png'
import styles from '@/styles/events.module.css'

import { fetchEvents } from '@/lib/contentful/entries'
import { renderComponents } from '@/lib/contentful/render'
import { formatDateTime } from '@/lib/utils'


const CHILIFEST_IMAGES = [
  require('@/images/wix/ChiliFest/BannerOnTable.jpg'),
  require('@/images/wix/ChiliFest/BoyLaughing2013.jpg'),
  require('@/images/wix/ChiliFest/ChiliAwards2012.jpg'),
  require('@/images/wix/ChiliFest/ChiliGroup2012-1.jpg'),
  require('@/images/wix/ChiliFest/ChiliGroup2012-2.jpg'),
  require('@/images/wix/ChiliFest/ChiliGroup2012-3.jpg'),
  require('@/images/wix/ChiliFest/ChiliGroup2016.jpg'),
  require('@/images/wix/ChiliFest/ChiliGroup2018.jpg'),
  require('@/images/wix/ChiliFest/ChiliTable2012.jpg'),
  require('@/images/wix/ChiliFest/ChiliTable2018.jpg'),
  require('@/images/wix/ChiliFest/Cookies.jpg'),
  require('@/images/wix/ChiliFest/GirlwithCaterpillar2013.jpg'),
  require('@/images/wix/ChiliFest/GirlwithLadel2013.jpg'),
  require('@/images/wix/ChiliFest/GlennLade2013l.jpg'),
  require('@/images/wix/ChiliFest/GroupSceneCropped2017.jpg'),
  require('@/images/wix/ChiliFest/LookingInPot2013.jpg'),
  require('@/images/wix/ChiliFest/Trophies2013.jpg'),
  require('@/images/wix/ChiliFest/VoteBox2017.jpg'),
  require('@/images/wix/ChiliFest/Winners2013.jpg'),
  require('@/images/wix/ChiliFest/Winners2018.jpg'),
]

const PARKFEST_IMAGES = [
  require('@/images/wix/Parkfest2015/BestSideDishWinnerCherie.jpg'),
  require('@/images/wix/Parkfest2015/BouncyHouse.jpg'),
  require('@/images/wix/Parkfest2015/Fireman.jpg'),
  require('@/images/wix/Parkfest2015/Firemen.jpg'),
  require('@/images/wix/Parkfest2015/Firetruck.jpg'),
  require('@/images/wix/Parkfest2015/FiretruckKids.jpg'),
  require('@/images/wix/Parkfest2015/GuessHowManySeeds.jpg'),
  require('@/images/wix/Parkfest2015/HotDogGrillerBucky.jpg'),
  require('@/images/wix/Parkfest2015/LeeAndKendra.jpg'),
  require('@/images/wix/Parkfest2015/LeeWinnerSeedCount.jpg'),
  require('@/images/wix/Parkfest2015/Mark-Robert-Tom.jpg'),
  require('@/images/wix/Parkfest2015/Parkfest2015-2.jpg'),
  require('@/images/wix/Parkfest2015/Parkfest2015.jpg'),
  require('@/images/wix/Parkfest2015/ParkfestPlannerJanelle.jpg'),
]

export async function getStaticProps() {
  return {
    props: {
      events: await fetchEvents({ order: 'fields.date' })
    }
  }
}

function Event({ event }) {
  const { title, date, location, content } = event.fields

  const formatDate = (date) => {
    return formatDateTime(date, { weekday: true }).replace(' at 12:00 AM', '')
  }

  return <>
    <Section id={event.fields.slug}>
      <div className={styles.event}>
        <h2 className={styles.event_title}>{title}</h2>

        {date && <div><b>{formatDate(date)}</b></div>}
        {location && <div><b>{location}</b></div>}

        {renderComponents(content)}
      </div>
    </Section>
  </>
}

export default function Events({ events }) {
  return <>
    <Title>Events</Title>

    <Banner image={EventBanner3} bgStyle={{ opacity: 0.9 }}>
      <h2>Events</h2>
      <p>Come Join the Fun</p>
    </Banner>

    {events.map((event, i) => <Event key={i} event={event} />)}

    <Section id="happy-hour">
      <div>
        <h6>RNA Happy Hour</h6>
        <p>You asked for it - you got it. The return of the RNA Happy Hour at the Campbell Hotel Lounge. Drink specials! Meet your neighbors! Gripe at your Board members (attendance of Board members not guaranteed.) Informal and relaxed, practically to the point of unconsciousness.</p>
        <p>Repeats the last Friday of every month, 5:30 to 7:30 pm</p>
      </div>
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={CampbellNow1} />
      </div>
    </Section>

    <Section id="second-friday">
      <div>
        <h6>“Second Friday” Meet-n-Greet</h6>
        <p>Every second Friday of each month, the <a href="https://www.renaissancebeer.com/">Renaissance Brewing Company</a> hosts a social event for residents of our neighborhood. It is a good chance to mingle with other neighbors and have some fun! Of course, your friends and family are also welcome.</p>
        <p>Renaissance Brewery is located at 12th and Lewis Ave. Be sure to follow them on <a href="https://www.facebook.com/Renaissancebeer/">Facebook</a>.</p>
      </div>
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={BreweryTender} />
      </div>
    </Section>

    <div className={styles.scavengerHunt} id="scavenger-hunt">
      <div className="; flex-1 p-4 text-white bg-wixColor25">
        <h2 className="; text-wixColor21">Scavenger <span>Hunt</span></h2>
        <p>Bored with staying in the house? We've got the perfect game for you! We created a self-guided scavenger hunt for you to find special spots within our neighborhood. While having fun, you will hone your observation skills to see things you've never noticed before!</p>
        <p>There are two ways to play:<br /><a href="https://rnatulsa-scavenger-hunt-2020.netlify.com/RNA-Scavenger-Hunt.pdf">Offline</a> or <a href="https://docs.google.com/forms/d/10AxstTbYdk8gkFNXAPCyp3qMLD_Zms-q8870cNcmDqE/viewform?edit_requested=true&pli=1">Online</a></p>
      </div>
      <div className="; flex-1 p-4 text-wixColor24 bg-wixColor26 flex flex-col">
        <div className="; flex-1">
          <h2 className="; ">Play <a href="https://rnatulsa-scavenger-hunt-2020.netlify.com/RNA-Scavenger-Hunt.pdf">Offline</a></h2>
          <p>Download and then print a copy of the score sheet and carry this it with you as you explore. Check off each item as you find it. If you choose, you can take a photo of yourself with each item and post your photos on our FB page to show off your skills!</p>
        </div>
        <div className="; flex-none">
          <a className={styles.button} href="https://rnatulsa-scavenger-hunt-2020.netlify.com/RNA-Scavenger-Hunt.pdf">Download Score Sheet</a>
        </div>
      </div>
      <div className="; flex-1 p-4 text-wixColor25 bg-wixColor22 flex flex-col">
        <div className="; flex-1">
          <h2 className="; ">Play <a href="https://docs.google.com/forms/d/10AxstTbYdk8gkFNXAPCyp3qMLD_Zms-q8870cNcmDqE/viewform?edit_requested=true&pli=1">Online</a></h2>
          <p>Use your mobile phone to access a digital version of the score sheet to use as you hunt. Upload a photo of yourself with each item you find. When you finish, your score will appear on a digital <a href="https://rnatulsa-scavenger-hunt-2020.netlify.com/">leaderboard</a> along with others playing the game. You will need a free Google account to play on-line.</p>
        </div>
        <div className="; flex-none">
          <a className={styles.button} href="https://docs.google.com/forms/d/10AxstTbYdk8gkFNXAPCyp3qMLD_Zms-q8870cNcmDqE/viewform?edit_requested=true&pli=1">Click to Start Your Hunt</a>
        </div>
      </div>
    </div>

    <div className="; bg-wixColor24 text-center text-white p-6">
      <div className="; container mx-auto flex justify-center content-center">
        <div className="; hidden md:flex flex-col justify-center">
          <img src={First} style={{ height: '157px' }} />
        </div>
        <a href="https://rnatulsa-scavenger-hunt-2020.netlify.com/" className="; m-6 uppercase underline font-bold flex flex-col justify-center" style={{ fontSize: '30px', letterSpacing: '0.1em' }}>
          <div className="; text-wixColor26">Click to Check</div>
          <div>Leaderboard</div>
          <div>Scores</div>
        </a>
        <div className="; hidden md:flex flex-col justify-center">
          <img src={Second} style={{ height: '157px' }} />
        </div>
      </div>
    </div>
  </>
}
