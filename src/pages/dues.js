import React from 'react'
import PropTypes from 'prop-types'
import Title from '@/components/title'
import Banner from '@/components/banner'
import Section from '@/components/section'
import RitzBanner from '@/images/wix/banners/RitzBanner.jpg'
import styles from '@/styles/dues.module.css'

const RATES = {
  couples: 20,
  singles: 15,
  business: 30,
}

const PayPalBuyNowForm = ({ rate, itemName, itemNumber }) => (
  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
    <input type="hidden" name="cmd" value="_xclick" />
    <input type="hidden" name="business" value="renaissance.neighbors@gmail.com" />
    <input type="hidden" name="lc" value="US" />
    <input type="hidden" name="item_name" value={itemName} />
    <input type="hidden" name="item_number" value={itemNumber} />
    <input type="hidden" name="amount" value={rate} />
    <input type="hidden" name="currency_code" value="USD" />
    <input type="hidden" name="cancel_return" value="https://www.rnatulsa.org/dues" />
    <input type="hidden" name="button_subtype" value="services" />
    <input type="hidden" name="no_note" value="0" />
    <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
  </form>
)
PayPalBuyNowForm.propTypes = {
  rate: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
  itemNumber: PropTypes.string.isRequired,
}

const rate = value => value.toLocaleString('en-US', { style: 'currency', currency: "USD" }).replace('.00', '') + '/year'

