# FASE 03 — PLANEJAMENTO, COLETA E ANÁLISE (DFemObras)

## 3.1 Planejamento

### 3.1.1 Objetivos
O objetivo desta fase é definir, operacionalizar e executar a coleta de dados necessários para avaliar o DFemObras de acordo com o modelo GQM definido na Fase 02. As características avaliadas são: Funcionalidade, Manutenibilidade e Eficiência, considerando suas perguntas de avaliação, métricas e hipóteses.

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

### 3.1.4 Cronograma da Coleta

| Etapa | Data | Responsável |
|------|------|-------------|
| Definição das técnicas | 10/11/2025 | Equipe de Qualidade |
| Coleta Funcionalidade | 11/11/2025 | Avaliador 1 |
| Coleta Manutenibilidade | 12/11/2025 | Avaliador 2 |
| Coleta Eficiência | 13/11/2025 | Avaliador 1 |
| Consolidação dos dados | 14/11/2025 | Avaliador Principal |
| Análise dos resultados | 15/11/2025 | Equipe de Qualidade |

---

## 3.2 Coleta de Dados

### 3.2.1 Execução da Coleta
A coleta foi realizada com base nas métricas definidas na Fase 02.

### 3.2.2 Dados Coletados

---

# A) FUNCIONALIDADE

### Métrica F1 — Completude Funcional  
Fórmula:  
F1 = (Funções implementadas / Funções previstas) × 100  

Dados:
- Funções previstas: 24  
- Funções implementadas: 22  

Resultado:  
F1 = (22 / 24) × 100 = **91,67%**

---

### Métrica F2 — Correção Funcional  
Fórmula:  
F2 = (Funções corretas / Funções testadas) × 100  

Dados:
- Funções testadas: 22  
- Funções corretas: 21  

Resultado:  
F2 = **95,45%**

---

### Métrica F3 — Adequação Funcional  
Fórmula:  
F3 = média dos escores (0–5)  

Escores coletados:  
4, 4, 5, 5, 4, 5, 4, 5, 4, 5, 4, 4, 4, 5, 4, 4, 4, 5, 4, 5, 4, 4

Resultado:  
F3 = **4,36**

---

# B) MANUTENIBILIDADE

### Métrica M1 — Complexidade Ciclomática Média  
Fórmula:  
M1 = soma(CC) / número de funções  

Complexidades coletadas (20 funções):  
6, 7, 8, 5, 9, 7, 6, 8, 7, 5, 6, 7, 8, 7, 6, 7, 8, 6, 7, 7  

Resultado:  
M1 = **6,95**

---

### Métrica M2 — Tamanho Médio das Funções (LOC)  
Fórmula:  
M2 = soma(LOC) / número de funções  

LOC analisadas:  
32, 28, 40, 30, 35, 38, 29, 41, 30, 33, 32, 29, 34, 40, 31, 30, 32, 33, 28, 36  

Resultado:  
M2 = **33,2 linhas**

---

### Métrica M3 — Duplicação de Código (%)  
Fórmula:  
M3 = (LOC duplicadas / LOC total) × 100  

Dados:
- LOC total: 4850  
- LOC duplicadas: 230  

Resultado:  
M3 = **4,74%**

---

### Métrica M4 — Comentários por Função  
Fórmula:  
M4 = total de comentários / total de funções  

Dados:
- Comentários: 158  
- Funções: 20  

Resultado:  
M4 = **7,9 comentários/função**

---

# C) EFICIÊNCIA

### Métrica E1 — Tempo Médio de Resposta  
Tempos coletados (ms):  
420, 510, 480, 530, 490, 460, 515, 505, 495, 470  

Resultado:  
E1 = **487,5 ms**

---

### Métrica E2 — Uso de CPU  
Resultado:  
E2 = **34%**

---

### Métrica E3 — Uso de Memória  
Resultado:  
E3 = **182 MB**

---

## 3.2.3 Dificuldades Encontradas
- Parte da documentação estava desatualizada.
- Algumas funcionalidades exigiram avaliação manual por ausência de testes automatizados.
- Variação de rede influenciou alguns testes de desempenho.

---

## 3.3 Análise

### 3.3.1 Organização dos Dados

| Métrica | Resultado | Hipótese | Situação |
|--------|-----------|----------|----------|
| F1 | 91,67% | ≥ 90% | Atendida |
| F2 | 95,45% | ≥ 95% | Atendida |
| F3 | 4,36 | ≥ 4 | Atendida |
| M1 | 6,95 | ≤ 10 | Atendida |
| M2 | 33,2 LOC | ≤ 40 | Atendida |
| M3 | 4,74% | ≤ 10% | Atendida |
| M4 | 7,9 | ≥ 5 | Atendida |
| E1 | 487,5 ms | ≤ 600 ms | Atendida |
| E2 | 34% | ≤ 70% | Atendida |
| E3 | 182 MB | ≤ 250 MB | Atendida |

---

## 3.3.2 Interpretação dos Resultados

### Funcionalidade
O sistema apresenta alta completude e correção funcional, com apenas duas funcionalidades pendentes de implementação.

### Manutenibilidade
O código é relativamente simples, bem comentado e com baixo nível de duplicação, indicando boa facilidade de manutenção.

### Eficiência
O desempenho está dentro dos limites esperados, com tempo de resposta adequado e uso moderado de recursos.

---

## 3.3.3 Propostas de Melhoria

### Funcionalidade
- Finalizar as duas funcionalidades pendentes para atingir 100% de completude.

### Manutenibilidade
- Padronizar comentários.
- Adicionar pipeline de detecção automática de duplicações.

### Eficiência
- Implementar mecanismos de cache.
- Otimizar carregamento de gráficos.

---

## 3.3.4 Conclusão
Os resultados demonstram que o DFemObras atende às hipóteses definidas na Fase 02 para todas as métricas avaliadas. O sistema mostra-se funcional, eficiente e de fácil manutenção, apresentando maturidade em sua versão atual.

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
| **1.4** | **17/11/2025** | **Ana Luiza Borba** | Atualização da Fase 03, ajustes de métricas, análise e revisão final do documento. |

---

### Declaração de Uso de IA

Parte da formatação textual, organização estrutural e apoio na redação deste documento contou com auxílio de ferramentas de Inteligência Artificial para otimização da escrita, mantendo-se a responsabilidade integral da autora sobre o conteúdo técnico, decisões metodológicas e resultados apresentados.


