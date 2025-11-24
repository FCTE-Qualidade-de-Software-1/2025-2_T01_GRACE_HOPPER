# Avaliação da Qualidade de Produto de Software: DFemObras

**Disciplina:** FGA0315 - Qualidade de Software 1  
**Professora:** Cristiane Ramos  


## 1. Propósito da Avaliação e Uso Pretendido dos Resultados

O propósito desta avaliação de qualidade é analisar e propor melhorias para o projeto DFemObras, um sistema de transparência e acompanhamento de obras públicas do Distrito Federal. Os principais crtérios levados em consideração pelo grupo foram Funcionalidade, Manutenabilidade e Eficiência.

Nossa escolha pelo software DFemObras se deve ao fato de ser um sistema originário na Universidade de Brasília do campus de Engenharias no Gama, portanto, é mais acessivel para nós estudantes, além do fato de incentivar a produção intelectual local.

Por ser um projeto de iniciativa estudantil, não temos expectativas de robustez de código, de normas de acessibilidade, de critérios de segurança, de fácil portabilidade, entre outras caracteristicas de software. Entretanto, caso tenha, será um grande achado para a universidade, ademais, nosso foco é incentivar a melhoria desse sistema.

## 2. Requisitante e Partes Interessadas

A tabela a seguir identifica as partes interessadas no processo de avaliação da qualidade do DFemObras-2025.1, seus papéis, necessidades e influência no escopo do projeto.

| Stakeholder                 | Papel         | Necessidade                                                                 |
|-----------------------------|--------------|----------------------------------------------------------------------------|
| Equipe de Desenvolvimento   | Desenvolvedor| Obter feedback sobre a qualidade da implementação e a estabilidade do sistema. |
| Professora/Disciplina       | Requisitante | Avaliar a qualidade do produto final como requisito da disciplina de Qualidade de Software. |
| Gestores Públicos do DF     | Decisor      | Ter uma ferramenta precisa e confiável para monitorar o andamento das obras. |
| Comunidade/Cidadãos do DF   | Usuário Final| Ter acesso rápido e transparente a informações atualizadas sobre obras públicas em sua região. |

Para isso, consideramos a totalidade de todos os interessados, tendo em vista que consideramos importante todos os pontos de vista. Como nossa avaliação deve ser completa, queremos opiniões desde o código até o usuário final.

## 3. Tipo de Produto e Descrição Estruturada do Software

## Arquitetura Cliente-Servidor
O sistema tem uma arquitetura cliente-servidor multicamadas, mas sem a camada de banco de dados, pois usa os dados direto da API. Funciona como _middleware_, no qual os dados são consumidos diretamente das APIs externas e apresentadas ao usuário final em uma interface interativa. 

1. A **camada de apresentação** usa HTML, CSS e JavaScript, além de bibliotecas para a plotagem dos mapas. Essa camada se comunica diretamente com o back-end por meio de requisições HTTP.
2. A **camada de aplicação** foi construída com Node.js com gerenciamento de pacotes com NPM. Essa camada faz o tratamento dos dados recebidos pela API externa, como a geração de gráficos, de mapas, de valores.
3. A **camada de serviços externas** está relacionada com o uso da API governamental, anterior ao tratamento dos dados no back-end. Esses dados chegam brutos ao desenvolvedor.

## 4. Modelo de Qualidade

A avaliação da qualidade do DFemObras será baseada no modelo da norma ISO/IEC 25010, com foco nas características de Funcionalidade, Manutenabilidade e Eficiência, consideradas essenciais para um sistema de transparência pública.

**Modelo de Qualidade Adaptado (ISO/IEC 25010)**

- Funcionalidade
	- Completude Funcional
	- Correção Funcional
	- Adequação Funcional
- Manutenabilidade
    - Modularidade
    - Reutilização
    - Modificabilidade
    - Testabilidade
- Eficiência
    - Comportamento em Relação ao tempo
    - Comportamento em Relação aos recursos
    - Capacidade
 
A funcionalidade está relacionado às funções disponíveis no sistema, como a visualização do mapa, o detalhamento das obras, as obras em atraso, o valor de cada obra. Já a manutenabilidade, é a facilidade em modificar, evoluir e corrigir o software. Já que é um projeto governamental, o funcionamento adequado com testes e melhorias é fundamental para a confiabilidade dos dados apresentados. A eficiência é o desempenho do software, como por exemplo a memória, o uso de nuvem, o armazenamento.


## 5. Seleção e Priorização de Características

Consideramos que o software funcionando é o fundamental para a nossa avaliação, portanto, a funcionalidade terá prioridade em nossa auditoria. Caso não esteja funcionando, perde toda a capacidade de ter uma nota boa em nossa avaliação, pois mesmo que o código seja bom, o produto final ainda é o mais importante para nós.

| Característica   | Impacto | Risco-Esforço | Prioridade |
|------------------|---------|--------------|------------|
| Funcionalidade   | Alto    | Médio        | 1          |
| Manutenabilidade   | Alto    | Alto         | 2          |
| Eficiência   | Alto    | Alto         | 2          |

