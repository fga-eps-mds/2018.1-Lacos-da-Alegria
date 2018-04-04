## Histórico de Revisão

| Data | Versão | Descrição | Autor |
| :------------- | :------------- | :------------- | :------------- |
| 21/03/2018 | 0.1  | Adicionado documento de metodologia | Lucas |
| 01/04/2018 | 0.2  | Refatorado documento  | Lucas  |

# Sumário

[1. Introdução](#1-introdução)

[2. Papéis](#2-papéis)

[3. Eventos](#3-eventos)

[4. Artefatos](#4-artefatos)

# 1. Introdução  

Este documento tem como objetivo definir e explicitar a metodologia utilizada para o desenvolvimento do aplicativo Intra Laços.
Serão utilizadas práticas do Framework Scrum com adaptações para incorporar outros papéis e práticas do Extreme Programming (XP) e Kanban.

# 2. Papéis

## 2.1 Scrum Master

O Scrum Master será assumido pelo Lucas Oliveira e possui as seguintes responsabilidades:

- [ ] Gerenciar Riscos;
- [ ] Garantir que os membros sigam a metodologia;
- [ ] Conduzir as reuniões e;
- [ ] Fazer o controle de qualidade.

## 2.2 Product Owner (PO)

O papel de PO é responsabilidade de todos os membros da gerência, cuja tarefas são:

- [ ] Gerenciar Backlog;
- [ ] Priorizar itens do Backlog;
- [ ] Garantir que o Backlog do Produto é visível, transparente e claro para todos os membros do time;
- [ ] Elaborar Estrutura Analitica do Projeto (EAP) e a Análise de Valor Agregado (EVM).
- [ ] Garantir que o Time de Desenvolvimento entende os itens do Backlog do Produto e;
- [ ] Elaborar o Roadmap do projeto.

## 2.3 Time de Desenvolvimento

O Time de Desenvolvimento é composto pelos membros Renan Schadt, João Vítor Morandi, Luciano dos Santos Silva	,
Rafael Makaha Gomes, Rômulo Vinícius e Sara Silva. Esses membros possuem a responsabilidade de:

- [ ]  Elaborar documento de visão;
- [ ]  Elaborar documento de arquitetura;
- [ ]  Elaborar documento de especificação suplementar;
- [ ]  Elaborar documento de guia de estilo;
- [ ]  Elaborar protótipos;
- [ ]  Entregar incrementos do produto;
- [ ]  Montar o Backlog da Sprint e;
- [ ]  Testar funcionalidades desenvolvidas.

## 2.4 Arquiteto

O papel de arquitetura é assumido pela Julliana do Couto, que deverá:

- [ ] Garantir que o time de desenvolvimento siga a arquitetura definida;
- [ ] Treinar time de desenvolvimento;
- [ ] Auxiliar time na modelagem do banco de dados;
- [ ] Auxiliar time na modelagem do diagrama de classes;
- [ ] Implementar o benchmark;
- [ ] Garantir que o código reflete os diagramas propostos e;
- [ ]  Prever possíveis mudanças arquiteturais.

## 2.5 DevOps

Os DevOps serão os membros Cauê Mateus e Luiz Guilherme. Estes terão as seguites responsabilidades:

- [ ] Instalar e configurar o ambiente;
- [ ] Auxiliar a equipe de desenvolvimento;
- [ ] Monitorar testes;
- [ ] Monitorar integração e deploy contínuo;
- [ ] Analisar Pull Requests e;
- [ ] Analisar Pull Requests;

## 2.2 Eventos

Ocorrem cinco eventos durante o desenvolvimento do projeto. São eles: Sprint, Encontros Diários e Planejamento, Revisão e Retrospectiva da Sprint.
Todos os eventos possuem um timebox, isto é, um tempo definido para que os eventos ocorram, que não deve ser ultrapassado e é gerenciado pelo Scrum Master.

# 3. Eventos
### 3.1 Sprint

A Sprint é um período de uma semana, iniciada nas quartas-feiras, em que um incremento de produto é criado.
Uma nova Sprint e logo após uma ser terminada.

Uma Sprint consiste de e contém Encontros Diários e Planejamento, Revisão e Retrospectiva da Sprint.

Uma Sprint pode ser cancelada antes de seu timebox, mas somente o PO tem autoridade para cancelar uma Sprint e isso ocorre quando seu objetivo se torna obsoleto.
Quando uma Sprint é cancelada todos os produtos "prontos" são revisados e se eles forem entregáveis, o PO pode aceitá-las.
As que não forem retornam para o Backlog do Produto.

### 3.2 Encontros Diários

Este é um evento com timebox de até 15 minutos em que cada membro do time deve responder três perguntas:

* O que eu fiz ontem que ajudou o time a cumprir o objetivo da Sprint?
* O que eu farei hoje para ajudar o time a cumprir o objetivo da Sprint?
* Existe algum problema me impedindo de alcançar o objetivo da Sprint?

Esses encontros têm o objetivo de alinhar a equipe sobre o andamento da Sprint e remover possíveis impedimentos e acontece nos seguintes horários:

* Segunda, terça, quinta e sexta-feiras às 22hrs via Discord;
* Sábados e domingos via GeekBot no Slack.

### 3.3 Planejamento da Sprint

O Planejamento da Sprint é quando o trabalho a ser elaborado na Sprint é definido.
O planejamento é feito por todos os membros em conjunto e possui um timebox de até uma hora.

Durante este evento o PO apresenta o objetivo da Sprint e os itens do Backlog do Produto que, se forem entregues, alcançará esse objetivo.
O número de itens selecionados é definido pelo Time de Desenvolvimento e somente ele pode avaliar o que pode ser completado na próxima Sprint.

No final do Planejamento da Sprint, o Time de Desenvolvimento deve ser capaz de explicar ao PO e ao Scrum Master como pretende trabalhar para cumprir o planejado.

Essa reunião ocorre às quarta-feiras 23hrs via Discord.


### 3.4 Revisão da Sprint

A Revisão da Sprint é realizada ao final da Sprint para inspecionar o incremento.
Durante essa reunião é discutido o que foi feito na Sprint, quais problemas ocorreram e como foram resolvidos, o que foi bem e o PO esclarece quais itens foram "prontos". A reunião tem duração máxima de 20 minutos e ocorre às quarta-feiras 22hrs.

### 3.5 Retrospectiva da Sprint

Ocorre após a Revisão da Sprint e tem como objetivo a auto avaliação do time e a criação de um plano de melhorias para a próxima reunião.
A Retrospectiva tem timebox de até 25 minutos e durante esse tempo o time aponta os pontos positivos, negativos e melhorias a serem aplicadas na próxima Sprint.

# 4. Artefatos

### 4.1 Backlog do Produto

O Backlog do Produto é uma lista de tudo que deve constar no produto.
Ela é mantida e ordenada pelo PO e este também é responsável pela clareza e entendimento de cada item.

### 4.2 Backlog da Sprint

O Backlog da Sprint é o conjunto de itens derivados do Backlog do Produto que vão juntos irão alcançar o objetivo da Sprint.
Sempre que um tarefa precisa ser realizada, esta é acrescentada ao Backlog da Sprint pelo Time de Desenvolvimento.

### 4.3 Incremento

O Incremento é a soma de todos os itens da Sprints definidos como "pronto" e o incremento das Sprints anteriores.
Ao término de uma Sprint um Incremento deve ser entregue, o que significa que ele é utilizável e atende a definição de pronto.

#### 4.3.1 Significado de Pronto

Uma história é considerada concluída (ou pronta) quando ela é testada, obedece as métricas definidas e a integração não traz prejuízos ao que já foi desenvolvido anteriormente.
