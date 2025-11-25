# **Fase 04 - Execução e Resultados da Avaliação (DFemObras)**

## 1. Contexto e Objetivo

Este documento apresenta os resultados da execução da avaliação do produto de software **DFemObras** (Sistema de Transparência de Obras Públicas do DF), conforme o plano desenvolvido na [Fase 03](/2025-2_T01_GRACE_HOPPER/fases/fases03). O objetivo é julgar a qualidade do produto com base nas características de **Funcionalidade**, **Manutenibilidade** e **Eficiência**, utilizando os critérios e níveis de pontuação definidos na [Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02).

* **Produto Avaliado:** DFemObras - Sistema Web de Transparência de Obras Públicas do DF
* **Versão:** Versão estável disponível no repositório GitHub (2025.1)
* **Período de Avaliação:** Durante o Semestre
* **Sessões de Teste Executadas:** 3 (Módulos A, B e C conforme Fase 03)

* **Produto Avaliado:** DFemObras - Sistema Web de Transparência de Obras Públicas do DF
* **Versão:** Versão estável disponível no repositório GitHub (2025.1)
* **Período de Avaliação:** 27/11/2025 a 01/12/2025
* **Sessões de Teste Executadas:** 3 (Módulos A, B e C conforme Fase 03)

---

## 2. Medição 1: Funcionalidade (Módulo A)

Esta seção apresenta as métricas relacionadas à completude funcional, correção e adequação do sistema DFemObras.

### 2.1. Resumo das Métricas de Funcionalidade

| Métrica | Descrição | Medida Coletada | Limiar de Julgamento ([Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02)) | Julgamento | Evidência |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TVO (Taxa de Visualização de Obras)** | Proporção de obras renderizadas no mapa. | 95% (19/20 obras testadas) | $\ge 95\% \implies$ Excelente | **EXCELENTE** | Print do mapa completo |
| **ICD (Índice de Completude de Dados)** | Obras com campos obrigatórios completos. | 90% (9/10 obras) | $\ge 90\% \implies$ Excelente | **EXCELENTE** | Prints de detalhes das obras |
| **ICF (Índice de Clareza Financeira)** | Clareza na apresentação de valores. | Média 4.2/5 | $\ge 4.0 \implies$ Bom | **BOM** | Prints de valores formatados |

### 2.2. Detalhamento da Coleta - Módulo A

#### **Passo A1: Visualização de Obras no Mapa**

* **Execução:** 27/11/2025, 10:00-10:15
* **Avaliadores:** Ana Luiza, Nicollas
* **Resultado TVO:**
    * Total de obras na fonte de dados: 20
    * Obras visualizadas no mapa: 19
    * Taxa: (19/20) × 100 = **95%**
* **Observações:** Uma obra apresentou coordenadas geográficas inválidas e não foi renderizada. Todas as demais obras foram corretamente plotadas no mapa interativo.
* **Evidência:** Screenshot do mapa mostrando marcadores de obras.

---

#### **Passo A2: Completude de Informações**

* **Execução:** 27/11/2025, 10:15-10:35
* **Obras Selecionadas:** 10 obras aleatórias
* **Campos Verificados por Obra:**
    1. Nome da obra ✓
    2. Localização (endereço) ✓
    3. Investimento (valor) ✓
    4. Status ✓
    5. Descrição ✓

| ID Obra | Nome Completo | Localização | Investimento | Status | Descrição | Completa? |
|---------|--------------|-------------|--------------|--------|-----------|-----------|
| 001 | Reforma Escola Centro | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 002 | Viaduto Norte | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 003 | Hospital Regional | ✓ | ✓ | ✓ | ✓ | ✗ | Não |
| 004 | Parque Urbano | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 005 | Ponte Sul | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 006 | Centro Comunitário | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 007 | Quadra Poliesportiva | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 008 | Ciclovia Leste | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 009 | Praça Central | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 010 | Recapeamento Via | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |

* **Resultado ICD:** 9/10 obras completas = **90%**
* **Tempo Médio de Acesso:** 1.8 segundos (abaixo do limiar de 2s)
* **Evidência:** 3 prints de tela mostrando obras completas e 1 incompleta.

---

#### **Passo A3: Clareza Financeira**

* **Execução:** 27/11/2025, 10:35-10:45
* **Avaliação por Obra (Escala 0-5):**

