export default function KrSpecialBox() {
  return (
    <section className="max-w-[60%] mx-auto mb-12 border-2 border-stanford-red rounded-xl px-8 py-6 text-center">
      <p className="text-[19.2px] text-text-body mb-4">
        🇰🇷 Korean Edition 특별 제공
      </p>
      <ul className="space-y-2 text-[19.2px] text-text-body text-left inline-block">
        <li className="flex items-start gap-2">
          <span className="text-stanford-red">✓</span>
          <span>모든 Reading 자료 한국어 번역 제공</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-stanford-red">✓</span>
          <span>주요 Slides 한국어 버전 제공</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-stanford-red">✓</span>
          <span>YouTube 한국어 강의 시리즈 (예정)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-stanford-red">✓</span>
          <span>Discord 한국어 커뮤니티 (예정)</span>
        </li>
      </ul>
    </section>
  )
}
