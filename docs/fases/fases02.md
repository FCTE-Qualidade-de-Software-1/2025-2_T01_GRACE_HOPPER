# Fase 02

# 1. Introdução
Esta fase tem como finalidade aplicar o modelo GQM (Goal–Question–Metric) para avaliar a qualidade do sistema DFemObras, com foco nas características de Funcionalidade, Manutenibilidade e Eficiência. A avaliação prioriza dados quantitativos mensuráveis, complementados por avaliações qualitativas obtidas junto a stakeholders (gestores, usuários finais e desenvolvedores), de modo a prover uma visão abrangente da qualidade do produto de software.
A avaliação segue as referências da norma ISO/IEC 25010:2011, que define modelos e características de qualidade de software, e tem como objetivo produzir resultados replicáveis, justificáveis por fórmulas e métodos conhecidos, e úteis para subsidiar decisões de manutenção e evolução do projeto.

# 2. Objetivo
O objetivo desta avaliação é quantificar a qualidade do DFemObras por meio de métricas objetivas, devidamente definidas por fórmulas matemáticas quando aplicável, e contextualizadas por evidências qualitativas. Espera-se:
- Fornecer dados confiáveis que embasem recomendações de melhoria e priorização de atividades de manutenção;
- Identificar pontos fortes e fracos do sistema, aliados à Matriz SWOT para ampliar a perspectiva estratégica;
- Possibilitar que futuras avaliações sejam reproduzíveis, por meio da descrição dos métodos de coleta e cálculo das métricas.
A Matriz SWOT (Forças, Fraquezas, Oportunidades e Ameaças) é utilizada como complemento estratégico para situar os resultados das métricas em relação a fatores internos e externos.

| Fator                             | Tipo    | Descrição                                                                                                                                    |
| --------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Forças**            | Interno | Pontos fortes do sistema — aquilo que funciona bem, diferencia o projeto, ou está acima da média.                                            |
| **Fraquezas**        | Interno | Pontos fracos — aspectos internos que precisam ser melhorados, como documentação ruim, baixo desempenho, etc.                                |
| **Oportunidades** | Externo | Aspectos externos que podem beneficiar o projeto — por exemplo, políticas públicas de transparência, apoio institucional, tecnologias novas. |
| **Ameaças**             | Externo | Fatores externos que podem prejudicar o projeto — como falta de manutenção, descontinuidade, problemas de API, ou abandono pelos usuários.   |


# 3. Metodologia

A avaliação foi conduzida segundo o modelo GQM (Goal–Question–Metric), complementado por práticas de engenharia de software para medição e inspeção. Abaixo detalho cada etapa metodológica e as técnicas utilizadas.
### 3.1 Modelo GQM — visão operacional
- Goal (Meta): _definição_ clara dos objetivos de medição, alinhados às características de qualidade (Funcionalidade, Manutenibilidade, Eficiência).
- Question (Questão): desdobramento da meta em _perguntas_ que indicam o tipo de informação necessária para julgar o cumprimento da meta. As questões orientam quais aspectos devem ser medidos.
- Metric (Métrica): definição das medidas quantitativas (fórmulas, unidades) e qualitativas (escalas, checklists) que respondem às questões. Para cada métrica descreve-se método de coleta, ferramenta(s) e frequência de medição.
#### 3.2 Procedimentos de coleta de dados
- Inspeção do repositório: verificação de estrutura de pastas, existência de README, arquivos de documentação, presença de CI/CD e testes automatizados. Ferramentas: exploração manual do GitHub, leitura de arquivos e logs de build.
- Análise estática de código: execução de ferramentas que calculam métricas de complexidade (por exemplo, ferramentas tipo SonarQube, ESLint com plugins, ou utilitários que estimam complexidade ciclomática). Resultado: métricas por arquivo/módulo.
- Execução de testes funcionais: criação e/ou execução de casos de teste para fluxos críticos (exibição de mapa, detalhamento de obra, exibição de custos). Registro de sucesso/falha e tempo de execução.
- Medições de desempenho: uso de ferramentas de browser (DevTools) e auditoria (Lighthouse) para obter tempo de resposta, tempo até o primeiro render e uso de memória/CPU em cenários típicos de navegação. Quando possível, coleta de métricas em múltiplos navegadores e em dispositivos de referência (desktop e mobile).
- Coleta qualitativa: aplicação de questionários breves ou entrevistas com stakeholders para avaliar usabilidade, clareza da informação e percepção sobre documentação e manutenção. Utilização de um checklist padronizado para avaliar clareza/formatação de custos e completude dos detalhamentos.
### 3.3 Ferramentas e materiais
- Ferramentas de inspeção: navegador com DevTools.
- Repositório GitHub do projeto (inspeção de commits, branches e tags).
- Planilhas para consolidação de resultados e cálculos das métricas.
- Questionário padronizado para stakeholders.

