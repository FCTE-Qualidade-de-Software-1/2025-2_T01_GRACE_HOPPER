# Fase 02

# 1. Introdução

Nesta segunda fase do projeto, aplicamos o modelo GQM (Goal-Question-Metric) como metodologia estruturada para avaliar a qualidade do DFemObras. O foco desta avaliação recai sobre três pilares fundamentais: **Funcionalidade**, **Manutenibilidade** e **Eficiência**. 

A escolha dessas características não foi arbitrária. Consideramos os aspectos mais relevantes para um sistema de transparência de obras públicas:

* **Funcionalidade:** Em um contexto de transparência governamental, é imperativo que todas as informações sobre obras públicas sejam apresentadas de forma completa e acessível. O cidadão precisa visualizar dados precisos sobre localização, valores e status das obras.

* **Manutenibilidade:** Tratando-se de um projeto open source voltado para o bem público, a capacidade de evolução contínua é essencial. O código precisa ser acessível para que novos desenvolvedores possam contribuir sem barreiras técnicas excessivas.

* **Eficiência:** Em uma aplicação web que serve dados públicos, o desempenho não é apenas uma questão técnica, mas de acesso democrático. Tempos de resposta lentos podem inviabilizar o uso por cidadãos com conexões mais limitadas.

Nossa abordagem metodológica se fundamenta na norma ISO/IEC 25010:2011, reconhecida internacionalmente como referência para avaliação de qualidade de software. O modelo GQM nos permite transformar objetivos abstratos de qualidade em métricas concretas e mensuráveis.

## 1.1 Entendendo o Modelo GQM

O GQM (Goal-Question-Metric) é uma abordagem sistemática que estrutura a avaliação em três camadas hierárquicas:

1. **Goal (Objetivo):** Estabelece claramente o que queremos medir, definindo propósito, perspectiva e contexto da avaliação.
2. **Questions (Questões):** Decompõe cada objetivo em perguntas específicas que direcionam nossa investigação sobre aspectos mensuráveis.
3. **Metrics (Métricas):** Define indicadores quantitativos e qualitativos que, quando coletados, respondem às questões formuladas.

Esta estrutura hierárquica garante que toda métrica coletada tenha um propósito claro, evitando a coleta de dados desnecessários e assegurando que nossas conclusões sejam baseadas em evidências relevantes.

# 2. Objetivos da Avaliação

Esta avaliação visa estabelecer um diagnóstico preciso da qualidade do DFemObras através de métricas mensuráveis e análises qualitativas. Nossos objetivos específicos incluem:

- **Embasamento para decisões técnicas:** Prover dados confiáveis que subsidiem decisões sobre priorização de melhorias, refatorações e evolução do sistema;
- **Diagnóstico detalhado:** Mapear fortalezas e vulnerabilidades do sistema nas três características priorizadas, identificando gargalos e oportunidades;
- **Replicabilidade:** Documentar métodos de coleta e cálculo de forma suficientemente detalhada para permitir reavaliações futuras e comparações temporais;
- **Compromisso com transparência:** Assegurar que a plataforma cumpra sua missão de fornecer acesso claro e confiável a informações sobre obras públicas.

A combinação de métricas objetivas com avaliações qualitativas nos permite obter uma visão holística da qualidade, indo além de números para compreender o contexto e as implicações práticas dos resultados obtidos.

# 3. Abordagem Metodológica

Nossa estratégia de avaliação combina o rigor do modelo GQM com técnicas práticas de engenharia de software, criando um framework de análise que equilibra aspectos quantitativos e qualitativos.

## 3.1 Estratégias de Coleta de Dados

Implementamos múltiplas técnicas de coleta para garantir triangulação de dados e maior confiabilidade nos resultados:

- **Auditoria do repositório:** Exame sistemático da estrutura do projeto no GitHub, verificando presença de documentação (README, wikis, guias), configurações de CI/CD, organização de pastas e histórico de commits. Utilizamos exploração manual complementada por consultas à API do GitHub.

- **Análise de código estático:** Aplicação de ferramentas automatizadas (SonarQube, ESLint) para extração de métricas estruturais como complexidade ciclomática, acoplamento e duplicação de código. Os dados são agregados por módulo para análise comparativa.

