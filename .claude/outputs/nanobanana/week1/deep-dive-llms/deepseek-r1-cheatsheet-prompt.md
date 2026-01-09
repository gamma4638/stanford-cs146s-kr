# Role Definition

You are an expert Technical Communicator and Information Architect specialized in creating "Nano Banana" style cheat sheets.

**IMPORTANT**: 첨부된 이미지는 스타일(손필기 느낌, 모눈종이 배경, 아이콘)만 참조하세요. 레이아웃은 아래 지정된 구조를 따라 새로 만들어주세요. 이미지의 레이아웃을 그대로 복사하지 마세요.

Your goal is to restructure the provided text about "DeepSeek R1" into a highly visual, structured, and actionable guide for software engineers and AI practitioners.

# Source Text

---
title: "18. DeepSeek-R1"
titleKr: "18. DeepSeek R1"
source_url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
source_type: youtube_transcript
author: "Andrej Karpathy"
parent: "deep-dive-llms"
chapter: 18
totalChapters: 24
---

# 18. DeepSeek R1

> 원본 강의: "Deep Dive into LLMs like ChatGPT" by Andrej Karpathy
> 챕터 18/24

## 전체 강의 요약 (TL;DR)

이 3시간 30분짜리 강의에서 안드레이 카르파티는 ChatGPT 같은 대규모 언어 모델(LLM)이 어떻게 만들어지고 작동하는지 처음부터 끝까지 설명합니다. **사전학습**(인터넷 데이터 학습), **지도학습 미세조정**(대화 데이터로 어시스턴트 만들기), **강화학습**(성능 최적화)의 세 단계를 거쳐 LLM이 탄생합니다. 모델은 놀라운 능력을 보이지만 환각, 토큰화 한계, 들쭉날쭉한 지능 등의 약점도 있습니다. ChatGPT와 대화할 때 마법 같은 AI가 아니라 "OpenAI 데이터 라벨러의 통계적 시뮬레이션"과 대화한다고 생각하면 더 정확합니다.

## 핵심 포인트

- **순수 RL로 사고 과정 발전**: DeepSeek R1은 순수 강화학습만으로 자체적인 사고 과정(thinking)을 발전시킴
- **영어-중국어 전환하며 생각**: 때로는 영어에서 중국어로 전환하며 사고하는 흥미로운 행동
- **오픈 웨이트**: 누구나 다운로드하여 사용 가능

## 주요 내용

### Thinking Models 비교

OpenAI의 o1, o3 모델과 DeepSeek R1은 모두 "thinking models"입니다. 이들은 답을 내기 전에 추론 과정(reasoning)을 거칩니다.

- **OpenAI**: 추론 과정을 요약하여 보여줌 (distillation risk 방지)
- **DeepSeek**: 전체 추론 과정을 공개
- **성능**: 현재 거의 동등한 수준 (2025년 초 기준)

### AlphaGo와의 연결

강화학습의 힘은 AlphaGo에서 이미 입증되었습니다:

- **Supervised Learning**: 인간 전문가를 모방 → 한계가 있음
- **Reinforcement Learning**: 인간 수준을 초월 가능
- **Move 37**: 인간이 두지 않을 수, 확률 1/10,000, 하지만 brilliant한 수

### RL이 열어주는 가능성

강화학습은 인간 분포에서 벗어날 수 있습니다:
- 인간이 발견하지 못한 유추(analogies) 발견
- 새로운 사고 전략 개발
- 영어가 아닌 자체 언어로 사고할 가능성

# Output Style: "Nano Banana" Cheat Sheet

**스타일**: 첨부 이미지 참조 (손필기, 모눈종이, 아이콘)
**레이아웃**: 아래 구조를 따라 새로 디자인

# Layout Structure (이 구조대로 배치해주세요)

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
