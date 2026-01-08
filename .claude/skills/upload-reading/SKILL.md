---
name: upload-reading
description: |
  번역된 한국어 마크다운 파일을 readings.ts에 추가하여 웹에 게시합니다.
  마크다운 파싱 → ReadingContent 객체 생성 → readings.ts/syllabus.ts 업데이트.
  사용: /upload-reading week1/slug 또는 /upload-reading week1/parent/child
arguments:
  - name: path
    description: |
      week/slug 또는 week/parent/child 형식의 문서 경로
      - 단일 페이지: week1/how-openai-uses-codex
      - 자식 페이지: week1/prompt-engineering-guide/zeroshot
    required: true
  - name: publish
    description: 즉시 published=true로 설정하여 웹에 공개
    required: false
  - name: draft
    description: published=false로 설정 (기본값)
    required: false
---

# upload-reading Skill

번역된 한국어 마크다운 파일을 readings.ts에 추가하여 웹에 게시합니다.

## 사용법

```
# 단일 페이지
/upload-reading <week/slug>
/upload-reading <week/slug> --publish

# 계층적 구조 (자식 페이지)
/upload-reading <week/parent/child>
/upload-reading <week/parent/child> --publish
```

## 예시

### 단일 페이지
```
/upload-reading week1/how-openai-uses-codex
/upload-reading week2/mcp-introduction --publish
```

### 계층적 구조 (자식 페이지)
```
/upload-reading week1/prompt-engineering-guide/zeroshot
/upload-reading week1/prompt-engineering-guide/fewshot --publish
```

## 입출력

### 단일 페이지
- **입력**: `docs/week{N}/kr/{slug}.md` (한국어 번역본)
- **출력**:
  - `src/content/readings.ts`에 새 ReadingContent 추가
  - `src/content/syllabus.ts` translationStatus 업데이트

### 계층적 구조 (자식 페이지)
- **입력**: `docs/week{N}/{parent}/kr/{child}.md` (한국어 번역본)
- **출력**:
  - `src/content/readings.ts`의 부모 Reading의 `children` 배열에서 해당 child의 `sections`, `keyTakeaways` 추가
  - syllabus.ts는 변경하지 않음 (부모 레벨에서 관리)

## 워크플로우

```
/upload-reading week1/how-openai-uses-codex
           │
           ▼
┌──────────────────────────────────────┐
│ 1. 번역 파일 읽기                      │
│    docs/week1/kr/how-openai-uses-    │
│    codex.md                          │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 2. 마크다운 파싱                       │
│    - 프론트매터 → 메타데이터            │
│    - h2 → sections                   │
│    - bullet lists → items            │
│    - 핵심 요약 → keyTakeaways         │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 3. ReadingContent 객체 생성           │
│    {                                 │
│      slug, week, title, titleKr,     │
│      author, readTime, sourceUrl,    │
│      sections: [...],                │
│      keyTakeaways: [...]             │
│    }                                 │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 4. readings.ts 업데이트               │
│    readings['week1/how-openai-uses-  │
│    codex'] = { ... }                 │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 5. syllabus.ts 업데이트               │
│    krSlug: 'how-openai-uses-codex'   │
│    translationStatus: 'complete'     │
└──────────────────────────────────────┘
```

### 자식 페이지 워크플로우

```
/upload-reading week1/prompt-engineering-guide/zeroshot
           │
           ▼
┌──────────────────────────────────────┐
│ 1. 경로 파싱                          │
│    - 3단계 경로 → 자식 페이지          │
│    - parent: prompt-engineering-guide│
│    - child: zeroshot                 │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 2. 번역 파일 읽기                      │
│    docs/week1/prompt-engineering-    │
│    guide/kr/zeroshot.md              │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 3. 마크다운 파싱                       │
│    - 프론트매터 → 메타데이터            │
│    - h2 → sections                   │
│    - bullet lists → items            │
│    - 핵심 요약 → keyTakeaways         │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 4. 부모 Reading 찾기                  │
│    readings['week1/prompt-           │
│    engineering-guide']               │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 5. children 배열에서 child 찾기       │
│    children.find(c => c.slug ===     │
│    'zeroshot')                       │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 6. ChildReading 업데이트              │
│    {                                 │
│      slug: 'zeroshot',               │
│      ...기존 메타데이터,               │
│      sections: [...],    // 추가     │
│      keyTakeaways: [...],// 추가     │
│      published: true     // 옵션     │
│    }                                 │
└──────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────────────┐
│ 7. readings.ts 저장                  │
│    (syllabus.ts 수정 없음)           │
└──────────────────────────────────────┘
```

