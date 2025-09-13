# Plano de Desenvolvimento - Jogo Halma com Sockets

**Projeto:** Halma Game Online  
**Tecnologia:** Next.js 15.5.3 + Socket.io  
**Data de Início:** 12 de setembro de 2025  
**Data de Entrega:** 10 de outubro de 2025
**Autor:** Samuel Cabral Lima  

## Decisões Arquiteturais

### 1. Tamanho do Tabuleiro

- **Decisão:** Tabuleiro 16x16 (versão original do Halma)
- **Justificativa:** Implementação completa das regras originais, maior desafio estratégico
- **Considerações:** Interface responsiva necessária para acomodar o tabuleiro maior

### 2. Tecnologia de Comunicação

- **Decisão:** Socket.io
- **Justificativa:**
  - Reconexão automática
  - Fallbacks para HTTP long-polling
  - Melhor experiência de desenvolvimento
  - Suporte nativo ao Next.js

### 3. Persistência de Dados

- **Decisão:** Armazenamento em memória
- **Justificativa:**
  - Simplicidade para MVP
  - Performance otimizada
  - Facilita desenvolvimento e testes
- **Limitação:** Partidas perdidas em caso de reinicialização do servidor

### 4. Sistema de Identificação

- **Decisão:** Nome do jogador + hash único interno
- **Implementação:**
  - Usuário informa apenas o nome
  - Sistema gera hash único internamente
  - Hash usado para identificação técnica
  - Nome usado para exibição e chat

### 5. Ambiente de Desenvolvimento

- **Decisão:** Foco apenas em desenvolvimento local
- **Justificativa:** Priorizar funcionalidades core antes de deploy

### 6. Sistema de Chat

- **Decisão:** Chat com comandos especiais e emojis
- **Funcionalidades:**
  - Mensagens de texto
  - Suporte a emojis
  - Comandos especiais: `/desistir`, `/novo_jogo`
  - Histórico de mensagens

## Arquitetura do Sistema

### Estrutura de Pastas (Next.js App Router)

```
src/
├── app/
│   ├── api/
│   │   └── socket/
│   │       └── route.ts          # API route para Socket.io
│   ├── game/
│   │   ├── [roomId]/
│   │   │   └── page.tsx          # Página da partida
│   │   └── create/
│   │       └── page.tsx          # Página para criar partida
│   ├── join/
│   │   └── page.tsx              # Página para entrar em partida
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── game/
│   │   ├── Board.tsx             # Componente do tabuleiro
│   │   ├── GamePiece.tsx         # Componente da peça
│   │   ├── GameControls.tsx      # Controles do jogo
│   │   ├── GameStatus.tsx        # Status da partida
│   │   └── Chat.tsx              # Sistema de chat
│   ├── ui/                       # Componentes UI existentes
│   └── theme-provider.tsx
├── lib/
│   ├── socket/
│   │   ├── client.ts             # Cliente Socket.io
│   │   ├── server.ts             # Servidor Socket.io
│   │   └── types.ts              # Tipos TypeScript
│   ├── game/
│   │   ├── engine.ts             # Lógica do jogo
│   │   ├── rules.ts              # Validação de regras
│   │   └── types.ts              # Tipos do jogo
│   └── utils.ts
└── hooks/
    ├── useSocket.ts              # Hook para Socket.io
    ├── useGame.ts                # Hook para estado do jogo
    └── useChat.ts                # Hook para chat
```

### Fluxo de Dados

1. **Criação de Partida:**
   - Usuário informa nome → Sistema gera hash único
   - Socket.io cria sala com ID único
   - Jogador vira "host" da partida

2. **Entrada em Partida:**
   - Usuário informa nome e código da sala
   - Sistema valida sala e conecta jogador
   - Sincronização do estado do jogo

3. **Comunicação em Tempo Real:**
   - Movimentos das peças
   - Mensagens do chat
   - Comandos especiais
   - Status da partida

## Plano de Implementação

### Fase 1: Infraestrutura Base (Semana 1)

#### 1.1 Configuração do Socket.io

- [ ] Instalar dependências: `socket.io`, `socket.io-client`
- [ ] Configurar servidor Socket.io no Next.js
- [ ] Criar API route `/api/socket/route.ts`
- [ ] Implementar tipos TypeScript para eventos

#### 1.2 Sistema de Salas

- [ ] Implementar criação de salas
- [ ] Sistema de join em salas
- [ ] Validação de salas existentes
- [ ] Gerenciamento de conexões

#### 1.3 Identificação de Jogadores

- [ ] Sistema de geração de hash único
- [ ] Mapeamento nome → hash
- [ ] Validação de nomes únicos por sala

### Fase 2: Lógica do Jogo (Semana 2)

#### 2.1 Engine do Halma

- [ ] Estrutura do tabuleiro 16x16
- [ ] Posicionamento inicial das peças
- [ ] Validação de movimentos básicos
- [ ] Sistema de saltos múltiplos
- [ ] Detecção de vitória

#### 2.2 Regras de Negócio

- [ ] Validação de movimentos adjacentes
- [ ] Validação de saltos
- [ ] Contagem de jogadas (limite de 50 para 16x16)
- [ ] Verificação de peças na base própria
- [ ] Detecção de condições de derrota

#### 2.3 Estado do Jogo

- [ ] Estrutura de dados do estado
- [ ] Sincronização entre clientes
- [ ] Persistência em memória
- [ ] Histórico de movimentos

### Fase 3: Interface do Usuário (Semana 3)

#### 3.1 Componentes do Tabuleiro

