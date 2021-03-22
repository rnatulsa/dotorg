import styles from '@/styles/board-members.module.css'

import data from '@/data/board.yml'

export function BoardMember({ name, title, pastTitle, image, ...props }) {
  return (
    <div {...props}>
      <div className="; rounded-full overflow-hidden mx-auto" style={{
        width: '179px',
        height: '179px',
        backgroundImage: `url(/images/board-members/${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }} />
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>{title}</div>
      {pastTitle && <div className={styles.pastTitle}>{pastTitle}</div>}
    </div>
  )
}

export default function BoardMembers() {
  return (
    <div className="; text-center max-w-screen-lg mx-auto">
      <h2 className={styles.header}><span>Meet the Board</span></h2>

      <div className="; flex flex-wrap justify-center">
        {data.members.map((member, key) => <BoardMember key={key} {...member} className="; text-center m-4" />)}
      </div>
    </div>
  )
}
