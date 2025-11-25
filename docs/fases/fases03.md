# **Fase 03 - Projetar a Avaliação (DFemObras)**

## 1. Objetivo deste Plano

Esta fase tem como objetivo estruturar o Plano de Avaliação, documento que conecta a Fase 02 (Especificar a Avaliação) à Fase 04 (Executar a Avaliação).

O plano define como as métricas serão coletadas, quais recursos serão necessários, em que sequência os testes serão realizados e como registrar as evidências, garantindo que qualquer avaliador consiga reproduzir o processo de maneira consistente.

O foco da avaliação é analisar o sistema **DFemObras** - plataforma de transparência e acompanhamento de obras públicas do Distrito Federal, considerando o uso típico de diferentes personas: cidadãos interessados em fiscalizar obras, gestores públicos que monitoram projetos, e desenvolvedores que mantêm o sistema.

> **Resumo da Coleta:** O fluxo de testes deste plano será executado de forma **manual e automatizada**. Todos os dados quantitativos e de checklist serão armazenados na **"Ficha de Registro (Google Sheet)"**, enquanto as evidências de execução serão capturadas em **vídeo, prints de tela e relatórios de ferramentas**.

* **Produto Alvo:** DFemObras - Sistema Web de Transparência de Obras Públicas do DF.
* **Versão:** Versão estável mais recente disponível no repositório GitHub.
* **Personas Alvo:** Cidadão fiscalizador, Gestor público, Desenvolvedor contribuinte.

---

## 2. Objetivo do Plano

O objetivo deste documento é definir detalhadamente o método de avaliação, instruindo como cada métrica definida na Fase 02 deverá ser medida.

O plano inclui:

- Fluxo de testes manual e automatizado reprodutível
- Checklist e formulários de coleta (Google Sheets)
- Procedimentos padronizados por métrica
- Diretrizes para gravação e armazenamento de evidências
- Recursos necessários para executar a avaliação

> **Resumo da Coleta:** A avaliação será realizada de forma híbrida (manual + ferramentas automatizadas). Dados quantitativos e qualitativos serão registrados na Ficha de Registro (Google Sheets). Prints, gravações de tela e relatórios de ferramentas funcionarão como evidências obrigatórias.

---

## 3. Recursos Necessários

A seguir, estão listados todos os recursos para execução das sessões de coleta.

### 3.1 Recursos de Hardware
* **Dispositivo:** Notebook ou desktop (Ex: Intel i5 ou equivalente, 8GB de RAM mínimo).
* **Rede:** Conexão de internet estável (mínimo 10 Mbps).

### 3.2 Recursos de Software
* **Sistema Operacional:** Windows 11, macOS ou Linux.
* **Navegadores:** Google Chrome (versão mais recente) e Firefox (para testes de compatibilidade).
* **Ferramentas de Coleta:**
    * Planilha de coleta (Google Sheets) para a "Ficha de Registro".
    * Google Lighthouse (integrado ao Chrome DevTools) para análise de performance.
    * OBS Studio ou ferramenta similar para capturar as evidências em vídeo.
    * Cronômetro (físico ou de software).
* **Ferramentas de Análise de Código:**
    * SonarQube ou SonarCloud para análise estática.
    * Git e GitHub para acesso ao repositório.
    * Extensões de análise de complexidade (ex: Code Metrics para VS Code).
* **Acesso ao Sistema:**
    * URL do DFemObras em produção.
    * Clone local do repositório GitHub para análise de código.

### 3.3 Recursos Humanos
* **Avaliadores:** Mínimo de 2 membros da equipe por sessão, com conhecimento do fluxo de navegação e das métricas a serem coletadas.
* **Responsabilidades:**
    * Avaliador 1: Execução dos testes funcionais e de eficiência.
    * Avaliador 2: Análise de código e manutenibilidade.
    * Equipe: Consolidação dos dados e análise integrada.

---

## 4. Método de Avaliação e Coleta de Dados

O método consiste em um fluxo estruturado de avaliação, composto por três módulos principais (A, B, C), cada um associado às características de qualidade da Fase 02: Funcionalidade, Manutenibilidade e Eficiência.

A coleta deve ser executada integralmente e na sequência descrita.

### 4.1. Preparação da Sessão de Teste (Setup)

Para garantir a consistência, cada sessão de avaliação deve começar com os seguintes passos:

1.  **Ambiente Limpo:** Limpar cache do navegador, cookies e histórico de navegação.
2.  **Configuração de Ferramentas:** 
    * Abrir Chrome DevTools e preparar aba Performance/Network.
    * Configurar SonarQube ou preparar ferramentas de análise estática.
    * Verificar acesso ao repositório GitHub do projeto.
