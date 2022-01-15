import React from 'react'
import Link from 'next/link'
import Title from '@/components/title'
import BoardMembers from '@/components/board-members'
import Banner from '@/components/banner'
import Section from '@/components/section'
import ShadowImage from '@/components/shadow-image'

import DSCN5404 from '@/images/wix/banners/DSCN5404.jpg'
import OldNew2 from '@/images/wix/OldNew-2.jpg'
import FullSizeRender from '@/images/wix/FullSizeRender.jpg'
import CampbellNow1 from '@/images/wix/CampbellNow1.jpg'
import EntrySign from '@/images/wix/EntrySign.jpg'

import { fetchBoardMembers } from '@/lib/contentful/entries'

export default function AboutUs({boardMembers}) {
  return <>
    <Title>About Us</Title>

    <Banner image={DSCN5404} bgStyle={{ opacity: 0.66 }}>
      <h2>About Us</h2>
      <p>Established 1994</p>
    </Banner>

    <Section className="; text-center">
      <div className="; flex-1">
        <h6>Our Vision</h6>
        <p>Our association is committed to protecting and restoring the historical character of the homes and businesses in Renaissance. We strive to foster a closely connected community that is welcoming and inclusive by providing information and guidance to all residents.</p>
      </div>

      <div className="; flex-1 self-center">
        <ShadowImage src={OldNew2} />
      </div>

      <div className="; flex-1">
        <h6>What We Do</h6>
        <p>RNA board members volunteer their time and talents to build a stronger sense of community. We organize social events to allow residents to meet one another. We hold neighborhood meetings and use social media to share information that affects our residents. As needed, we serve as a liaison between the City of Tulsa and our residents.</p>
      </div>
    </Section>

    <Section className="; bg-wixColor26">
      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={FullSizeRender} />
      </div>

      <div>
        <h6>Our Community</h6>
        <p>The Renaissance Neighborhood is nestled in the heart of Tulsa's historic midtown. It is defined by the area between 11th Street and 15th Street East, from Harvard to Lewis South. Flanked by "Cherry Street" (15th) and historic Route 66 (11th), this neighborhood enjoys a selection of restaurants, boutique shops, antique shops and funky vintage stores.</p>
        <p>Our neighborhood boasts a variety of architectural styles including Craftsman Bungalow, Swiss Chalet, Colonial and Tudor Revival which are beautifully framed by mature trees. The majority of the homes were built between the 1920s and 40s with some newer builds from various decades sprinkled throughout the area.</p>
        <p><Link href="/gallery-virtual-home-tour"><a>Click here to take a Virtual Tour of homes...</a></Link></p>
      </div>
    </Section>

    <Section>
      <div>
        <h6>A Little History Lesson</h6>
        <p>The Renaissance Neighborhood Association was established in 1994. An early accomplishment was successfully preventing the demolition of the Casa Loma Building at 11th and Columbia Ave. This building is now known as the historic <a href="https://www.thecampbellhotel.com/history">Max Campbell Building</a> and is listed on the National Register of Historic Places. It has been completely renovated and is open for business today.</p>
        Other accomplishments of the newly formed RNA include preventing an auto repair shop from expanding into the residential part of the neighborhood and working with the Tulsa Fire Department to locate a new station on 15th Street rather than in the middle of a residential area. RNA continues today to advocate to maintain the charm and integrity of the historic neighborhood.
        <p>Long-time resident, Randy Stalcup designed the current logo which is used for signs that are posted at entries into our neighborhood and in many other forms including our <a href="https://www.teepublic.com/user/rnatulsa">new line of RNA merchandise available for purchase now!</a></p>
        <p>Our neighborhood historian, Arena Mueller writes a blog about home histories. She has unearthed many secrets of the past by researching original house deeds and records. Go on a fascinating journey by reading <a href="https://tulsarenaissancehistory.blogspot.com/">The Renaissance Neighborhood History Project</a>. Arena and her project was featured in the <a href="http://www.tulsapeople.com/Tulsa-People/March-2019/Framing-history/">March 2019 issue of Tulsa People</a>.</p>
        <p>Longtime RNA Board member, Carla Robinson, designed the neighborhood website and was the webmaster through 2020.</p>
      </div>

      <div className="; sm:flex-none sm:w-1/3">
        <ShadowImage src={CampbellNow1} />
        <ShadowImage src={EntrySign} />
      </div>
    </Section>

    <Section className="; text-center">
      <BoardMembers members={boardMembers} />
    </Section>
  </>
}

export async function getStaticProps() {
  return {
    props: {
      boardMembers: await fetchBoardMembers()
    }
  }
}

/*
export async function getStaticProps() {
  await cache(
    // paths
    [...data.members.map(member => `board-members/${member.image}`)],
    // sizes
  )

  return {
    props: {
      members: data.members,
    },
  }
}

const cache = async (paths = []) => {
  const sizes = [
    // https://nextjs.org/docs/basic-features/image-optimization#device-sizes
    [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
    [16, 32, 48, 64, 96, 128, 256, 384],
  ].flat().map(width => ({ width }))

  const sourceImagesDir = join(process.cwd(), 'src/images')
  const targetImagesDir = join(process.cwd(), 'public/images/_loader')

  const promises = sizes.map(async ({ width, quality = 'auto' }) => {
    const sizeKey = `f_auto,c_limit,w_${width},q_${quality}`
    return paths.map(async (path) => {
      const source = join(sourceImagesDir, path)
      const target = join(targetImagesDir, sizeKey, path)

      // TODO: resize rather than copy
      await fs.mkdir(dirname(target), { recursive: true })
      return fs.stat(target).catch(() => fs.copyFile(source, target))
    })
  })

  await Promise.all(promises.flat())
}
*/
