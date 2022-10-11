import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const DATA_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export default function formatUtc(utcString: string, format: string = DATA_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