## 실행 지침

이 스킬이 호출되면 다음 단계를 따르세요:

### Step 0: 경로 파싱

```
경로를 '/'로 분리하여 단계 수 확인:
- 2단계 (week1/slug): 단일 페이지 → 기존 워크플로우
- 3단계 (week1/parent/child): 자식 페이지 → 자식 워크플로우

예시:
- week1/how-openai-uses-codex → 단일 페이지
- week1/prompt-engineering-guide/zeroshot → 자식 페이지
```

### Step 1: 번역 파일 읽기

**단일 페이지**:
```
1. docs/week{N}/kr/{slug}.md 파일 읽기
2. 파일이 없으면 에러: "번역 파일을 찾을 수 없습니다. /translate-reading을 먼저 실행하세요."
3. 원본 파일도 읽기: docs/week{N}/{slug}.md (메타데이터 보완용)
```

**자식 페이지**:
```
1. docs/week{N}/{parent}/kr/{child}.md 파일 읽기
2. 파일이 없으면 에러: "번역 파일을 찾을 수 없습니다. /translate-reading을 먼저 실행하세요."
3. 원본 파일도 읽기: docs/week{N}/{parent}/{child}.md (메타데이터 보완용)
```

### Step 2: 마크다운 파싱

마크다운 구조를 ReadingContent 형식으로 변환:

```markdown
---
title: "한국어 제목"
originalTitle: "English Title"
author: "저자명"
sourceUrl: "https://..."
translatedAt: "2025-01-07"
---

# 한국어 제목

## 섹션 제목 1

본문 내용...

- 항목 1
- 항목 2

## 섹션 제목 2

본문 내용...

---

## 핵심 요약

- 포인트 1
- 포인트 2
```

파싱 규칙:

1. **프론트매터**:
   - `title` → `titleKr`
   - `originalTitle` → `title`
   - `author` → `author`
   - `sourceUrl` → `sourceUrl`

2. **본문 섹션** (h2 기준):
   ```typescript
   sections: [
     {
       title: "섹션 제목 1",
       content: "본문 내용...",
       items: ["항목 1", "항목 2"]  // 있으면
     }
   ]
   ```

3. **핵심 요약** (`## 핵심 요약` 또는 `## Key Takeaways`):
   ```typescript
   keyTakeaways: [
     { title: "포인트 1", content: "" },
     { title: "포인트 2", content: "" }
   ]
   ```

4. **읽기 시간 추정**:
   - 한글 기준 분당 500자
   - `readTime: "약 {N}분"`

### Step 3: 객체 생성

**단일 페이지** (ReadingContent):
```typescript
const newReading: ReadingContent = {
  slug: '{slug}',
  week: {N},
  title: '{originalTitle}',
  titleKr: '{title}',
  author: '{author}',
  readTime: '약 {N}분',
  sourceUrl: '{sourceUrl}',
  sourceTitle: '{도메인 또는 유형}',
  published: false,  // --publish 플래그 없으면 기본 false
  sections: [...],
  keyTakeaways: [...]
}
```

**자식 페이지** (ChildReading 확장):
```typescript
// 기존 ChildReading에 추가할 필드
const childContent = {
  author: '{author}',
  readTime: '약 {N}분',
  sections: [...],
  keyTakeaways: [...],
  published: true  // --publish 플래그에 따라
}
```

### Step 4: readings.ts 업데이트

**단일 페이지**:
1. `src/content/readings.ts` 파일 읽기
2. 기존 readings 객체에 새 항목 추가:
   ```typescript
   'week{N}/{slug}': newReading
   ```
3. 이미 존재하면 덮어쓰기 (확인 메시지 표시)
4. Edit 도구로 파일 수정

**자식 페이지**:
1. `src/content/readings.ts` 파일 읽기
2. 부모 Reading 찾기:
   ```typescript
   readings['week{N}/{parent}']
   ```
