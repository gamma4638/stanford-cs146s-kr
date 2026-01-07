# Stanford CS146S Korean Edition

Stanford University의 "The Modern Software Developer" 강좌를 한국어로 번역하여 제공하는 웹 플랫폼입니다.

## 프로젝트 개요

- **URL**: https://kr.themodernsoftware.dev
- **원본**: Stanford CS146S by Mihail Eric
- **목적**: AI 지원 개발(Coding with LLMs) 교육 콘텐츠 한국어 번역

## 기술 스택

- **Framework**: React 19 + TypeScript
- **Build**: Vite 6
- **Styling**: Tailwind CSS 4
- **Routing**: React Router 7
- **Deploy**: Vercel (서울 리전)
- **Package Manager**: pnpm

## 프로젝트 구조

```
src/
├── components/
│   ├── layout/     # Layout, Header, Footer, TabNav
│   ├── home/       # CourseDescription, InfoGrid, TeamGrid, TranslatorGrid
│   ├── syllabus/   # WeekCard, ReadingList, LectureList
│   └── faq/        # FaqAccordion
├── pages/          # HomePage, ReadingPage
├── content/        # syllabus.ts, readings.ts, faq.ts
└── types/          # TypeScript 인터페이스
```

## 주요 명령어

```bash
pnpm dev      # 개발 서버 시작
pnpm build    # TypeScript 체크 + 프로덕션 빌드
pnpm lint     # ESLint 검사
pnpm preview  # 빌드 결과 미리보기
```

## 개발 가이드라인

### 컴포넌트 작성

- 모든 컴포넌트는 TypeScript로 작성
- Props는 인터페이스로 정의
- 경로 임포트는 `@/` alias 사용 (예: `@/components/layout/Header`)

### 스타일링

- Tailwind CSS 유틸리티 클래스 사용
- 커스텀 색상은 index.css의 CSS 변수 사용:
  - `--color-stanford-red`: #8B0000 (Stanford 공식 색상)
  - `--color-kr-accent`: #0066CC (한국어 강조)

### 콘텐츠 추가

- 새 Reading 번역: `src/content/readings.ts`에 추가
- 강의 정보 수정: `src/content/syllabus.ts` 수정
- FAQ 추가: `src/content/faq.ts` 수정

### 번역 상태 관리

`TranslationStatus` 타입 사용:
- `complete`: 번역 완료 (한국어 링크 활성화)
- `in_progress`: 번역 중 ("번역중" 라벨)
- `none`: 예정 ("예정" 라벨)

## 라우팅

- `/`: 메인 페이지 (Overview, Syllabus, FAQ 탭)
- `/readings/week/:week/:slug`: Reading 상세 페이지

## 배포

main 브랜치에 push하면 Vercel에서 자동 배포됩니다.

## 커밋 메시지

Conventional Commits 형식을 따릅니다:
- `feat:` 새 기능
- `fix:` 버그 수정
- `refactor:` 리팩토링
- `docs:` 문서 수정
- `style:` 스타일 수정

## 주의사항

- TypeScript strict 모드 활성화됨 - 타입 에러 해결 필수
- 빌드 전 `pnpm lint` 실행 권장
- 한글 콘텐츠 작성 시 맞춤법 검토

---

## 스킬 구현 계획

번역 워크플로우 자동화를 위한 3개의 스킬을 구현 예정입니다.

### 1. 소스 스킬 (`/source`) - 예정

**목적**: themodernsoftware.dev에서 원문 Reading 크롤링

**워크플로우**:
1. 원문 사이트에서 주차별 Reading 링크 탐색
2. 해당 Reading 페이지 크롤링
3. 원문 텍스트 추출 및 저장

**입력**: 주차 및 Reading 식별자 (예: `/source week1 coding-with-llms`)
**출력**: 원문 텍스트 파일
**대상**: Reading 콘텐츠만 (강의 노트 제외)

---

### 2. 번역 스킬 (`/translate`) - 예정

**목적**: 원문을 고품질 한국어로 번역

**워크플로우**:
1. **원문 로드**: 소스 스킬에서 수집된 원문 파일 읽기
2. **전처리**: 문장 단위 분리 (번역 품질 향상)
3. **번역**: LLM을 활용한 한국어 번역
4. **검증 및 개선** (Iterative):
   - 용어 확인: 기술 용어의 한국어 번역 표준 웹검색
   - 최신성 검증: 참조된 도구/라이브러리 최신 정보 확인
   - 반복적으로 번역 품질 개선
5. **출력**: 최종 번역본 마크다운 파일 생성

**서브에이전트**:
- 데이터 문장 전처리 subagent: 긴 텍스트를 문장 단위로 분리

**입력**: 원문 파일 경로 (예: `/translate week1/coding-with-llms.txt`)
**출력**: `docs/` 폴더에 마크다운 파일 저장
**실행 단위**: 단일 Reading

---

### 3. 업로드 스킬 (`/upload`) - 추후 구현

**목적**: 번역 완료된 콘텐츠를 readings.ts에 자동 반영

**워크플로우**:
1. 번역된 마크다운 파일 로드
2. readings.ts 파싱
3. 해당 Reading 항목 찾아서 정보 업데이트:
   - `translationStatus`: `'complete'`로 변경
   - `koreanUrl`: 번역본 링크 추가
4. readings.ts 파일 자동 수정

**입력**: 번역 완료된 마크다운 파일 경로
**출력**: readings.ts 자동 업데이트

---

### 구현 우선순위

1. **1단계**: 번역 스킬 (`/translate`) - 핵심 기능
2. **2단계**: 소스 스킬 (`/source`) - 원문 수집 자동화
3. **3단계**: 업로드 스킬 (`/upload`) - 배포 자동화

### 진행 상황

| 스킬 | 상태 | 비고 |
|------|------|------|
| `/source` | 🔴 예정 | 웹 크롤링 구현 필요 |
| `/translate` | 🔴 예정 | 전처리 subagent 설계 필요 |
| `/upload` | 🔴 예정 | readings.ts 파싱 로직 필요 |
