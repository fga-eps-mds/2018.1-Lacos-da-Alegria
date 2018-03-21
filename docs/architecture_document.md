##2. Representação da Arquitetura
###2.1. Arquitetura django REST
O django REST é um framework muito utilizado para a construção de APIs em plataforma Web. Praticamente todos os arquivos dessa arquitetura são em python e esses arquivos representam as classes do projeto. Por exemplo, um arquivo views.py contém tudo que uma pasta views teria no modelo arquitetural MVC.

###2.2. Arquitetura Ionic Framework
O Ionic é um framework front-end e open-source para desenvolvimento de aplicativos móveis híbridos escritos em html, css e JavaScript. Com ele é possível escrever o código da aplicação apenas uma vez para rodar no iPhone, Android e Windows Phone. i

O Ionic, através do Apache Cordova, ajuda na comunicação com as APIs (Application Program Interface) de cada Sistema Operacional Móvel  que, por sua vez, comunicam-se com um componente chamado Web View, usado por aplicativos nativos para visualização de páginas web dentro do contexto dos aplicativos móveis). O aplicativo Ionic funciona de forma embarcada dentro dessa Web View, que interpreta e renderiza nosso código html, css e JavaScript. 
![Cordova Apache](images/cordova.jpg)

O framework é baseado no AngularJS e por isso é necessário escrever diretivas do Angular e usar os seus módulos: services, controllers, routes, etc. 

O Ionic estiliza nossos componentes html para se parecer com os componentes nativos de cada plataforma móvel, simulando a experiência nativa do usuário final e usa esse ‘navegador’ para rodar os aplicativos e disponibiliza bibliotecas JavaScript para acesso do hardware e tecnologias nativas como câmera, GPS, Bluetooth, entre outros; além de que também é possível rodar essas aplicação em um navegador web.

A aplicação é empacotada em arquivos instaláveis para cada plataforma móvel que então passa a ficar disponível nas principais lojas de aplicativos móveis e ser distribuída para o público-alvo. 

##5. Visão de Implementação
A proposta da arquitetura MVC( Model, View, Controller) é fazer uma divisão em 3 camadas sobrepostas, de uma forma que o usuário só irá interagir com uma delas, no caso a View. Cada parte tem um valor diferente:

* Modelos (models) - Armazenamento de dados, definição dos estados das camadas e interpretação de requisições, que será controlada pelo Django Rest.
* Visão (views) - Controle de layout e definição de design, que será controlada pelo Ionic.
* Controles (controllers) - Tráfego de informações entre todas as camadas, entre o Django Rest e o Ionic Framework.