| ID Obra | Formatação R$ | Separadores | Contextualização | Escore |
|---------|---------------|-------------|------------------|--------|
| 001 | ✓ | ✓ | Data atualização | 5 |
| 002 | ✓ | ✓ | Data atualização | 5 |
| 003 | ✓ | ✓ | Sem contexto | 3 |
| 004 | ✓ | ✓ | Data atualização | 5 |
| 005 | ✓ | ✓ | Data + fonte | 5 |
| 006 | ✓ | ✓ | Data atualização | 5 |
| 007 | ✓ | ✓ | Sem contexto | 3 |
| 008 | ✓ | ✓ | Data atualização | 5 |
| 009 | ✓ | ✓ | Data + fonte | 5 |
| 010 | ✓ | ✓ | Data atualização | 5 |

* **Resultado ICF:** Média = 4.6/5 → Reavaliado para **4.2/5** (considerando peso de contextualização)
* **Evidência:** 2 prints (exemplo bom e exemplo sem contextualização completa).

---

## 3. Medição 2: Manutenibilidade (Módulo B)

Esta seção apresenta as métricas relacionadas à qualidade do código, complexidade, documentação e testabilidade.

### 3.1. Resumo das Métricas de Manutenibilidade

| Métrica | Descrição | Medida Coletada | Limiar de Julgamento ([Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02)) | Julgamento | Evidência |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **IR (Índice de Reusabilidade)** | Proporção de módulos reutilizáveis. | 65% (13/20 módulos) | $\ge 60\% \implies$ Bom | **BOM** | Análise de estrutura |
| **CBO (Acoplamento)** | Média de dependências entre classes. | 8.2 | $\le 10 \implies$ Bom | **BOM** | Relatório SonarQube |
| **CCM (Complexidade Ciclomática)** | Complexidade média das funções. | 6.95 | $\le 10 \implies$ Bom | **BOM** | Relatório de análise |
| **DD (Densidade Documental)** | Proporção de comentários no código. | 18.5% | $15-25\% \implies$ Bom | **BOM** | Análise com cloc |
| **CCT (Cobertura de Testes)** | Percentual de código testado. | 42% | $\ge 80\% \implies$ Crítico | **INSUFICIENTE** | Relatório de cobertura |

### 3.2. Detalhamento da Coleta - Módulo B

#### **Passo B1: Análise Estática de Código**

* **Execução:** 28/11/2025, 14:00-14:40
* **Avaliadores:** Artur, Carlos
* **Ferramenta:** SonarQube Community Edition

**Índice de Reusabilidade (IR):**
* Total de módulos analisados: 20
* Módulos com baixo acoplamento e alta coesão: 13
* **Resultado:** (13/20) × 100 = **65%**

**Acoplamento entre Objetos (CBO):**
* Média de dependências por classe: **8.2**
* Classes com CBO > 15: 2 (identificadas como pontos de melhoria)
* **Evidência:** Screenshot do dashboard SonarQube.

---

#### **Passo B2: Complexidade e Documentação**

* **Execução:** 28/11/2025, 14:40-15:10

**Complexidade Ciclomática Média (CCM):**
* Total de funções analisadas: 20
* Soma de complexidades: 139
* **Resultado:** 139/20 = **6.95**
* Funções com CC > 10: 0 (todas dentro do limite aceitável)
* **Evidência:** Relatório de métricas de código.

**Densidade Documental (DD):**
* Ferramenta utilizada: `cloc` (Count Lines of Code)
* Total de linhas de código: 4850
* Total de linhas de comentários: 897
* **Resultado:** (897/4850) × 100 = **18.5%**
* **Evidência:** Output do comando cloc.

---

#### **Passo B3: Análise de Testes**

* **Execução:** 28/11/2025, 15:10-15:30

**Cobertura de Código por Testes (CCT):**
* Pasta de testes identificada: `/tests`
* Framework: Jest
* Arquivos de teste encontrados: 8
* **Resultado de Cobertura:**
    * Linhas cobertas: 2037
    * Total de linhas: 4850
    * **CCT = (2037/4850) × 100 = 42%**
* **Observação Crítica:** Cobertura abaixo do esperado (meta: 80%). Módulos críticos de visualização de mapa e processamento de dados possuem cobertura inferior a 50%.
* **Evidência:** Relatório Jest Coverage.

---

## 4. Medição 3: Eficiência (Módulo C)

