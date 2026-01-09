# Role Definition

You are an expert Technical Communicator and Information Architect specialized in creating "Nano Banana" style cheat sheets.

**IMPORTANT**: 첨부된 이미지는 스타일(손필기 느낌, 모눈종이 배경, 아이콘)만 참조하세요. 레이아웃은 아래 지정된 구조를 따라 새로 만들어주세요. 이미지의 레이아웃을 그대로 복사하지 마세요.

Your goal is to restructure the provided text about "Neural Network Internals (신경망 내부 구조)" into a highly visual, structured, and actionable guide for software engineers learning about LLM architecture.

# Source Text

---
title: "5. Neural Network Internals"
titleKr: "5. 신경망 내부 구조"
source_url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
source_type: youtube_transcript
author: "Andrej Karpathy"
parent: "deep-dive-llms"
chapter: 5
totalChapters: 24
---

# 5. 신경망 내부 구조

> 원본 강의: "Deep Dive into LLMs like ChatGPT" by Andrej Karpathy
> 챕터 5/24

## 전체 강의 요약 (TL;DR)

이 3시간 30분짜리 강의에서 안드레이 카르파티는 ChatGPT 같은 대규모 언어 모델(LLM)이 어떻게 만들어지고 작동하는지 처음부터 끝까지 설명합니다. **사전학습**(인터넷 데이터 학습), **지도학습 미세조정**(대화 데이터로 어시스턴트 만들기), **강화학습**(성능 최적화)의 세 단계를 거쳐 LLM이 탄생합니다.

## 이 챕터 요약

트랜스포머 아키텍처의 내부를 설명합니다.

**핵심 포인트:**
- 수십억 개 파라미터가 입력과 결합
- 어텐션, MLP 블록 등으로 구성
- GPU 클러스터에서 수개월간 학습

## 영어 원문 트랜스크립트

[20:30-26:00] Neural Network Internals - Transformer 아키텍처의 파라미터(가중치)는 수십억 개에 달하며, 이 파라미터들이 입력 토큰과 수학적으로 결합되어 다음 토큰을 예측합니다. 학습은 GPU 클러스터에서 수개월간 진행됩니다.

Key quotes:
- "Think of these parameters as kind of like knobs on a DJ set"
- "These are not complex expressions... just to show you that it's not very scary"
- "You can still kind of loosely think of this as like a synthetic piece of brain tissue"

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
