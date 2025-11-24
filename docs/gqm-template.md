---
title: Template do GQM (Reutilizável)
---

# Template do GQM

Use este **template** para qualquer produto/sistema. Substitua os blocos `<>` pelos valores do seu projeto.

## 1) Contexto
- **Produto/Sistema:** <nome do produto>  
- **Visão geral:** <1–2 parágrafos sobre propósito/usuários>
- **Stakeholders:** <usuários, gestores, devs, QA, etc.>
- **Referências:** <normas, docs, repositório, etc.>

---

## 2) Goal (Metas)

### 2.1 Meta A — <característica de qualidade>
<descrição da meta alinhada à ISO/IEC 25010>

### 2.2 Meta B — <característica de qualidade>
<descrição>

### 2.3 Meta C — <característica de qualidade>
<descrição>

> Dica: Características comuns — Funcionalidade, Manutenibilidade, Eficiência, Usabilidade, Confiabilidade, Segurança, Portabilidade, Compatibilidade.

---

## 3) Questions (Questões)

### 3.1 Para a Meta A
- Q1: <pergunta 1>
- Q2: <pergunta 2>
- Q3: <pergunta 3>

### 3.2 Para a Meta B
- Q4: <pergunta 4>
- Q5: <pergunta 5>

### 3.3 Para a Meta C
- Q6: <pergunta 6>
- Q7: <pergunta 7>

---

## 4) Metrics (Métricas)

> Para cada pergunta, defina ao menos 1 métrica. Sempre descreva **fórmula, unidade, método de coleta, ferramenta e frequência**.

### 4.1 Métricas da Meta A

| Métrica | Fórmula | Método de Coleta | Interpretação / Observações |
|---|---|---|---|
| <nome> | <fórmula> | <ferramenta/processo> | <como ler o valor> |
| <nome> | <fórmula> | <ferramenta/processo> | <como ler o valor> |

### 4.2 Métricas da Meta B

| Métrica | Fórmula | Método de Coleta | Interpretação / Observações |
|---|---|---|---|
| <nome> | <fórmula> | <ferramenta/processo> | <como ler o valor> |

### 4.3 Métricas da Meta C

| Métrica | Fórmula | Método de Coleta | Interpretação / Observações |
|---|---|---|---|
| <nome> | <fórmula> | <ferramenta/processo> | <como ler o valor> |

---

## 5) Abstraction Sheet (por meta)

> Copie este bloco para cada meta.

**Objeto:** <o que será avaliado>  
**Propósito:** <por que medir>  
**Quality Focus:** <aspectos que importam>  
**Viewpoint:** <quem avalia>  
**Fatores de Variação:** <o que muda e afeta>  
**Hipóteses (baseline):** <valores esperados>  
**Impactos:** <efeitos das variações>

---

## 6) Critérios de Julgamento

Defina faixas claras (**thresholds**) para classificar resultados:

| Faixa de Pontuação | Avaliação |
|---|---|
| <≥ X%> | Ótimo |
| <≥ Y% e < X%> | Bom |
| <≥ Z% e < Y%> | Médio |
| < < Z% > | Insatisfatório |

---

## 7) Procedimentos de Coleta

- **Inspeção de repositório:** <itens checados>
- **Análise estática:** <ferramentas e configuracões>
- **Testes funcionais:** <abordagem e cobertura>
- **Medições de desempenho:** <ambiente, frequência, métricas>
- **Coleta qualitativa:** <questionário/entrevistas, escala>

---

## 8) Evidências

- Anexe/relacione prints, relatórios, planilhas e links (commits, issues, builds).

---

## 9) Histórico de Versões

| Versão | Data | Autor(es) | Descrição |
|---|---|---|---|
| 1.0 | <dd/mm/aaaa> | <nome> | Criação |
| 1.1 | <dd/mm/aaaa> | <nome> | Atualizações |

---

## 10) Declaração de Uso de IA (opcional)

> Este documento contou com apoio de ferramentas de IA para revisão de texto e padronização. As decisões técnicas foram tomadas pelos autores humanos.