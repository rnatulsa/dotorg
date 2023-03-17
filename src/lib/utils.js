import { DateTime } from 'luxon'

export const YEAR = DateTime.now().year

// size: short, med(ium)?, full, huge
export const formatDateTime = (date, options = {}) => {
  const dt = DateTime.fromISO(date)
  const { size } = { size: 'medium', ...options }

  switch (size) {
    // TODO: case 'full': {}

    case 'short': {
      // year … Jan 1, 2000 at 1pm
      // … Jan 1 at 1pm
      // weekday … Mon, Jan 1 at 1pm
      // weekday,minutes … Mon, Jan 1 at 1:30pm
      // weekday,year,minutes … Mon, Jan 1, 2000 at 1:30pm
      const { year, weekday, minutes } = { year: true, weekday: false, minutes: false, ...options }
      const wd = weekday ? `${dt.toFormat('ccc')}, ` : ''
      const md = dt.toFormat('LLL d')
      const y = year ? `, ${dt.toFormat('yyyy')}` : ''
      const t = minutes ? dt.toFormat('t').toLowerCase().replace(' ', '') : dt.toFormat('h') + dt.toFormat('a').toLowerCase()
      return [wd, md, y, ' at ', t].join('')
    }
    case 'med':
    case 'medium':
    default: {
      // January 1, 2000 at 1:30 PM
      // Monday, January 1, 2000 at 1:30 PM
      // Monday, January 1, at 1:30 PM
      const { year, weekday } = { year: true, weekday: false, ...options }
      const wd = weekday ? `${dt.toFormat('cccc')}, ` : ''
      const md = dt.toFormat('LLLL d')
      const y = year ? `, ${dt.toFormat('yyyy')}` : ''
      const t = ` at ${dt.toFormat('t')}`
      return [wd, md, y, t].join('')
    }
  }
}
