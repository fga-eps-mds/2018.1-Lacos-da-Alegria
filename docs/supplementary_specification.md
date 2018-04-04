# Documento de Especificação Suplementar

## Histórico de Versão
| Data | Versão | Descrição | Autor |
| :--- | :--- | :--- | :--- |
| 25/03 | 0.1 | Adicionados tópicos 1, 3 e 4     | Renan Schadt |
| 25/03 | 0.2 | Adicionados tópicos de 5 à 8    | Sara Silva |
| 25/03 | 0.3 | Adicionados tópicos de 9 à 13  | Luciano Dos Santos |
| 26/03 | 0.4 | Revisão tópicos 1 à 13 | Julliana do Couto Almeida e Cauê Mateus |
| 27/03 | 0.5 | Correção de erros ortográficos e expansão do tópico 1.3 | Renan Schadt |
| 27/03 | 0.6 | Complemento dos tópicos 10 e 11  | Luciano Dos Santos |
| 28/03 | 0.7 | Revisão tópicos 5 e 7   | Sara Silva |
| 28/03 | 1.0 | Revisão final | Renan Schadt |
| 04/04 | 1.1 | Adicionados requisitos tópicos 2, 3 e 4 | Renan Schadt |

# Sumário
[1. Introdução](#1-introdução)

* [1.1 Finalidade](#11-finalidade)
* [1.2 Escopo](#12-escopo)
* [1.3 Definições, Acrônimos e Abreviações](#13-definições-acrônimos-e-abreviações)

[2. Usabilidade](#2-usabilidade)

* [2.1 Requisitos de Usabilidade](#21-requisitos-de-usabilidade)

[3. Confiabilidade](#3-confiabilidade)

* [3.1 Requisitos de Confiabilidade](#31-requisitos-de-confiabilidade)

[4. Desempenho](#4-desempenho)

* [4.1 Requisitos de Desempenho](#41-requisitos-de-desempenho)

[5. Suportabilidade](#5-suportabilidade)

[6. Restrições de Design](#6-restrições-de-design)

[7. Requisitos de Sistema de Ajuda e de Documentação de Usuário On-line](#7-requisitos-de-sistema-de-ajuda-e-de-documentação-de-usuário-on-line)

[8. Componentes Comprados](#8-componentes-comprados)

[9. Interfaces](#9-interfaces)

* [9.1 Interfaces com o Usuário](#91-interfaces-com-o-usuário)
* [9.2 Interfaces de Hardware](#92-interfaces-de-hardware)
* [9.3 Interface de Software](#93-interface-de-software)
* [9.4 Interfaces de Comunicação](#94-interfaces-de-comunicação)


[10. Requisitos de Licenciamento](#10-requisitos-de-licenciamento)

[11. Observações Legais, de Direitos Autorais etc](#11-observações-legais-de-direitos-autorais-etc)

[12. Padrões Apicáveis](#12-padrões-aplicáveis)

[13. Referências](#13-referências)

## 1. Introdução
### 1.1 Finalidade
De acordo com Luiz Cysneiros e Julio Leite, requisitos não funcionais (RNFs) são obrigatórios para a construção de um software de qualidade; entre eles estão: facilidade de uso, desempenho, clareza de informações e outros. Este documento tem por função capturar os requisitos mencionados acima, relacionados ao aplicativo Laços da Alegria a ser desenvolvido pelo grupo.
### 1.2 Escopo
Este artefato abrange requisitos de usabilidade, confiabilidade, desempenho e suportabilidade. Além disso, apresenta as interfaces do sistema, restrições de design, requisitos de licenciamento, observações legais e padrões aplicáveis.
### 1.3 Definições, Acrônimos e Abreviações
| Nome | Noção | Impacto |
| :--- | :--- | :--- |
| Hardware | Componentes físicos de um eletrônico | Determina o desempenho de um dispositivo |
| API | Interface de Programação de Aplicativos | Auxilia no desenvolvimento através do fornecimento de padrões e rotinas de programação, permitindo a construção de aplicativos |
| Android | Sistema Operacional Mobile da Google | Fornece um conjunto de funcionalidades e ferramentas úteis ao desenvolvimento, integração completa do Android com o aplicativo é fundamental para o seu funcionamento |
| IOS | Sistema Operacional Mobile da Apple | Fornece um conjunto de funcionalidades e ferramentas úteis ao desenvolvimento, integração completa do IOS com o aplicativo é fundamental para o seu funcionamento |
| Interface | Ambiente virtual gráfico | Fundamental para a interação do usuário com o aplicativo |
| Material Design | Linguagem de Design Google | Utiliza animações, transições responsivas e preenchimentos com o objetivo de dar uma identidade visual elegante e minimalista a um aplicativo |
| HTML | HyperText Markup Language | Linguagem de marcação usada como base na construção de interfaces web |
| CSS | Cascading Style Sheets | Adicionar refinamento visual a páginas HTML |
| Ionic | Framework open-source para frontend | Entrega ferramentas e serviços para a criação de aplicativos híbridos (mobile-web) |
| JavaScript | Linguagem de programação interpretada baseada em ECMAScript | Fundamental para a criação da interface de interação com o usuário |

## 2. Usabilidade

### 2.1 Requisitos de Usabilidade
**[RU01] Interface simples e minimalista**
O sistema deverá prover uma interface simples e minimalista, com design intuitivo e sem excesso de comandos, sendo fácil de ser utilizado e reduzindo o tempo necessário para realizar qualquer tarefa dentro da aplicação. Os princípios da interface seguirão os padrões Material Design da Google, cuja maioria dos usuários estão familiarizados.

**Importância:** Essencial.

**[RU02] Pequena curva de aprendizado**
Ao entrar pela primeira vez, o sistema irá mostrar uma tela ao usuário dando dicas e falando sobre as funcionalidades principais do aplicativo, para aumentar a velocidade do usuário ao utilizar a aplicação.

**Importância:** Relevante.

## 3. Confiabilidade

### 3.1 Requisitos de Confiabilidade
**[RC01] Disponibilidade ampla**
O aplicativo deverá funcionar corretamente por 95% do tempo, nos 7 dias da semana. Suportando uma grande quantidade de usuários logados e evitando qualquer tipo de mau funcionamento, como o fechamento abrupto do aplicativo, ou atraso no processamento das tarefas.

**Importância:** Relevante.

**[RC02] Informações pessoais seguras**
Como as posições das filas de espera e as informações pessoais do usuário não podem ser perdidas, as informações privadas do usuário devem ser inacessíveis por terceiros. Somente o nome, "nome de palhaço" e o telefone do usuário serão exibidos, para comunicação entre os participantes.

**Importância:** Essencial.

**[RC03] Confiabilidade das informações**
Os dados providos pelo aplicativo (como notificações e posição na fila) devem ser confiáveis e corretos.

**Importância:** Essencial.

**[RC04] Tempo Médio Entre Falhas (MTBF)**
O tempo médio entre falhas, é um cálculo realizado utilizando o tempo total do funcionamento, o tempo total sem funcionamento e o número de falhas. Só é possível ter valores exatos quando a aplicação já está quase lançada. Atualizaremos com os dados no pré-lançamento.

**Importância:** Relevante.

**[RC05] Tempo Médio Para Reparo (MTTR)**
O tempo médio para reparo se assemelha ao MTBF, porém o intuito é entender quanto tempo será necessário para reparar os erros encontrados no sistema. O cálculo utiliza o total de horas do sistema sem funcionamento e o número de falhas encontradas. Atualizaremos com os dados no pré-lançamento.

**Importância:** Relevante.

**[RC06] Taxa máxima de erros ou defeitos**
Todo o processo de desenvolvimento é testado para evitar qualquer falha e exterminar erros fatais para o maior número de aparelhos compatíveis com o sistema, apesar dos esforços para combatê-los, erros existem. A taxa máxima de erros no nosso projeto é de 5%, com uma margem de erro de 2%, possuindo assim, uma taxa máxima de 7% do tempo total de execução indisponível.

**Importância:** Relevante.

## 4. Desempenho

### 4.1 Requisitos de Desempenho
**[RD01] Acesso constante a internet**
O aplicativo precisa de acesso constante a internet, suportando apenas quedas rápidas, pois a autenticação é feita a cada requisição do usuário.

**Importância:** Essencial.

**[RD02] Armazenamento interno disponível**
O usuário precisa de armazenamento na memória interna do celular e conexão com a internet para poder baixar o aplicativo.

**Importância:** Essencial.

**[RD03] Tempo de resposta de uma transação**
O tempo de resposta a uma transição tem muita dependência da conexão do usuário à Internet, além das características de hardware do dispositivo usado. Outra influência é a quantidade de acessos simultâneos ao aplicativo e o tráfego de requisições à API que o alimenta. Devido à variabilidade das influências acima, não é possível estipular uma janela de tempo curta para as transações, o ideal é que o tempo de resposta fique abaixo de 2 segundos.

**Importância:** Relevante.

## 5. Suportabilidade
O Laços da Alegria terá suporte apenas em dispositivos com versões superiores a 5.0 do Android ou 9.0 do IOS e que tenham acesso à internet, essa restrição é baseada nos requerimentos das tecnologias usadas para o desenvolvimento do projeto.

## 6. Restrições de Design
A aplicação mobile deverá ser responsiva, ou seja, seu design deve se adaptar ao tamanho da tela do dispositivo que o usuário estiver utilizando.

A escolha de cores para aplicação tem o objetivo de proporcionar emoções positivas ao usuário para ir de acordo com a visão e o objetivo da Laços da Alegria, descritos no Documento de Visão.

A  disposição dos elementos e funcionalidades nas telas  do aplicativo foram feitas de uma forma que o usuário tenha facilidade de usá-lo e tenha clareza da utilidade de cada elemento.

## 7. Requisitos de Sistema de Ajuda e de Documentação de Usuário On-line
O aplicativo terá ferramentas de ajuda ao usuário como cards ou mensagens auxiliares contendo instruções ou dicas de uso. Esse sistema de ajuda será critério de aceitação nas histórias de usuário.

## 8. Componentes Comprados
Para o desenvolvimento do software não será adquirido nenhum componente.

## 9. Interfaces
### 9.1 Interfaces com o Usuário
O usuário irá visualizar a interface a partir do aplicativo mobile.
### 9.2 Interfaces de Hardware
O hardware deve ser capaz de utilizar a conexão com a internet para atender as necessidades de um software online.
### 9.3 Interface de Software
A interface do software será desenvolvida com base em HTML/CSS e JavaScript.
### 9.4 Interfaces de Comunicação
A comunicação com o usuário será feita através de notificações.

## 10. Requisitos de Licenciamento
A licença é um documento que define algumas ações autorizadas ou proibidas. Dentro do projeto é utilizado a Licença MIT, que é uma licença permissiva, ou seja que concede permissões para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e vender.

## 11. Observações Legais, de Direitos Autorais etc
Os usuários do software deverão concordar com a licença MIT que concede uma série de permissões sobre o aplicativo para uso de terceiros. Além de concorda com o termo de aceitação da ONG Laços da Alegria para utilizar o serviço do aplicativo.

## 12. Padrões Aplicáveis
Os padrões utilizados no projeto serão um guia de estilo para a padronização e qualidade, arquitetura do Django Rest e Ionic para modularização e o UML para Modelagem.

## 13. Referências
CYSNEIROS, Luiz Mareio; LEITE, Julio Cesar. Definindo Requisitos Não Funcionais. Disponível em: http://www.lbd.dcc.ufmg.br/colecoes/sbes/1997/004.pdf. Acesso em: 25 mar. 2018.

TEMPLATE UTILIZADO PARA ELABORAÇÃO DO DOCUMENTO. Disponível em: http://www.funpar.ufpr.br:8080/rup/webtmpl/templates/req/rup_sspec.htm. Acesso em: 24 mar. 2018.
