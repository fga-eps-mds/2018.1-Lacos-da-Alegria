# Histórico de revisões
|Data			|Versão		|Descrição			|Autor                   |
| ----------------------------| --------------------------- | ------------------------------------  | ----------------------|
|21/03/2018                 |1.0                             |Inserção da folha de estilo    |Renan e Rafael   |
|25/03/2018                 |1.1                             |Adição da guia de estilo do Angular e do Python   |Rômulo e João Vítor  |


# Guia de Estilo
## 1. Objetivo
Este documento tem por finalidade esclarecer as formas de implementação
do projeto. Aqui estarão expostas as maneiras de declarar de variáveis,
definir de métodos, escrever comentários, entre outros.

## 2. Organização do Documento
O documento está dividido em três partes. As folhas de estilo utilizadas
são do Angular e Python. Os aspectos diferentes entre cada uma
destas duas folhas são especificados na segunda e terceira parte do
documento, na primeira parte são utilizados padrões que ambos seguem ou
alguma convenção feita pelo grupo.

## 3. Guia de Estilo Geral do Código (Python)

### 3.1 Layout do código

Use 4 espaços por nível de indentação.

<ul><li>As linhas de continuação devem alinhar os elementos envolvidos verticalmente usando a linha implícita do Python unindo parênteses, colchetes e chaves ou usando um recuo deslocado.
<li>Ao usar um travessão, não deve haver argumentos na primeira linha e deve-se usar recuo adicional para se distinguir claramente como uma linha de continuação.
</ul>

```python

Exemplo:

Correto:
	foo = long_function_name(var_one, var_two,
                       			    var_three, var_four)

Errado:
	foo = long_function_name(var_one, var_two,
            var_three, var_four)



Correto:
    def long_function_name(
    		var_one, var_two, var_three,
    		var_four):
		  print(var_one)


Errado:
	def long_function_name(
    		var_one, var_two, var_three,
    		var_four):
		  print(var_one)
```

### 3.2 Tabs ou espaços?

<ul>
<li>O método de indentação mais recomendado é a utilização de espaços.
<li>Tabs só devem ser usados para manter a consistência com um código já que começou a ser indentado com tabs.
</ul>

### 3.3 Tamanho máximo da linha

<ul>
<li>O tamanho limite para todas as linhas do código é de 79 caracteres.
</ul>

### 3.4 Linhas em branco

<ul>
<li>É recomendado envolver funções de nível superior e definições de classe com duas linhas em branco.
<li>Definições de método dentro de uma classe são cercadas por uma única linha em branco.
<li>Linhas em branco são usadas em funções para indicar seções lógicas.
</ul>

### 3.5 Codificação do Arquivo de Origem

<ul>
<li>Código no núcleo de distribuição do Python deve sempre usar UTF-8 (ou ASCII no Python 2).
<li>Arquivos que utilizam ASCII (no Python 2) ou UTF-8 (no Python 3) não devem ter uma declaração de codificação.
</ul>

### 3.6 Imports

<ul><li>Imports devem ser sempre feitos em linhas separadas.</ul>

    Exemplo:
    		Correto:
    import os
         import sys
    	Errado:
    import sys, os

<ul>
<li>Porém, também está correto: </ul>

    from subprocess import Popen, PIPE

<ul>
  <li>Imports são sempre colocados no começo do arquivo, logo após qualquer comentário de módulo e docstrings e antes de globais de módulo e constantes.
  <li>Imports devem ser agrupados na ordem:
  <li>imports da biblioteca padrão.
  <li>imports de terceiros relacionados.
  <li>imports de aplicativos e bibliotecas locais.
</ul>

### 3.7 Espaços em branco

<ul>
<li>Evite sempre espaços em branco excessivos no código.
</ul>

    Exemplo:
  		Correto:
  			spam(ham[1], {eggs: 2})
  		Errado:
  			spam( ham[ 1 ], { eggs: 2 } )

### 3.8 Comentários

<ul>
<li>Comentários que contradizem o código são piores do que não comentar.
<li>Sempre priorize atualizar os comentários quando for mudar o código.
<li>Comentários devem ser frases completas e devem começar com letra maiúscula.
<li>Comentários devem ser escritos sempre em inglês.
</ul>

### 3.9 Comentários na linha

<ul>
<li>Não escreva nada óbvio nos comentários na linha, pois eles podem ser desnecessários.
<li>Comece com # e um espaço em branco.
</ul>

### 3.10 Nomenclatura

<ul>
<li>Nunca use L minúsculo, ‘o’ maiúsculo ou ‘i’ maiúsculo como variáveis, pois podem ser confundidas em algumas fontes com 0 e 1.</li>
<li>Nomes de classes, variáveis de tipo e excessões normalmente usam a convenção CapWords.</li>
<li>Nomes de funções, de variáveis globais e de métodos devem ser escritas em minúsculo, com palavras separadas por ‘\_’.</li>
<li>Sempre use ‘self’ como primeiro argumento para instanciar métodos e ‘cls’ como primeiro argumento para métodos de classes.</li>
<li>Utilize um ‘\_’ no começo de métodos não-públicos e para instanciar variáveis.</li>
<li>Nomes de constantes devem ser todas as letras maiúsculas com ‘\_’ separando as palavras.</li>
</ul>

