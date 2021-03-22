import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '@/styles/banner.module.css'

export default function Banner({ image, className, children, bgStyle = {} }) {
  return (
    <div className={classNames([styles.root, className])}>
      <div className={styles.background} style={{
        backgroundImage: `url(${image})`,
        ...bgStyle
      }}></div>

      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundStyle: PropTypes.object
}
