export interface ReadingContent {
  slug: string
  week: number
  title: string
  titleKr: string
  author: string
  readTime: string
  sourceUrl: string
  sourceTitle: string
  sections: {
    title: string
    content: string
    items?: string[]
  }[]
  keyTakeaways?: {
    title: string
    content: string
  }[]
  relatedReadings?: {
    title: string
    slug?: string
    url?: string
  }[]
  nextReading?: {
    title: string
    slug: string
  }
}

export const readings: Record<string, ReadingContent> = {
  'week1/deep-dive-llms': {
    slug: 'deep-dive-llms',
    week: 1,
    title: 'Deep Dive into LLMs',
    titleKr: 'LLM 심층 분석',
    author: 'Andrej Karpathy',
    readTime: '약 3시간 30분',
    sourceUrl: 'https://www.youtube.com/watch?v=7xTGNNLPyMI',
    sourceTitle: 'YouTube - Deep Dive into LLMs by Andrej Karpathy',
    sections: [
      {
        title: '개요',
        content:
          'Andrej Karpathy의 이 강의는 대형 언어 모델(LLM)이 어떻게 작동하는지에 대한 포괄적인 설명을 제공합니다. GPT 시리즈 모델의 내부 작동 원리부터 트레이닝 과정, 그리고 실제 활용까지 다룹니다.',
      },
      {
        title: '1. LLM의 기본 구조',
        content:
          '대형 언어 모델은 본질적으로 다음 토큰을 예측하는 시스템입니다. 입력된 텍스트를 토큰화하고, 각 토큰에 대해 다음에 올 가능성이 높은 토큰을 예측합니다.',
        items: [
          '토큰화 (Tokenization): 텍스트를 작은 단위로 분할',
          '임베딩 (Embedding): 토큰을 고차원 벡터로 변환',
          '어텐션 (Attention): 문맥을 이해하기 위한 핵심 메커니즘',
          '트랜스포머 블록: 어텐션과 피드포워드 레이어의 반복 구조',
        ],
      },
      {
        title: '2. 트레이닝 과정',
        content: 'LLM의 트레이닝은 크게 세 단계로 나뉩니다:',
        items: [
          '사전 학습 (Pre-training): 인터넷의 대규모 텍스트 데이터로 기본 언어 능력 학습',
          '지도 미세조정 (Supervised Fine-tuning, SFT): 고품질의 대화 데이터로 응답 형식 학습',
          'RLHF (Reinforcement Learning from Human Feedback): 인간의 선호도를 반영하여 응답 품질 개선',
        ],
      },
      {
        title: '3. 스케일링 법칙',
        content: '모델의 성능은 세 가지 요소에 의해 결정됩니다:',
        items: [
          '파라미터 수: 모델의 크기',
          '데이터 양: 트레이닝에 사용된 토큰 수',
          '컴퓨팅 자원: 트레이닝에 사용된 연산량',
        ],
      },
      {
        title: '4. 실용적 시사점',
        content: '소프트웨어 개발자가 알아야 할 핵심 사항:',
        items: [
          'LLM은 확률적 시스템이므로 동일한 입력에 다른 출력이 나올 수 있음',
          '컨텍스트 윈도우의 제한을 이해하고 활용해야 함',
          '프롬프트 엔지니어링이 결과에 큰 영향을 미침',
          '모델의 지식 컷오프 날짜를 고려해야 함',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: '핵심 인사이트',
        content:
          'LLM은 단순히 "다음 단어 예측"을 수행하지만, 이 과정에서 언어의 문법, 의미, 심지어 세계 지식까지 학습합니다. 이것이 LLM의 놀라운 능력의 핵심입니다.',
      },
      {
        title: '개발자를 위한 팁',
        content:
          'LLM을 효과적으로 활용하려면 모델의 작동 원리를 이해하는 것이 중요합니다. "마법의 블랙박스"로 취급하지 말고, 확률적 텍스트 생성 시스템으로 이해하세요.',
      },
    ],
    relatedReadings: [
      { title: 'Prompt Engineering Overview', slug: 'prompt-engineering-overview' },
      { title: 'Prompt Engineering Guide', slug: 'prompt-engineering-guide' },
    ],
    nextReading: {
      title: 'Prompt Engineering Overview',
      slug: 'prompt-engineering-overview',
    },
  },
  'week1/prompt-engineering-overview': {
    slug: 'prompt-engineering-overview',
    week: 1,
    title: 'Prompt Engineering Overview',
    titleKr: '프롬프트 엔지니어링 개요',
    author: 'Anthropic',
    readTime: '약 30분',
    sourceUrl: 'https://docs.anthropic.com/claude/docs/prompt-engineering',
    sourceTitle: 'Anthropic Docs - Prompt Engineering',
    sections: [
      {
        title: '프롬프트 엔지니어링이란?',
        content:
          '프롬프트 엔지니어링은 AI 모델이 원하는 출력을 생성하도록 입력(프롬프트)을 설계하고 최적화하는 기술입니다. 효과적인 프롬프트는 모델의 성능을 크게 향상시킬 수 있습니다.',
      },
      {
        title: '핵심 원칙',
        content: '좋은 프롬프트를 작성하기 위한 기본 원칙들:',
        items: [
          '명확성: 모호하지 않은 구체적인 지시사항 제공',
          '맥락 제공: 필요한 배경 정보와 컨텍스트 포함',
          '예시 활용: Few-shot 학습을 위한 예시 제공',
          '구조화: 복잡한 태스크는 단계별로 분해',
        ],
      },
      {
        title: '일반적인 기법들',
        content: '자주 사용되는 프롬프트 엔지니어링 기법:',
        items: [
          'Zero-shot: 예시 없이 직접 지시',
          'Few-shot: 몇 가지 예시와 함께 지시',
          'Chain of Thought: 단계별 추론 유도',
          'Role Playing: 특정 역할이나 페르소나 부여',
        ],
      },
      {
        title: '실전 팁',
        content: '실제 개발에서 활용할 수 있는 팁:',
        items: [
          '반복 실험: 다양한 프롬프트 변형을 테스트',
          '출력 형식 지정: JSON, 마크다운 등 원하는 형식 명시',
          '제약 조건 명시: 글자 수, 톤, 스타일 등 제한사항 설정',
          '에러 처리: 예상치 못한 출력에 대한 대비',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: '핵심 인사이트',
        content:
          '프롬프트 엔지니어링은 단순히 "잘 물어보기"가 아닙니다. AI 모델의 특성을 이해하고, 체계적으로 입력을 설계하는 엔지니어링 프로세스입니다.',
      },
    ],
    relatedReadings: [
      { title: 'Deep Dive into LLMs', slug: 'deep-dive-llms' },
      { title: 'Prompt Engineering Guide', slug: 'prompt-engineering-guide' },
    ],
    nextReading: {
      title: 'Prompt Engineering Guide',
      slug: 'prompt-engineering-guide',
    },
  },
  'week1/prompt-engineering-guide': {
    slug: 'prompt-engineering-guide',
    week: 1,
    title: 'Prompt Engineering Guide',
    titleKr: '프롬프트 엔지니어링 가이드',
    author: 'DAIR.AI',
    readTime: '약 1시간',
    sourceUrl: 'https://www.promptingguide.ai/',
    sourceTitle: 'Prompting Guide by DAIR.AI',
    sections: [
      {
        title: '프롬프트의 구성 요소',
        content: '효과적인 프롬프트는 다음 요소들로 구성됩니다:',
        items: [
          '지시문 (Instruction): 모델이 수행할 작업 설명',
          '맥락 (Context): 관련 배경 정보',
          '입력 데이터 (Input): 처리할 데이터',
          '출력 지시자 (Output Indicator): 원하는 출력 형식',
        ],
      },
      {
        title: '고급 프롬프팅 기법',
        content: '더 복잡한 태스크를 위한 고급 기법들:',
        items: [
          'Chain-of-Thought (CoT): "단계별로 생각해보자"로 추론 유도',
          'Self-Consistency: 여러 추론 경로 생성 후 다수결',
          'Tree of Thoughts: 트리 구조로 사고 과정 탐색',
          'ReAct: 추론과 행동을 결합한 프롬프팅',
        ],
      },
      {
        title: '프롬프트 최적화',
        content: '프롬프트를 개선하는 방법:',
        items: [
          'A/B 테스트: 다양한 버전 비교',
          '온도 조절: temperature 파라미터로 창의성 조절',
          '토큰 제한: max_tokens으로 출력 길이 제어',
          '시스템 프롬프트: 전체 대화의 맥락 설정',
        ],
      },
      {
        title: '일반적인 실수와 해결책',
        content: '프롬프트 작성 시 피해야 할 실수들:',
        items: [
          '모호한 지시: 구체적인 요구사항으로 수정',
          '과도한 정보: 핵심 내용만 포함',
          '비현실적 기대: 모델의 한계 인식',
          '일관성 부족: 통일된 형식과 톤 유지',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: '핵심 인사이트',
        content:
          '프롬프트 엔지니어링은 과학과 예술의 결합입니다. 체계적인 방법론을 따르면서도, 창의적인 실험을 통해 최적의 결과를 찾아가세요.',
      },
    ],
    relatedReadings: [
      { title: 'Deep Dive into LLMs', slug: 'deep-dive-llms' },
      { title: 'Prompt Engineering Overview', slug: 'prompt-engineering-overview' },
    ],
  },
  // Week 2 Readings
  'week2/mcp-documentation': {
    slug: 'mcp-documentation',
    week: 2,
    title: 'Model Context Protocol Documentation',
    titleKr: 'MCP 문서',
    author: 'Anthropic',
    readTime: '약 45분',
    sourceUrl: 'https://modelcontextprotocol.io/',
    sourceTitle: 'Model Context Protocol - Official Documentation',
    sections: [
      {
        title: 'MCP란?',
        content:
          'Model Context Protocol(MCP)은 AI 모델이 외부 도구와 데이터 소스에 안전하게 접근할 수 있도록 하는 개방형 프로토콜입니다. AI 어시스턴트가 파일 시스템, API, 데이터베이스 등과 상호작용할 수 있게 해줍니다.',
      },
      {
        title: '핵심 개념',
        content: 'MCP의 주요 구성 요소:',
        items: [
          'Host: MCP 클라이언트를 실행하는 애플리케이션 (예: Claude Desktop)',
          'Client: 서버와 통신하는 프로토콜 클라이언트',
          'Server: 도구, 리소스, 프롬프트를 제공하는 서비스',
          'Transport: 클라이언트-서버 간 통신 계층 (stdio, HTTP 등)',
        ],
      },
      {
        title: 'MCP의 기능',
        content: 'MCP 서버가 제공할 수 있는 기능들:',
        items: [
          'Tools: 모델이 호출할 수 있는 함수 (파일 읽기, API 호출 등)',
          'Resources: 모델이 접근할 수 있는 데이터 (파일, DB 레코드 등)',
          'Prompts: 재사용 가능한 프롬프트 템플릿',
          'Sampling: 서버가 모델에게 완성을 요청',
        ],
      },
      {
        title: '보안 모델',
        content: 'MCP의 보안 원칙:',
        items: [
          '사용자 동의: 모든 도구 사용은 사용자 승인 필요',
          '최소 권한: 필요한 최소한의 접근 권한만 부여',
          '샌드박싱: 서버는 격리된 환경에서 실행',
          '감사 로깅: 모든 작업 기록 유지',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: '핵심 인사이트',
        content:
          'MCP는 AI를 "단순한 챗봇"에서 "실제로 작업을 수행하는 에이전트"로 발전시키는 핵심 기술입니다. 표준화된 프로토콜을 통해 다양한 도구와 쉽게 연동할 수 있습니다.',
      },
    ],
    relatedReadings: [
      { title: 'Building MCP Servers', slug: 'building-mcp-servers' },
      { title: 'Tool Use with Claude', slug: 'tool-use-claude' },
    ],
    nextReading: {
      title: 'Building MCP Servers',
      slug: 'building-mcp-servers',
    },
  },
  'week2/building-mcp-servers': {
    slug: 'building-mcp-servers',
    week: 2,
    title: 'Building MCP Servers',
    titleKr: 'MCP 서버 구축하기',
    author: 'Anthropic',
    readTime: '약 1시간',
    sourceUrl: 'https://modelcontextprotocol.io/quickstart',
    sourceTitle: 'MCP Quickstart Guide',
    sections: [
      {
        title: '시작하기',
        content:
          'MCP 서버를 구축하면 Claude가 커스텀 도구와 데이터에 접근할 수 있습니다. Python 또는 TypeScript로 서버를 만들 수 있습니다.',
      },
      {
        title: 'Python으로 MCP 서버 만들기',
        content: 'Python SDK를 사용한 기본 서버 구조:',
        items: [
          'mcp 패키지 설치: pip install mcp',
          '@server.tool() 데코레이터로 도구 정의',
          '@server.resource() 데코레이터로 리소스 정의',
          'stdio 또는 HTTP 트랜스포트로 실행',
        ],
      },
      {
        title: 'TypeScript로 MCP 서버 만들기',
        content: 'TypeScript SDK를 사용한 구현:',
        items: [
          '@modelcontextprotocol/sdk 패키지 설치',
          'Server 클래스 인스턴스 생성',
          'setRequestHandler로 도구/리소스 핸들러 등록',
          'StdioServerTransport로 연결',
        ],
      },
      {
        title: '서버 연결하기',
        content: 'Claude Desktop에 MCP 서버 연결:',
        items: [
          'claude_desktop_config.json 파일 수정',
          'mcpServers 섹션에 서버 설정 추가',
          'command와 args로 서버 실행 방법 지정',
          'Claude Desktop 재시작으로 적용',
        ],
      },
      {
        title: '디버깅 팁',
        content: 'MCP 서버 개발 시 유용한 팁:',
        items: [
          'MCP Inspector 도구 활용',
          'stderr로 디버그 로그 출력',
          'JSON-RPC 메시지 로깅',
          '단위 테스트로 핸들러 검증',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: '핵심 인사이트',
        content:
          'MCP 서버 개발은 어렵지 않습니다. 기본 구조를 이해하면 몇 시간 안에 커스텀 도구를 만들어 Claude와 연동할 수 있습니다.',
      },
    ],
    relatedReadings: [
      { title: 'MCP Documentation', slug: 'mcp-documentation' },
      { title: 'Tool Use with Claude', slug: 'tool-use-claude' },
    ],
    nextReading: {
      title: 'Tool Use with Claude',
      slug: 'tool-use-claude',
    },
  },
  'week2/tool-use-claude': {
    slug: 'tool-use-claude',
    week: 2,
    title: 'Tool Use with Claude',
    titleKr: 'Claude와 도구 사용',
    author: 'Anthropic',
    readTime: '약 40분',
    sourceUrl: 'https://docs.anthropic.com/claude/docs/tool-use',
    sourceTitle: 'Anthropic Docs - Tool Use',
    sections: [
      {
        title: 'Tool Use 개요',
        content:
          'Claude의 Tool Use 기능을 사용하면 모델이 외부 API를 호출하고, 계산을 수행하고, 데이터를 검색할 수 있습니다. API에서 도구를 정의하면 Claude가 적절할 때 호출합니다.',
      },
      {
        title: '도구 정의하기',
        content: 'API에서 도구를 정의하는 방법:',
        items: [
          'name: 도구의 고유 식별자',
          'description: 도구가 하는 일 설명 (Claude가 참고)',
          'input_schema: JSON Schema로 입력 파라미터 정의',
          'tools 배열에 추가하여 API 호출에 포함',
        ],
      },
      {
        title: '도구 호출 흐름',
        content: 'Claude가 도구를 사용하는 과정:',
        items: [
          '1. 사용자 질문과 도구 목록을 Claude에게 전송',
          '2. Claude가 tool_use 블록으로 도구 호출 요청',
          '3. 애플리케이션이 실제 도구 실행',
          '4. tool_result로 결과를 Claude에게 반환',
          '5. Claude가 결과를 바탕으로 최종 응답 생성',
        ],
      },
      {
        title: '베스트 프랙티스',
        content: '효과적인 도구 사용을 위한 팁:',
        items: [
          '명확한 도구 설명: Claude가 언제 사용할지 판단하는 데 중요',
          '구체적인 파라미터 정의: 타입, 필수 여부, 설명 포함',
          '에러 처리: 도구 실패 시 적절한 에러 메시지 반환',
          '도구 개수 제한: 너무 많은 도구는 성능 저하 유발',
        ],
      },
    ],
    keyTakeaways: [
      {
        title: '핵심 인사이트',
        content:
          'Tool Use는 Claude를 단순한 텍스트 생성기에서 실제 작업을 수행하는 에이전트로 변환합니다. 잘 설계된 도구는 Claude의 능력을 무한히 확장할 수 있습니다.',
      },
    ],
    relatedReadings: [
      { title: 'MCP Documentation', slug: 'mcp-documentation' },
      { title: 'Building MCP Servers', slug: 'building-mcp-servers' },
    ],
  },
}
