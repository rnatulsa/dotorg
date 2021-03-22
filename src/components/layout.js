import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from '@/styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>

      <main className={styles.content}>
        {children}
      </main>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}
