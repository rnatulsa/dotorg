import PropTypes from 'prop-types'

import styles from '@/styles/board-members.module.css'

export function BoardMember({ name, roles, photo, ...props }) {
  return (
    <div {...props}>
      <div className="; rounded-full overflow-hidden mx-auto" style={{
        width: '179px',
        height: '179px',
        backgroundColor: 'black',
        backgroundImage: `url('${photo?.file.url || ''}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }} />
      <div className={styles.name}>{name}</div>
      {roles.map((role, index) => (
        <div key={index} className={styles.title}>{role}</div>
      ))}
    </div>
  )
}

BoardMember.propTypes = {
  name: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  photo: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  })
}

export function BoardMembers({members}) {
  return (
    <div className="; text-center max-w-screen-lg mx-auto">
      <h2 className={styles.header}><span>Meet the Board</span></h2>

      <div className="; flex flex-wrap justify-center">
        {members.map((member, key) => <BoardMember key={key} {...member} className="; text-center m-4" />)}
      </div>
    </div>
  )
}

BoardMembers.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape(BoardMember.propTypes))
}

export default BoardMembers
