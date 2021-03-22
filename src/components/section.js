import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '@/styles/section.module.css'

export default function Section({ className, children, ...props }) {
  return (
    <section className={classNames([className])} {...props}>
      <div className={styles.root}>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
