# 나노바나나 치트시트 프롬프트 생성 완료

아래는 `/home/junchan/github/stanford-cs146s-kr/.claude/outputs/nanobanana/week1/deep-dive-llms/alphago-cheatsheet-prompt.md` 파일에 저장해야 할 내용입니다.

### 프롬프트 내용 요약

**콘텐츠 분석 결과:**
- **유형**: 강의 트랜스크립트 (YouTube, Andrej Karpathy)
- **핵심 주제**: AlphaGo와 강화학습의 힘
- **핵심 개념**: 
  - AlphaGo, AlphaGo Zero, AlphaZero의 진화
  - Imitation Learning vs Reinforcement Learning
  - 37수 (Move 37) - 인간이 생각하지 못한 수
  - LLM에의 적용 (SFT vs RLHF)

**프롬프트 구조:**

1. **Role Definition**: Technical Communicator로서 AlphaGo와 RL에 대한 치트시트 생성 역할 정의

2. **Source Text**: 원본 마크다운 전체 포함 (frontmatter, TL;DR, 학습 목표, 챕터 요약, 영어 트랜스크립트)

3. **Output Style**: Nano Banana 스타일 지침
   - 손필기 느낌, 모눈종이 배경, 아이콘 활용
   - Mermaid 다이어그램 대신 ASCII art 구조 명시

4. **Layout Structure**: 5개 주요 섹션
   - 상단: 핵심 메시지 + AlphaGo 진화 타임라인
   - **중앙 (가장 넓게)**: Imitation vs RL 비교
   - 중하단: 37수 설명 + LLM 적용
   - 하단: Key Takeaways

5. **Content Details**: 각 섹션별 구체적 내용
   - 비교표, 다이어그램 구조, 핵심 인용문

6. **언어 지침**: 
   - 영어 유지: AlphaGo, RL, RLHF, SFT, Move 37, ceiling, blind spot 등
   - 설명은 한국어

**핵심 차별점:**
- **37수 (Move 37)** 강조 - RL의 힘을 보여주는 상징적 사례
- **Imitation Learning의 ceiling** 개념 시각화
- **LLM 학습 파이프라인과의 연결** (Pre-training → SFT → RLHF)

---

디렉토리 생성과 파일 저장을 위해 권한이 필요합니다. 다음 명령어를 직접 실행해 주세요:

```bash
mkdir -p /home/junchan/github/stanford-cs146s-kr/.claude/outputs/nanobanana/week1/deep-dive-llms
그리고 위에서 생성한 프롬프트 내용을 `alphago-cheatsheet-prompt.md` 파일에 저장하시면 됩니다. 전체 프롬프트 내용이 필요하시면 말씀해 주세요.

---

## 이미지 생성 요청

위의 구조와 내용을 바탕으로 **A4 한 장 분량의 치트시트 이미지**를 생성해주세요.

**이미지 스타일 요구사항:**
- 보기 좋게 정리된 **실제 펜 노트필기** 같은 느낌
- 용어 및 고유명사는 **영어 원문** 유지
- 설명 및 필기 내용은 **한국어**로 작성
- Mermaid 다이어그램은 **시각적 도식**으로 변환
- 표는 깔끔한 **테이블 형식**으로 렌더링
- **색상 강조**로 핵심 개념 구분