# 4. GQM
## 4.1 Goal
#### Manutenibilidade
Avaliar se o DFemObras foi desenvolvido com boas práticas de engenharia de software, possibilitando fácil manutenção, evolução e reutilização do código, bem como a existência de documentação técnica e testes automatizados.
#### Funcionalidade
Avaliar se o DFemObras entrega todas as funcionalidades esperadas, apresentando corretamente as informações sobre as obras públicas (visualização, detalhamento, custos) e garantindo uma experiência consistente entre todos os stakeholders.
#### Eficiencia
Avaliar o desempenho do sistema quanto ao tempo de resposta, uso de recursos e infraestrutura de hospedagem, considerando o ambiente de execução Web e o acesso simultâneo de usuários.
## 4.2 Questions
#### Manutenibilidade
1. O código do sistema é modular e segue boas práticas de reutilização de componentes?
2. O projeto possui documentação técnica detalhada que facilita a manutenção e evolução do sistema?
3. Existem testes automatizados que asseguram a confiabilidade das principais funcionalidades?
4. O uso de Inteligência Artificial é controlado, sendo aplicado apenas quando necessário, sem comprometer a manutenção do sistema?
5. A arquitetura está bem definida e documentada, facilitando futuras expansões?
#### Funcionalidade
1. Todas as obras são exibidas corretamente no mapa interativo?
2. As informações detalhadas de cada obra estão completas e acessíveis ao usuário?
3. Os custos das obras estão sendo exibidos de forma clara e compreensível?
4. Todos os stakeholders (usuário final, desenvolvedores e gestores) têm uma experiência de uso consistente e sem falhas?
5. O sistema mantém sua característica Open Source, permitindo livre acesso e contribuição?
#### Eficiencia
1. O tempo médio de resposta do sistema é inferior a 5 segundos para o carregamento das informações?
2. O sistema está hospedado em ambiente Cloud, garantindo escalabilidade e estabilidade?
3. O desempenho permanece adequado durante o consumo das APIs externas e a renderização de mapas?
## 4.3 Metric
#### Manutenibilidade
| Métrica                       | Fórmula                                                                   | Método de coleta                                                                   | Interpretação / Observações                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Complexidade Ciclomática (CC) | `CC = E - N + 2P` (E = arestas, N = nós, P = componentes conectados)      | Ferramenta de análise estática; calcular por função/módulo e obter média ponderada | Mede a complexidade lógica; valores elevados implicam maior esforço de entendimento e teste. Recomenda-se CC ≤ 10 por função para facilitar manutenção. |
| Densidade de Comentários (DC) | `DC = (Nº de linhas de comentários / Nº total de linhas de código) × 100` | Contagem por análise estática                                                      | Indica quanto o código está documentado inline; valores aceitáveis típicos 15%–25%, mas deve ser interpretado junto com qualidade dos comentários.      |
| Cobertura de Testes (CT)      | `CT = (Nº de linhas/testadas / Nº total de linhas) × 100`                 | Relatórios de testes automatizados (coverage)                                      | Mede a extensão dos testes automatizados. Meta recomendada: ≥ 80% em áreas críticas; cobertura baixa indica risco de regressão.                         |
| Reusabilidade (R)             | `R = (Nº de módulos reutilizados / Nº total de módulos) × 100`            | Inspeção do código e histórico de uso de componentes                               | Mede capacidade de reaproveitamento; maior valor indica arquitetura mais modular e componentes genéricos.                                               |
| Documentação técnica (DT)     | Escala qualitativa 1–5 (avaliada por checklist)                           | Inspeção manual (presença de README, guias, diagramas)                             | 1 = inexistente; 5 = completa e atualizada. A documentação é crucial para passagem de conhecimento.                                                     |


#### Funcionalidade
| Métrica                                     | Fórmula                                                                                     | Método de coleta                                                          | Interpretação / Observações                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Taxa de Funcionalidades Implementadas (TFI) | `TFI = (Funcionalidades implementadas / Funcionalidades planejadas) × 100`                  | Comparação entre backlog/requisitos e implementação atual                 | Indica grau de completude do sistema frente ao escopo esperado.                                               |
| Taxa de Sucesso de Casos de Teste (TS)      | `TS = (Casos de teste bem-sucedidos / Total de casos de teste) × 100`                       | Execução de suíte de testes funcionais/manual                             | Mede conformidade funcional; meta indicativa ≥ 95% em critérios críticos.                                     |
| Taxa de Visualização das Obras (TVO)        | `TVO = (Nº de obras exibidas corretamente / Nº total de obras esperadas) × 100`             | Testes funcionais com cruzamento de dados da fonte (API)                  | Mede completude específica da exibição geográfica; valores baixos indicam falhas na ingestão ou renderização. |
| Completude do Detalhamento (CD)             | `CD = (Nº de obras com todos os campos obrigatórios preenchidos / Nº total de obras) × 100` | Inspeção dos registros exibidos                                           | Avalia se cada obra apresenta os campos essenciais (valor, local, status).                                    |
| Clareza na exibição de custos (CEC)         | Escala 1–5 via checklist heurístico                                                         | Avaliação heurística de interface (formatação, referências, legibilidade) | Mede se valores são apresentados com contextualização (moeda, fonte, data).                                   |

