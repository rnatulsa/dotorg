import React from 'react'
import Title from '@/components/title'
import Banner from '@/components/banner'
import Divider from '@/components/divider'
import BannerImage from '@/images/wix/banners/HistoryBanner.jpg'
import Section from '@/components/section'

export default function History() {
  return <>
    <Title>History</Title>

    <Banner image={BannerImage} bgStyle={{ opacity: 0.6 }}>
      <h2>Home Histories</h2>
      <p>Your home has a history of its own</p>
    </Banner>

    <Section>
      <div>
        <p>
          Did you know that Renaissance has its very own historian? Meet Arena Mueller, resident and RNA board member! She was featured in the <a href="http://www.tulsapeople.com/Tulsa-People/March-2019/Framing-history/">March 2019 issue of Tulsa People</a> for her research work. In her spare time, Arena digs into house deeds and records to unearth fascinating stories within a house's history. Scroll through her blog below to take a journey into Tulsa’s past. Each house has a story to tell.
        </p>
        <Divider />
      </div>
    </Section>

    <iframe src="https://tulsarenaissancehistory.blogspot.com" width="100%" style={{ height: '100vh' }}></iframe>
  </>
}
