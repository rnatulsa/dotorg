import React from 'react'
import Title from '@/components/title'
import Banner from '@/components/banner'
import BannerImage from '@/images/wix/banners/AboutUsHeader.jpg'
import Gallery from '@/components/gallery'
import Divider from '@/components/divider'
import Section from '@/components/section'

const IMAGES = [
  require('@/images/wix/Houses/RNAhome1.jpg'),
  require('@/images/wix/Houses/RNAhome2.jpg'),
  require('@/images/wix/Houses/RNAhome3.jpg'),
  require('@/images/wix/Houses/RNAhome4.jpg'),
  require('@/images/wix/Houses/RNAhome5.jpg'),
  require('@/images/wix/Houses/RNAhome6.jpg'),
  require('@/images/wix/Houses/RNAhouse7.jpg'),
  require('@/images/wix/Houses/RNAhouse8.jpg'),
  require('@/images/wix/Houses/RNAhouse9.jpg'),
  require('@/images/wix/Houses/RNAhouse10.jpg'),
  require('@/images/wix/Houses/RNAhouse11.jpg'),
  require('@/images/wix/Houses/RNAhouse12.jpg'),
  require('@/images/wix/Houses/RNAhouse13.jpg'),
  require('@/images/wix/Houses/RNAhouse14.jpg'),
  require('@/images/wix/Houses/RNAhouse15.jpg'),
  require('@/images/wix/Houses/RNAhouse16.jpg'),
  require('@/images/wix/Houses/RNAhouse17.jpg'),
  require('@/images/wix/Houses/RNAhouse18.jpg'),
  require('@/images/wix/Houses/RNAhouse19.jpg'),
  require('@/images/wix/Houses/RNAhouse20.jpg'),
  require('@/images/wix/Houses/RNAhouse21.jpg'),
  require('@/images/wix/Houses/RNAhouse22.jpg'),
  require('@/images/wix/Houses/RNAhouse23.jpg'),
  require('@/images/wix/Houses/RNAhouse24.jpg'),
  require('@/images/wix/Houses/RNAhouse25.jpg'),
  require('@/images/wix/Houses/RnaHouse26.jpg'),
  require('@/images/wix/Houses/RnaHouse27.jpg'),
  require('@/images/wix/Houses/RnaHouse28.jpg'),
  require('@/images/wix/Houses/RNAhouse29.jpg'),
  require('@/images/wix/Houses/RNAhouse30.jpg'),
  require('@/images/wix/Houses/RNAhouse31.jpg'),
  require('@/images/wix/Houses/RNAhouse32.jpg'),
  require('@/images/wix/Houses/RNAhouse33.jpg'),
  require('@/images/wix/Houses/RNAhouse34.jpg'),
  require('@/images/wix/Houses/RNAhouse35.jpg'),
  require('@/images/wix/Houses/RNAhouse36.jpg'),
  require('@/images/wix/Houses/RNAhouse37.jpg'),
  require('@/images/wix/Houses/RNAhouse38.jpg'),
  require('@/images/wix/Houses/RNAhouse39.jpg'),
  require('@/images/wix/Houses/RNAhouse40.jpg'),
  require('@/images/wix/Houses/RNAhouse41.jpg'),
  require('@/images/wix/Houses/RNAhouse42.jpg'),
  require('@/images/wix/Houses/RNAhouse43.jpg'),
  require('@/images/wix/Houses/RNAhouse44.jpg'),
]

export default function VirtualHomeTour() {
  return <>
    <Title>Virtual Home Tour</Title>

    <Banner image={BannerImage} bgStyle={{ opacity: 0.6 }}>
      <h2>Virtual Home Tour</h2>
      <p>Fall in love with our neighborhood</p>
    </Banner>

    <Section>
      <div>
        <p>
          The majority of the homes in Renaissance were built between 1920-1940.
          Examples of styles from other decades are sprinkled throughout.
          Various architectural styles can be found including Tudor Revival, Craftsman Bungalow, Swiss Chalet and Colonial.
        </p>

        <Divider />

        <Gallery images={IMAGES} style={{
          height: 'calc((100vw - 0px) * 0.5625)',
          maxHeight: '90vh',
          minHeight: '20vh',
          maxWidth: 'calc((90vh - 0px) / 0.5625)'
        }} />
      </div>
    </Section>
  </>
}
