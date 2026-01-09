# Role Definition
You are an expert Technical Communicator and Information Architect specialized in creating "Nano Banana" style cheat sheets. Your goal is to restructure the provided text about "Neural Network I/O" from Andrej Karpathy's Deep Dive into LLMs lecture into a highly visual, structured, and actionable guide for software engineers and AI practitioners.

# Source Text
---
title: "4. Neural Network I/O"
source_url: "https://www.youtube.com/watch?v=7xTGNNLPyMI"
source_type: youtube_transcript
author: "Andrej Karpathy"
parent: "deep-dive-llms"
chapter: 4
---

## 4. Neural Network I/O

**요약**: 신경망의 입출력 구조를 설명합니다. 토큰 시퀀스가 입력으로 들어가면, 신경망은 다음 토큰에 대한 확률 분포(약 100,000개 토큰 각각의 확률)를 출력합니다. 학습 과정에서 정답 토큰의 확률을 높이도록 신경망을 조정합니다.

[14:30] now is I've taken this uh sequence of text that we have here in the data set and I have re-represented it using our tokenizer into a sequence of tokens and this is what that looks like now so for example when we go back to the Fine web data set they mentioned that not only is this 44 terab of dis space but this is about a 15 trillion token sequence of um in this data set and so here these are just some of the first uh one or two or three or a few thousand here I think uh

[15:00] tokens of this data set but there's 15 trillion here uh to keep in mind and again keep in mind one more time that all of these represent little text chunks they're all just like atoms of these sequences and the numbers here don't make any sense they're just uh they're just unique IDs okay so now we get to the fun part which is the uh neural network training and this is where a lot of the heavy lifting happens computationally when you're training these neural networks so what we do here

[15:30] in this this step is we want to model the statistical relationships of how these tokens follow each other in the sequence so what we do is we come into the data and we take Windows of tokens so we take a window of tokens uh from this data fairly randomly and um the windows length can range anywhere anywhere between uh zero tokens actually all the way up to some maximum size that we decide on uh so for example in practice you could see a

[16:00] token with Windows of say 8,000 tokens now in principle we can use arbitrary window lengths of tokens uh but uh processing very long uh basically U window sequences would just be very computationally expensive so we just kind of decide that say 8,000 is a good number or 4,000 or 16,000 and we crop it there now in this example I'm going to be uh taking the first four tokens just so everything fits nicely so these

[16:30] tokens we're going to take a window of four tokens this bar view in and space single which are these token IDs and now what we're trying to do here is we're trying to basically predict the token that comes next in the sequence so 3962 comes next right so what we do now here is that we call this the context these four tokens are context and they feed into a neural network and this is the input to the neural network

[17:00] now I'm going to go into the detail of what's inside this neural network in a little bit for now it's important to understand is the input and the output of the neural net so the input are sequences of tokens of variable length anywhere between zero and some maximum size like 8,000 the output now is a prediction for what comes next so because our vocabulary has 100277 possible tokens the neural network is going to Output exactly that many numbers

[17:30] and all of those numbers correspond to the probability of that token as coming next in the sequence so it's making guesses about what comes next um in the beginning this neural network is randomly initialized so um and we're going to see in a little bit what that means but it's a it's a it's a random transformation so these probabilities in the very beginning of the training are also going to be kind of random uh so here I have three examples but keep in mind that there's 100,000 numbers here um so the probability of this token space

[18:00] Direction neural network is saying that this is 4% likely right now 11799 is 2% and then here the probility of 3962 which is post is 3% now of course we've sampled this window from our data set so we know what comes next we know and that's the label we know that the correct answer is that 3962 actually comes next in the sequence so now what we have is this mathematical process for doing an update to the neural network we

[18:30] have the way of tuning it and uh we're going to go into a little bit of of detail in a bit but basically we know that this probability here of 3% we want this probability to be higher and we want the probabilities of all the other tokens to be lower and so we have a way of mathematically calculating how to adjust and update the neural network so that the correct answer has a slightly higher probability so if I do an update to the neural network now the next time I Fe

[19:00] this particular sequence of four tokens into neural network the neural network will be slightly adjusted now and it will say Okay post is maybe 4% and case now maybe is 1% and uh Direction could become 2% or something like that and so we have a way of nudging of slightly updating the neuronet to um basically give a higher probability to the correct token that comes next in the sequence and now you just have to remember that this process happens not just for uh this um token

[19:30] here where these four fed in and predicted this one this process happens at the same time for all of these tokens in the entire data set and so in practice we sample little windows little batches of Windows and then at every single one of these tokens we want to adjust our neural network so that the probability of that token becomes slightly higher and this all happens in parallel in large batches of these tokens and this is the process of training the neural network it's a sequence of updating it so that it's

[20:00] predictions match up the statistics of what actually happens in your training set and its probabilities become consistent with the uh statistical patterns of how these tokens follow each other in the data so let's now briefly get into the internals of these neural networks just to give you a sense of what's inside so neural network internals so as I mentioned we have these inputs uh that are sequences of tokens in this case this is four input tokens but this can be anywhere between

# Output Style: "Nano Banana" Cheat Sheet
Please adhere to the following formatting rules strictly:

1. **Visual Hierarchy & Structure**:
   - Use strict Markdown structure.
   - Use specific emojis for every section header to improve scanning.
   - Use **Bold** for key concepts and definitions.
   - Group by topic, not by timeline.

2. **Diagrams & Schematics (CRITICAL)**:
   - Use `mermaid` code blocks to visualize concepts.
   - Create a **Mind Map** for the overall topic structure.
   - Create **Flowcharts** for processes explained in the lecture.
   - Create a **Sequence Diagram** for the training loop.

3. **Concept Tables**:
   - Key concepts in table format with definitions.
   - Input/Output specifications in tabular form.

4. **Quotable Insights**:
   - Extract memorable quotes or key insights.
   - Highlight "aha moments" from the lecture.

# Output Structure Plan

## 1. Topic Overview (Mind Map)
- Create a Mermaid mindmap with the following structure:
  - Root: "Neural Network I/O"
  - Level 1: Input, Processing, Output, Training
  - Level 2:
    - Input: Token Sequence, Context Window
    - Processing: Statistical Modeling
    - Output: Probability Distribution, 100K+ Tokens
    - Training: Loss Calculation, Parameter Update

## 2. Key Concepts Matrix (Table)
- Columns: [Concept] | [Definition] | [Example] | [Key Numbers]
- Include the following concepts:
  - Token Sequence
  - Context Window
  - Vocabulary Size
  - Probability Distribution
  - Training Update
- Example row:
  | Context Window | 신경망에 입력되는 토큰 시퀀스 | 4~8,000 tokens | max 8,000 |

## 3. Neural Network I/O Flow (Flowchart)
- Create a Mermaid flowchart showing:
  ```
  Token Sequence -> Context Window 추출 -> Neural Network -> Probability Distribution -> Next Token Prediction
  ```
- Show the variable input size (0 to max) and fixed output size (vocabulary size)

## 4. Training Process (Sequence Diagram)
- Create a Mermaid sequence diagram or flowchart:
  ```
  1. Sample Window from Dataset
  2. Feed Context to Neural Network
  3. Get Probability Distribution
  4. Compare with Actual Next Token
  5. Calculate Update (increase correct prob, decrease others)
  6. Apply Update to Neural Network
  7. Repeat in Parallel Batches
  ```

## 5. Input/Output Specification (Table)
- Create two specification tables:

**Input Specification:**
| Property | Value | Notes |
|----------|-------|-------|
| Type | Token Sequence | Integer IDs |
| Min Length | 0 | Zero context possible |
| Max Length | ~8,000 | Computational limit |
| Format | List of integers | e.g., [3962, 2819, ...] |

**Output Specification:**
| Property | Value | Notes |
|----------|-------|-------|
| Type | Probability Distribution | |
| Size | 100,277 | Vocabulary size |
| Range | 0-1 | Each probability |
| Sum | 1.0 | All probabilities |

## 6. Notable Insights
- Extract key quotes with Korean annotations:
  - "tokens are like atoms of these sequences" - 토큰은 시퀀스의 원자와 같음
  - "we want to model the statistical relationships" - 토큰 간 통계적 관계 모델링
  - "nudging the neural network" - 신경망을 살짝 조정하는 개념

## 7. Key Takeaways
- 3-5 bullet points summarizing:
  - 입력: 가변 길이 토큰 시퀀스 (0 ~ max context)
  - 출력: 고정 크기 확률 분포 (어휘 크기)
  - 학습: 정답 토큰의 확률을 높이는 방향으로 업데이트
  - 병렬 처리: 여러 윈도우를 동시에 처리

---
Please generate the Cheat Sheet now.

내가 말하는 cheat sheet는 보기 좋게 정리된, 실제 펜 노트필기 같은 이미지를 말하는거야.
용어 및 고유명사는 영어 원문을 쓰되(Neural Network, Token, Context Window, Probability Distribution, Vocabulary, Training, Fine Web Dataset 등), 필기 내용은 한국어로 작성해.
---

## 작업 결과 요약

Bash와 Write 도구가 자동 거부되어 파일을 직접 생성할 수 없었습니다.

**수행 분석**:
1. 원본 파일 `/home/junchan/github/stanford-cs146s-kr/docs/week1/deep-dive-llms/neural-network-io.md` 읽기 완료
2. 콘텐츠 유형: **lecture** (YouTube 트랜스크립트)
3. 템플릿 및 에이전트 가이드라인 참조 완료

**생성된 프롬프트 구조**:
- **Role Definition**: 나노바나나 스타일 치트시트 전문가 역할 정의
- **Source Text**: 원본 강의 트랜스크립트 전체 포함
- **Output Style**: 시각적 계층구조, Mermaid 다이어그램, 표, 인용문 지침
- **Output Structure Plan**: 7개 섹션
  1. Topic Overview (Mind Map)
  2. Key Concepts Matrix (Table)
  3. Neural Network I/O Flow (Flowchart)
  4. Training Process (Sequence Diagram)
  5. Input/Output Specification (Table)
  6. Notable Insights
  7. Key Takeaways

**출력 경로**: `.claude/outputs/nanobanana/week1/deep-dive-llms/neural-network-io-cheatsheet-prompt.md`

위의 마크다운 내용을 수동으로 해당 파일에 저장해 주시기 바랍니다.

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