3.  **Início da Coleta:**
    * Abrir a "Ficha de Registro" (Google Sheet).
    * **Iniciar a gravação de tela** (evidência principal).
    * Iniciar o cronômetro principal da sessão.
4.  **Baseline:** Anotar condições iniciais (hora, configuração de rede, versão do sistema).

---

### 4.2. Fluxo de Execução e Instruções de Coleta

O avaliador deve seguir os módulos abaixo e coletar os dados das métricas nos momentos especificados:

---

## **MÓDULO A: FUNCIONALIDADE**

### **Passo A1: Teste de Visualização de Obras no Mapa (Duração: 10-15 min)**

* **Ação:** Acessar a página inicial do DFemObras. Aguardar o carregamento completo do mapa interativo.

* **Coleta - Métrica 1.1: Taxa de Visualização de Obras (TVO)**
    * Verificar quantas obras estão visíveis no mapa.
    * Comparar com o total de obras disponíveis na fonte de dados (pode ser consultado na documentação ou API).
    * **Fórmula:** TVO = (Obras visualizadas / Obras na fonte) × 100
    * Registrar o resultado na Ficha de Registro.
    * **Evidência:** Print da tela mostrando o mapa completo com marcadores.

---

### **Passo A2: Teste de Completude de Informações**

* **Ação:** Selecionar aleatoriamente 10 obras no mapa. Para cada uma, clicar no marcador e verificar se os detalhes são exibidos.

* **Coleta - Métrica 2.1: Índice de Completude de Dados (ICD)**
    * Para cada obra, verificar presença dos campos obrigatórios:
        1. Nome da obra
        2. Localização (endereço)
        3. Investimento (valor)
        4. Status (em andamento, concluída, etc.)
        5. Descrição
    * Contar quantas obras têm TODOS os campos preenchidos.
    * **Fórmula:** ICD = (Obras completas / 10) × 100
    * Medir o tempo médio para acessar os detalhes de cada obra (cronômetro).
    * Registrar os resultados na Ficha de Registro.
    * **Evidência:** Prints de 3 obras diferentes mostrando os detalhes completos ou incompletos.

---

### **Passo A3: Teste de Clareza Financeira**

* **Ação:** Nas mesmas 10 obras do Passo A2, verificar a apresentação dos valores financeiros.

* **Coleta - Métrica 3.1: Índice de Clareza Financeira (ICF)**
    * Para cada obra, verificar:
        1. Valor está formatado corretamente (R$ com separadores)?
        2. Existe contextualização (fonte, data de atualização)?
    * Avaliar em escala de 0 a 5:
        * 5 = Totalmente claro e bem formatado
        * 3 = Formatação correta mas falta contexto
        * 0 = Sem informação ou formatação inadequada
    * Calcular a média das avaliações.
    * Registrar na Ficha de Registro.
    * **Evidência:** Print de pelo menos 2 exemplos (um bem formatado e um mal formatado, se houver).

---

## **MÓDULO B: MANUTENIBILIDADE**

### **Passo B1: Análise Estática de Código**

* **Ação:** Clonar o repositório do DFemObras localmente. Executar ferramentas de análise estática.

* **Coleta - Métrica 1.1: Índice de Reusabilidade (IR)**
    * Analisar a estrutura de pastas e módulos do projeto.
    * Identificar componentes/funções que podem ser reutilizados (baixo acoplamento, alta coesão).
    * Contar o total de módulos e quantos são potencialmente reutilizáveis.
    * **Fórmula:** IR = (Módulos reutilizáveis / Total de módulos) × 100
    * Registrar na Ficha de Registro.

* **Coleta - Métrica 1.2: Acoplamento entre Objetos (CBO)**
    * Usar ferramenta de análise estática (SonarQube, Code Metrics) para calcular CBO médio.
    * Registrar o valor médio de dependências entre classes.
    * **Evidência:** Screenshot do relatório da ferramenta.

---

### **Passo B2: Análise de Complexidade e Documentação**

* **Ação:** Continuar a análise estática focando em complexidade e comentários.

* **Coleta - Métrica 2.1: Complexidade Ciclomática Média (CCM)**
    * Usar ferramenta de análise para extrair CCM de todas as funções.
    * Calcular a média.
    * **Fórmula:** CCM = Σ(Complexidade de cada função) / Total de funções
    * Registrar na Ficha de Registro.
    * **Evidência:** Screenshot do relatório mostrando funções com maior complexidade.