## 6. Escopo, Profundidade e Objetos de Avaliação

O escopo desta avaliação se concentra na análise da Funcionalidade (capacidade de realizar consultas e exibir informações corretas) e Manutenabilidade do DFemObras-2025.1 em sua versão estável mais recente.

- **Ambiente de Avaliação:** A avaliação será realizada em ambiente Web (acesso via navegadores Desktop e Mobile).
- **Profundidade da Análise:** Incluirá a execução de casos de teste, análise de relatórios de erros (se disponíveis) e uma inspeção da aderência das funcionalidades aos requisitos iniciais.
- **Fases Futuras:** Poderão expandir o escopo para incluir características como Eficiência, Segurança, entre outros.

# Critérios de Avaliação do Software

| Critério | Descrição | Avaliação |
|----------|-----------|-----------|
| Visualização das obras | Todas as obras devem ser exibidas no mapa. |  |
| Detalhamento das obras | Informações completas de cada obra disponíveis. |  |
| Custo das obras | Exibição clara e acessível dos custos de todas as obras. |  |
| Experiência dos stakeholders | Todos os stakeholders devem ter a mesma experiência no uso do sistema. |  |
| Reutilização do código | Código deve ser modular, reutilizável e seguir boas práticas. |  |
| Uso de IA | O sistema deve ter baixo uso de IA, apenas quando estritamente necessário. |  |
| Open Source | O sistema deve ser de código aberto (Open Source). |  |
| Testes automatizados | Devem existir testes automatizados garantindo confiabilidade. |  |
| Documentação detalhada | Documentação clara e completa para manutenção e evolução. |  |
| Tempo de resposta | O sistema deve responder em menos de 5 segundos. |  |
| Uso de Cloud | O sistema deve estar hospedado em ambiente Cloud. |  |
| Arquitetura definida | O sistema deve possuir arquitetura bem estruturada e documentada. |  |

---

## Escala de Avaliação
- **95% a 100%** → Ótimo  
- **85% a 95%** → Bom  
- **75% a 85%** → Médio  
- **Abaixo de 75%** → Insatisfeito  

## 7. ODS Relacionados

O projeto DFemObras contribui para o seguinte Objetivo de Desenvolvimento Sustentável (ODS) da ONU, focando na melhoria da governança e inclusão digital:

- **ODS 9 (Indústria, Inovação e Infraestrutura):** Utiliza a inovação tecnológica para criar uma infraestrutura de dados digitais aberta e acessível, melhorando o monitoramento e a eficiência na execução de obras.
- **ODS 16 (Paz, Justiça e Instituições Eficazes):** Busca promover sociedades pacíficas e inclusivas, garantir o acesso à justiça para todos e construir instituições eficazes, responsáveis e transparentes em todos os níveis.

O sistema DFemObras se relaciona diretamente com o ODS 9 – Indústria, Inovação e Infraestrutura, uma vez que promove o desenvolvimento de soluções tecnológicas para melhorar a gestão e a transparência das obras públicas do Distrito Federal. Ao integrar inovação acadêmica com necessidades sociais, o projeto contribui para a construção de uma infraestrutura mais resiliente e eficiente, além de incentivar a produção científica e intelectual local.

Também dialoga com o ODS 16 – Paz, Justiça e Instituições Eficazes, pois fortalece a transparência e o acompanhamento das ações governamentais, favorecendo a participação social e a confiança nas instituições públicas. Dessa forma, o DFemObras atua como um exemplo de como iniciativas estudantis podem gerar impacto positivo tanto no avanço tecnológico quanto na governança pública.

## Tabela de Contribuição da Equipe

| Matrícula | Nome completo |  Contribuição (%) |
|-------------|------------------|---------------------|
| 211062802 | [Nicollas Gabriel Oliveira Sousa ](https://github.com/Nicollaxs) | 16,6 |
| 200014226 | [Ana Luiza Borba de Abrantes](https://github.com/luabrantess) |  16,6 |
| 211030934 | [ARTUR DA SILVA PEREIRA](https://github.com/R2PX) | 16,6 |
| 222022064 | [CARLOS EDUARDO DE SOUSA PAZ](https://github.com/dudupaz) | 16,6 |
| 221031120 | [ARTHUR FONSECA VALE](https://github.com/arthurfonsecaa) | 16,6 |
| 221008211 | [JOSE FELIPE DUARTE GUEDES DE OLIVEIRA](https://github.com/Jose1277) | 16,6 |


## Referências

[1] ISO/IEC. (2011). ISO/IEC 25010:2011 Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - System and software quality models.

[2] UNB-MDS. (2025). DFemObras-2025.1 Project Repository. (Referência adaptada ao novo projeto).

[3] ONU. Os Objetivos de Desenvolvimento Sustentável no Brasil. https://brasil.un.org/pt-br/sdgs
