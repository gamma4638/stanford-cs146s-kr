# fetch-reading Skill

URL에서 reading 콘텐츠를 수집하여 마크다운 파일로 저장합니다.

## 사용법

```
/fetch-reading <url>
/fetch-reading <url> --week <N>
/fetch-reading <local-file.pdf>
```

## 동작 흐름

### 1. URL/파일 분석

1. 입력 유형 판별:
   - YouTube URL (`youtube.com`, `youtu.be`)
   - PDF URL (`.pdf` 확장자) 또는 로컬 PDF 파일
   - GitHub URL (`github.com`)
   - 일반 웹 URL

2. Week 번호 결정:
   - `--week` 파라미터가 있으면 사용
   - 없으면 `src/content/syllabus.ts`에서 URL 매칭하여 추론

3. Slug 생성:
   - syllabus.ts의 title에서 생성
   - 소문자, 공백→하이픈, 특수문자 제거
   - 예: "Deep Dive into LLMs" → `deep-dive-llms`

### 2. 콘텐츠 수집 (유형별)

#### YouTube 영상
- WebFetch로 영상 페이지 접근
- 제목, 설명, 길이 등 메타데이터 추출
- transcript가 있으면 포함 (선택적)

#### PDF 문서
- 로컬 파일: Read 도구로 직접 읽기
- 원격 URL: WebFetch로 다운로드 후 Read
- Claude의 PDF 읽기 기능으로 텍스트 추출

#### GitHub 문서
- `github.com` → `raw.githubusercontent.com` URL 변환
- WebFetch로 마크다운/텍스트 직접 수집
- 이미지 링크는 절대 경로로 변환

#### 일반 웹 문서
- WebFetch로 HTML 수집
- 본문 추출 및 마크다운 변환
- 코드 블록, 리스트, 헤딩 구조 보존

### 3. 마크다운 파일 생성

```markdown
---
title: "문서 제목"
source_url: "https://..."
source_type: youtube | pdf | web | github
author: "저자명"
fetch_date: "YYYY-MM-DD"
translation_status: none
---

# 문서 제목

[원본 링크](https://...)

## 본문

(수집된 콘텐츠)
```

### 4. 파일 저장

- 경로: `docs/week{N}/{slug}.md`
- 기존 파일이 있으면 덮어쓰기 전 확인

### 5. INDEX.md 업데이트

- `docs/week{N}/INDEX.md`의 수집 상태 업데이트
- `docs/INDEX.md`의 통계 업데이트

## 예시

### 웹 문서 수집
```
/fetch-reading https://stytch.com/blog/model-context-protocol-introduction/
```
결과: `docs/week2/mcp-introduction.md` 생성

### PDF 수집 (로컬)
```
/fetch-reading how-openai-uses-codex.pdf
```
결과: `docs/week1/how-openai-uses-codex.md` 생성

### Week 지정
```
/fetch-reading https://some-url.com/article --week 3
```
결과: `docs/week3/` 디렉토리에 저장

## 참고 파일

- `src/content/syllabus.ts`: URL-Week 매핑
- `docs/INDEX.md`: 전체 진행 상황
- `docs/week{N}/INDEX.md`: 주차별 상세

## 출력

수집 완료 후 표시:
- 생성된 파일 경로
- 콘텐츠 길이 (글자 수)
- 다음 단계 안내 (`/translate-reading` 명령어)
