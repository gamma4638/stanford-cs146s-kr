import { Link } from 'react-router-dom'
import type { Reading } from '@/types/syllabus'

interface ReadingListProps {
  readings: Reading[]
  weekNumber: number
}

export default function ReadingList({ readings, weekNumber }: ReadingListProps) {
  return (
    <ul className="pl-3 space-y-2">
      {readings.map((reading, i) => (
        <li key={i} className="text-[20.8px] leading-[33.28px] text-text-body">
          <div>• {reading.title}</div>
          <div className="ml-4 text-[14px]">
            {reading.krSlug ? (
              <>
                <span className="text-text-secondary">→ </span>
                <Link
                  to={`/readings/week${weekNumber}/${reading.krSlug}`}
                  className="text-kr-accent hover:underline"
                >
                  한국어
                </Link>
                <span className="text-text-secondary mx-2">|</span>
                <a
                  href={reading.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stanford-red hover:underline"
                >
                  English
                </a>
              </>
            ) : (
              <>
                <span className="text-text-secondary">→ </span>
                <a
                  href={reading.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stanford-red hover:underline"
                >
                  English
                </a>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}
