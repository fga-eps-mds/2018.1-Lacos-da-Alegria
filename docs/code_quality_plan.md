# Plano de gerênciamento de qualidade de código

|    Data    | Versão |               Descrição               |                 Autor                |
| :--------: | :----: | :-----------------------------------: | :----------------------------------: |
| 14/05/2018 |  0.0.1 | Primeira Versão do Plano de Qualidade de código | Luciano dos Santos && Luiz guilherme |

## Introdução

Este documento visa esclarecer entre os envolvidos no projeto Laços da Alegria os critérios, ferramentas e o planejamento da qualidade de código do projeto.

"Qualidade de software é a conformidade com requisitos funcionais e de desempenho explicitamente declarados, padrões de desenvolvimento explicitamente documentados e características implícitas, que são esperadas em todo software desenvolvido profissionalmente" (PRESSMAN, 2002).

## Planejamento

Visando uma boa qualidade de código do projeto, alguns padrões de qualidade de corpos de conhecimentos e de normas foram definidos, tanto quanto as ferramentas que serão utilizadas para monitorar essa qualidade.

### Métricas

Para a análise das métricas foram estabelecidos alguns critérios a serem seguidos. Quanto mais próximo do bom melhor.

|                    Métrica                    | Bom          | Regular      | Crítico       |
| :-------------------------------------------: | ------------ | ------------ | ------------- |
|            Complexidade ciclomática           | 0 a 20       | 21 a 60      | acima de 60   |
|              Duplicação de código             | 0% a 1.5%    | 1.6% a 2.9%  | acima de 3%   |
| Quebras no padrão de código/Flake8/ESLint ES6 | 0 a 5        | 6 a 10       | acima de 11   |
|              Cobertura de código              | acima de 90% | acima de 80% | abaixo de 80% |

-   [ESLint ES6](https://eslint.org/docs/user-guide/configuring): Folha de estilo do python para o frontend.
-   [Flake8](http://flake8.pycqa.org/en/latest/): Folha de estilo do python para o backend.

### Monitoramento

O monitoramento da qualidade de código do projeto, além de garantir a entrega com qualidade desejada do produto, também garante um maior controle de um todo durante o seu desenvolvimento. Através do monitoramento, com o auxilio de ferramentas para isso, e medição de alguns aspectos podemos adequar os processos durante os tempo e assim conseguimos uma rastreabilidade melhor.

### Ferramentas

-   [Code Climate](https://codeclimate.com/github/fga-gpp-mds/2018.1-Lacos-da-Alegria): O Code Climate permite que as organizações assumam o controle de sua qualidade de código, incorporando cobertura de teste totalmente configurável e dados de manutenção em todo o fluxo de trabalho de desenvolvimento.

-   [Jasmine](https://jasmine.github.io/pages/docs_home.html): Jasmine é um framework de testes que ajuda a assegurar se o software está contemplando todas as funcionalidades.

-   [Karma](https://karma-runner.github.io/2.0/index.html): Karma é um test runner que executa os testes criados pelo jasmine.

-   [Pytest](https://docs.pytest.org/en/latest/): O pytest é uma ferramenta de teste Python completa e madura que ajuda você a escrever programas melhores.

-   [Travis](https://travis-ci.org/fga-gpp-mds/2018.1-Lacos-da-Alegria): O Travis é uma ferramenta de teste. Ela possibilita saber se o nossa aplicação está dentro do esperado ou não.
