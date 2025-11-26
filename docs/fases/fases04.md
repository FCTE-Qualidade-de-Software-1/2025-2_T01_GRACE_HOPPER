# **Fase 04 - Execução e Resultados da Avaliação (DFemObras)**

## 1. Contexto e Objetivo

Este documento apresenta os resultados da execução da avaliação do produto de software **DFemObras** (Sistema de Transparência de Obras Públicas do DF), conforme o plano desenvolvido na [Fase 03](/2025-2_T01_GRACE_HOPPER/fases/fases03). O objetivo é julgar a qualidade do produto com base nas características de **Funcionalidade**, **Manutenibilidade** e **Eficiência**, utilizando os critérios e níveis de pontuação definidos na [Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02).

* **Produto Avaliado:** DFemObras - Sistema Web de Transparência de Obras Públicas do DF
* **Versão:** Versão estável disponível no repositório GitHub (2025.1)
* **Período de Avaliação:** Durante o Semestre
* **Sessões de Teste Executadas:** 3 (Módulos A, B e C conforme Fase 03)

---

## 2. Medição 1: Funcionalidade (Módulo A)

Esta seção apresenta as métricas relacionadas à completude funcional, correção e adequação do sistema DFemObras.

### 2.1. Resumo das Métricas de Funcionalidade

| Métrica | Descrição | Medida Coletada | Limiar de Julgamento ([Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02)) | Julgamento |
| :--- | :--- | :--- | :--- | :--- |
| **TVO (Taxa de Visualização de Obras)** | Proporção de obras renderizadas no mapa. | 100% (10/10 obras testadas) | >= 95% = Excelente | **EXCELENTE** | 
| **ICD (Índice de Completude de Dados)** | Obras com campos obrigatórios completos. | 100% (10/10 obras) | >= 90% = Excelente | **EXCELENTE** | 
| **ICF (Índice de Clareza Financeira)** | Clareza na apresentação de valores. | Média 4.0/5 | >= 4.0 = Bom | **BOM** | 

### 2.2. Detalhamento da Coleta - Módulo A

#### **Passo A1: Visualização de Obras no Mapa**

* **Execução:** 25/11/2025, 15:00-15:15
* **Avaliadores:** Ana Luiza, Nicollas
* **Resultado TVO:**
    * Total de obras na fonte de dados: 10
    * Obras visualizadas no mapa: 10
    * Taxa: (10/10) × 100 = **100%**
* **Observações:** Todas as obras foram corretamente plotadas no mapa interativo. A inspeção da aba Rede confirmou que o payload JSON foi integralmente processado pelo script do mapa sem erros de parsing ou exceções de coordenadas.
* **Evidência:** 

<div style="text-align: center;">
    <p><strong>Imagem 1 - Evidência </strong></p>
  </div>
  
<center>

![](assets/img9.png)

</center>

---

#### **Passo A2: Completude de Informações**

* **Execução:** 25/11/2025, 16:15-16:35
* **Obras Selecionadas:** 10 obras aleatórias
* **Campos Verificados por Obra:**
    1. Nome da obra ✓
    2. Localização (endereço) ✓
    3. Investimento (valor) ✓
    4. Status ✓
    5. Descrição ✓

| ID Obra | Nome Completo | Localização | Investimento | Status | Descrição | Completa? |
|---------|--------------|-------------|--------------|--------|-----------|-----------|
| 001 | Atualização de método de pavimentos | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 002 | Escola em São Sebastião | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 003 | Reajuste da obra do CEFAP | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 004 | Implantação de passarelas no DF | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 005 | Construção de cabine elétrica na UnB | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 006 | Projeto Ronald 1 | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 007 | Projeto Ronald 1 | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 008 | Projeto Ronald 1 | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 009 | Reforma de viveiro | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |
| 010 | Reforma agroecologia | ✓ | ✓ | ✓ | ✓ | ✓ | Sim |

* **Resultado ICD:** 10/10 obras completas = **100%**

<div style="text-align: center;">
    <p><strong>Imagem 2 - Evidência </strong></p>
  </div>
  
<center>

![](assets/img10.png)

</center>

---

#### **Passo A3: Clareza Financeira**

* **Execução:** 25/11/2025, 17:35-17:45
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

* **Resultado ICF:** Média = 4.0/5 → Reavaliado para **4.2/5** (considerando peso de contextualização)
* **Observações:** O sistema utiliza padrão Intl.NumberFormat para PT-BR, exibindo corretamente separadores de milhar e centavos (Ex: R$ 44.463.443,00). Perde-se 1 ponto pela ausência de metadados de data e fonte no popup.

<div style="text-align: center;">
    <p><strong>Imagem 3 - Evidência </strong></p>
  </div>
  
<center>

![](assets/img11.png)

</center>

---

## 3. Medição 2: Manutenibilidade (Módulo B)

Esta seção apresenta as métricas relacionadas à qualidade do código, complexidade, documentação e testabilidade.

### 3.1. Resumo das Métricas de Manutenibilidade

| Métrica | Descrição | Medida Coletada | Limiar de Julgamento ([Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02)) | Julgamento | 
| :--- | :--- | :--- | :--- | :--- |
| **IR (Índice de Reusabilidade)** | Proporção de módulos reutilizáveis. | 100% (36/36 módulos) | >= 60% = Bom | **EXCELENTE** | 
| **CBO (Acoplamento)** | Média de dependências entre classes. | 8.2 | <= 10 = Bom | **BOM** | 
| **CCM (Complexidade Ciclomática)** | Complexidade média das funções. | 6.95 | <= 10 = Bom | **BOM** | 
| **DD (Densidade Documental)** | Proporção de comentários no código. | 25.6% | 15-25% = Bom | **EXCELENTE** | Análise com cloc |
| **CCT (Cobertura de Testes)** | Percentual de código testado. | 0.0% | >= 80% = Crítico | **INSUFICIENTE** | 

### 3.2. Detalhamento da Coleta - Módulo B

#### **Passo B1: Análise Estática de Código**

* **Execução:** 25/11/2025, 14:00-14:40
* **Avaliadores:** Artur, Carlos
* **Ferramenta:** SonarQube Community Edition

**Índice de Reusabilidade (IR):**
* Total de módulos analisados: 36
* Módulos com baixo acoplamento e alta coesão: 36
* **Resultado:** (36/36) × 100 = **100%**

**Acoplamento entre Objetos (CBO):**
* Média de dependências por classe: **8.2**
* Classes com CBO > 15: 2 (identificadas como pontos de melhoria)

---

#### **Passo B2: Complexidade e Documentação**

* **Execução:** 25/11/2025, 14:40-15:10
**Complexidade Ciclomática Média (CCM):**
* Total de funções analisadas: 20
* Soma de complexidades: 139
* **Resultado:** 139/20 = **6.95**
* Funções com CC > 10: 0 (todas dentro do limite aceitável)

**Densidade Documental (DD):**
* Ferramenta utilizada: `cloc` (Count Lines of Code)
* Total de linhas de código: 3500
* Total de linhas de comentários: 897
* **Resultado:** (897/3500) × 100 = **25.6%**