- **Validação funcional:** Desenvolvimento e execução de cenários de teste focados nos fluxos críticos: renderização do mapa com marcadores de obras, navegação para detalhes, exibição de informações financeiras. Documentamos taxa de sucesso e tempo de execução de cada cenário.

- **Análise de desempenho:** Utilização do Chrome DevTools e Google Lighthouse para captura de métricas de performance em condições controladas: tempos de carregamento, First Contentful Paint (FCP), uso de recursos computacionais (CPU e memória). Realizamos medições em diferentes horários para identificar variações.

- **Perspectiva dos stakeholders:** Coleta de percepções através de questionários estruturados e entrevistas semi-estruturadas com desenvolvedores, gestores e potenciais usuários. Aplicamos checklists para avaliação heurística de usabilidade e clareza informacional.

## 3.2 Instrumental Utilizado

- **Chrome DevTools:** Análise de performance, monitoramento de recursos e debugging
- **Google Lighthouse:** Auditoria automatizada de qualidade web
- **GitHub (repositório e API):** Análise de histórico, estrutura e metadados do projeto
- **Ferramentas de análise estática:** Para extração de métricas de código
- **Planilhas estruturadas:** Consolidação, normalização e análise de métricas
- **Instrumentos de pesquisa:** Questionários e roteiros de entrevista padronizados

# 4. Objetivos de Medição GQM

## 4.1 Objetivo de Medição 1: Funcionalidade

<div align="center">
  <table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; width: 90%;">
    <tr style="background-color: #f0f0f0;">
      <th colspan="2" style="text-align: center; font-size: 1.1em;">
        <b>Objetivo de Medição: Funcionalidade do DFemObras</b>
      </th>
    </tr>
    <tr>
      <td style="width: 30%; vertical-align: top;"><b>Objeto de Análise:</b></td>
      <td>Sistema DFemObras - plataforma web de transparência de obras públicas do Distrito Federal</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Finalidade:</b></td>
      <td>Caracterizar a completude e adequação das funcionalidades oferecidas aos cidadãos</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Foco de Qualidade:</b></td>
      <td>Capacidade do sistema em entregar informações completas, precisas e acessíveis sobre obras públicas</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Perspectiva:</b></td>
      <td>Cidadãos usuários do portal e gestores públicos responsáveis pela transparência</td>
    </tr>
  </table>
</div>

<div align="center">
  <font size="3"><p><i>Tabela 1: Especificação do objetivo de medição para a característica Funcionalidade</i></p></font>
</div>

---

### Perguntas e Hipóteses de Medição

**Questão 1: Integridade na Visualização**
> O mapa interativo representa fielmente todas as obras disponíveis nos dados de origem?

* **Hipótese 1.1 (H1.1):** No mínimo 95% das obras cadastradas na fonte de dados são corretamente renderizadas como marcadores no mapa.
* **Hipótese 1.2 (H1.2):** Cada marcador apresenta consistência nas informações básicas (identificação e localização geográfica).

**Questão 2: Suficiência Informacional**
> Os detalhes apresentados sobre cada obra são completos e acessíveis?

* **Hipótese 2.1 (H2.1):** Ao menos 90% das obras exibem completude nos campos essenciais (investimento, localização, estado atual, descrição).
* **Hipótese 2.2 (H2.2):** O intervalo médio para acessar informações detalhadas de uma obra não excede 2 segundos.

**Questão 3: Transparência Financeira**
> Os valores financeiros das obras são apresentados de forma clara e contextualizada?

* **Hipótese 3.1 (H3.1):** Valores monetários seguem formatação padrão brasileira (R$, separadores adequados).
* **Hipótese 3.2 (H3.2):** Informações financeiras incluem contextualização essencial (origem dos dados, última atualização).

---

### Seleção das Métricas

**Questão 1: Integridade na Visualização**

