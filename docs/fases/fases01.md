# Avaliação da Qualidade de Produto de Software: DFemObras

**Disciplina:** FGA315 - Qualidade de Software 1  
**Professora:** Cristiane Ramos  


## 1. Propósito da Avaliação e Uso Pretendido dos Resultados

O propósito desta avaliação de qualidade é analisar e propor melhorias para o projeto DFemObras, um sistema de transparência e acompanhamento de obras públicas do Distrito Federal. Os principais crtérios levados em consideração pelo grupo foram Funcionalidade, Manutenabilidade e Eficiência.

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

## 5. Seleção e Priorização de Características


| Característica   | Impacto | Risco-Esforço | Prioridade |
|------------------|---------|--------------|------------|
| Funcionalidade   | Alto    | Médio        | 1          |
| Manutenabilidade   | Alto    | Alto         | 2          |
| Eficiência   | Alto    | Alto         | 2          |

## 6. Escopo, Profundidade e Objetos de Avaliação

O escopo desta avaliação se concentra na análise da Funcionalidade (capacidade de realizar consultas e exibir informações corretas) e Manutenabilidade do DFemObras-2025.1 em sua versão estável mais recente.

- **Ambiente de Avaliação:** A avaliação será realizada em ambiente Web (acesso via navegadores Desktop e Mobile).
- **Profundidade da Análise:** Incluirá a execução de casos de teste, análise de relatórios de erros (se disponíveis) e uma inspeção da aderência das funcionalidades aos requisitos iniciais.
- **Fases Futuras:** Poderão expandir o escopo para incluir características como Usabilidade, Segurança, entre outros.

## 7. ODS Relacionados

O projeto DFemObras contribui para o seguinte Objetivo de Desenvolvimento Sustentável (ODS) da ONU, focando na melhoria da governança e inclusão digital:

- **ODS 9 (Indústria, Inovação e Infraestrutura):** Utiliza a inovação tecnológica para criar uma infraestrutura de dados digitais aberta e acessível, melhorando o monitoramento e a eficiência na execução de obras.


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