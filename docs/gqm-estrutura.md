---
title: Estrutura do GQM — DFemObras
---

# Estrutura do GQM — DFemObras

Abaixo está a estrutura GQM aplicada ao **DFemObras**, com foco em **Funcionalidade**, **Manutenibilidade** e **Eficiência**, alinhada à ISO/IEC 25010:2011.

## 1) Goal (Metas)

### 1.1 Manutenibilidade
Avaliar se o DFemObras foi desenvolvido com boas práticas de engenharia, possibilitando manutenção, evolução e reutilização do código, com documentação técnica e testes automatizados.

### 1.2 Funcionalidade
Avaliar se o DFemObras entrega as funcionalidades esperadas (visualização no mapa, detalhamento, custos) com experiência consistente entre stakeholders.

### 1.3 Eficiência
Avaliar o desempenho (tempo de resposta, consumo de recursos) e a adequação da infraestrutura (cloud, disponibilidade) sob uso real.

---

## 2) Questions (Questões)

### 2.1 Manutenibilidade
- Q1: O código é modular e favorece a reutilização de componentes?
- Q2: Existe documentação técnica suficiente e atualizada?
- Q3: Há testes automatizados para as funcionalidades críticas?
- Q4: O uso de IA é criterioso e não compromete a manutenção?
- Q5: A arquitetura está clara e documentada para futuras expansões?

### 2.2 Funcionalidade
- Q6: Todas as obras são exibidas corretamente no mapa interativo?
- Q7: O detalhamento de cada obra está completo e acessível?
- Q8: Os custos das obras são apresentados de forma clara/compreensível?
- Q9: Stakeholders têm experiência consistente e sem falhas?
- Q10: O projeto mantém caráter Open Source (acesso/contribuição)?

### 2.3 Eficiência
- Q11: O tempo médio de resposta é ≤ 5s para dados críticos?
- Q12: A hospedagem é em ambiente Cloud, com escalabilidade?
- Q13: O desempenho permanece adequado consumindo APIs e renderizando mapas?

---

## 3) Metrics (Métricas)

> As fórmulas são apresentadas quando aplicável e os métodos de coleta indicam ferramentas e práticas.

### 3.1 Manutenibilidade

| Métrica | Fórmula | Método de Coleta | Interpretação / Observações |
|---|---|---|---|
| Complexidade Ciclomática (CC) | **CC = E − N + 2P** | Análise estática por função/módulo | Maior CC ⇒ mais esforço de entendimento e teste. Recomendação: **CC ≤ 10** por função. |
| Densidade de Comentários (DC) | **DC = (LOC_coment / LOC_total) × 100** | Contagem automática | 15%–25% típico; analisar qualidade, não apenas quantidade. |
| Cobertura de Testes (CT) | **CT = (Linhas testadas / Linhas totais) × 100** | Relatório de coverage | Meta ≥ 80% nas áreas críticas para reduzir regressões. |
| Reusabilidade (R) | **R = (Módulos reutilizados / Módulos totais) × 100** | Inspeção de componentes | Maior valor ⇒ arquitetura mais modular. |
| Documentação Técnica (DT) | Escala 1–5 (checklist) | Inspeção manual | 1= inexistente; 5= completa/atualizada. |

### 3.2 Funcionalidade

| Métrica | Fórmula | Método de Coleta | Interpretação / Observações |
|---|---|---|---|
| Taxa Funcional (TFI) | **TFI = (Func. implementadas / Func. planejadas) × 100** | Comparar backlog × implementação | Grau de completude do escopo. |
| Sucesso de Testes (TS) | **TS = (Casos OK / Casos totais) × 100** | Suíte funcional (manual/auto) | Meta indicativa ≥ 95% em critérios críticos. |
| Visualização de Obras (TVO) | **TVO = (Obras exibidas OK / Obras esperadas) × 100** | Testes com cruzamento da fonte | Baixos valores ⇒ falha na ingestão/renderização. |
| Completude de Detalhes (CD) | **CD = (Obras com campos obrigatórios / Obras totais) × 100** | Inspeção de registros | Verificar campos essenciais (valor, local, status). |
| Clareza de Custos (CEC) | Escala 1–5 (heurística) | Avaliação de interface | Formatação, unidade (moeda), fonte, data. |