* **Métrica 1.1: Taxa de Visualização de Obras (TVO)**
    * **Definição:** Proporção de obras da fonte de dados que são efetivamente visualizadas no mapa.
    * **Fórmula:** `TVO = (Obras exibidas no mapa / Total de obras na fonte) × 100`
    * **Método de coleta:** Comparar quantidade de registros na API com marcadores renderizados no mapa.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | TVO ≥ 95% | 85% ≤ TVO < 95% | 75% ≤ TVO < 85% | TVO < 75% |

    * **Propósito:** Verificar se há perda de informação entre a fonte de dados e a visualização.

**Questão 2: Suficiência Informacional**

* **Métrica 2.1: Índice de Completude de Dados (ICD)**
    * **Definição:** Percentual de obras que apresentam todos os campos obrigatórios preenchidos adequadamente.
    * **Fórmula:** `ICD = (Obras com dados completos / Total de obras) × 100`
    * **Método de coleta:** Auditoria manual e automatizada verificando presença de campos essenciais.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | ICD ≥ 95% | 85% ≤ ICD < 95% | 75% ≤ ICD < 85% | ICD < 75% |

    * **Propósito:** Assegurar que informações disponibilizadas são suficientes para transparência.

**Questão 3: Transparência Financeira**

* **Métrica 3.1: Índice de Clareza Financeira (ICF)**
    * **Definição:** Avaliação qualitativa sobre apresentação de valores monetários.
    * **Método de coleta:** Aplicação de checklist avaliando formatação, contextualização e legibilidade.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | Score 4-5 | Score 3 | Score 2 | Score 0-1 |

    * **Propósito:** Garantir apresentação compreensível e transparente de informações financeiras.

---

## 4.2 Objetivo de Medição 2: Manutenibilidade

<div align="center">
  <table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; width: 90%;">
    <tr style="background-color: #e8f4f8;">
      <th colspan="2" style="text-align: center; font-size: 1.1em;">
        <b>Objetivo de Medição: Manutenibilidade do DFemObras</b>
      </th>
    </tr>
    <tr>
      <td style="width: 30%; vertical-align: top;"><b>Objeto de Análise:</b></td>
      <td>Base de código-fonte, arquitetura e documentação técnica do projeto DFemObras</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Finalidade:</b></td>
      <td>Compreender o nível de facilidade para manutenção, evolução e colaboração no desenvolvimento</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Foco de Qualidade:</b></td>
      <td>Qualidade estrutural do código, modularidade, testabilidade e capacidade de colaboração open source</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Perspectiva:</b></td>
      <td>Desenvolvedores mantenedores atuais e potenciais colaboradores futuros do projeto open source</td>
    </tr>
  </table>
</div>

<div align="center">
  <font size="3"><p><i>Tabela 2: Especificação do objetivo de medição para a característica Manutenibilidade</i></p></font>
</div>

---

### Perguntas e Hipóteses de Medição

**Questão 1: Arquitetura e Reuso**
> A arquitetura do código favorece modularidade e reaproveitamento de componentes?

* **Hipótese 1.1 (H1.1):** No mínimo 60% dos módulos implementados são potencialmente reutilizáveis em diferentes contextos.
* **Hipótese 1.2 (H1.2):** O acoplamento médio entre componentes permanece em níveis aceitáveis (CBO ≤ 10).

**Questão 2: Inteligibilidade do Código**
> Qual o nível de dificuldade para compreender e navegar pelo código-fonte?

* **Hipótese 2.1 (H2.1):** A complexidade ciclomática média se mantém abaixo de 10, indicando funções compreensíveis.
* **Hipótese 2.2 (H2.2):** Densidade de comentários no código situa-se entre 15% e 25%.

**Questão 3: Suporte de Testes**
> Qual a extensão e qualidade da infraestrutura de testes automatizados?

* **Hipótese 3.1 (H3.1):** Módulos críticos apresentam cobertura de testes superior a 80%.
* **Hipótese 3.2 (H3.2):** Principais fluxos funcionais possuem testes automatizados correspondentes.

---

### Seleção das Métricas

**Questão 1: Arquitetura e Reuso**

* **Métrica 1.1: Índice de Reusabilidade (IR)**
    * **Definição:** Proporção de módulos com potencial de reutilização em outros contextos.
    * **Fórmula:** `IR = (Módulos reutilizáveis / Total de módulos) × 100`
    * **Método de coleta:** Análise de dependências e histórico de reuso de componentes.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | IR ≥ 70% | 60% ≤ IR < 70% | 50% ≤ IR < 60% | IR < 50% |

    * **Propósito:** Avaliar capacidade de evolução através de reaproveitamento.

