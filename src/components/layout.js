import Header from '@/components/header'

export default function Layout({ children }) {
  return (
    <div className="; lg:container mx-auto">
      <Header />

      {children}
    </div>
  )
}