- [ ] Componente `Board` responsivo
- [ ] Renderização do tabuleiro 16x16
- [ ] Sistema de coordenadas
- [ ] Highlighting de casas válidas

#### 3.2 Componentes das Peças

- [ ] Componente `GamePiece`
- [ ] Animações de movimento
- [ ] Estados visuais (selecionada, válida, inválida)
- [ ] Diferenciação por jogador

#### 3.3 Controles do Jogo

- [ ] Botões de ação (desistir, novo jogo)
- [ ] Indicador de turno
- [ ] Status da partida
- [ ] Contador de jogadas

### Fase 4: Sistema de Chat (Semana 4)

#### 4.1 Chat Básico

- [ ] Interface do chat
- [ ] Envio de mensagens
- [ ] Histórico de mensagens
- [ ] Timestamps das mensagens

#### 4.2 Funcionalidades Avançadas

- [ ] Suporte a emojis
- [ ] Comandos especiais (`/desistir`, `/novo_jogo`)
- [ ] Validação de comandos
- [ ] Notificações de sistema

#### 4.3 Integração com Jogo

- [ ] Mensagens automáticas (início, fim, desistência)
- [ ] Notificações de eventos do jogo
- [ ] Sincronização com estado da partida

### Fase 5: Páginas e Navegação (Semana 5)

#### 5.1 Página de Criação de Partida

- [ ] Formulário de criação
- [ ] Validação de entrada
- [ ] Redirecionamento para sala
- [ ] Tratamento de erros

#### 5.2 Página de Entrada em Partida

- [ ] Formulário de entrada
- [ ] Validação de código da sala
- [ ] Feedback de status
- [ ] Redirecionamento para jogo

#### 5.3 Página da Partida

- [ ] Layout responsivo
- [ ] Integração de todos os componentes
- [ ] Gerenciamento de estado
- [ ] Tratamento de desconexões

### Fase 6: Polimento e Testes (Semana 6)

#### 6.1 Tratamento de Erros

- [ ] Validação de entrada
- [ ] Tratamento de desconexões
- [ ] Mensagens de erro amigáveis
- [ ] Fallbacks para falhas

#### 6.2 Otimizações

- [ ] Performance do tabuleiro
- [ ] Otimização de re-renders
- [ ] Compressão de dados
- [ ] Lazy loading

#### 6.3 Testes

- [ ] Testes unitários da lógica
- [ ] Testes de integração Socket.io
- [ ] Testes de regras do jogo
- [ ] Testes de interface

## Considerações Técnicas

### Next.js Específicas

1. **API Routes:** Usar App Router para Socket.io
2. **Server Components:** Para renderização inicial do tabuleiro
3. **Client Components:** Para interatividade e Socket.io
4. **Middleware:** Para validação de rotas de jogo

### Socket.io Específicas

1. **Namespaces:** Separar salas por namespace
2. **Rooms:** Cada partida = uma room
3. **Events:** Eventos tipados para comunicação
4. **Middleware:** Para validação de conexões

### Performance

1. **Memoização:** Componentes do tabuleiro
2. **Debounce:** Movimentos rápidos
3. **Virtualização:** Para tabuleiros grandes (se necessário)
4. **Compressão:** Dados de estado do jogo

## Definições de Pronto

### Critérios de Aceitação - Fase 1

- [ ] Socket.io configurado e funcionando
- [ ] Criação de salas implementada
- [ ] Sistema de identificação funcionando
- [ ] Conexão/desconexão de jogadores

### Critérios de Aceitação - Fase 2

- [ ] Tabuleiro 16x16 renderizado
- [ ] Movimentos básicos funcionando
- [ ] Saltos múltiplos implementados
- [ ] Detecção de vitória funcionando

### Critérios de Aceitação - Fase 3

- [ ] Interface responsiva
- [ ] Movimentos visuais funcionando
- [ ] Controles básicos implementados
- [ ] Feedback visual adequado

### Critérios de Aceitação - Fase 4

- [ ] Chat funcionando
- [ ] Comandos especiais implementados
- [ ] Emojis funcionando
- [ ] Integração com jogo

### Critérios de Aceitação - Fase 5

- [ ] Navegação completa
- [ ] Formulários funcionando
- [ ] Tratamento de erros
- [ ] UX fluida

### Critérios de Aceitação - Fase 6

- [ ] Sistema robusto
- [ ] Performance otimizada
- [ ] Testes implementados
- [ ] Documentação completa

## Riscos e Mitigações

### Riscos Técnicos

1. **Performance do tabuleiro 16x16**
   - *Mitigação:* Otimização de componentes e memoização

2. **Complexidade dos saltos múltiplos**
   - *Mitigação:* Implementação incremental e testes

3. **Sincronização de estado**
   - *Mitigação:* Arquitetura clara e validações

### Riscos de Prazo

1. **Complexidade subestimada**
   - *Mitigação:* Fases bem definidas e testes contínuos

2. **Integração Socket.io + Next.js**
   - *Mitigação:* Pesquisa prévia e prototipagem

## Próximos Passos

1. **Aprovação do Plano:** Revisar e aprovar este documento
2. **Setup Inicial:** Configurar ambiente de desenvolvimento
3. **Fase 1:** Iniciar implementação da infraestrutura base
4. **Revisões:** Revisões semanais do progresso

---

**Nota:** Este plano é um documento vivo e pode ser ajustado conforme necessário durante o desenvolvimento. O foco principal é entregar um MVP funcional que atenda aos critérios de avaliação do projeto.
