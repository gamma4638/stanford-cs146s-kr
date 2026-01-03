import { useParams, Link } from 'react-router-dom'
import { readings } from '@/content/readings'

export default function ReadingPage() {
  const { week, slug } = useParams<{ week: string; slug: string }>()
  const key = `${week}/${slug}`
  const reading = readings[key]

  if (!reading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-bold text-stanford-red mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-text-secondary mb-6">
          요청하신 Reading 자료가 존재하지 않거나 아직 번역되지 않았습니다.
        </p>
        <Link
          to="/#syllabus"
          className="inline-block px-6 py-3 bg-stanford-red text-white rounded hover:bg-stanford-red-dark transition-colors"
        >
          강의계획으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <header className="bg-stanford-red text-white py-8">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-sm opacity-80 mb-4">
            <Link to="/" className="text-white hover:underline">
              CS146S Korean Edition
            </Link>
            {' / '}
            <Link to="/#syllabus" className="text-white hover:underline">
              강의계획
            </Link>
            {' / '}
            Week {reading.week} Reading
          </div>
          <h1 className="text-2xl font-bold mb-2">
            {reading.title} ({reading.titleKr})
          </h1>
          <div className="flex gap-6 text-sm opacity-80">
            <span>Week {reading.week}</span>
            <span>{reading.author}</span>
            <span>{reading.readTime}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-8">
        {/* Source Box */}
        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 mb-6">
          <strong>원본 자료: </strong>
          <a
            href={reading.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stanford-red hover:underline"
          >
            {reading.sourceTitle}
          </a>
        </div>

        {/* Translation Note */}
        <div className="bg-bg-card border border-border rounded-lg p-4 mb-8 text-sm text-text-secondary">
          이 페이지는 원본 자료의 핵심 내용을 한국어로 요약 및 번역한 것입니다.
          전체 내용은 원본 자료를 참고해 주세요.
        </div>

        {/* Sections */}
        {reading.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-bold text-stanford-red mb-4 pb-2 border-b border-border">
              {section.title}
            </h2>
            <p className="text-text-primary leading-relaxed mb-4">
              {section.content}
            </p>
            {section.items && (
              <ul className="list-disc list-inside space-y-2 text-text-primary">
                {section.items.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Key Takeaways */}
        {reading.keyTakeaways?.map((takeaway, i) => (
          <div
            key={i}
            className="bg-blue-50 border-l-4 border-kr-accent rounded-r-lg p-4 mb-6"
          >
            <h4 className="font-bold text-kr-accent mb-2">{takeaway.title}</h4>
            <p className="text-text-primary leading-relaxed">{takeaway.content}</p>
          </div>
        ))}

        {/* Related Readings */}
        {reading.relatedReadings && reading.relatedReadings.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-stanford-red mb-4 pb-2 border-b border-border">
              관련 읽기 자료
            </h2>
            <ul className="space-y-2">
              {reading.relatedReadings.map((related, i) => (
                <li key={i}>
                  {related.slug ? (
                    <Link
                      to={`/readings/${week}/${related.slug}`}
                      className="text-stanford-red hover:underline"
                    >
                      {related.title} [한국어]
                    </Link>
                  ) : (
                    <a
                      href={related.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stanford-red hover:underline"
                    >
                      {related.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 mt-8 border-t border-border">
          <Link
            to="/#syllabus"
            className="px-4 py-2 bg-bg-light text-text-primary border border-border rounded hover:bg-border transition-colors"
          >
            ← 강의계획으로
          </Link>
          {reading.nextReading && (
            <Link
              to={`/readings/${week}/${reading.nextReading.slug}`}
              className="px-4 py-2 bg-stanford-red text-white rounded hover:bg-stanford-red-dark transition-colors"
            >
              다음: {reading.nextReading.title} →
            </Link>
          )}
        </div>
      </main>
    </>
  )
}
