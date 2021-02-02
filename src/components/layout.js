import logo from '@/images/logo.png'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
      </header>
      {children}
    </>
  )
}