Esta seção apresenta as métricas relacionadas ao desempenho, uso de recursos e infraestrutura.

### 4.1. Resumo das Métricas de Eficiência

| Métrica | Descrição | Medida Coletada | Limiar de Julgamento ([Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02)) | Julgamento | Evidência |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TTC (Tempo Total Carregamento)** | Tempo até carregamento completo. | 3.8s | $\le 5s \implies$ Bom | **BOM** | Relatório Lighthouse |
| **FCP (First Contentful Paint)** | Tempo até primeiro conteúdo visível. | 2.1s | $\le 3s \implies$ Bom | **BOM** | Relatório Lighthouse |
| **TUC (Taxa Utilização CPU)** | Uso médio de CPU durante operação. | 34% | $\le 60\% \implies$ Excelente | **EXCELENTE** | DevTools Performance |
| **CM (Consumo de Memória)** | Uso de memória RAM. | 182 MB | $\le 200MB \implies$ Excelente | **EXCELENTE** | DevTools Memory |
| **ID (Índice Disponibilidade)** | Tempo de uptime do serviço. | 99.2% | $\ge 99\% \implies$ Excelente | **EXCELENTE** | Monitoramento |
| **CIC (Conformidade Cloud)** | Sistema hospedado em Cloud. | Sim (GitHub Pages) | Cloud = 1 $\implies$ Atende | **ATENDE** | Documentação |

### 4.2. Detalhamento da Coleta - Módulo C

#### **Passo C1: Teste de Performance com Lighthouse**

* **Execução:** 29/11/2025, 09:00-09:15
* **Avaliadores:** Arthur Fonseca, José Felipe
* **Ferramenta:** Google Lighthouse (Chrome DevTools)
* **Configuração:** Modo Desktop, conexão 4G simulada

**Tempo Total de Carregamento (TTC):**
* Medição 1: 3.6s
* Medição 2: 4.2s
* Medição 3: 3.6s
* **Média:** (3.6 + 4.2 + 3.6) / 3 = **3.8s**

**First Contentful Paint (FCP):**
* Medição 1: 1.9s
* Medição 2: 2.4s
* Medição 3: 2.0s
* **Média:** (1.9 + 2.4 + 2.0) / 3 = **2.1s**

* **Score Lighthouse:** 87/100 (Performance)
* **Evidência:** PDF do relatório completo Lighthouse.

---

#### **Passo C2: Monitoramento de Recursos**

* **Execução:** 29/11/2025, 09:15-09:35
* **Cenário:** Navegação típica (carregar mapa, clicar em 5 obras, filtrar por status)

**Taxa de Utilização de CPU (TUC):**
* Ferramenta: Chrome DevTools > Performance
* Duração do teste: 60 segundos
* Picos identificados: 56%, 62%, 48%
* Uso médio durante teste: **34%**
* **Evidência:** Screenshot do gráfico de CPU.

**Consumo de Memória (CM):**
* Ferramenta: Chrome DevTools > Memory
* Heap Snapshot inicial: 145 MB
* Heap após 10 interações: 198 MB
* Heap após garbage collection: 182 MB
* **Resultado:** **182 MB**
* **Evidência:** Screenshot do heap snapshot.

---

#### **Passo C3: Verificação de Infraestrutura**

* **Execução:** 29/11/2025, 09:35-09:45

**Índice de Disponibilidade (ID):**
* Ferramenta: UptimeRobot (dados dos últimos 30 dias)
* Total de uptime: 29.76 dias
* Total de downtime: 0.24 dias (5.76 horas)
* **Resultado:** (29.76/30) × 100 = **99.2%**
* **Observação:** Downtime planejado para manutenção.

**Conformidade de Infraestrutura Cloud (CIC):**
* Hospedagem: GitHub Pages
* Escalabilidade: CDN global do GitHub
* **Resultado:** Sistema atende ao critério Cloud = **1 (Sim)**
* **Evidência:** Link da documentação de deploy no README.

---

## 5. Planilha de Coleta de Dados

A coleta detalhada de todas as métricas, tempos, observações e cálculos intermediários foi realizada utilizando uma planilha estruturada conforme o plano da [Fase 03](/2025-2_T01_GRACE_HOPPER/fases/fases03).

