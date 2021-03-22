import React from 'react'
import Title from '@/components/title'
import Link from 'next/link'
import styles from '@/styles/home.module.css'

import { Gallery, GalleryText, GalleryButtons, GalleryButton } from '@/components/gallery'
import ShadowImage from '@/components/shadow-image'

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



export default function Home() {
  return <>
    <Title>Home</Title>

    <Gallery images={IMAGES} style={{ height: 'calc((100vw - 0px) * 0.5625)', maxHeight: '75vh', minHeight: '20vh' }}>
      <GalleryText>
        Bringing the best of our past <span>into our future</span>
      </GalleryText>
      <GalleryButtons>
        <GalleryButton href={'/about-us'} text={'Welcome'} />
      </GalleryButtons>
    </Gallery>

    <div className={styles.upcomingEventsSection}>
      <h2>Upcoming Events</h2>
      <div className={styles.upcomingEvents}>
        <div className={styles.upcomingEvent}>
          <h5><Link href="/events"><a>Scavenger Hunt</a></Link></h5>
          <p>
            <b>Self-Guided Scavenger Hunt</b><br />
            Find Neighborhood Treasures<br />
            Play Whenever You Want!
          </p>
          <div>
            <Link href="/events"><a>more info »</a></Link>
          </div>
        </div>
        <div className={styles.upcomingEvent}>
          <h5><Link href="/events"><a>TBA</a></Link></h5>
          <p>
            <b>RNA General Meeting</b><br />
            Campbell Hotel Ballroom<br />
            11th &amp; Columbia Ave.<br />
            Canceled Until Further Notice
          </p>
          <div>
            <Link href="/events"><a>more info »</a></Link>
          </div>
        </div>
        <div className={styles.upcomingEvent}>
          <h5><Link href="/events"><a>TBA</a></Link></h5>
          <p>
            <b>Neighborhood Yard Sale</b><br />
            Your Front Yard<br />
            Canceled Until Further Notice
          </p>
          <div>
            <Link href="/events"><a>more info »</a></Link>
          </div>
        </div>
      </div>
    </div>

    <div className={styles.newsSection}>
      <h2>What’s News?</h2>
      <div className={styles.news}>
        <div>
          <ShadowImage className={styles.newsImage} src={RNAshirt1} />
          <div className={styles.newsContent}>
            <h6>RNA Merchandise</h6>
            <hr />
            <p>Finally! Now you can show your neighborhood pride by sporting our very own Renaissance logo merchandise. Many shirt designs and colors are available as well as other items such as coffee mugs and tote bags. Get yours today!</p>
            <div>
              <Link href="/news"><a>read more »</a></Link>
            </div>
          </div>
        </div>
        <div>
          <ShadowImage className={styles.newsImage} src={Alert} />
          <div className={styles.newsContent}>
            <h6>Alert Neighbors</h6>
            <hr />
            <p>Concerned about crime in the neighborhood? Take action! We have an Alert Neighbors program for our neighborhood but it needs your participation. Each block needs a block captain to coordinate contact information for neighbors on the block.</p>
            <div>
              <Link href="/news"><a>read more »</a></Link>
            </div>
          </div>
        </div>
        <div>
          <ShadowImage className={styles.newsImage} src={NewRNAsign1} />
          <div className={styles.newsContent}>
            <h6>New Entry Signs</h6>
            <hr />
            <p>Each entry point to Renaissance now has a new logo sign. The old signs were faded and were missing from several places. Thank you to all who donated to help RNA cover the cost! Logo design by long-time resident Randy Stalcup.</p>
            <div>
              <Link href="/news"><a>read more »</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Gallery images={[
      RNAalbum7,
    ]} style={{ height: 'calc((100vw - 0px) * 0.5625)', maxHeight: '40vh', minHeight: '20vh' }}>
      <GalleryText>
        We need your support!<br /><span>send your</span> <span>annual dues today</span>
      </GalleryText>
      <GalleryButtons>
        <GalleryButton href={'/dues'} text={'Send Dues'} />
      </GalleryButtons>
    </Gallery>
  </>
}
