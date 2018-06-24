## Relatório GQM
Esse documento tem objetivo de descrever medições do projeto “Laços da Alegria” segundo a método GQM(Goal-Question-Metric). O foco desse trabalho é  de performance e desempenho apresentados pela ferramenta disposta no android studio.


# GQM
## 1. Objetivos
O projeto Laços da alegria é um projeto voluntariado, por isso o objetivo escolhido como prioritário é a usabilidade, afinal um software mais fácil de usar gera interesse na comunidade de conhecer o trabalho da ONG, e assim a comunidade cresce cada vez mais. Pensando nisso, foi analisado o grafo de transparência de software de Claudia Cappelli e visto a complexidade do mesmo ao tratar de usabilidade, foi escolhido atacar o nó de desempenho como ilustra a tabela 1.

|Analisar            |o software Laços da Alegria|
|--------------------|---------------------------|
|De forma a          |Melhorar                   |
|O                   |Desempenho                 |
|Do ponto de vista do|Usuário                    |
|No contexto da      |ONG Laços da Alegria       |
<center>Tabela 1 - Objetivo desempenho de software
</center>

## 2. Questões
Com intuito de esclarecer as medições a serem utilizadas, seguindo o objetivo descrito no tópico anterior que a ONG deseja alcançar, foram definidas as seguintes questões:  
Qual é a qualidade da experiência de usuário?
Qual é o tempo de carregamento das páginas? 
Como evitar travamentos e falhas ?
Quais elementos fazem o aplicativo gastar bateria?
	
## 3. Métricas

<table>
  <tbody><tr>
    <th colspan="4">Tabela de Métricas</th>
  </tr>
 
 <tr>
 </tr>
<tr>
    <th colspan="1">Principal</th>
   <td colspan="2"> Nome 
  </td>
  <td colspan="2"> Objetivos 
  </td>
</tr>
<tr>
    <th >Desempenho</th>
   <td  center> 
      <li> Tempo de resposta </li>
      <li> Travamento do software </li>
      <li> Monitorar uso da bateria</li>
  </td>

  <th ></th>
   <td  center> 
      <li> Medir o tempo para completar uma tarefa em específico. </li>Co-authored-by:
      <li> Inspecionar o consumo da CPU </li>
      <li> Coletar dados da bateria no dispositivo android</li>
  </td>
</tr>

</table>

## 4. Dados Coletados e resultados
## 4.1. Ferramenta	
Benchmark tem papel de estimular mudanças organizacionais para melhorar o desempenho do projeto através dos resultados dos indicadores. Nesse contexto, foi utilizado a IDE android-studio, trata-se de um ambiente integrado para desenvolvimento de software. A ferramenta android studio possui o recurso de gerar indicadores de performance e desempenho, e é sobre indicadores como esses que trataremos neste documento. 

## 4.2 Resultados
<h2><center>Funcionalidade: Login</center></h2>

|Medição    |	 Tempo Inicial|	Tempo Final|	Tempo de Execução|	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|-----------|-----------------|------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1	        |00:01:46	      |00:01:48	   |0:00:02              |	3.4                   |	2.7                  |178.2                   |	11,00%        |
|2	        |00:00:27	      |00:00:28    |0:00:01              |	2.7                   |	3.7                  |178.1                   |	13,50%        |
|3	        |00:00:35	      |00:00:36    |0:00:01              |	2.8                   |	3.5                  |183.3                   |	7,80%         |

<h2><center>Funcionalidade: Câmera</center></h2>

|Medição    |	 Tempo Inicial|	Tempo Final|	Tempo de Execução|	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|-----------|-----------------|------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1	        |0:00:44	      |0:00:47     |0:00:03              |	-                     |	-                    |256.4                   |	15,90%        |
|2	        |00:03:04	      |00:03:08    |0:00:04              |	-                     |	-                    |258.4                   |	17,30%        |
|3	        |00:01:51	      |00:01:56    |0:00:05              |	-                     |	-                    |264.4                   |	25,60%        |


<h2><center>Funcionalidade: Início da Aplicação</center></h2>

