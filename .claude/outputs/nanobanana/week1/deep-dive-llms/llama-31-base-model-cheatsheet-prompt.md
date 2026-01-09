# Role Definition

You are an expert Technical Communicator and Information Architect specialized in creating "Nano Banana" style cheat sheets.

**IMPORTANT**: 첨부된 이미지는 스타일(손필기 느낌, 모눈종이 배경, 아이콘)만 참조하세요. 레이아웃은 아래 지정된 구조를 따라 새로 만들어주세요. 이미지의 레이아웃을 그대로 복사하지 마세요.

Your goal is to restructure the provided text about "LLM Base Models (Llama 3.1)" into a highly visual, structured, and actionable guide for software engineers and AI practitioners.

# Source Text

---
title: "8. Llama 3.1 Base Model Inference"
source_url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
source_type: youtube_transcript
author: "Andrej Karpathy"
parent: "deep-dive-llms"
chapter: 8/24
---

# Llama 3.1 Base Model Inference

## Core Concept: What is a Base Model?

A **base model** is a "token simulator" or "internet text simulator" that emerges after pre-training on massive internet data. It is NOT yet an assistant - it's a **document completer** that predicts the next token based on statistical patterns from web pages.

## Key Points

### Base Model vs Assistant
- Base models are the output of Step 1 (pre-training) in the LLM pipeline
- They don't answer questions directly - they complete documents
- They need additional training (SFT, RL) to become useful assistants

### Model Release Components
1. **Source Code**: Python code describing the neural network architecture (~100s of lines)
2. **Parameters**: The actual weights (e.g., 1.5B for GPT-2, 405B for Llama 3.1)

### Llama 3.1 Specifications
- 405 billion parameters
- Trained on 15 trillion tokens
- Knowledge cutoff: End of 2023
- Released by Meta

## Base Model Behavior Demonstrations

### 1. Not an Assistant

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
