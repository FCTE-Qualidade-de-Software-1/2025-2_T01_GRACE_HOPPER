# FASE 03 — PLANEJAMENTO DA COLETA E ANÁLISE (DFemObras)

## 3.1 Planejamento

### 3.1.1 Objetivos
O objetivo desta fase é definir, especificar e planejar a coleta de dados necessários para avaliar o DFemObras de acordo com o modelo GQM definido na [Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02). As características avaliadas são: Funcionalidade, Manutenibilidade e Eficiência, considerando suas perguntas de avaliação, métricas e hipóteses.

### 3.1.2 Responsabilidades
- Equipe de Qualidade: definição do plano de coleta, análise crítica e validação dos resultados.
- Avaliadores: execução da coleta, medições e registro dos dados.
- Avaliador Principal: organização dos dados, cálculos e interpretação dos resultados.
- Orientador: acompanhamento metodológico.

### 3.1.3 Técnicas

#### Funcionalidade
- Inspeção dos requisitos funcionais.
- Execução de testes manuais.
- Registro binário da presença e adequação das funções.

#### Manutenibilidade
- Análise estática de código.
- Inspeção de duplicações, tamanho de funções e uso de comentários.
- Ferramentas: SonarQube e análise manual.

#### Eficiência
- Testes de desempenho com cenários controlados.
- Medição do tempo de resposta e uso de recursos.
- Ferramenta: Lighthouse.

### 3.1.4 Cronograma

| Etapa | Data | Responsável |
|------|------|-------------|
| Definição das técnicas | 10/11/2025 | Equipe de Qualidade |

## 3.2 Coleta de Dados

### 3.2.1 Execução da Coleta

A coleta será realizada com base nas métricas definidas na [Fase 02](/2025-2_T01_GRACE_HOPPER/fases/fases02).

### 3.2.2 Dados para coleta

---

# A) FUNCIONALIDADE

### Métrica F1 — Completude Funcional  
Fórmula:  
F1 = (Funções implementadas / Funções previstas) × 100  

---

### Métrica F2 — Correção Funcional  
Fórmula:  
F2 = (Funções corretas / Funções testadas) × 100  


---

### Métrica F3 — Adequação Funcional  
Fórmula:  
F3 = média dos escores (0–5)  

---

# B) MANUTENIBILIDADE

### Métrica M1 — Complexidade Ciclomática Média  
Fórmula:  
M1 = soma(CC) / número de funções  

---

### Métrica M2 — Tamanho Médio das Funções (LOC)  
Fórmula:  
M2 = soma(LOC) / número de funções  

---

### Métrica M3 — Duplicação de Código (%)  
Fórmula:  
M3 = (LOC duplicadas / LOC total) × 100  

---

### Métrica M4 — Comentários por Função  
Fórmula:  
M4 = total de comentários / total de funções  

---

# C) EFICIÊNCIA

### Métrica E1 — Tempo Médio de Resposta  

---

### Métrica E2 — Uso de CPU  

---

### Métrica E3 — Uso de Memória  

---

## 3.3 Conclusão

Com base nessa nessas métricas, será possível realizar uma coleta de dados completa. Assim, esses dados e seus resultados serão utilizados para a análise na [Fase 04](/2025-2_T01_GRACE_HOPPER/fases/fases04).

## Bibliografia

> BASILI, Victor R. et al. Linking Software Development and Business Strategy through Measurement. IEEE Computer, v. 43, n. 4, p. 57-65, abr. 2010.

> BASILI, Victor R.; CALDIERA, Gianluigi; ROMBACH, H. Dieter. Goal Question Metric Paradigm. In: MARCINIAK, John J. (Ed.). Encyclopedia of Software Engineering. New York: John Wiley & Sons, 1994. p. 528-532.

> FENTON, Norman E.; PFLEEGER, Shari Lawrence. Software Metrics: A Rigorous and Practical Approach. 3. ed. Boca Raton: CRC Press, 2014.

> ISO/IEC 25010:2011. Systems and software engineering – Systems and software Quality Requirements and Evaluation (SQuaRE) – System and software quality models. Geneva: International Organization for Standardization, 2011.

> PRESSMAN, Roger S. Engenharia de Software – Uma Abordagem Profissional. 8ª edição. McGraw-Hill, 2016.

> SOMMERVILLE, Ian. Software Engineering. 9th Edition. Pearson, 2011.

> SOLINGEN, Rini van; BERGHOUT, Egon. The Goal/Question/Metric Method: A Practical Guide for Quality Improvement of Software Development. London: McGraw-Hill, 1999.

> UNB-MDS (2025). DFemObras-2025.1 Project Repository. Universidade de Brasília, Campus Gama.

> ONU (2025). Objetivos de Desenvolvimento Sustentável no Brasil. Disponível em: https://brasil.un.org/pt-br/sdgs. Acesso em: 24/10/2025.

---

### Histórico de Versões

| Versão | Data       | Autor(es)                          | Descrição das Alterações                                                     |
|--------|------------|------------------------------------|------------------------------------------------------------------------------|
| 1.0    | 10/10/2025 | Nicollas Gabriel                   | Criação do documento com estrutura inicial.                                  |
| 1.1    | 11/10/2025 | Ana Luiza Borba / Equipe           | Inclusão de GQM, métricas e critérios de avaliação.                          |
| 1.2    | 19/10/2025 | Ana Luiza Borba                    | Revisão do texto, formatação e inclusão de fórmulas de métricas.             |
| 1.3    | 24/10/2025 | Ana Luiza Borba e Nicollas Gabriel | Ajustes finais e histórico de versões.                                       |
| 1.4 | 17/11/2025 | Ana Luiza Borba | Atualização da Fase 03, ajustes de métricas, análise e revisão final do documento. |
| 1.5 | **23/11/2025** | Arthur Fonseca Vale | Atualização da Fase 03, ajustes da documentação. |

---