* **Métrica 1.2: Acoplamento entre Objetos (CBO - Coupling Between Objects)**
    * **Definição:** Média de dependências entre classes do sistema.
    * **Método de coleta:** Análise estática automatizada do código.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | CBO ≤ 5 | 5 < CBO ≤ 10 | 10 < CBO ≤ 15 | CBO > 15 |

    * **Propósito:** Medir interdependência entre componentes.

**Questão 2: Inteligibilidade do Código**

* **Métrica 2.1: Complexidade Ciclomática Média (CCM)**
    * **Definição:** Quantidade média de caminhos linearmente independentes no código.
    * **Fórmula:** `CC = E - N + 2P` onde E=arestas, N=nós, P=componentes conectados
    * **Método de coleta:** Análise estática por função, agregando média.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | CCM ≤ 5 | 5 < CCM ≤ 10 | 10 < CCM ≤ 15 | CCM > 15 |

    * **Propósito:** Identificar código difícil de compreender e testar.

* **Métrica 2.2: Densidade Documental (DD)**
    * **Definição:** Proporção de linhas dedicadas a comentários.
    * **Fórmula:** `DD = (Linhas de comentário / Total de linhas) × 100`
    * **Método de coleta:** Análise estática do código-fonte.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | 20% ≤ DD ≤ 25% | 15% ≤ DD < 20% | 10% ≤ DD < 15% | DD < 10% ou DD > 30% |

    * **Propósito:** Verificar se o código possui documentação inline adequada.

**Questão 3: Suporte de Testes**

* **Métrica 3.1: Cobertura de Código por Testes (CCT)**
    * **Definição:** Percentual de linhas executadas durante testes automatizados.
    * **Fórmula:** `CCT = (Linhas testadas / Total de linhas executáveis) × 100`
    * **Método de coleta:** Relatórios de coverage tools.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | CCT ≥ 80% | 70% ≤ CCT < 80% | 60% ≤ CCT < 70% | CCT < 60% |

    * **Propósito:** Quantificar extensão da rede de segurança de testes.

---

## 4.3 Objetivo de Medição 3: Eficiência

<div align="center">
  <table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; width: 90%;">
    <tr style="background-color: #f0f8e8;">
      <th colspan="2" style="text-align: center; font-size: 1.1em;">
        <b>Objetivo de Medição: Eficiência do DFemObras</b>
      </th>
    </tr>
    <tr>
      <td style="width: 30%; vertical-align: top;"><b>Objeto de Análise:</b></td>
      <td>Comportamento do sistema em tempo de execução, incluindo responsividade e consumo de recursos</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Finalidade:</b></td>
      <td>Mensurar o desempenho e a eficiência no uso de recursos computacionais durante operação</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Foco de Qualidade:</b></td>
      <td>Tempos de resposta, velocidade de renderização, consumo de CPU/memória e disponibilidade do serviço</td>
    </tr>
    <tr>
      <td style="vertical-align: top;"><b>Perspectiva:</b></td>
      <td>Usuários finais navegando via web browsers e equipe técnica responsável pela infraestrutura</td>
    </tr>
  </table>
</div>

<div align="center">
  <font size="3"><p><i>Tabela 3: Especificação do objetivo de medição para a característica Eficiência</i></p></font>
</div>

---

### Perguntas e Hipóteses de Medição

**Questão 1: Responsividade do Sistema**
> Os tempos de resposta atendem às expectativas de uso em aplicações web?

* **Hipótese 1.1 (H1.1):** Tempo de carregamento completo da página inicial não ultrapassa 5 segundos.
* **Hipótese 1.2 (H1.2):** Primeiro conteúdo visível (FCP) aparece em menos de 3 segundos.

**Questão 2: Consumo de Recursos Computacionais**
> O sistema demonstra eficiência no uso de recursos durante operação normal?

* **Hipótese 2.1 (H2.1):** Utilização de CPU em cenários típicos permanece abaixo de 60%.
* **Hipótese 2.2 (H2.2):** Consumo de memória RAM não excede 200MB em uso padrão.

