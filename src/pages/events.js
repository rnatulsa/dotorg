import React from 'react'
import Link from 'next/link'

import Title from '@/components/title'
import Banner from '@/components/banner'
import Section from '@/components/section'
import ShadowImage from '@/components/shadow-image'
import Gallery from '@/components/gallery'

import EventBanner3 from '@/images/wix/banners/EventBanner-3.jpg'
import BreweryTender from '@/images/wix/events/BreweryTender.jpg'
import YardSale from '@/images/wix/8ddcb11aa53c45ce954624a4aea25994.jpg'
import CampbellNow1 from '@/images/wix/CampbellNow1.jpg'
import TourGuideArena from '@/images/events/history-walking-tour/tour-guide-arena-2.jpg'
import ChiliFest from '@/images/wix/ChiliFest/Winners2013.jpg'

import First from '@/images/wix/events/scavenger-hunt/first.png'
import Second from '@/images/wix/events/scavenger-hunt/second.png'
import styles from '@/styles/events.module.css'

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

export default function Events() {

  return <>
    <Title>Events</Title>

    <Banner image={EventBanner3} bgStyle={{ opacity: 0.9 }}>
      <h2>Events</h2>
      <p>Come Join the Fun</p>
    </Banner>

    <Section id="chilifest-2021">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={ChiliFest} />
      </div>

      <div>
        <h6>Annual Chili Challenge 2021</h6>
        <p>
          Saturday, October 23<br />
          11am to 1pm<br />
          Gary Park, 1225 South Gary Place
        </p>
        <p>Our annual chili challenge is one of our favorite fall events in the neighborhood. Fix a pot of your favorite chili, bring it hot (no electricity at the location) and join us at Gary Park (new location for this event) for this family-friendly event. Set-up starts at 11 am and tasting/judging starts at noon in three categories – Most Original, Most Traditional and Most Spicy. Come along and join the fun whether or not you’re making chili. Prizes for the winners. RNA will provide everything except the chili. Kids, pets, musical instruments and lawn games welcome. Don’t forget your lawn chair.</p>
      </div>
    </Section>

    <Section id="rna-general-meeting">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={CampbellNow1} />
      </div>

      <div>
        <h6>RNA General Meeting</h6>
        <p>
          Tuesday, October 26<br />
          7pm – ballroom of the Campbell Hotel
        </p>
        <p>
          Subject: Interacting With Those Experiencing Homelessness in Our Neighborhood
        </p>
        <ul>
          <li>Mack Haltom, Executive Director, Tulsa Day Center</li>
          <li>Becky Gligo, Director, Housing Solutions Tulsa</li>
          <li>Tyler Parette, Director of Outreach and Engagement, Housing Solutions Tulsa</li>
        </ul>
      </div>
    </Section>

    <Section id="history-walking-tour">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={TourGuideArena} />
      </div>

      <div>
        <h6>Fall History Walking Tour</h6>
        <p>
          Saturday, October 23 at 10am<br />
          Sundays, November 7 &amp; 14 at 1pm
        </p>
        <p>Meet at 918 Coffee. Participants will receive a green RNA Bracelet and Map. Suggested donation of $10. All proceeds benefit RNA. Reserve your spot by <a href="https://www.signupgenius.com/go/70A0E4DAEAC2CAAF49-renaissance" target="_blank" rel="noopener noreferrer">signing up here</a>.</p>
        <p>It can also be self guided using <a target="_blank" href="https://www.historypin.org/en/renaissance-neighborhood-history-walking-tour-2/geo/36.146068,-95.949558,15/bounds/36.146068,-95.949558,36.146068,-95.949558/paging/1/pin/1153415/project/about">History Pin</a>.</p>
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
        <div className="; flext-none">
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

    <Section id="second-friday">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={BreweryTender} />
      </div>

      <div>
        <h6>“Second Friday” Meet-n-Greet</h6>
        <p>Every second Friday of each month, the <a href="https://www.renaissancebeer.com/">Renaissance Brewing Company</a> hosts a social event for residents of our neighborhood. It is a good chance to mingle with other neighbors and have some fun! Of course, your friends and family are also welcome.</p>
        <p>Renaissance Brewery is located at 12th and Lewis Ave. Be sure to follow them on <a href="https://www.facebook.com/Renaissancebeer/">Facebook</a>.</p>
      </div>
    </Section>

    <Section id="neighborhood-yard-sale">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={YardSale} />
      </div>

      <div>
        <h6>Neighborhood Yard Sale</h6>
        <p>Look for the RNA Yard Sale in summer 2022!</p>
        <p>There is no cost for you to participate! Just gather your treasures and display them in your yard or garage. RNA will advertise in the Tulsa World, Craigslist, FB Marketplace and other online sites. RNA will also put out several big signs around key locations of our neighborhood but you will need to put out signs to direct traffic to your specific location. There will be a sign-up sheet and by signing-up, your address will be placed on the sale map that will be accessible to potential buyers.</p>
      </div>
    </Section>

    <Section>
      <div>
        <h6>Chili Challenge Over the Years</h6>
        <p>The annual Chili Challenge has been a fall tradition since 2009. Residents bring their best chili recipes to compete in three categories: Most Classic, Most Unique and Most Spicy. Watch the EVENTS page for this year's challenge date!</p>
        <Gallery size="contain" images={CHILIFEST_IMAGES} style={{
          height: 'calc((100vw - 0px) * 0.5625)',
          maxHeight: '90vh',
          minHeight: '20vh',
          maxWidth: 'calc((90vh - 0px) / 0.5625)'
        }} />
      </div>
    </Section>

    <Section>
      <div>
        <h6>Parkfest 2015</h6>
        <p>The annual Parkfest was a spring staple for many years. In 2015, it was held at Gary Park at 12th and Gary Place. Janelle Cordray planned a really fun event including games like "Guess How Many Seeds in the Jar" and a "Best Side Dish" contest. The winners won prizes that were donated by Reasor's Grocery Store and other businesses. Hot dogs and soft drinks were provided by RNA. The Tulsa Fire Department came out to let everyone play in their fire truck. There was even a bouncy-house for the kids. A fun time was had by all!</p>
        <Gallery size="contain" images={PARKFEST_IMAGES} style={{
          height: 'calc((100vw - 0px) * 0.5625)',
          maxHeight: '90vh',
          minHeight: '20vh',
          maxWidth: 'calc((90vh - 0px) / 0.5625)'
        }} />
      </div>
    </Section>
  </>
}