export default function Dues() {
  return <>
    <Title>Dues</Title>

    <Banner image={RitzBanner} bgStyle={{ opacity: 0.7 }}>
      <h2>Membership Dues</h2>
      <p>Your contribution is appreciated!</p>
    </Banner>

    <Section>
      <div>
        <p>Membership dues are voluntary but are essential to the work RNA does on behalf of all residents. Dues cover one year of membership beginning at the spring RNA meeting. Members can vote in board elections and other association decisions requiring a vote.</p>
      </div>
    </Section>

    <Section className={styles.rates}>
      <div className="; flex-1">
        <h5 className="; text-center">Rates</h5>
        <ul>
          <li><span>Couples Rate</span> {rate(RATES.couples)} for two adults (two votes) in same residence</li>
          <li><span>Single Rate</span> {rate(RATES.singles)} for one adult (one vote) at a residence</li>
          <li><span>Business Rate</span> {rate(RATES.business)} for one business (one vote) located within neighborhood</li>
        </ul>
        <p className="; mx-auto" style={{ width: '79px' }}>
          <svg preserveAspectRatio="xMidYMid meet" data-bbox="34.501 48 130.997 104.001" viewBox="34.501 48 130.997 104.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" style={{ width: '79px', height: '62px' }}>
            <g>
              <path d="M70.51 94.884c-2.544 0-4.614 2.056-4.614 4.583 0 2.53 2.07 4.585 4.614 4.585s4.614-2.056 4.614-4.585c0-2.527-2.07-4.583-4.614-4.583zm0 5.359a.778.778 0 0 1-.779-.776c0-.427.35-.774.779-.774s.779.347.779.774c0 .429-.35.776-.779.776z" fill="#3FAA49" data-color="1"></path>
              <path d="M120.336 81.666a1.905 1.905 0 0 0-1.136-2.448c-13.028-4.767-25.788.883-26.325 1.126a1.898 1.898 0 0 0-.951 2.52 1.922 1.922 0 0 0 2.537.947c.12-.052 11.902-5.243 23.411-1.017a1.924 1.924 0 0 0 2.464-1.128z" fill="#3FAA49" data-color="1"></path>
              <path d="M163.599 92.518a7.017 7.017 0 0 0-4.906-2.207c-1.595.002-3.133.518-4.307 1.609a5.932 5.932 0 0 0-1.9 4.164 1.913 1.913 0 0 0 1.855 1.967c1.034-.002 1.945-.791 1.98-1.843a2.14 2.14 0 0 1 .687-1.508c.424-.394.984-.647 1.56-.58a3.193 3.193 0 0 1 2.232 1.002c.584.62.891 1.428.861 2.277a4.406 4.406 0 0 1-1.416 3.102 4.456 4.456 0 0 1-3.208 1.198c-2.572-.082-4.821-1.771-5.598-4.204-.017-.053-.058-.091-.079-.141-1.584-16.214-18.851-27.81-41.995-27.81-9.771 0-19.273 2.651-26.995 7.443-6.242-6.267-14.236-5.553-19.418-2.867a4.634 4.634 0 0 0-2.434 4.762c.541 3.786 2.518 6.522 4.947 8.445-3.544 7.231-13.434 12.61-25.227 13.567-3.218.263-5.737 2.976-5.737 6.178v1.384c0 1.176.332 2.319.959 3.303 2.716 4.273 12.865 18.362 29.316 20.219 1.188.134 2.085 1.171 2.085 2.408v11.41c0 3.422 2.801 6.205 6.247 6.205h3.553a6.287 6.287 0 0 0 4.661-2.071c2.195-2.433 6.118-7.53 8.512-14.919h21.928a1.91 1.91 0 0 0 1.917-1.905 1.912 1.912 0 0 0-1.917-1.905H90.859a42.516 42.516 0 0 0 .865-12.735c-.087-1.049-1.016-1.786-2.067-1.746a1.913 1.913 0 0 0-1.758 2.053c1.221 15.036-6.192 25.018-9.435 28.611a2.432 2.432 0 0 1-1.805.806h-3.553a2.406 2.406 0 0 1-2.412-2.396v-11.41c0-3.177-2.359-5.84-5.485-6.192-14.758-1.667-24.021-14.557-26.51-18.468a2.384 2.384 0 0 1-.365-1.27v-1.384c0-1.255.954-2.279 2.215-2.383 13.133-1.062 23.89-6.998 28.18-15.336 2.29 1.105 4.606 1.672 6.302 1.848a1.91 1.91 0 0 0 2.104-1.694 1.912 1.912 0 0 0-1.703-2.096c-.407-.042-9.992-1.171-11.12-9.062a.824.824 0 0 1 .419-.853c1.417-.739 8.346-3.846 14.395 1.687-.172.129-.354.248-.524.379a1.898 1.898 0 0 0-.335 2.673 1.926 1.926 0 0 0 2.691.332 42.509 42.509 0 0 1 2.145-1.555c7.325-4.938 16.65-7.658 26.26-7.658 21.474 0 37.95 11.128 38.319 25.883.257 10.215-2.949 14.582-5.525 18.091-.719.982-1.401 1.907-1.967 2.892-.19.332-.277.714-.247 1.099 1.211 14.91-5.692 23.287-8.716 26.196a2.416 2.416 0 0 1-1.68.677h-3.758a2.406 2.406 0 0 1-2.412-2.396v-12.69c0-.31-.075-.615-.22-.888-1.191-2.242-4.022-9.332-1.525-12.4a1.893 1.893 0 0 0-.285-2.678 1.924 1.924 0 0 0-2.696.283c-4.154 5.104-.225 13.895.891 16.14v12.234c0 3.422 2.801 6.205 6.247 6.205h3.758a6.24 6.24 0 0 0 4.347-1.748c3.373-3.246 11.02-12.479 9.919-28.624.409-.647.896-1.309 1.443-2.053 2.376-3.238 5.501-7.515 6.15-15.96a9.936 9.936 0 0 0 5.502 1.893c.095.002.19.002.285.002 2.115 0 4.12-.784 5.672-2.229a8.194 8.194 0 0 0 2.629-5.758 6.916 6.916 0 0 0-1.895-5.005z" fill="#3FAA49" data-color="1"></path>
              <path d="M104.482 64.226c4.504 0 8.169-3.638 8.169-8.112S108.986 48 104.482 48s-8.167 3.641-8.167 8.114 3.663 8.112 8.167 8.112zm0-12.417c2.389 0 4.334 1.932 4.334 4.305s-1.945 4.303-4.334 4.303c-2.389 0-4.332-1.929-4.332-4.303s1.943-4.305 4.332-4.305z" fill="#3FAA49" data-color="1"></path>
            </g>
          </svg>
        </p>
      </div>
      <div className="; flex-1">
        <h5 className="; text-center">Ways to Pay</h5>
        <ul>
          <li><span>In Person</span> Bring your cash or check to any RNA meeting or event.</li>
          <li><span>By Mail</span> Send a check to: Renaissance Neighborhood Association, P.O. Box 4362, Tulsa, OK 74159</li>
          <li><span>Online</span> Send a secure electronic payment by clicking the applicable "Buy Now" button.</li>
        </ul>
      </div>
      <div className="; flex-1">
        <h5 className="; text-center">Online Payments</h5>
        <div className={styles.paypalButtons}>
          <p>Couples Rate - {rate(RATES.couples)}</p>
          <PayPalBuyNowForm rate={RATES.couples} itemName={'RNA Couples Dues'} itemNumber={'Dues-2'} />

          <p>Single Rate - {rate(RATES.singles)}</p>
          <PayPalBuyNowForm rate={RATES.singles} itemName={'RNA Single Dues'} itemNumber={'Dues-1'} />

          <p>Business Rate - {rate(RATES.business)}</p>
          <PayPalBuyNowForm rate={RATES.business} itemName={'RNA Business Dues'} itemNumber={'Dues-B'} />
        </div>
      </div>
    </Section>

    <Section className="; bg-wixColor26">
      <div>
        <h5 className="; text-center">Thank You For Your Contribution</h5>
        <p>Renaissance Neighborhood Association (RNA) is a not-for-profit organization. This means that all money earned or donated is used for pursuing our objectives for the neighborhood and for keeping the association running. RNA board members are strictly volunteer members only and receive no compensation for their time and efforts. If you would like to see an expense report, you may send an email request to <a href="mailto:Renaissance.Neighbors@gmail.com">Renaissance.Neighbors@gmail.com</a> or attend a general meeting.</p>
      </div>
    </Section>
  </>
}
