import tw, { css } from 'twin.macro'
import PropTypes from 'prop-types'
import Link from 'next/link'

export const UpcomingEventsSection = ({ title, children, ...props }) => (
  <div tw="text-center all-child:my-8" {...props}>
    <h2 tw="uppercase font-bold flex-none w-full text-wixColor24" css={css`
      font-size: 35px;
      letter-spacing: 0.2em;
      text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
    `}>
      {title}
    </h2>

    <UpcomingEvents>
      {children}
    </UpcomingEvents>
  </div>
)
UpcomingEventsSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export const UpcomingEvents = tw.div`sm:(flex justify-center justify-items-center)`

export const UpcomingEvent = ({ href, title, children, ...props }) => (
  <div tw="my-8 px-8 border-wixColor31 sm:border-l first:border-0 mx-auto sm:mx-0" css={css`
    & > * {
      ${tw`my-4`}
    }
  `} {...props}>
    <h5 tw="font-bold leading-none text-wixColor24" css={css`
      font-size: 26px;
    `}>
      <Link href={href} passHref>
        <a tw="underline">{title}</a>
      </Link>
    </h5>

    {children}

    <div>
      <Link href={href} passHref>
        <a tw="uppercase text-wixColor33 hover:text-wixColor25" css={css`
          font-size: 12px;
          transition: color 0.4s ease 0s;
        `}>more info »</a>
      </Link>
    </div>
  </div>
)
UpcomingEvent.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}
