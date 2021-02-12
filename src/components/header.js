import logo from '@/images/logo.png'

export default function Header({ children }) {
  return (
    <>
      <header className="; flex">
        <img className="; block h-32 w-auto" src={logo} alt="Logo" />

        <div className="flex space-x-4">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">News</a>
          <a href="#">Dues</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
          <a href="#">Gallery</a>
          <a href="#">History</a>
        </div>
      </header>
    </>
  )
}
