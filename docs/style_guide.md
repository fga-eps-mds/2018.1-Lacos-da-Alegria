# Histórico de revisões
|Data			|Versão		|Descrição			|Autor                   |
| ----------------------------| --------------------------- | ------------------------------------  | ----------------------|
|21/03/2018                 |1.0                             |Inserção da folha de estilo    |Renan e Rafael   |
|25/03/2018                 |1.1                             |Adição da guia de estilo do Angular e do Python   |Rômulo e João Vítor  |


# Sumário

[1. Objetivo](#1-objetivo)

[2. Organização do Documento](#2-organização-do-documento)

[3. Guia de Estilo Geral](#3-guia-de-estilo-geral)

* [3.1 Layout do Código](#31-layout-do-código)
* [3.2 Tabs ou espaços?](#32-tabs-ou-espaços)
* [3.3 Tamanho máximo da linha](#33-tamanho-máximo-da-linha)
* [3.4 Linhas em branco](#34-linhas-em-branco)
* [3.5 Codificação do Arquivo de Origem](#35-codificação-do-arquivo-de-origem)
* [3.6 Imports](#36-imports)
* [3.7 Espaços em branco](#37-espaços-em-branco)
* [3.8 Métodos](#38-métodos)
* [3.9 Comentários](#39-comentários)
* [3.10 Comentários em linha](#310-comentários-em-linha)
* [3.11 Nomenclatura](#311-nomenclatura)

[4. Guia de Estilo Angular](#4-guia-de-estilo-angular)

* [4.1 Nomenclatura](#41-nomenclatura)
* [4.2 Formatação](#42-formatação)
* [4.3 Imports](#43-imports)
* [4.4 Estrutura da aplicação](#44-estrutura-da-aplicação)
* [4.5 Components](#45-components)
* [4.6 Directives](#46-directives)
* [4.7 Services](#47-services)

[5. Referências](#5-referências)

# Guia de Estilo
## 1. Objetivo
<p align = "justify">Este documento tem por finalidade esclarecer as formas de implementação
do projeto. Aqui estarão expostas as maneiras de declarar de variáveis,
definir de métodos, escrever comentários, entre outros.</p>

## 2. Organização do Documento
<p align = "justify">O documento está dividido em três partes. As folhas de estilo utilizadas
são do Angular e Python. Os aspectos diferentes entre cada uma
destas duas folhas são especificados na segunda e terceira parte do
documento, na primeira parte são utilizados padrões que ambos seguem ou
alguma convenção feita pelo grupo.</p>

## 3. Guia de Estilo Geral

### 3.1 Layout do código

Use 4 espaços por nível de indentação.

<ul><li align = "justify">As linhas de continuação devem alinhar os elementos envolvidos verticalmente usando a linha implícita do Python unindo parênteses, colchetes e chaves ou usando um recuo deslocado.
<li align = "justify">Ao usar um travessão, não deve haver argumentos na primeira linha e deve-se usar recuo adicional para se distinguir claramente como uma linha de continuação.
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
<li align = "justify">O método de indentação mais recomendado é a utilização de espaços.
<li align = "justify">Tabs só devem ser usados para manter a consistência com um código já que começou a ser indentado com tabs.
</ul>

### 3.3 Tamanho máximo da linha

<ul>
<li align = "justify">O tamanho limite para todas as linhas do código é de 79 caracteres.
</ul>

### 3.4 Linhas em branco

<ul>
<li align = "justify">É recomendado envolver funções de nível superior e definições de classe com duas linhas em branco.
<li align = "justify">Definições de método dentro de uma classe são cercadas por uma única linha em branco.
<li align = "justify">Linhas em branco são usadas em funções para indicar seções lógicas.
</ul>

### 3.5 Codificação do Arquivo de Origem

<ul>
<li align = "justify">Código no núcleo de distribuição do Python deve sempre usar UTF-8 (ou ASCII no Python 2).
<li align = "justify">Arquivos que utilizam ASCII (no Python 2) ou UTF-8 (no Python 3) não devem ter uma declaração de codificação.
</ul>

### 3.6 Imports

<ul><li align = "justify">Imports devem ser sempre feitos em linhas separadas.</ul>

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
  <li align = "justify">Imports são sempre colocados no começo do arquivo, logo após qualquer comentário de módulo e docstrings e antes de globais de módulo e constantes.
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

### 3.8 Métodos

<ul align = "justify">
<li>Antes de cada método, faça uma síntese sobre esse, explicando seu objetivo, os parâmetros de entrada e o tipo de retorno do método.
</ul>

### 3.9 Comentários

<ul align = "justify">
<li>Comentários que contradizem o código são piores do que não comentar.
<li>Sempre priorize atualizar os comentários quando for mudar o código.
<li>Comentários devem ser frases completas e devem começar com letra maiúscula.
<li>Comentários devem ser escritos sempre em inglês.
</ul>

### 3.10 Comentários em linha

<ul align = "justify">
<li>Não escreva nada óbvio nos comentários na linha, pois eles podem ser desnecessários.
<li>Comece com # e um espaço em branco.
</ul>

### 3.11 Nomenclatura

<ul align = "justify">
<li>Nunca use L minúsculo, ‘o’ maiúsculo ou ‘i’ maiúsculo como variáveis, pois podem ser confundidas em algumas fontes com 0 e 1.</li>
<li>Nomes de classes, variáveis de tipo e excessões normalmente usam a convenção CapWords.</li>
<li>Nomes de funções, de variáveis globais e de métodos devem ser escritas em minúsculo, com palavras separadas por ‘\_’.</li>
<li>Sempre use ‘self’ como primeiro argumento para instanciar métodos e ‘cls’ como primeiro argumento para métodos de classes.</li>
<li>Utilize um ‘\_’ no começo de métodos não-públicos e para instanciar variáveis.</li>
<li>Nomes de constantes devem ser todas as letras maiúsculas com ‘\_’ separando as palavras.</li>
</ul>

## 4. Guia de Estilo Angular
### 4.1 Nomenclatura
<ul><li align = "justify">Classes e interfaces são nomeadas com Upper Camel Case.</ul>

    Ex: class MercadoFinanceiro {
        }

<ul><li align = "justify">Variáveis e métodos são feitos com Lower Camel Case.</ul>

    Ex: int mercadoFinanceiro;

<ul><li align = "justify">Nunca usar snake_case.</li></ul>

    Ex: int mercado_financeiro

<ul><li align = "justify">Variáveis devem possuir a sua feature e o seu tipo na sua declaração, separados por pontos.</ul>

    Ex: feature.type.ts

<ul><li align = "justify">Use os sufixos convencionais para cada tipo de arquivo.</ul>

    Ex : .component.ts, .directive.ts, .module.ts, .pipe.ts, .service.ts


<ul><li align = "justify">Evite criar nomes não convencionais. Sempre que possível, usar os tipos padrão.</ul>

    Ex: .service, .component, .pipe, .module

<ul><li align = "justify">Use prefixos personalizados para selecionar um componente, separados por hífen.</ul>

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

<ul align = "justify">
<li>Apenas um componente por arquivo.</li>
<li>Limitar os arquivos a 400 linhas de código.
<li>Definir funções pequenas, com no máximo 75 linhas.
</ul>

### 4.3 Imports

<ul align = "justify"><li>Deixe uma linha em branco entre importações de terceiros e importações de aplicações.
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

<ul align = "justify">
<li>Nomeie os arquivos de forma que seja fácil reconhecer seus conteúdos e suas funcionalidades.
<li>Coloque todos os códigos em uma pasta chamada src.
<li>Crie subpastas específicas para cada área.
</ul>

### 4.5 Components

<ul align = "justify"><li>Extraia templates e estilos para arquivos separados, quando estes possuem mais de 3 linhas.</ul>

    Ex: [component-name].component.html, [component-name].component.css

<ul align = "justify"><li>Especifique as URLs relativas aos componentes com o prefixo <b>./</b>.</ul>

```typescript
//Correto:
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

//Errado:
@Component({
  selector: 'toh-heroes',
  template: `
    <div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes | async" (click)="selectedHero=hero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
      <div *ngIf="selectedHero">
        <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      </div>
    </div>
  `,
  styles: [`
    .heroes {
      margin: 0 0 2em 0; list-style-type: none; padding: 0; width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
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

<ul align = "justify"><li>Use <b>@Input()</b< e <b>@Output()</b> para referenciar a propriedade da classe. Escreva na mesma linha.</ul>

```typescript
//Correto:
@Component({
  selector: 'toh-hero-button',
  template: `<button>{{label}}</button>`
})

export class HeroButtonComponent {
  @Output() change = new EventEmitter<any>();
  @Input() label: string;
}

//Errado:
@Component({
  selector: 'toh-hero-button',
  template: `<button></button>`,
  inputs: [
    'label'
  ],
  outputs: [
    'change'
  ]
})
export class HeroButtonComponent {
  change = new EventEmitter<any>();
  label: string;
}
```

<ul align = "justify"><li>Atributos e métodos devem ser instanciados em ordem alfabética, sendo que, em ambos os casos, os membros privados deverão vir antes dos públicos.</ul>

```typescript
//Correto:
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

//Errado
export class ToastComponent implements OnInit {

  private defaults = {
    title: '',
    message: 'May the Force be with you'
  };
  message: string;
  title: string;
  private toastElement: any;

  ngOnInit() {
    this.toastElement = document.getElementById('toh-toast');
  }

  // private methods
  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
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

<ul align = "justify"><li>Use diretivas quando tiver uma lógica de apresentação sem um template.</ul>

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

<ul align = "justify"><li>Use serviços para compartilhar dados e funcionalidades.</ul>

```typescript
export class HeroService {
  constructor(private http: Http) { }

  getHeroes() {
    return this.http.get('api/heroes')
      .map((response: Response) => <Hero[]>response.json());
  }
}
```
## 5. Referências

* [Python Style Guide](https://www.python.org/dev/peps/pep-0008/)
* [Angular Style Guide](https://angular.io/guide/styleguide)
