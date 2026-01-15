import { Link } from 'react-router-dom'
import type { Reading, TranslationStatus } from '@/types/syllabus'

interface ReadingListProps {
  readings: Reading[]
  weekNumber: number
}

// 번역 상태 결정: 명시된 status > krSlug 유무로 판단
function getTranslationStatus(reading: Reading): TranslationStatus {
  if (reading.translationStatus) return reading.translationStatus
  return reading.krSlug ? 'complete' : 'none'
}

// GitHub 소스인지 확인
function isGitHubSource(url: string): boolean {
  return url.includes('github.com') && !url.includes('github.blog')
}

// 상태별 라벨
const statusLabel: Record<Exclude<TranslationStatus, 'complete'>, string> = {
  in_progress: '번역중',
  none: '예정',
}

export default function ReadingList({ readings, weekNumber }: ReadingListProps) {
  return (
    <ul className="pl-3 space-y-2">
      {readings.map((reading, i) => {
        const status = getTranslationStatus(reading)
        const hasKorean = reading.krSlug && status === 'complete'
        const isGitHub = isGitHubSource(reading.url)

        return (
          <li key={i} className="text-[20.8px] leading-[33.28px] text-text-body">
            <div>• {reading.title}</div>
            <div className="ml-4 text-[14px]">
              <span className="text-text-secondary">→ </span>
              {isGitHub ? (
                // GitHub 소스인 경우 GitHub 버튼만 표시
                <a
                  href={reading.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-800 text-white rounded text-[12px] hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              ) : (
                // 일반 소스인 경우 한국어/English 링크 표시
                <>
                  {hasKorean ? (
                    <Link
                      to={`/readings/week${weekNumber}/${reading.krSlug}`}
                      className="text-kr-accent hover:underline"
                    >
                      한국어
                    </Link>
                  ) : (
                    <span className="text-text-secondary/60">
                      한국어
                      <span className="text-[12px] ml-1 opacity-70">({statusLabel[status as Exclude<TranslationStatus, 'complete'>]})</span>
                    </span>
                  )}
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
              )}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