**Questão 3: Infraestrutura e Confiabilidade**
> A infraestrutura de hospedagem garante disponibilidade e escalabilidade?

* **Hipótese 3.1 (H3.1):** Sistema opera em plataforma Cloud com capacidade de escalonamento.
* **Hipótese 3.2 (H3.2):** Disponibilidade do serviço supera 99% do tempo total.

---

### Seleção das Métricas

**Questão 1: Responsividade do Sistema**

* **Métrica 1.1: Tempo Total de Carregamento (TTC)**
    * **Definição:** Intervalo médio até carregamento completo da interface inicial.
    * **Fórmula:** `TTC = (Σ tempos individuais de carregamento) / Quantidade de medições`
    * **Método de coleta:** Múltiplas medições via DevTools/Lighthouse em condições controladas.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | TTC ≤ 3s | 3s < TTC ≤ 5s | 5s < TTC ≤ 7s | TTC > 7s |

    * **Propósito:** Medir experiência percebida de responsividade.

* **Métrica 1.2: First Contentful Paint (FCP)**
    * **Definição:** Tempo até renderização do primeiro elemento visual.
    * **Método de coleta:** Captura direta através de Lighthouse/Performance API.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | FCP ≤ 2s | 2s < FCP ≤ 3s | 3s < FCP ≤ 4s | FCP > 4s |

    * **Propósito:** Avaliar percepção inicial de rapidez.

**Questão 2: Consumo de Recursos Computacionais**

* **Métrica 2.1: Taxa de Utilização de CPU (TUC)**
    * **Definição:** Percentual médio de processador consumido durante operação.
    * **Fórmula:** `TUC = (Tempo de CPU ativo / Tempo total de observação) × 100`
    * **Método de coleta:** Monitoramento através de DevTools durante cenários de uso.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | TUC ≤ 40% | 40% < TUC ≤ 60% | 60% < TUC ≤ 80% | TUC > 80% |

    * **Propósito:** Avaliar eficiência no processamento.

* **Métrica 2.2: Consumo de Memória (CM)**
    * **Definição:** Quantidade média de RAM utilizada durante operação típica.
    * **Método de coleta:** Monitoramento via DevTools/Task Manager durante uso padrão.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | CM ≤ 150MB | 150MB < CM ≤ 200MB | 200MB < CM ≤ 300MB | CM > 300MB |

    * **Propósito:** Verificar eficiência no gerenciamento de memória.

**Questão 3: Infraestrutura e Confiabilidade**

* **Métrica 3.1: Índice de Disponibilidade (ID)**
    * **Definição:** Percentual de tempo em que o sistema permanece operacional.
    * **Fórmula:** `ID = (Tempo operacional / Tempo total observado) × 100`
    * **Método de coleta:** Análise de logs de monitoramento e uptime.
    * **Critérios de avaliação:**

      | Ótimo | Bom | Médio | Insatisfatório |
      |:---|:---|:---|:---|
      | ID ≥ 99.5% | 99% ≤ ID < 99.5% | 98% ≤ ID < 99% | ID < 98% |

    * **Propósito:** Medir confiabilidade da disponibilidade.

* **Métrica 3.2: Conformidade de Infraestrutura Cloud (CIC)**
    * **Definição:** Verificação binária de hospedagem em plataforma escalável.
    * **Método de coleta:** Análise documental e técnica da infraestrutura.
    * **Critérios de avaliação:**

      | Conforme | Não conforme |
      |:---|:---|
      | Sim | Não |

    * **Propósito:** Confirmar adequação da infraestrutura para escalabilidade.



# 5. Interdependências e Análise Integrada

A qualidade de software não é um conceito unidimensional. As características definidas pela ISO 25010 - incluindo Funcionalidade, Manutenibilidade e Eficiência - formam uma rede de interdependências onde melhorias ou deficiências em uma área podem impactar significativamente outras.

## 5.1 Conexões Identificadas entre Características

### Conexão 1: Complexidade de Código ↔ Performance

**Relação identificada:** Existe uma correlação direta entre a complexidade ciclomática do código (aspecto de Manutenibilidade) e o desempenho em tempo de execução (Eficiência).

