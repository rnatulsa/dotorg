import React from 'react'
import Link from 'next/link'
import Title from '@/components/title'
import Banner from '@/components/banner'
import Section from '@/components/section'
import ShadowImage from '@/components/shadow-image'

import WaterMeter from '@/images/wix/banners/WaterMeter.jpg'
import RNAmerchGrid from '@/images/wix/news/RNAmerchGrid.jpg'
import Alert from '@/images/wix/home-page/news/Alert.jpg'
import IMG_9115 from '@/images/wix/news/IMG_9115.jpg'
import RNAbrewery from '@/images/wix/news/RNAbrewery.jpg'
import RNAbreweryGlass from '@/images/wix/news/RNAbreweryGlass.jpg'

export default function News() {
  return <>
    <Title>News</Title>

    <Banner image={WaterMeter} bgStyle={{ opacity: 0.77 }}>
      <h2>What’s News</h2>
      <p>Stay in the Loop</p>
    </Banner>

    <Section id="rna-nco">
      <div>
        <h6>RNA General Meeting and Neighborhood Character Overlay Discussion</h6>
        <p>Our next general meeting is Tuesday, April 19 at 7 pm in the ballroom of the Campbell Hotel at 11th and Columbia. Nathan Foster of the Tulsa Planning Office will be explaining the Neighborhood Character Overlay zoning which is being proposed for the Renaissance Neighborhood.</p>
        <p><a href="/files/renaissance-zca-18-nco-draft.pdf" target="_blank" rel="noopener noreferrer">Neighborhood Character Overlay (draft)</a> – This is the draft of the Neighborhood Character Overlay zoning that is being proposed for our Renaissance Neighborhood. This will be a long process in which you will have multiple opportunities to ask questions, make suggestions, support or reject this zoning. For more details, please see the document called “NCO Q &amp; A” and/or attend the April 19 general meeting.</p>
        <p><a href="/files/renaissance-nco-qa.pdf" target="_blank" rel="noopener noreferrer">Neighborhood Character Overlay Q&amp;A</a> – This Q &amp; A was prepared to help answer your questions about the Neighborhood Character Overlay zoning which is being proposed for the Renaissance Neighborhood. The process will take many months and you will have multiple opportunities to ask questions, make suggestions, support or reject this zoning. Please make plans to attend the April 19 to learn more about this zoning.</p>
      </div>
    </Section>

    <Section id="rna-merchandise">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={RNAmerchGrid} />
      </div>

      <div>
        <h6>RNA Merchandise Available for Sale</h6>
        <p>Tell the world how proud you are of your neighborhood!</p>
        <p><a href="https://www.teepublic.com/user/rnatulsa">Get your Renaissance logo swag today!</a></p>
        <p>A large selection of items are available including shirts, hoodies, coffee mugs, tote bags, stickers and more. Choose your shirt style from among male, female and child sizes. Various colors are available. A portion of the sale price goes to support RNA. Logo designed by long-time resident Randy Stalcup.</p>
        <p><b>NOTE:</b> Sizes run small. Be sure to check the size chart for measurements.</p>
      </div>
    </Section>

    <Section id="new-entry-signs" className="; bg-wixColor12">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={IMG_9115} />
      </div>

      <div>
        <h6>New Entry Signs Installed</h6>
        <p>You may have noticed that most midtown neighborhoods have entry signs with their neighborhood's logo proudly displayed at the back of each stop sign around the perimeter. We were missing about half of the signs we needed to cover each entry. From old RNA documents, it seems that the original placement of signs in the 1990s did not include enough to cover every entry point. The exact reason is unknown but probably had to do with the cost of buying so many signs.</p>
        <p>The City of Tulsa requires these signs to conform to their specifications. One specification requires the signs to be made of solid aluminum of a certain thickness. Prices for aluminum have increased the last few years especially. The total cost for enough signs to cover each entry was originally too expensive for RNA's treasury funds. RNA asked residents to donate extra funds and we raised enough to help cover the cost without cleaning out RNA's treasury. Thank you to all residents who <Link href="/dues"><a>paid dues</a></Link> and/or contributed extra money! The new signs were promptly installed by the City's Traffic Operations department on July 7, 2020.</p>
        <p>The RNA logo was designed by long-time resident Randy Stalcup. His design won a contest RNA ran in the 1990s and his prize was a whopping $25! His design has endured the years to become a highly recognizable symbol for the Renaissance neighborhood.</p>
      </div>
    </Section>

    <Section id="alert-neighbors">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={Alert} />
      </div>

      <div>
        <h6>Alert Neighbors Program in Action</h6>
        <p>Alert Neighbors is a free program provided by <a href="http://tulsacrimestoppers.org/">Tulsa Crimestoppers</a> to engage neighborhoods in discussions about crime and public safety. The program instills effective collaboration and communication among neighbors to prevent crime increase a sense of security.</p>
        <p>For the program to be most effective, each block in the neighborhood needs a volunteer block captain to receive training and coordinate a list of residents on their block to share contact information enabling residents know how to contact their direct neighbors in case they see criminal activity in progress.</p>
        <p>​To become a block captain or for more information contact our resident coordinator, Harold (Skip) Morgan.</p>
      </div>
    </Section>

    <Section className="; bg-wixColor12">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={RNAbrewery} />
        <ShadowImage src={RNAbreweryGlass} />
      </div>

      <div>
        <h6>Renaissance Brewing Company Hosts “Second Friday” Neighborhood Meet-N-Greet Event</h6>
        <p>We not only have the best neighborhood in midtown, we also have our own micro-brewery! The <a href="https://www.renaissancebeer.com/">Renaissance Brewing Company</a> at 12th and Lewis has a tap room <a href="https://ktul.com/news/local/renaissance-brewing-company-opens-its-doors-in-tulsa-this-afternoon">open to the public as of January 2018</a>. It is owned by <Link href="/about-us"><a>Glenn Hall</a></Link>, a long-time RNA board member. He worked with architect <Link href="/about-us"><a>Tom Neal</a></Link>, also a long-time board member, to ensure the design of the building fit in with the historic aesthetics of our area.</p>
        <p>Since the Campbell Hotel ended its "Second Friday" event a while ago, the brewery has stepped up to take its place!</p>
        <p>Second Friday is an social event to give our neighbors a place to meet and get to know each other. It's scheduled for the second Friday of each month. It starts at 4pm and goes until 7pm. Come when you want, stay as long as you want!</p>
        <p>Be sure to follow the brewery on <a href="https://www.facebook.com/Renaissancebeer/">Facebook</a>.</p>
      </div>
    </Section>
  </>
}
