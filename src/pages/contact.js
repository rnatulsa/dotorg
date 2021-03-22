import React from 'react'
import Title from '@/components/title'
import Banner from '@/components/banner'
import MailboxBanner2 from '@/images/wix/banners/MailboxBanner2.jpg'

import ComputerTable from '@/images/wix/contact/computer-table.jpg'
import MailTruck from '@/images/wix/contact/mail-truck.jpg'

import RNAhouse35 from '@/images/wix/Houses/RNAhouse35.jpg'
import RNAhouse36 from '@/images/wix/Houses/RNAhouse36.jpg'
import RNAhouse37 from '@/images/wix/Houses/RNAhouse37.jpg'
import RNAhouse38 from '@/images/wix/Houses/RNAhouse38.jpg'
import RNAhouse39 from '@/images/wix/Houses/RNAhouse39.jpg'
import NextdoorImage from '@/images/wix/nextdoor.jpg'
import FacebookImage from '@/images/wix/facebook.png'
import AlertImage from '@/images/wix/home-page/news/Alert.jpg'

import styles from '@/styles/contact.module.css'

function Tile({ src, children }) {
  return (
    <div className={styles.tile}>
      <div className="; absolute inset-0 opacity-30">
        <img src={src} className="; object-cover w-full h-full" />
      </div>
      <div className="; relative">
        {children}
      </div>
    </div>
  )
}

function IconTile({ href, backgroundColor, backgroundImage, Image, children, color = 'black' }) {
  return (
    <a href={href} className={styles.iconTile} style={{ backgroundImage: `url(${backgroundImage})`, color }}>
      <div className="; absolute inset-0 flex flex-col justify-center items-center" style={{ backgroundColor }}>
        <div className="; flex flex-col justify-end mb-4" style={{ height: '70px', width: '70px' }}><Image /></div>
        <div className="; underline w-full text-center" style={{ fontSize: '16px', letterSpacing: '0.1em' }}>
          {children}
        </div>
      </div>
    </a>
  )
}

const MailIcon = () => (
  <svg className="; max-w-full max-h-full mx-auto" style={{ fill: '#4F4F4F' }} preserveAspectRatio="xMidYMid meet" data-bbox="1.438 1 81.176 51.036" xmlns="http://www.w3.org/2000/svg" viewBox="0.8230303030303052 -8.535272727272726 82.40593939393939 70.10654545454545" role="img"><g><path d="M82.4 1.9c-.2-.6-.8-.9-1.4-.9L2.9 3.6c-.7 0-1.2.4-1.4 1.1-.2.6.1 1.2.7 1.6l18.6 11.2-8 13.2c-.3.5-.3 1.1 0 1.6s.7.7 1.4.7l13.8-.9 4.4 18.8c.1.5.5 1 1.1 1.1.5.1 1.1 0 1.5-.4l47.3-48c.4-.6.4-1.1.1-1.7zM8.1 6.4l63.6-2.1-47.6 11.9c-.1-.2-.3-.3-.5-.5L8.1 6.4zm8.8 23.4l7.3-12c.1-.2.2-.4.2-.6L77 4.2 30.1 29.4c-.3-.2-.6-.4-1-.4H29l-12.1.8zm17.7 17.7l-4-17.3L75.4 6.1 34.6 47.5z"></path></g></svg>
)