* **Coleta - Métrica 2.2: Densidade Documental (DD)**
    * Contar linhas de comentários e linhas de código total (pode usar ferramenta ou comando `cloc`).
    * **Fórmula:** DD = (Linhas de comentários / Total de linhas) × 100
    * Registrar na Ficha de Registro.

---

### **Passo B3: Análise de Testes**

* **Ação:** Verificar presença de testes automatizados no repositório.

* **Coleta - Métrica 3.1: Cobertura de Código por Testes (CCT)**
    * Verificar se existe pasta de testes (`/tests`, `/spec`, etc.).
    * Se houver relatório de cobertura (ex: coverage report), extrair o percentual.
    * Se não houver, executar testes localmente (se possível) e gerar relatório.
    * **Fórmula:** CCT = (Linhas cobertas / Total de linhas) × 100
    * Se não houver testes, registrar CCT = 0%.
    * Registrar na Ficha de Registro.
    * **Evidência:** Screenshot da estrutura de testes e/ou relatório de cobertura.

---

## **MÓDULO C: EFICIÊNCIA**

### **Passo C1: Teste de Performance com Lighthouse**

* **Ação:** Acessar o DFemObras no Chrome. Abrir DevTools > Lighthouse.

* **Coleta - Métrica 1.1: Tempo Total de Carregamento (TTC)**
    * Executar auditoria Lighthouse em modo Desktop.
    * Registrar o tempo de "Time to Interactive" ou "Total Blocking Time".
    * Repetir 3 vezes e calcular a média.
    * Registrar na Ficha de Registro.
    * **Evidência:** Screenshot do relatório Lighthouse completo.

* **Coleta - Métrica 1.2: First Contentful Paint (FCP)**
    * No mesmo relatório Lighthouse, localizar o valor de FCP.
    * Registrar na Ficha de Registro.

---

### **Passo C2: Monitoramento de Recursos**

* **Ação:** Com o DFemObras aberto, acessar DevTools > Performance. Iniciar gravação de performance enquanto interage com o sistema (carregar mapa, clicar em obras, navegar).

* **Coleta - Métrica 2.1: Taxa de Utilização de CPU (TUC)**
    * Observar o gráfico de CPU no painel Performance durante 60 segundos de uso ativo.
    * Anotar picos e calcular média aproximada (%) de uso de CPU.
    * Registrar na Ficha de Registro.
    * **Evidência:** Screenshot do gráfico de CPU no DevTools.

* **Coleta - Métrica 2.2: Consumo de Memória (CM)**
    * No DevTools, acessar aba Memory > Take heap snapshot.
    * Registrar o tamanho do heap (em MB).
    * Repetir após interação intensa (abrir várias obras).
    * Calcular média.
    * Registrar na Ficha de Registro.
    * **Evidência:** Screenshot do relatório de memória.

---

### **Passo C3: Verificação de Infraestrutura**

* **Ação:** Verificar onde o DFemObras está hospedado e sua disponibilidade.

* **Coleta - Métrica 3.1: Índice de Disponibilidade (ID)**
    * Usar ferramenta de monitoramento (ex: UptimeRobot) ou consultar histórico de uptime se disponível.
    * Se não houver dados históricos, registrar disponibilidade observada durante a avaliação (binário: disponível ou indisponível).
    * Registrar na Ficha de Registro.

* **Coleta - Métrica 3.2: Conformidade de Infraestrutura Cloud (CIC)**
    * Verificar informações sobre hospedagem (GitHub Pages, AWS, Heroku, etc.).
    * Registrar se é Cloud (1) ou não (0).
    * Registrar na Ficha de Registro.
    * **Evidência:** Print ou link da documentação de deploy.

---

## 5. Armazenamento e Estrutura dos Dados

* **Ficha de Registro (Google Sheet):** Todos os dados quantitativos (percentuais, tempos, médias) serão registrados em uma planilha centralizada. A estrutura da ficha deve conter:
    * Identificação da sessão (Data, hora, avaliador)
    * Seção para cada métrica (A1, A2, A3, B1, B2, B3, C1, C2, C3)
    * Campos calculados (médias, totais)
    * Coluna de observações

* **Evidências (Vídeo, Prints e Relatórios):** 
    * Toda sessão de teste deve ser **gravada em vídeo** (especialmente Módulo A e C).
    * Prints de tela são obrigatórios para comprovar resultados.
    * Relatórios de ferramentas (Lighthouse, SonarQube) devem ser salvos em PDF ou screenshot.

