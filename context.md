# CS146S Korean Edition - Project Context

## 프로젝트 개요

Stanford CS146S "The Modern Software Developer" 강좌의 한국어 버전 웹사이트.

**원본:** https://themodernsoftware.dev/
**한국어 버전:** kr.themodernsoftware.dev (예정)

## 목적

1. Stanford CS146S 강좌 콘텐츠를 한국어로 번역하여 제공
2. 한국 개발자 커뮤니티를 위한 AI 개발 교육 자료 구축
3. YouTube 채널을 통한 한국어 강의 시리즈 제공

## 원본과의 차별점

| 항목 | 원본 (Stanford) | Korean Edition |
|------|----------------|----------------|
| 플랫폼 | 대학 강의 | YouTube 강의 시리즈 |
| 언어 | 영어 | 한국어 |
| Reading | 원문 링크 | 원문 + 한국어 번역 |
| Slides | 원문 | 원문 + 한국어 번역 |
| 과제 | Stanford Canvas | 자율 학습 |
| 커뮤니티 | Ed Discussion | Discord |

## 콘텐츠 구조

### Reading 번역 전략

1. **전체 번역 (Full Translation):**
   - 핵심 개념 설명 자료
   - 원본이 블로그 포스트인 경우

2. **요약 번역 (Summary Translation):**
   - 긴 아티클의 경우
   - 핵심 내용 + 주요 인사이트 요약

3. **가이드 번역 (Guide Translation):**
   - 튜토리얼 형식 자료
   - 단계별 설명 한국어화

### Slides 번역 전략

1. 원본 슬라이드 다운로드 (허락 받은 경우)
2. 한국어 텍스트로 교체
3. 추가 설명 노트 제공

## 기술 스택

- **Frontend:** Vanilla HTML/CSS/JS (정적 사이트)
- **Hosting:** GitHub Pages 또는 Vercel
- **Font:** Noto Sans KR
- **Design:** Stanford CS146S 디자인 클론

## 파일 구조

```
stanford-cs146s-kr/
├── index.html          # 메인 페이지 (Overview, Syllabus, FAQ 탭)
├── styles.css          # 스타일시트
├── script.js           # 탭 네비게이션, FAQ 아코디언
├── readings/           # Reading 한국어 번역
│   ├── _template.html  # 번역 페이지 템플릿
│   ├── week1/
│   │   ├── deep-dive-llms.html
│   │   ├── prompt-engineering-overview.html
│   │   └── ...
│   ├── week2/
│   └── ...
├── slides/             # Slides 한국어 번역
│   ├── week1/
│   └── ...
└── context.md          # 이 파일
```

## 번역 우선순위

### Phase 1 (핵심 콘텐츠)
- [x] 메인 페이지 UI
- [x] Overview 섹션
- [x] Syllabus 섹션 (10주차 전체)
- [x] FAQ 섹션
- [ ] Week 1 Reading 전체 번역

### Phase 2 (주요 Reading)
- [ ] Week 2 Reading (MCP 관련)
- [ ] Week 3 Reading (AI IDE)
- [ ] Week 4 Reading (Claude Code)

### Phase 3 (전체 콘텐츠)
- [ ] 나머지 Reading 번역
- [ ] Slides 한국어화
- [ ] YouTube 강의 제작

## 저작권 고려사항

- 원본 Stanford 강좌의 콘텐츠 사용 허가 필요
- Reading 자료는 각 원저자의 저작권 확인 필요
- Guest Speaker 자료는 별도 허가 필요
- "Unofficial Korean Translation" 명시

## 연락처

- 원본 강좌: https://themodernsoftware.dev/
- Korean Edition 관리: Team Attention