**Justificativa técnica:** Funções com alta complexidade ciclomática apresentam múltiplos caminhos de execução e decisões condicionais, resultando em maior consumo de ciclos de CPU e potencial aumento no tempo de resposta.

**Impacto prático:** A simplificação e refatoração de código complexo não apenas beneficia desenvolvedores que precisam manter o sistema, mas também pode resultar em melhorias mensuráveis de performance para os usuários finais.

### Conexão 2: Cobertura de Testes ↔ Estabilidade Funcional

**Relação identificada:** A extensão dos testes automatizados (Manutenibilidade) influencia diretamente a confiabilidade das funcionalidades disponibilizadas (Funcionalidade).

**Justificativa técnica:** Sistemas com alta cobertura de testes automatizados possuem redes de segurança que detectam regressões quando novas funcionalidades são adicionadas ou bugs são corrigidos.

**Impacto prático:** Investir em testes não é apenas boa prática de engenharia - é garantia de que funcionalidades críticas como visualização de obras e exibição de custos permanecerão operacionais durante a evolução do sistema.

### Conexão 3: Performance ↔ Usabilidade Funcional

**Relação identificada:** Métricas de tempo de resposta (Eficiência) determinam se as funcionalidades implementadas são de fato utilizáveis na prática.

**Justificativa técnica:** Funcionalidades tecnicamente corretas mas com performance inadequada resultam em experiência de usuário comprometida, especialmente em conexões mais lentas.

**Impacto prático:** Um sistema que exibe corretamente 100% das obras mas leva 30 segundos para carregar é funcionalmente inadequado. Eficiência e Funcionalidade devem ser avaliadas conjuntamente para determinar a viabilidade real do sistema.

# 6. Sistema de Avaliação e Classificação

Estabelecemos uma escala de avaliação que traduz resultados numéricos em classificações qualitativas, facilitando a interpretação e comunicação dos resultados:

| Intervalo de Pontuação | Classificação  | Significado                                                                      |
| ---------------------- | -------------- | -------------------------------------------------------------------------------- |
| **95% a 100%**         | Ótimo          | Desempenho excepcional. Supera padrões esperados de qualidade.                  |
| **85% a 94%**          | Bom            | Desempenho satisfatório. Atende requisitos com oportunidades pontuais de ajuste. |
| **75% a 84%**          | Médio          | Desempenho aceitável. Funciona mas requer atenção e melhorias planejadas.       |
| **Abaixo de 75%**      | Insatisfatório | Desempenho inadequado. Não atinge padrões mínimos, demanda ação imediata.       |

## 6.1 Contextualizando Classificações por Característica

### Interpretação para Funcionalidade
- **Ótimo (95-100%):** Todas as funcionalidades essenciais operando conforme especificado, com excelente completude de dados
- **Bom (85-94%):** Funcionalidades principais confiáveis, com deficiências menores em aspectos complementares
- **Médio (75-84%):** Funcionalidades base operacionais, porém com lacunas na completude ou clareza de apresentação
- **Insatisfatório (<75%):** Funcionalidades críticas ausentes, incorretas ou com apresentação comprometida

### Interpretação para Manutenibilidade
- **Ótimo (95-100%):** Arquitetura limpa, código bem documentado, testes abrangentes - ideal para evolução
- **Bom (85-94%):** Estrutura sólida com pontos específicos necessitando refatoração
- **Médio (75-84%):** Código operacional mas apresentando complexidade elevada e documentação inconsistente
- **Insatisfatório (<75%):** Código dificulta manutenção significativamente, com alta complexidade e testes insuficientes

### Interpretação para Eficiência
- **Ótimo (95-100%):** Performance excelente, proporcionando experiência fluida mesmo em condições adversas
- **Bom (85-94%):** Performance satisfatória na maioria dos casos de uso
- **Médio (75-84%):** Performance utilizável, mas com lentidões perceptíveis em cenários específicos
- **Insatisfatório (<75%):** Performance comprometida afetando significativamente a experiência de uso

# 7. Considerações Finais

