import React from 'react'

import Title from '@/components/title'
import Banner from '@/components/banner'
import Section from '@/components/section'
import ShadowImage from '@/components/shadow-image'
import Gallery from '@/components/gallery'

import EventBanner3 from '@/images/wix/banners/EventBanner-3.jpg'
import BreweryTender from '@/images/wix/events/BreweryTender.jpg'
import YardSale from '@/images/wix/8ddcb11aa53c45ce954624a4aea25994.jpg'
import MidtownGarageSale from '@/images/events/garage-sale/Midtown_Garage_Sale.jpg'
import BeerisokBookSigning from '@/images/events/2022/04/beerisok-book-signing.png'

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


    <Section id="german-beer-day">
      <div>
        <h6>German Beer Day / Oklahoma Beer Book Signing</h6>
        <p>
          Saturday, April 23<br />
          5pm – Renaissance Brewing Company
        </p>
        <p>
          Brian Welzbacher, author of Oklahoma Beer, will be signing books while we celebrate German Beer Day.
        </p>
        <p>
          <a href="https://www.beerisok.com/" target="_blank">beerisok.com</a>
        </p>
      </div>
      <div className="; sm:flex-none sm:w-1/3 sm:justify-self-end">
        <a href="https://www.beerisok.com/" target="_blank">
          <ShadowImage src={BeerisokBookSigning} />
        </a>
      </div>
    </Section>

    <Section id="neighborhood-yard-sale">
      <div>
        <h6>Midtown Garage Sale Extravaganza</h6>
        <p>The Renaissance Neighborhood Association has partnered with Florence Park and Lewiston Gardens to hold a 3-neighborhood-wide garage sale on May 20 - 22.</p>
        <p>There is no cost for you to participate! Just gather your treasures and display them in your yard or garage. The Neighborhood Associations will advertise in the Tulsa World, Craigslist, Facebook Marketplace and other online sites. The associations will also put out several big signs around key locations of our neighborhood but you will need to put out signs to direct traffic to your specific location.</p>
        <p>Sign up to participate here: <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdKIEris71GFHSG-naYmskVEFMASQ3uROic2xH9P91iWYtMTQ/viewform">https://docs.google.com/forms/d/e/1FAIpQLSdKIEris71GFHSG-naYmskVEFMASQ3uROic2xH9P91iWYtMTQ/viewform</a></p>
        <p>Once you sign up, your address will be placed on the sale map that will be accessible to potential buyers.</p>
      </div>
      <div className="; sm:flex-none sm:w-1/3">
        <a href="/sale">
          <ShadowImage src={MidtownGarageSale} alt={'Midtown Garage Sale - Hosted by Renaissance, Florence Park & Lewiston Gardens'} />
        </a>
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
