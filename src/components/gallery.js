import React from 'react'
import PropTypes from 'prop-types'
import styles from '@/styles/gallery.module.css'
import classNames from 'classnames'
import Link from 'next/link'

const DEFAULT_SPEED = 5 * 1_000 // 5 seconds

export function GalleryImage({ image, key, visible = true, size = 'cover' }) {
  return (
    <div
      key={key}
      className={`${styles.galleryImage} ${visible ? styles.galleryImageVisible : ''}`.trim()}
      style={{ backgroundImage: `url(${image})`, backgroundSize: size }}
    />
  )
}
GalleryImage.propTypes = {
  image: PropTypes.string.isRequired,
  key: PropTypes.any.isRequired,
  visible: PropTypes.bool,
  size: PropTypes.oneOf(['contain', 'cover'])
}

export function GalleryText({ children }) {
  return (
    <div className={styles.galleryText}>
      {children}
    </div>
  )
}
GalleryText.propTypes = {
  children: PropTypes.node
}

export function GalleryButton({ href, text }) {
  return (
    <Link href={href}>
      <a className={styles.galleryButton}>
        <span>{text} »</span>
      </a>
    </Link>
  )
}
GalleryButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export function GalleryButtons({ children }) {
  return (
    <div className={styles.galleryButtons}>
      {children}
    </div>
  )
}
GalleryButtons.propTypes = {
  children: PropTypes.node
}

const rotate = (images) => {
  const imageShuffle = [...images]

  if (imageShuffle[1].visible) {
    const image = imageShuffle.shift()
    image.visible = false
    imageShuffle.push(image)
  }

  imageShuffle[1].visible = true

  return imageShuffle
}

const init = ({ images, size = 'cover' }) => {
  return images.map(
    (image, index) => ({ image, key: index, size, visible: !index })
  )
}

export function Gallery({
  images,
  children,
  className = '',
  size = 'cover',
  speed = DEFAULT_SPEED,
  ...props
}) {
  if (!images.length) {
    return
  }

  const [galleryImages, rotateGalleryImages] = React.useReducer(
    rotate,
    init({images, size})
  )

  React.useEffect(() => {
    if (images.length < 2) {
      return
    }

    const interval = setInterval(() => {
      rotateGalleryImages()
    }, speed)

    return () => clearInterval(interval)
  }, [images])

  return (
    <div className={classNames([styles.gallery, className])} {...props}>
      <div className={styles.galleryImages}>
        {galleryImages.slice(0, 3).map(GalleryImage)}
      </div>
      <div className={styles.galleryOverlay}>
        {children}
      </div>
    </div>
  )
}
Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
  speed: PropTypes.number,
}

export default Gallery
