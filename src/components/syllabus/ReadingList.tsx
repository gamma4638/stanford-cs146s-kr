import { Link } from 'react-router-dom'
import type { Reading } from '@/types/syllabus'

interface ReadingListProps {
  readings: Reading[]
  weekNumber: number
}

export default function ReadingList({ readings, weekNumber }: ReadingListProps) {
  return (
    <ul className="pl-3 space-y-1">
      {readings.map((reading, i) => (
        <li key={i} className="text-[20.8px] leading-[33.28px] text-text-body">
          • <a
            href={reading.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stanford-red underline"
          >
            {reading.title}
          </a>
          {reading.krSlug && (
            <Link
              to={`/readings/week${weekNumber}/${reading.krSlug}`}
              className="ml-2 text-kr-accent hover:underline"
            >
              [한국어]
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
