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
# 1. Goal (Objetivo) 1 — Usabilidade

| **Elemento**        | **Definição** |
|----------------------|---------------|
| **Analisar**         | O aplicativo Guardiões da Saúde |
| **Para o propósito de** | Avaliar |
| **Com respeito a**   | Usabilidade |
| **Do ponto de vista**| Usuários finais |
| **No contexto da**   | Disciplina de Qualidade de Software |

---

# 2. Goal (Objetivo) 2 — Manutenibilidade

| **Elemento**        | **Definição** |
|----------------------|---------------|
| **Analisar**         | O aplicativo Guardiões da Saúde |
| **Para o propósito de** | Avaliar |
| **Com respeito a**   | Manutenibilidade |
| **Do ponto de vista**| Desenvolvedores |
| **No contexto da**   | Disciplina de Qualidade de Software |

---

# 3. Goal (Objetivo) 3 — Eficiência

| **Elemento**        | **Definição** |
|----------------------|---------------|
| **Analisar**         | O aplicativo Guardiões da Saúde |
| **Para o propósito de** | Avaliar |
| **Com respeito a**   | Eficiência |
| **Do ponto de vista**| Usuários e equipe de infraestrutura |
| **No contexto da**   | Disciplina de Qualidade de Software |

## 4.2 Questions and Metrics
# Q1 — Usabilidade

**Questão 01:** É possível ver todas as obras?

### Hipóteses

- **Hipótese 1.1:** O sistema mostra todas as obras e suas informações.  
- **Hipótese 1.2:** O sistema tem um mapa funcional com a visualização das obras.

---

### Métricas

**M1.1 – Questão 01: Hipótese 1.1**

**Detalhes da Métrica**  
- **Objetivo:** Avaliar a completude da exibição das obras.  
- **Fórmula:** (Número de obras exibidas corretamente / Total de obras cadastradas) × 100  
- **Periodicidade:** Semanal  
- **Valor-alvo:** ≥ 95%  
- **Coleta:**  
  1. Comparar o número de obras cadastradas no banco de dados com o número de obras exibidas na interface.  
  2. Verificar se todas possuem informações completas (nome, status, localização, responsável).  
  3. Registrar em planilha: data, total de obras, total exibidas, percentual de exibição.  
- **Responsável:** Equipe de Testes  

---

**M1.2 – Questão 01: Hipótese 1.2**

**Detalhes da Métrica**  
- **Objetivo:** Avaliar a funcionalidade do mapa de visualização.  
- **Fórmula:** (Número de carregamentos de mapa bem-sucedidos / Total de tentativas de carregamento) × 100  
- **Periodicidade:** Diária  
- **Valor-alvo:** ≥ 98%  
- **Coleta:**  
  1. Realizar 5 tentativas diárias de acesso ao mapa.  
  2. Verificar se o mapa carrega corretamente e exibe os marcadores de obras.  
  3. Registrar: data, hora, resultado (sucesso/falha), observações.  
- **Responsável:** Equipe de Testes  

---

# Q2 — Manutenibilidade

**Questão 02:** O sistema tem documentação completa?

### Hipóteses

- **Hipótese 2.1:** O sistema possui documentação que facilita a manutenção.  
- **Hipótese 2.2:** O sistema é open source e permite melhorias.

---

### Métricas

**M2.1 – Questão 02: Hipótese 2.1**

**Detalhes da Métrica**  
- **Objetivo:** Avaliar a completude e clareza da documentação técnica.  
- **Fórmula:** (Número de módulos documentados / Total de módulos existentes) × 100  
- **Periodicidade:** Mensal  
- **Valor-alvo:** ≥ 90%  
- **Coleta:**  
  1. Verificar a existência de documentação para cada módulo (instalação, API, arquitetura, testes).  
  2. Avaliar se a documentação está atualizada e compreensível.  
  3. Registrar em planilha: módulo, status (documentado/sim/não), observações.  
- **Responsável:** Equipe de Desenvolvimento  

---

**M2.2 – Questão 02: Hipótese 2.2**

**Detalhes da Métrica**  
- **Objetivo:** Verificar se o sistema é aberto a contribuições externas.  
- **Fórmula:** (Número de contribuições aceitas / Total de pull requests submetidos) × 100  
- **Periodicidade:** Mensal  
- **Valor-alvo:** ≥ 80%  
- **Coleta:**  
  1. Analisar o repositório open source e o histórico de contribuições.  
  2. Registrar número de pull requests enviados, aceitos e rejeitados.  
  3. Documentar em planilha: data, contribuidor, status da PR, observações.  
- **Responsável:** Equipe de Desenvolvimento  

---

# Q3 — Eficiência

**Questão 03:** O sistema responde em menos de 10 segundos?

### Hipóteses

- **Hipótese 3.1:** O sistema está hospedado na nuvem e tem resposta rápida.  
- **Hipótese 3.2:** O sistema mantém tempos de resposta dentro do limite esperado.

---

### Métricas

**M3.1 – Questão 03: Hipótese 3.1**

**Detalhes da Métrica**  
- **Objetivo:** Avaliar o tempo médio de resposta do sistema em ambiente real.  
- **Fórmula:** Σ (tempo de resposta de cada requisição) / Nº total de requisições  
- **Periodicidade:** Diária  
- **Valor-alvo:** ≤ 10 segundos  
- **Coleta:**  
  1. Medir o tempo entre requisição e resposta em 10 operações diferentes (cadastro, login, mapa, etc.).  
  2. Calcular a média e registrar em planilha: data, tempo médio, observações.  
- **Responsável:** Equipe de Infraestrutura  

---

**M3.2 – Questão 03: Hipótese 3.2**

**Detalhes da Métrica**  
- **Objetivo:** Garantir desempenho consistente nas principais funcionalidades.  
- **Fórmula:** (Número de requisições com tempo ≤ 10s / Total de requisições) × 100  
- **Periodicidade:** Semanal  
- **Valor-alvo:** ≥ 95%  
- **Coleta:**  
  1. Monitorar logs de desempenho.  
  2. Registrar número total de requisições e quantas atenderam o tempo-alvo.  
  3. Documentar resultados e analisar picos de lentidão.  
- **Responsável:** Equipe de Infraestrutura  

# 6. Conclusão

A aplicação do modelo GQM, apoiada por análises estáticas, testes funcionais, medições de desempenho e coleta de percepções de stakeholders, permite uma avaliação robusta e objetiva da qualidade do DFemObras. A metodologia adotada garante que cada afirmação sobre a qualidade do sistema esteja vinculada a uma métrica mensurável ou a uma avaliação documentada, o que aumenta a credibilidade das recomendações.

### Histórico de Versões

| Versão | Data       | Autor(es)                  | Descrição das Alterações                                    |
|--------|------------|---------------------------|------------------------------------------------------------|
| 1.0    | 10/10/2025 | Nicolas                | Criação do documento com estrutura inicial.               |
| 1.1    | 12/10/2025 | Ana Luiza Borba   | Inclusão de GQM, métricas e critérios de avaliação.       |
| 1.2    | 14/10/2025 | Ana Luiza Borba  | Revisão do texto, formatação e inclusão de fórmulas de métricas. |
| 1.4    | 14/10/2025 | Ana Luiza Borba           | Ajustes finais, histórico de versões, referências e declaração de uso de IA. |
| 1.5    | 14/10/2025 | Ana Luiza Borba           | Ajustes finais, histórico de versões, referências e declaração de uso de IA. |

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
