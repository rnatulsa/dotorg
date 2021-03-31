import tw, { css, theme } from 'twin.macro'
import Link from 'next/link'
import ShadowImage from '@/components/shadow-image'

export const WhatsNewsSection = ({title, children, ...props}) => (
  <div tw="overflow-x-hidden text-center all-child:my-8" {...props}>
    <h2 tw="uppercase font-bold text-wixColor24" css={css`
      font-size: 35px;
      letter-spacing: 0.2em;
      text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
    `}>
      {title}
    </h2>

    <WhatsNewsItems>
      {children}
    </WhatsNewsItems>
  </div>
)
WhatsNewsSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export const WhatsNewsItems = tw.div`container text-center relative mx-auto px-4 md:(flex space-x-4)`

export const WhatsNewsItem = ({title, image, href, children, ...props}) => (
  <div tw="my-8 flex flex-col md:flex-1" css={css`
    .news-item-image {
      height: 192px;

      img {
        ${tw`object-cover h-full w-full`}
      }
    }

    @media (min-width: ${theme`screens.sm`}) {
      .news-item-image {
        height: 24vw;
      }
    }
  `} {...props}>
    <ShadowImage className={'news-item-image'} src={image} />

    <WhatsNewsContent>
      <h6 tw="font-bold leading-none uppercase font-serif text-wixColor25" css={css`
        font-size: 18px;
        letter-spacing: 0.2em;
      `}>
        {title}
      </h6>

      <hr tw="my-8 w-16 border mx-auto border-wixColor15" />

      {children}

      <div tw="mt-8">
        <Link href={href} passHref>
          <a tw="uppercase text-wixColor33 hover:text-wixColor25" css={css`
            font-size: 12px;
            transition: color 0.4s ease 0s;
          `}>read more »</a>
        </Link>
      </div>
    </WhatsNewsContent>
  </div>
)
WhatsNewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
}

export const WhatsNewsContent = props => (
  <div tw="p-8 flex-1 flex flex-col bg-wixColor31 --tw-bg-opacity[0.19]" css={css`
    & > p {
      ${tw`flex-1`}
    }
  `} {...props} />
)