* **Nomenclatura:** Os arquivos de evidência devem ser nomeados com o ID da sessão e métrica:
    * Exemplo: `Sessao_01_A1_Mapa.png`, `Sessao_01_C1_Lighthouse.pdf`, `Sessao_01_Video_Completo.mp4`

* **Armazenamento:** Criar pasta compartilhada no Google Drive ou repositório dedicado para evidências.

---

## 6. Cronograma das Ações

O cronograma a seguir detalha a execução das Fases 03 e 04:

| Data | Fase | Atividade | Responsáveis | Entregável |
| :--- | :--- | :--- | :--- | :--- |
| 25/11/2025 | Fase 03 | Finalização e revisão deste Plano de Avaliação | Equipe | `fases03.md` (Este documento) |
| 26/11/2025 | Fase 04 | Setup do ambiente e preparação de ferramentas | Todos | Ambiente configurado |
| 27/11/2025 | Fase 04 | Execução do Módulo A (Funcionalidade) | Ana Luiza, Nicollas | Ficha de Registro (Módulo A), Evidências A |
| 28/11/2025 | Fase 04 | Execução do Módulo B (Manutenibilidade) | Artur, Carlos | Ficha de Registro (Módulo B), Evidências B |
| 29/11/2025 | Fase 04 | Execução do Módulo C (Eficiência) | Arthur Fonseca, José Felipe | Ficha de Registro (Módulo C), Evidências C |
| 30/11/2025 | Fase 04 | Consolidação dos dados e cálculo de médias | Equipe | Planilha final consolidada |
| 01/12/2025 | Fase 04 | Análise, Comparação e Julgamento dos resultados | Equipe | Tabelas de Julgamento preenchidas |
| 02/12/2025 | Fase 04 | Produção do Relatório Final e vídeo de apresentação | Equipe | `fases04.md` e Vídeo Final |

---

## 7. Uso de IA no Desenvolvimento do Trabalho

Foram utilizadas **ferramentas de IA generativas** (como ChatGPT e GitHub Copilot) para **apoiar pesquisas**, **formatar o texto**, **corrigir gramática/ortografia** e **sugerir estruturas de documentação**. As saídas foram **revisadas criticamente** pela equipe, com checagem de coerência com a **Fase 1** e a **Fase 2**, garantindo adequação ao contexto específico do DFemObras.

---

## Equipe e Contribuições

| Matrícula | Nome completo | Contribuição (%) |
| :--- | :--- | :--- |
| 211062802 | [Nicollas Gabriel Oliveira Sousa](https://github.com/Nicollaxs) | 16,6 |
| 200014226 | [Ana Luiza Borba de Abrantes](https://github.com/luabrantess) | 16,6 |
| 211030934 | [Artur da Silva Pereira](https://github.com/R2PX) | 16,6 |
| 222022064 | [Carlos Eduardo de Sousa Paz](https://github.com/dudupaz) | 16,6 |
| 221031120 | [Arthur Fonseca Vale](https://github.com/arthurfonsecaa) | 16,6 |
| 221008211 | [José Felipe Duarte Guedes de Oliveira](https://github.com/Jose1277) | 16,6 |

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

> ONU (2025). Objetivos de Desenvolvimento Sustentável no Brasil. Disponível em: https://brasil.un.org/pt-br/sdgs. Acesso em: 24/10/2025.

---

### Histórico de Versões

| Versão | Data       | Autor(es)                          | Descrição das Alterações                                                     |
|--------|------------|------------------------------------|------------------------------------------------------------------------------|
| 1.0    | 10/10/2025 | Nicollas Gabriel                   | Criação do documento com estrutura inicial.                                  |
| 1.1    | 11/10/2025 | Ana Luiza Borba / Equipe           | Inclusão de GQM, métricas e critérios de avaliação.                          |
| 1.2    | 19/10/2025 | Ana Luiza Borba                    | Revisão do texto, formatação e inclusão de fórmulas de métricas.             |
| 1.3    | 24/10/2025 | Ana Luiza Borba e Nicollas Gabriel | Ajustes finais e histórico de versões.                                       |
| 1.4    | 17/11/2025 | Ana Luiza Borba                    | Atualização da Fase 03, ajustes de métricas, análise e revisão final do documento. |
| 1.5    | 23/11/2025 | Arthur Fonseca Vale                | Atualização da Fase 03, ajustes da documentação.                             |
| 2.0    | 25/11/2025 | Equipe                             | Reestruturação completa da Fase 03 seguindo modelo de Plano de Avaliação com fluxos detalhados de coleta por módulo (Funcionalidade, Manutenibilidade, Eficiência). |

---