3. 부모가 없거나 `isParent: true`가 아니면 에러
4. `children` 배열에서 해당 `childSlug` 찾기:
   ```typescript
   const childIndex = parent.children.findIndex(c => c.slug === '{child}')
   ```
5. 해당 ChildReading에 콘텐츠 필드 추가:
   ```typescript
   children[childIndex] = {
     ...children[childIndex],  // 기존 메타데이터 유지
     author: '{author}',
     readTime: '약 {N}분',
     sections: [...],
     keyTakeaways: [...],
     published: true  // --publish 플래그에 따라
   }
   ```
6. Edit 도구로 파일 수정

### Step 5: syllabus.ts 업데이트

**단일 페이지**:
1. `src/content/syllabus.ts` 파일 읽기
2. 해당 week의 readings 배열에서 URL 매칭:
   ```typescript
   readings: [
     {
       title: 'How OpenAI Uses Codex',
       url: 'https://...',
       krSlug: 'how-openai-uses-codex',        // 추가
       translationStatus: 'complete'           // 추가
     }
   ]
   ```
3. Edit 도구로 파일 수정

**자식 페이지**:
- **syllabus.ts 수정 없음** (부모 레벨에서 관리)
- 자식 페이지의 게시 상태는 `readings.ts`의 `ChildReading.published`로 관리

## 옵션

### --publish
생성 즉시 `published: true`로 설정하여 웹에 공개합니다.

### --draft (기본값)
`published: false`로 설정합니다. 나중에 readings.ts에서 수동으로 true로 변경하면 공개됩니다.

## 출력

### 단일 페이지 업로드 완료 시:
```
✓ readings.ts 업데이트 완료
  - 키: week1/how-openai-uses-codex
  - 제목: How OpenAI Uses Codex / OpenAI의 Codex 활용법
  - 섹션: 8개
  - published: false

✓ syllabus.ts 업데이트 완료
  - Week 1 readings에 krSlug 추가
  - translationStatus: complete

다음 단계:
  1. 웹에서 확인: pnpm dev → /readings/week1/how-openai-uses-codex
  2. 공개하려면: readings.ts에서 published: true로 변경
```

### 자식 페이지 업로드 완료 시:
```
✓ readings.ts 업데이트 완료
  - 부모: week1/prompt-engineering-guide
  - 자식: zeroshot
  - 제목: Zero-shot Prompting / Zero-shot 프롬프팅
  - 섹션: 3개
  - published: true

(syllabus.ts 수정 없음 - 부모 레벨에서 관리)

다음 단계:
  1. 웹에서 확인: pnpm dev → /readings/week1/prompt-engineering-guide/zeroshot
  2. 다른 자식 페이지 번역: /translate-reading week1/prompt-engineering-guide/fewshot
```

## 파싱 상세 규칙

### 섹션 분리

```markdown
## Use Case 1: Code Understanding   ← sections[0].title

Codex helps our teams...            ← sections[0].content

- They often use Codex to...        ← sections[0].items[0]
- During incident response...       ← sections[0].items[1]

### Anecdotes from our teams        ← 서브섹션은 content에 포함

> "When I fix a bug..."             ← blockquote도 content에 포함
```

### 특수 섹션 처리

| 섹션 제목 | 처리 방식 |
|----------|----------|
| `## 핵심 요약` | → keyTakeaways |
| `## Key Takeaways` | → keyTakeaways |
| `## 요약` | → keyTakeaways |
| `## Summary` | → keyTakeaways |
| `## Contents` | 무시 (목차) |
| `## 목차` | 무시 (목차) |

### 인용문 처리

```markdown
> "When I fix a bug, I use Ask mode..."
> — Performance Engineer, Retrieval Systems
```

→ content에 포함 (별도 필드 없음)

## 참고 파일

- `src/content/readings.ts`: ReadingContent 인터페이스 정의
- `src/content/syllabus.ts`: Reading 타입 및 week 데이터
- `docs/week{N}/kr/{slug}.md`: 번역된 마크다운 입력

## 에러 처리

| 상황 | 처리 |
|-----|-----|
| 번역 파일 없음 | `/translate-reading` 실행 안내 |
| readings.ts 구문 오류 | 파싱 에러 표시, 수동 수정 필요 |
| 이미 존재하는 키 | 덮어쓰기 확인 후 진행 |
| syllabus에 URL 없음 | 경고 표시, readings.ts만 업데이트 |