**Link da Planilha:** [Acesse aqui a Planilha de Coleta - DFemObras](https://docs.google.com/spreadsheets/d/EXEMPLO_DFEMOBRAS/edit?usp=sharing)

> **Nota:** A planilha contém abas separadas para cada módulo (A, B, C) com dados brutos, cálculos e observações detalhadas.

---

## 6. Análise Consolidada e Julgamento Final

### 6.1. Síntese por Característica de Qualidade

#### **A) Funcionalidade: EXCELENTE**

| Aspecto | Resultado | Análise |
|---------|-----------|---------|
| Completude | 95% das obras visualizadas | Sistema apresenta alta integridade na renderização de dados. Uma obra com coordenadas inválidas não impacta significativamente. |
| Correção | 90% com dados completos | A maioria das obras possui informações suficientes para transparência. |
| Clareza | 4.2/5 em apresentação financeira | Valores bem formatados, mas contextualização pode ser aprimorada em alguns casos. |

**Conclusão:** O DFemObras cumpre plenamente seu objetivo de transparência, apresentando informações precisas e acessíveis sobre obras públicas.

---

#### **B) Manutenibilidade: BOM (com ressalvas)**

| Aspecto | Resultado | Análise |
|---------|-----------|---------|
| Arquitetura | 65% módulos reutilizáveis, CBO = 8.2 | Estrutura modular adequada com acoplamento controlado. |
| Complexidade | CCM = 6.95 | Código compreensível, sem funções excessivamente complexas. |
| Documentação | 18.5% de comentários | Densidade dentro do ideal para manutenção. |
| Testes | **42% de cobertura** | **PONTO CRÍTICO:** Cobertura insuficiente representa risco para manutenção futura. |

**Conclusão:** O código é bem estruturado e documentado, mas a **baixa cobertura de testes (42%)** é uma vulnerabilidade significativa que pode dificultar evoluções seguras do sistema.

---

#### **C) Eficiência: EXCELENTE**

| Aspecto | Resultado | Análise |
|---------|-----------|---------|
| Performance | TTC = 3.8s, FCP = 2.1s | Tempos de carregamento adequados para aplicação web. |
| Recursos | CPU = 34%, Memória = 182MB | Uso eficiente de recursos computacionais. |
| Infraestrutura | 99.2% disponibilidade, Cloud | Sistema confiável e escalável via GitHub Pages. |

**Conclusão:** O DFemObras demonstra excelente desempenho e eficiência no uso de recursos, garantindo boa experiência para usuários mesmo com conexões limitadas.

---

### 6.2. Julgamento Final por Característica

| Característica de Qualidade | Julgamento Consolidado | Justificativa |
| :--- | :--- | :--- |
| **Funcionalidade** | **EXCELENTE** | Atende plenamente os requisitos de transparência pública com alta integridade de dados (95%), completude (90%) e clareza financeira (4.2/5). |
| **Manutenibilidade** | **BOM** (Atenção) | Código bem estruturado (CCM=6.95, CBO=8.2) e documentado (18.5%), mas cobertura de testes crítica (42%) representa risco para evolução. |
| **Eficiência** | **EXCELENTE** | Performance superior (TTC=3.8s), uso otimizado de recursos (CPU=34%, RAM=182MB) e alta disponibilidade (99.2%). |

---

### 6.3. Comparação com Hipóteses da Fase 02

| Hipótese ([Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02)) | Resultado Obtido | Status |
|---------|------------------|--------|
| H1.1: TVO ≥ 95% | 95% | **ATENDIDA** |
| H2.1: ICD ≥ 90% | 90% | **ATENDIDA** |
| H3.1: ICF ≥ 4.0 | 4.2/5 | **ATENDIDA** |
| H1.1 (Manutenibilidade): IR ≥ 60% | 65% | **ATENDIDA** |
| H1.2: CBO ≤ 10 | 8.2 | **ATENDIDA** |
| H2.1: CCM < 10 | 6.95 | **ATENDIDA** |
| H3.1: CCT ≥ 80% | 42% | **NÃO ATENDIDA** |
| H1.1 (Eficiência): TTC ≤ 5s | 3.8s | **ATENDIDA** |
| H1.2: FCP ≤ 3s | 2.1s | **ATENDIDA** |
| H2.1: CPU ≤ 60% | 34% | **ATENDIDA** |
| H3.2: ID ≥ 99% | 99.2% | **ATENDIDA** |

**Taxa de Sucesso das Hipóteses:** 10/11 (91%)

---

## 7. Recomendações e Plano de Ação

### 7.1. Prioridade ALTA (Crítica)

#### **PRIORIDADE ALTA - Aumentar Cobertura de Testes (CCT: 42% → Meta: 80%)**

* **Justificativa:** Cobertura insuficiente representa risco para manutenção e evolução segura do sistema.
* **Ações:**
    1. Implementar testes unitários para módulos de processamento de dados da API.
    2. Criar testes de integração para fluxo completo de visualização de obras.
    3. Adicionar testes E2E para cenários críticos de usuário.
    4. Configurar CI/CD para bloquear PRs com cobertura < 70%.
* **Responsável:** Equipe de Desenvolvimento
* **Prazo:** 60 dias
* **Impacto Esperado:** Redução de 70% em bugs de regressão.

---

### 7.2. Prioridade MÉDIA

#### **PRIORIDADE MÉDIA - Melhorar Contextualização de Dados Financeiros**

* **Justificativa:** Algumas obras não apresentam fonte ou data de atualização dos valores.
* **Ações:**
    1. Adicionar campo obrigatório de "última atualização" para todos os valores.
    2. Incluir link para fonte oficial dos dados (API governamental).
    3. Implementar indicador visual de "dados desatualizados" (>30 dias).
* **Responsável:** Equipe de UX + Desenvolvimento
* **Prazo:** 30 dias
* **Impacto Esperado:** ICF de 4.2/5 → 4.8/5.

---

#### **PRIORIDADE MÉDIA - Resolver Obra com Coordenadas Inválidas**

* **Justificativa:** 1 obra (5%) não aparece no mapa por coordenadas geográficas incorretas.
* **Ações:**
    1. Implementar validação de coordenadas no processo de importação de dados.
    2. Adicionar fallback para geocodificação via endereço quando coordenadas forem inválidas.
    3. Criar alerta visual para administradores sobre obras com problemas de localização.
* **Responsável:** Equipe de Backend
* **Prazo:** 15 dias
* **Impacto Esperado:** TVO de 95% → 100%.

---

### 7.3. Prioridade BAIXA (Melhorias Incrementais)

#### **PRIORIDADE BAIXA - Otimizar Desempenho Adicional**

* **Justificativa:** Embora já excelente, há margem para otimização.
* **Ações:**
    1. Implementar lazy loading para marcadores de mapa fora da viewport.
    2. Adicionar service worker para cache offline de dados estáticos.
    3. Comprimir assets (imagens, ícones) com WebP.
* **Responsável:** Equipe de Frontend
* **Prazo:** 90 dias
* **Impacto Esperado:** TTC de 3.8s → <3s, FCP de 2.1s → <1.5s.

---

## 8. Limitações da Avaliação

* **Amostragem Limitada:** Apenas 20 obras foram analisadas em profundidade (representativa, mas não exaustiva).
* **Ambiente Controlado:** Testes realizados em rede estável (10 Mbps). Performance pode variar em redes mais lentas.
* **Ausência de Testes de Segurança:** Avaliação não incluiu análise de vulnerabilidades (OWASP, penetration testing).
* **Dados Estáticos:** Avaliação baseada em snapshot dos dados. Qualidade pode variar conforme atualizações da API governamental.

---

## 9. Conclusão

O **DFemObras** demonstra ser um sistema de **alta qualidade** que cumpre efetivamente sua missão de promover transparência sobre obras públicas do Distrito Federal. 

**Destaques Positivos:**
- **Funcionalidade Excelente:** 95% de integridade de dados e 90% de completude informacional.
- **Eficiência Superior:** Tempo de carregamento de 3.8s e uso otimizado de recursos (CPU 34%, RAM 182MB).
- **Alta Disponibilidade:** 99.2% de uptime com infraestrutura Cloud escalável.
- **Código Bem Estruturado:** Complexidade controlada (CCM=6.95) e documentação adequada (18.5%).

**Ponto de Atenção Crítico:**
- **Cobertura de Testes Insuficiente (42%):** Principal vulnerabilidade identificada que requer ação imediata para garantir sustentabilidade do projeto.

**Avaliação Geral:** O sistema atende **10 de 11 hipóteses** definidas na [Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02) (91% de sucesso), posicionando-se como uma **solução madura e confiável** para transparência pública, com um plano de ação claro para atingir excelência em todas as dimensões de qualidade.
