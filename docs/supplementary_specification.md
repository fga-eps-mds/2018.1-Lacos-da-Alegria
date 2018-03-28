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
O sistema irá prover uma interface simples e minimalista, com design intuitivo e sem excesso de comandos, sendo fácil de ser utilizado e reduzindo o tempo necessário para realizar qualquer tarefa dentro da aplicação. Os princípios da interface seguem os padrões Material Design da Google, cuja maioria dos usuários estão familiarizados.

## 3.Confiabilidade
O aplicativo deverá funcionar 24 horas por dia, 7 dias por semana. Suportando uma grande quantidade de usuários logados e evitando qualquer tipo de mau funcionamento, como o fechamento abrupto do aplicativo, ou atraso no processamento das tarefas.

Como as posições das filas de espera e as informações pessoais do usuário não podem ser perdidas, as informações privadas do usuário devem ser inacessíveis por terceiros.

Os dados providos pelo aplicativo (como notificações e posição na fila) devem ser confiáveis e corretos.

## 4. Desempenho
O desempenho da aplicação tem muita dependência da conexão do usuário à Internet, além das características de hardware do dispositivo usado.

Outra influência no desempenho é a quantidade de acessos simultâneos ao aplicativo e o tráfego de requisições à API que o alimenta.

Devido à variabilidade das influências acima, não é possível estipular tempo de resposta e desempenho mínimos da aplicação.

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
É utilizado a Licença MIT, que concede permissões para usar,copiar, modificar, mesclar, publicar, distribuir, sublicenciar e vender.

## 11.  Observações Legais, de Direitos Autorais etc
Os usuários do software  não estarão sujeitos a nenhuma lei de direitos autorais, somente a um termo de aceitação da ONG Laços da Alegria.

## 12. Padrões Aplicáveis
Os padrões utilizados no projeto serão um guia de estilo para a padronização e qualidade, arquitetura do Django Rest e Ionic para modularização e o UML para Modelagem.

## 13. Referências
CYSNEIROS, Luiz Mareio; LEITE, Julio Cesar. Definindo Requisitos Não Funcionais. Disponível em: http://www.lbd.dcc.ufmg.br/colecoes/sbes/1997/004.pdf. Acesso em: 25 mar. 2018.

TEMPLATE UTILIZADO PARA ELABORAÇÃO DO DOCUMENTO. Disponível em: http://www.funpar.ufpr.br:8080/rup/webtmpl/templates/req/rup_sspec.htm. Acesso em: 24 mar. 2018.
