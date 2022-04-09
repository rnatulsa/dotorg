import classNames from 'classnames'
import styles from '@/styles/shadow-image.module.css'

export default function ShadowImage({ src, className, alt, title, ...props }) {
  return (
    <div className={classNames([styles.shadowImage, className])} {...props}>
      <img src={src} alt={alt} title={title} />
    </div>
  )
}
