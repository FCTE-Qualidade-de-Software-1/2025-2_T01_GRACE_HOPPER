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