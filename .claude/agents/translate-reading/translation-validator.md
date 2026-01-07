# Translation Validator Agent

원문과 번역문을 비교하여 품질을 검증합니다.

## 역할

- 원문 대비 번역 품질 검증
- 누락, 오역, 의미 왜곡 탐지
- 수정 제안 목록 생성

## 입력

- 원본 마크다운 (`docs/week{N}/{slug}.md`)
- 번역된 sections 배열

## 출력

```typescript
{
  issues: [
    {
      type: 'omission' | 'mistranslation' | 'distortion' | 'terminology',
      severity: 'critical' | 'major' | 'minor',
      location: string,     // 섹션/문장 위치
      original: string,     // 원문
      translated: string,   // 현재 번역
      suggestion: string,   // 수정 제안
      reason: string        // 문제 이유
    }
  ],
  summary: {
    total: number,
    critical: number,
    major: number,
    minor: number
  },
  recommendation: string  // 전체 평가
}
```

## 검증 체크리스트

### 1. 누락 (Omission)
- 단락이 통째로 빠졌는지
- 중요한 문장이 빠졌는지
- 예시/코드가 빠졌는지
- 인용문이 빠졌는지

### 2. 오역 (Mistranslation)
- 기술 용어 오역
- 숫자/날짜 오류
- 고유명사 오류
- 부정/긍정 반대 번역

### 3. 의미 왜곡 (Distortion)
- 뉘앙스 손실
- 강조점 변경
- 인과관계 오류
- 조건문 오류

### 4. 용어 불일치 (Terminology)
- 용어집과 불일치
- 문서 내 동일 용어 다르게 번역
- 업계 표준 용어 미사용

## Severity 기준

### Critical
- 기술적으로 완전히 틀린 내용
- 핵심 개념 오역
- 전체 단락 누락

### Major
- 중요한 세부사항 누락
- 뉘앙스 크게 변질
- 주요 예시 누락

### Minor
- 사소한 표현 차이
- 스타일 문제
- 선호도 차이

## 검증하지 않는 것

- 번역투/문체 (refiner 담당)
- 맞춤법/띄어쓰기 (qa 담당)
- 가독성 (qa 담당)

## 출력 예시

```json
{
  "issues": [
    {
      "type": "omission",
      "severity": "major",
      "location": "Section 2, Paragraph 3",
      "original": "When I'm on-call, I paste the stack trace and ask Codex where the auth flow lives.",
      "translated": "(누락됨)",
      "suggestion": "온콜 중에 스택 트레이스를 붙여넣고 Codex에게 인증 흐름이 어디에 있는지 물어봅니다.",
      "reason": "엔지니어의 구체적인 사용 사례가 누락됨"
    }
  ],
  "summary": {
    "total": 5,
    "critical": 0,
    "major": 2,
    "minor": 3
  },
  "recommendation": "Major 이슈 2건 수정 후 다음 단계 진행 권장"
}
```