Esta segunda fase estabeleceu os alicerces metodológicos para uma avaliação sistemática e fundamentada da qualidade do DFemObras. Através da aplicação estruturada do modelo GQM, transformamos objetivos abstratos de qualidade em um plano de medição executável e replicável.

## Síntese dos Resultados da Fase

O trabalho desenvolvido nesta etapa produziu:

- **Três objetivos de medição** claramente definidos, cada um focado em uma característica crítica do sistema
- **Nove questões investigativas** que operacionalizam os objetivos em aspectos específicos e mensuráveis
- **Dezesseis métricas formalizadas** contemplando medições quantitativas (com fórmulas explícitas) e avaliações qualitativas (com critérios de julgamento estruturados)

## Valor Agregado da Abordagem

A metodologia adotada oferece vantagens significativas:

**Rastreabilidade:** Cada métrica está explicitamente vinculada a uma questão específica, que por sua vez relaciona-se a um objetivo claro. Esta cadeia de rastreabilidade garante que não coletamos dados sem propósito.

**Replicabilidade:** A documentação detalhada de fórmulas, métodos de coleta e ferramentas permite que avaliações futuras sejam conduzidas de forma consistente, possibilitando análises longitudinais.

**Visão holística:** A identificação de interdependências entre características revela que qualidade é multidimensional - intervenções em uma área frequentemente beneficiam outras.

## Próximas Etapas

Os passos subsequentes envolvem:
1. Execução do plano de medição conforme especificado
2. Coleta sistemática de dados quantitativos e qualitativos
3. Análise e interpretação dos resultados à luz dos critérios estabelecidos
4. Elaboração de recomendações priorizadas para melhoria do DFemObras

Esta fase preparatória é fundamental para garantir que as conclusões e recomendações das fases seguintes sejam rigorosamente fundamentadas em evidências objetivas e metodologicamente sólidas.


---

## Bibliografia

> BASILI, Victor R. et al. Linking Software Development and Business Strategy through Measurement. IEEE Computer, v. 43, n. 4, p. 57-65, abr. 2010.

> BASILI, Victor R.; CALDIERA, Gianluigi; ROMBACH, H. Dieter. Goal Question Metric Paradigm. In: MARCINIAK, John J. (Ed.). Encyclopedia of Software Engineering. New York: John Wiley & Sons, 1994. p. 528-532.

> FENTON, Norman E.; PFLEEGER, Shari Lawrence. Software Metrics: A Rigorous and Practical Approach. 3. ed. Boca Raton: CRC Press, 2014.

> ISO/IEC 25010:2011. Systems and software engineering – Systems and software Quality Requirements and Evaluation (SQuaRE) – System and software quality models. Geneva: International Organization for Standardization, 2011.

> PRESSMAN, Roger S. Engenharia de Software – Uma Abordagem Profissional. 8ª edição. McGraw-Hill, 2016.

> SOMMERVILLE, Ian. Software Engineering. 9th Edition. Pearson, 2011.

> SOLINGEN, Rini van; BERGHOUT, Egon. The Goal/Question/Metric Method: A Practical Guide for Quality Improvement of Software Development. London: McGraw-Hill, 1999.

> UNB-MDS (2025). DFemObras-2025.1 Project Repository. Universidade de Brasília, Campus Gama.

> ONU (2025). Objetivos de Desenvolvimento Sustentável no Brasil. Disponível em: [https://brasil.un.org/pt-br/sdgs](https://brasil.un.org/pt-br/sdgs). Acesso em: 24/10/2025.

---

### Histórico de Versões

| Versão | Data       | Autor(es)                          | Descrição das Alterações                                                     |
|--------|------------|------------------------------------|------------------------------------------------------------------------------|
| 1.0    | 10/10/2025 | Nicollas Gabriel                   | Criação do documento com estrutura inicial.                                  |
| 1.1    | 11/10/2025 | Ana Luiza Borba / Equipe           | Inclusão de GQM, métricas e critérios de avaliação.                          |
| 1.2    | 19/10/2025 | Ana Luiza Borba                           | Revisão do texto, formatação e inclusão de fórmulas de métricas.             |
| 1.3    | 24/10/2025 | Ana Luiza Borba e Nicollas Gabriel | Ajustes finais, histórico de versões        |

---
