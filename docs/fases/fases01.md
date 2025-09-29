# Avaliação da Qualidade de Produto de Software: DFemObras-2025.1

**Disciplina:** FGA315 - Qualidade de Software 1  
**Professora:** Cristiane Ramos  
**Semestre/Ano:** 20/2025

## Equipe

- Nicollas Gabriel - 211062802
- Ana Luiza - 200014226
- Artur Pereira - 211030934
- Carlos Eduardo - 222022064
- José Felipe - 221008211
- Arthur Fonseca - 221031120

## Links

- [GitPage]
- [Repo]
- [Release]
## Sumário

1. [Propósito da Avaliação e Uso Pretendido dos Resultados](#proposito-da-avaliacao-e-uso-pretendido-dos-resultados)
2. [Requisitante e Partes Interessadas](#requisitante-e-partes-interessadas)
3. [Tipo de Produto e Descrição Estruturada do Software](#tipo-de-produto-e-descricao-estruturada-do-software)
4. [Modelo de Qualidade](#modelo-de-qualidade)
5. [Seleção e Priorização de Características](#selecao-e-priorizacao-de-caracteristicas)
6. [Escopo, Profundidade e Objetos de Avaliação](#escopo-profundidade-e-objetos-de-avaliacao)
7. [ODS Relacionados](#ods-relacionados)
8. [Organização Lógica do Relatório](#organizacao-logica-do-relatorio)
9. [Português, Estilo e Padronização](#portugues-estilo-e-padronizacao)
10. [GitPage da Equipe](#gitpage-da-equipe)
11. [Referências](#referencias)
## 1. Propósito da Avaliação e Uso Pretendido dos Resultados

O propósito desta avaliação de qualidade é analisar e propor melhorias para o projeto DFemObras-2025.1, um sistema de transparência e acompanhamento de obras públicas do Distrito Federal. O foco é específico em Funcionalidade e Confiabilidade.
## 2. Requisitante e Partes Interessadas

A tabela a seguir identifica as partes interessadas no processo de avaliação da qualidade do DFemObras-2025.1, seus papéis, necessidades e influência no escopo do projeto.

| Stakeholder                 | Papel         | Necessidade                                                                 |
|-----------------------------|--------------|----------------------------------------------------------------------------|
| Equipe de Desenvolvimento   | Desenvolvedor| Obter feedback sobre a qualidade da implementação e a estabilidade do sistema. |
| Professora/Disciplina       | Requisitante | Avaliar a qualidade do produto final como requisito da disciplina de Qualidade de Software. |
| Gestores Públicos do DF     | Decisor      | Ter uma ferramenta precisa e confiável para monitorar o andamento das obras. |
| Comunidade/Cidadãos do DF   | Usuário Final| Ter acesso rápido e transparente a informações atualizadas sobre obras públicas em sua região. |
## 3. Tipo de Produto e Descrição Estruturada do Software

O DFemObras é classificado como um software para gestão e transparência pública, geralmente implementado como um sistema de informação baseado na Web (Pressman) e um protótipo acadêmico de código aberto (IEEE 1062).

A arquitetura do DFemObras é tipicamente modular, composta por componentes que interagem para fornecer a funcionalidade de consulta e registro de dados de obras. A arquitetura de alto nível pode ser ilustrada como um sistema de três camadas:

- **Interface do Usuário (Frontend):** Responsável pela apresentação dos dados e interação com o usuário (cidadãos, gestores).
- **Camada de Aplicação (Backend/APIs):** Onde reside a lógica de negócio, processando requisições e gerenciando o acesso aos dados.
- **Armazenamento de Dados (Database):** Onde são persistidos os dados sobre as obras, localização e status.
## 4. Modelo de Qualidade

A avaliação da qualidade do DFemObras-2025.1 será baseada no modelo da norma ISO/IEC 25010, com foco nas características de Funcionalidade e Confiabilidade, consideradas essenciais para um sistema de transparência pública.

**Modelo de Qualidade Adaptado (ISO/IEC 25010)**

- Funcionalidade
	- Completude Funcional
	- Correção Funcional
	- Adequação Funcional
- Confiabilidade
	- Maturidade
	- Tolerância a Falhas
	- Recuperabilidade
## 5. Seleção e Priorização de Características

A seleção e priorização foram baseadas no propósito de garantir que o sistema entregue valor (Funcionalidade) e o faça de maneira estável (Confiabilidade).

| Característica   | Impacto | Risco-Esforço | Prioridade |
|------------------|---------|--------------|------------|
| Funcionalidade   | Alto    | Médio        | 1          |
| Confiabilidade   | Alto    | Alto         | 2          |
| Eficiência   | Alto    | Alto         | 2          |

## 6. Escopo, Profundidade e Objetos de Avaliação

O escopo desta avaliação se concentra na análise da Funcionalidade (capacidade de realizar consultas e exibir informações corretas) e Confiabilidade (disponibilidade e estabilidade do sistema) do DFemObras-2025.1 em sua versão estável mais recente.

- **Ambiente de Avaliação:** A avaliação será realizada em ambiente Web (acesso via navegadores Desktop e Mobile).
- **Profundidade da Análise:** Incluirá a execução de casos de teste, análise de relatórios de erros (se disponíveis) e uma inspeção da aderência das funcionalidades aos requisitos iniciais.
- **Fases Futuras:** Poderão expandir o escopo para incluir características como Usabilidade, Segurança e Desempenho.
## 7. ODS Relacionados

O projeto DFemObras-2025.1 contribui para os seguintes Objetivos de Desenvolvimento Sustentável (ODS) da ONU, focando na melhoria da governança e inclusão digital:

- **ODS 16 (Paz, Justiça e Instituições Eficazes):** O sistema promove a transparência na gestão dos recursos públicos e a prestação de contas (accountability) sobre as obras realizadas, fortalecendo a confiança nas instituições.
- **ODS 9 (Indústria, Inovação e Infraestrutura):** Utiliza a inovação tecnológica para criar uma infraestrutura de dados digitais aberta e acessível, melhorando o monitoramento e a eficiência na execução de obras.
## 8. Organização Lógica do Relatório

Este relatório está estruturado em seções que seguem uma progressão lógica, desde a definição do propósito da avaliação até a apresentação dos resultados e conclusões. As referências cruzadas serão utilizadas para garantir a rastreabilidade entre as seções.
## 9. Português, Estilo e Padronização

O relatório foi redigido em português do Brasil. As figuras e tabelas serão numeradas e possuirão legendas e fontes, garantindo a clareza e a padronização da apresentação.

## 10. GitPage da Equipe

O conteúdo para a GitPage da equipe está disponível na seção a seguir. A página será atualizada continuamente com os resultados da avaliação e outras informações relevantes.

### Links Placeholders:
- [Link para o Repositório no GitHub]
- [Link para a Release do Projeto]
## Matriz de Rastreabilidade

| Característica   | Subcaracterística      | Métrica (GQM)                                 |
|------------------|-----------------------|-----------------------------------------------|
| Funcionalidade   | Completude Funcional  | Percentual de requisitos funcionais implementados |
| Confiabilidade   | Maturidade            | Número de falhas críticas reportadas por semana   |
## Dicionário de Dados das Métricas

| Métrica                                 | Definição                                                                 |
|-----------------------------------------|--------------------------------------------------------------------------|
| Percentual de requisitos funcionais implementados | Mede o grau em que os requisitos funcionais para consulta e registro de obras foram implementados no software. |
| Número de falhas críticas reportadas por semana   | Mede a frequência de falhas críticas que impedem a consulta ou a persistência de dados de obras. |
## Tabela de Contribuição da Equipe

| Integrante              | Participação                  |
|------------------------|-------------------------------|
| [Nome do Integrante 1] | [contribuição]   |
| [Nome do Integrante 2] | [contribuição]   |
| [Nome do Integrante 3] | [contribuição]   |
## Referências

[1] ISO/IEC. (2011). ISO/IEC 25010:2011 Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - System and software quality models.
[2] UNB-MDS. (2025). DFemObras-2025.1 Project Repository. (Referência adaptada ao novo projeto).