### 3.3 Eficiência

| Métrica | Fórmula | Método de Coleta | Interpretação / Observações |
|---|---|---|---|
| Tempo Médio de Resposta (TR) | **TR = (Σ tempos) / Nº requisições** | DevTools/Lighthouse | Meta operacional: **≤ 5s** para dados críticos. |
| First Contentful Paint (FCP) | Medição direta | Lighthouse/DevTools | Rapidez do render inicial. |
| Uso de CPU (Ucpu) | **Ucpu = (Tempo CPU / Tempo total) × 100** | Monitoramento | Sustentado alto ⇒ otimização necessária. |
| Uso de Memória (Umem) | **Umem = (Memória usada / Total disp.) × 100** | Monitoramento | Picos altos ⇒ risco de instabilidade. |
| Disponibilidade (TD) | **TD = (Tempo disponível / Tempo total) × 100** | Logs/monitoramento | Meta para serviço público: **≥ 99%**. |
| Hospedagem em Cloud (HC) | Sim/Não | Verificação técnica | Confirma escalabilidade/redundância. |

---

## 4) Abstraction Sheet (por meta)

> Estrutura padronizada (objeto, propósito, foco de qualidade, ponto de vista, fatores de variação, hipóteses base, impacto).

### 4.1 Manutenibilidade
- **Objeto:** Base de código, arquitetura, documentação, testes.  
- **Propósito:** Facilitar manutenção/evolução com qualidade.  
- **Quality Focus:** Modularidade, documentação, cobertura de testes, reuso.  
- **Viewpoint:** Equipe de desenvolvimento/QA.  
- **Fatores de Variação:** Linguagens/frameworks, padrão de componentes, disciplina de revisão.  
- **Hipóteses (baseline):** CC média ≤ 10; CT ≥ 80% crítico; DT ≥ 4/5.  
- **Impactos:** Mais reuso reduz esforço futuro; documentação precária eleva custo de mudança.

### 4.2 Funcionalidade
- **Objeto:** Fluxos de mapa, detalhamento de obra, exibição de custos.  
- **Propósito:** Garantir completude e correção da informação.  
- **Quality Focus:** Completude, corretude, clareza, experiência consistente.  
- **Viewpoint:** Usuários finais, gestores, desenvolvedores.  
- **Fatores de Variação:** Qualidade dos dados da fonte, estabilidade da API.  
- **Hipóteses (baseline):** TVO ≥ 98%; CD ≥ 95%; TS ≥ 95%.  
- **Impactos:** Falhas na ingestão de dados afetam percepção pública.

### 4.3 Eficiência
- **Objeto:** Desempenho front/back, rede e infraestrutura.  
- **Propósito:** Minimizar latência e consumo de recursos, garantir disponibilidade.  
- **Quality Focus:** TR, FCP, CPU, memória, disponibilidade.  
- **Viewpoint:** Usuários, SRE/DevOps, gestores.  
- **Fatores de Variação:** Qualidade de rede, carga de usuários, limites de API.  
- **Hipóteses (baseline):** TR ≤ 5s; TD ≥ 99%; HC = Sim.  
- **Impactos:** Carga alta sem escalabilidade degrada UX.

---

## 5) Critérios de Julgamento (Escala)

| Faixa de Pontuação | Avaliação |
|---|---|
| **95% – 100%** | Ótimo |
| **85% – 95%** | Bom |
| **75% – 85%** | Médio |
| **< 75%** | Insatisfatório |

---

## 6) Observações de Coleta
- Rodar medições em diferentes horários e dispositivos (desktop/mobile).
- Conservar evidências (prints, links de relatório).
- Documentar versões da ferramenta e commit do código.

---

## 7) Histórico de Versões
- **1.0 (10/10/2025)** — Criação inicial.
- **1.1 (12/10/2025)** — Inclusão de métricas/critérios.
- **1.2 (14/10/2025)** — Fórmulas e revisão textual.
- **1.3 (14/10/2025)** — Ajustes finais e referências.