|Medição    |	 Tempo Inicial|	Tempo Final|	Tempo de Execução|	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|-----------|-----------------|------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1	        |0:00:03	      |0:00:05     |0:00:02              |	-                     |	-                    |145.1                   |	16,60%        |
|2	        |00:00:01	      |00:00:04    |0:00:03              |	-                     |	-                    |142.9                   |	26,00%        |
|3	        |00:00:01	      |00:00:04    |0:00:03              |	-                     |	-                    |145.2                   |	22,70%        |

<h2><center>Funcionalidade: Cadastro</center></h2>

|Medição    |	 Tempo Inicial  |	Tempo Final    |	Tempo de Execução  |	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|-----------|-----------------|----------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1          |	0:01:08	        |0:01:10         |	0:00:02            |	3.6                   | 4.5                  |	191	                  | 6.3%          |
|2	        |00:00:58	        |00:01:00        |	0:00:02            |	3.6                   |	4.4	                 |196.4                   | 5.7%          |
|3	        |00:00:43         |00:00:46	       |  0:00:03            |	3.8                   |	4.1	                 | 192.2	                | 6.1%          |



<h2><center>Funcionalidade: Cadastro</center></h2>

|Medição    |	 Tempo Inicial  |	Tempo Final    |	Tempo de Execução  |	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|-----------|-----------------|----------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1          |	0:10:08         |	0:10:09        |	0:00:01            |	1.7                   |	1.7                  |	134	                  | 6,00%         |
|2          |	00:05:34	      | 00:05:35       |  0:00:01	           |  1.6                   |	1.8	                 |  152.5                 |	5.8%          |
|3          |	00:07:22        |	00:07:24       |	0:00:02	           |  1.9                   |	2,00                 |	144.9                 |	5.9%          |



<h2><center>Funcionalidade: Cadastrar na atividade</center></h2>

|Medição    |	 Tempo Inicial  |	Tempo Final    |	Tempo de Execução  |	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|-----------|-----------------|----------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1          |	0:10:08         |	0:10:09        |	0:00:01            |	1.7                   |	1.7                  |	134	                  | 6,00%         |
|2          |	00:05:34	      | 00:05:35       |  0:00:01	           |  1.6                   |	1.8	                 |  152.5                 |	5.8%          |
|3          |	00:07:22        |	00:07:24       |	0:00:02	           |  1.9                   |	2,00                 |	144.9                 |	5.9%          |


<h2><center>Funcionalidade: Cancelar inscrição</center></h2>

|Medição     |	 Tempo Inicial  |	Tempo Final    |	Tempo de Execução  |	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|------------|------------------|----------------|---------------------|------------------------|----------------------|------------------------|---------------|
| 1 	       | 00:14:19         |	00:14:20       |	0:00:01            |	2.5                   |	1.7                  |	140                   |	6.8%|
|2|	00:18:01	|00:18:02	|0:00:01	|2.5	|1.7	|142.1	|6.5%|
|3|	00:03:24|	00:03:25|	0:00:01	|2.5|	1.8	|133.3	|6.7%|



<h2><center>Funcionalidade: Visualizar Perfil</center></h2>

|Medição     |	 Tempo Inicial  |	Tempo Final    |	Tempo de Execução  |	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|------------|------------------|----------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1           |	00:19:02        |	00:19:04       |	0:00:02            |	2.8                   |	4.1                  |	131.8                 | 5.8%          |
|2|	00:03:24|	00:03:25|	0:00:01|	2.5|	4.3	|130| 6.5%|
|3|	00:03:55|	00:03:57|	0:00:02	|2.9	|4.1	|132.1 |6.4%|


<h2><center>Funcionalidade: Editar Perfil</center></h2>

|Medição     |	 Tempo Inicial  |	Tempo Final    |	Tempo de Execução  |	Dados Recebidos (KB/s)|	Dados Enviados (KB/s)|	Uso de Memória (em MB)|	Consumo de CPU|
|------------|------------------|----------------|---------------------|------------------------|----------------------|------------------------|---------------|
|1|	00:00:34|	00:00:35|	0:00:01|	4.7|	4.2|	142.7	|5.5%|
|2|	00:01:22|	00:01:23|	0:00:01	|4.7	|4.3|	143	|6.9%|
|3|	00:07:13|	00:07:15|	0:00:02|	4.7|	4.3|	147.6	|6.2%|


