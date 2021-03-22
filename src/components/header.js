import Link from 'next/link'
import logo from '@/images/logo.png'

const MENU = {
  '/': 'Home',
  '/about-us': 'About Us',
  '/news': 'News',
  '/dues': 'Dues',
  '/events': 'Events',
  '/contact': 'Contact',
  '/gallery-virtual-home-tour': 'Gallery',
  '/history': 'History',
}

export default function Header() {
  return (
    <header className="; flex p-4">
      <Link href="/">
        <a className="; block flex-initial text-center text-wixColor24 mx-2">
          <img className="; block w-auto mx-auto" src={logo} alt="Logo" style={{ height: '53px' }} />
          <div className="; uppercase" style={{ letterSpacing: '0.2em', lineHeight: 'normal' }}>
            <div style={{ fontSize: '18px' }} className="; font-serif">Renaissance</div>
            <div style={{ fontSize: '12px' }} className="; font-sans">Historic Neighborhood</div>
          </div>
        </a>
      </Link>

      <div className="; flex flex-1 flex-wrap justify-evenly content-end mx-2" style={{ fontSize: '12px' }}>
        {Object.entries(MENU).map(([href, text], index) => (
          <Link
            key={index}
            href={href}
          >
            <a className="; mx-2 whitespace-nowrap uppercase text-wixColor25 hover:text-wixColor24 hover:underline">{text}</a>
          </Link>
        ))}
      </div>
    </header>
  )
}