#### Eficiencia
| Métrica                           | Fórmula                                                          | Método de coleta                                     | Interpretação / Observações                                                                                                                                   |
| --------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tempo Médio de Resposta (TR)      | `TR = (Σ tempo de resposta das requisições) / Nº de requisições` | Medições via DevTools/Lighthouse em cenários típicos | Mede tempo percebido; meta operacional ≤ 5 s para carregamento de dados críticos. Recomenda-se medições em múltiplos horários para capturar variação de rede. |
| Tempo até Primeiro Conteúdo (FCP) | Medição direta via Lighthouse/DevTools                           | Ferramenta de auditoria                              | Indica rapidez de render inicial; relevante para percepção de desempenho.                                                                                     |
| Uso de CPU (Ucpu)                 | `Ucpu = (Tempo de CPU usado / Tempo total de execução) × 100`    | Monitoramento durante execução de cenários           | Mede carga de processamento; valores sustentados elevados indicam necessidade de otimização.                                                                  |
| Uso de Memória (Umem)             | `Umem = (Memória usada / Memória total disponível) × 100`        | Monitoramento no navegador/servidor                  | Mede eficiência no uso de memória; picos altos podem causar instabilidade em ambientes com recursos limitados.                                                |
| Taxa de Disponibilidade (TD)      | `TD = (Tempo disponível / Tempo total) × 100`                    | Logs de implantação / monitoramento da hospedagem    | Mede uptime; para serviços públicos recomenda-se meta ≥ 99% (SLA).                                                                                            |
| Hospedagem em Cloud (HC)          | Verificação Sim/Não e documentação                               | Consulta técnica/documentação                        | Confirma se infraestrutura em nuvem está configurada para escalabilidade e redundância.                                                                       |

# 5. Critérios

A interpretação dos resultados seguirá a seguinte escala de qualidade:

- Visualização das obras  
- Detalhamento das obras  
- Custo das obras  
- Experiência dos stakeholders  
- Reutilização do código  
- Uso de Inteligência Artificial  
- Open Source  
- Testes automatizados  
- Documentação detalhada  
- Tempo de resposta  
- Uso de Cloud  
- Arquitetura definida  


| Faixa de Pontuação | Avaliação      |
| ------------------ | -------------- |
| **95% a 100%**     | Ótimo          |
| **85% a 95%**      | Bom            |
| **75% a 85%**      | Médio          |
| **Abaixo de 75%**  | Insatisfatório |


# 6. Conclusão

A aplicação do modelo GQM, apoiada por análises estáticas, testes funcionais, medições de desempenho e coleta de percepções de stakeholders, permite uma avaliação robusta e objetiva da qualidade do DFemObras. A metodologia adotada garante que cada afirmação sobre a qualidade do sistema esteja vinculada a uma métrica mensurável ou a uma avaliação documentada, o que aumenta a credibilidade das recomendações.

### Histórico de Versões

| Versão | Data       | Autor(es)                  | Descrição das Alterações                                    |
|--------|------------|---------------------------|------------------------------------------------------------|
| 1.0    | 10/10/2025 | Nicolas                | Criação do documento com estrutura inicial.               |
| 1.1    | 12/10/2025 | Ana Luiza Borba / Equipe  | Inclusão de GQM, métricas e critérios de avaliação.       |
| 1.2    | 14/10/2025 | Ana Luiza Borba / Equipe  | Revisão do texto, formatação e inclusão de fórmulas de métricas. |
| 1.3    | 14/10/2025 | Ana Luiza Borba           | Ajustes finais, histórico de versões, referências e declaração de uso de IA. |

---

### Referências

1. **ISO/IEC 25010:2011**. *Systems and software engineering – Systems and software Quality Requirements and Evaluation (SQuaRE) – System and software quality models*.  
2. UNB-MDS (2025). *DFemObras-2025.1 Project Repository*. Universidade de Brasília, Campus Gama.  
3. ONU (2025). *Objetivos de Desenvolvimento Sustentável no Brasil*. Disponível em: [https://brasil.un.org/pt-br/sdgs](https://brasil.un.org/pt-br/sdgs)  
4. Pressman, R. S. (2016). *Engenharia de Software – Uma Abordagem Profissional*. 8ª edição, McGraw-Hill.  
5. Sommerville, I. (2011). *Software Engineering*, 9th Edition. Pearson.  

---

### Declaração de Uso de Inteligência Artificial

Este documento foi estruturado, revisado e aprimorado com o apoio de ferramentas de inteligência artificial para correção gramatical, revisão de estilo, padronização e clareza de texto. Todas as informações técnicas, cálculos, tabelas e análises foram elaboradas pelo(s) autor(es) humanos com base nos dados do sistema **DFemObras-2025.1**. O uso da IA teve caráter auxiliar, não influenciando o conteúdo técnico nem as decisões metodológicas.
