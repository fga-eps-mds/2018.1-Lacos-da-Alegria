# Histórico de revisões
|Data			|Versão		|Descrição			|Autor                   |
| ----------------------------| --------------------------- | ------------------------------------  | ----------------------|
|21/03/2018                 |1.0                             |Inserção da folha de estilo    |Renan e Rafael   |
|25/03/2018                 |1.1                             |Adição da guia de estilo do Angular e do Python   |Rômulo e João Vítor  |


# Sumário

<ol><li> Objetivo</li>
<li> Organização do documento</li>
<li> Guia de Estilo Geral</li>
	<ol>
	<li>Layout do Código</li>
	<li>Tabs ou espaços?</li>
	<li>Tamanho máximo da linha</li>
	<li>Linhas em branco</li>
	<li>Codificação do arquivo de origem</li>
	<li>Imports</li>
	<li>Espaços em branco</li>
	<li>Comentários</li>
	<li>Comentários em linha</li>
	<li>Nomenclatura</li>
		</ol>
<li> Guia de estilo Angular</li>
	<ol>
	<li>Nomenclatura</li>
	<li>Formatação</li>
	<li>Imports</li>
	<li>Estrutura de aplicação</li>
	<li>Components</li>
	<li>Directives</li>
	<li>Services</li>
	</ol>
<li> Referências</li>


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

## 3. Guia de Estilo Geral

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

## 4. Guia de Estilo Angular
### 4.1 Nomenclatura
<ul><li>Classes e interfaces são nomeadas com Upper Camel Case.</ul>

    Ex: class MercadoFinanceiro {
        }

<ul><li>Variáveis e métodos são feitos com Lower Camel Case.</ul>

    Ex: int mercadoFinanceiro;

<ul><li>Nunca usar snake_case.</li></ul>

    Ex: int mercado_financeiro

<ul><li>Variáveis devem possuir a sua feature e o seu tipo na sua declaração, separados por pontos.</ul>

    Ex: feature.type.ts

<ul><li>Use os sufixos convencionais para cada tipo de arquivo.</ul>

    Ex : .component.ts, .directive.ts, .module.ts, .pipe.ts, .service.ts


<ul><li>Evite criar nomes não convencionais. Sempre que possível, usar os tipos padrão.</ul>

    Ex: .service, .component, .pipe, .module

<ul><li>Use prefixos personalizados para selecionar um componente, separados por hífen.</ul>

```typescript
//Correto:
@Component({
  selector: 'admin-users'
})
export class UsersComponent {}

//Errado:
@Component({
  selector: 'users'
})
export class UsersComponent {}
```
<ul><li>Use prefixos personalizados para selecionar diretivas, em Lower Cammel Case.</ul>

```typescript
//Correto:
@Directive({
  selector: '[tohValidate]'
})
export class ValidateDirective {}

//Errado:
@Directive({
  selector: '[validate]'
})
export class ValidateDirective {}
```

<ul><li>Os testes recebem o mesmo nome dos arquivos que ele testa, adicionando o sufixo <b>.spec</b>.</ul>

    Ex: heroes.component.spec.ts, filter-text.service.spec.ts

### 4.2 Formatação

<ul>
<li>Apenas um componente por arquivo.</li>
<li>Limitar os arquivos a 400 linhas de código.
<li>Definir funções pequenas, com no máximo 75 linhas.
</ul>

### 4.3 Imports

<ul><li>Deixe uma linha em branco entre importações de terceiros e importações de aplicações.
<li>Liste as linhas de importação em ordem alfabética, pelo nome do módulo.
<li>Liste as importações de símbolos sem estrutura em ordem alfabética.
</ul>

```typescript

//Correto:
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Hero } from './hero.model';
import { ExceptionService, SpinnerService, ToastService } from '../../core';

//Errado:
import { ExceptionService, SpinnerService, ToastService } from '../../core';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
```

### 4.4 Estrutura da aplicação

<ul><li>Nomeie os arquivos de forma que seja fácil reconhecer seus conteúdos e suas funcionalidades.
<li>Coloque todos os códigos em uma pasta chamada src.
<li>Crie subpastas específicas para cada área.
</ul>

### 4.5 Components

<ul><li>Extraia templates e estilos para arquivos separados, quando estes possuem mais de 3 linhas.</ul>

    Ex: [component-name].component.html, [component-name].component.css

<ul><li>Especifique as URLs relativas aos componentes com o prefixo <b>./</b>.</ul>

```typescript
@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:  ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
```

<ul><li>Use <b>@Input()</b< e <b>@Output()</b> para referenciar a propriedade da classe. Escreva na mesma linha.</ul>

```typescript
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})

export class HeroButtonComponent {
  @Output() change = new EventEmitter<any>();
  @Input() label: string;
}
```

<ul><li>Atributos e métodos devem ser instanciados em ordem alfabética, sendo que, em ambos os casos, os membros privados deverão vir antes dos públicos.</ul>

```typescript
export class ToastComponent implements OnInit {
  // public properties
  message: string;
  title: string;

  // private fields
  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  private toastElement: any;

  // public methods
  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  private show() {
    console.log(this.message);
    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;
    window.setTimeout(() => this.hide(), 2500);
  }
}
```

### 4.6 Directives

<ul><li>Use diretivas quando tiver uma lógica de apresentação sem um template.</ul>

```typescript
@Directive({
  selector: '[tohHighlight]'
})

export class HighlightDirective {
  @HostListener('mouseover') onMouseEnter() {
    // do highlight work
  }
}
```

### 4.7 Services

<ul><li>Use serviços para compartilhar dados e funcionalidades.</ul>

```typescript
export class HeroService {
  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get('api/heroes')
      .map((response: Response) => <Hero[]>response.json());
  }
}
```
## 5.0 Referências

<ul>
<li>Python Style Guide - https://www.python.org/dev/peps/pep-0008/
<li>Angular Style Guide - https://angular.io/guide/styleguide
</ul>