const CellPhoneIcon = () => (
  <svg className="; max-w-full max-h-full mx-auto" style={{ fill: '#FFFFFF' }} preserveAspectRatio="xMidYMid meet" data-bbox="51 2.96 141 193.94" xmlns="http://www.w3.org/2000/svg" viewBox="51 2.96 141 193.94" role="img">
    <g>
      <path d="M136.1 58.9c.8 0 1.4.7 1.4 1.4V184c0 .8-.7 1.4-1.4 1.4H63.9c-.8 0-1.4-.7-1.4-1.4V60.4c0-.8.7-1.4 1.4-1.4h72.2m0-11.6H63.9c-7.1 0-12.9 5.8-12.9 12.9V184c0 7.1 5.8 12.9 12.9 12.9h72.2c7.1 0 12.9-5.8 12.9-12.9V60.4c0-7.2-5.8-13-12.9-13z"></path>
      <path d="M164.8 54.3c-2.9 0-5.4-2.2-5.7-5.2-.6-6.7-5.7-12.6-12.3-14.3-3.1-.8-4.9-4-4.1-7s4-4.9 7-4.1c11.2 2.9 19.7 13 20.8 24.3.3 3.2-2 6-5.2 6.3h-.5z"></path>
      <path d="M186.2 53.1c-3.2 0-5.7-2.6-5.8-5.7 0-15.4-11.5-29.6-26.7-33-3.1-.7-5.1-3.8-4.4-6.9s3.8-5.1 6.9-4.4C176.6 7.6 192 26.6 192 47.3c0 3.2-2.6 5.8-5.8 5.8.1 0 0 0 0 0z"></path>
      <path d="M109.7 165c0 5.357-4.343 9.7-9.7 9.7-5.357 0-9.7-4.343-9.7-9.7 0-5.357 4.343-9.7 9.7-9.7 5.357 0 9.7 4.343 9.7 9.7z"></path>
    </g>
  </svg>
)

const FacebookIcon = () => <img src={FacebookImage} />
const NextdoorIcon = () => <img src={NextdoorImage} />

export default function Contact() {

  return <>
    <Title>Contact</Title>

    <Banner image={MailboxBanner2} bgStyle={{ opacity: 0.77 }}>
      <h2>Contact</h2>
      <p>We want to hear from you<br />Choose the best method for you below</p>
    </Banner>

    <div className="; text-center p-4 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      <Tile src={ComputerTable}>
        Send a Message
      </Tile>
      <Tile src={MailTruck}>
        Mail a Letter

        <div className="; text-2xl sm:text-4xl bg-white bg-opacity-75 border-wixColor15 border rounded-md m-8 py-8 px-4" style={{
          boxShadow: '-5.00px 8.66px 4px 0px rgba(0, 0, 0, 0.6)',
          textShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 5px'
        }}>
          Renaissance Neighborhood Association<br />
          P.O. Box 4362<br />
          Tulsa, OK 74159
        </div>
      </Tile>
    </div>

    <div className="; my-12">
      <div className="; text-center">
        <h2 className="; uppercase font-bold text-wixColor13" style={{ fontSize: '46px' }}>Click to Connect</h2>
      </div>

      <div className="; sm:flex justify-center m-4">
        <IconTile href="mailto:renaissance.neighbors@gmail.com" backgroundColor="rgb(255, 255, 255, 0.9)" backgroundImage={RNAhouse37} Image={MailIcon}>
          <span className="; break-words">renaissance.neighbors@gmail.com</span>
        </IconTile>
        <IconTile href="http://www.nextdoor.com/" backgroundColor="rgb(51, 153, 102, 0.9)" backgroundImage={RNAhouse39} Image={NextdoorIcon} color="white">
          Nextdoor
        </IconTile>
        <IconTile href="https://www.facebook.com/groups/62329771045/" backgroundColor="rgb(4, 81, 132, 0.9)" backgroundImage={RNAhouse38} Image={FacebookIcon} color="white">
          Find us on Facebook
        </IconTile>
      </div>
    </div>

    <div className="; my-12">
      <div className="; text-center">
        <h2 className="; uppercase font-bold text-wixColor13" style={{ fontSize: '46px' }}>Alert Neighbors Contact</h2>
        <div>Neighborhood Coordinator Harold (Skip) Morgan</div>
      </div>

      <div className="; flex justify-center m-4">
        <IconTile href="mailto:haroldlmorgan@gmail.com" backgroundColor="rgb(255, 255, 255, 0.9)" backgroundImage={RNAhouse35} Image={MailIcon}>
          <span className="; break-words">haroldlmorgan@gmail.com</span>
        </IconTile>
        <IconTile href="tel:918-230-7090" backgroundColor="rgb(226, 28, 33, 0.9)" backgroundImage={AlertImage} Image={CellPhoneIcon} color="white">
          918-230-7090
        </IconTile>
        <IconTile href="https://www.facebook.com/skip.morgan.14" backgroundColor="rgb(4, 81, 132, 0.9)" backgroundImage={RNAhouse36} Image={FacebookIcon} color="white">
          Find him on Facebook
        </IconTile>
      </div>
    </div>
  </>
}
