# Fiação Elétrica

**Número da Lista**: 2<br>
**Conteúdo da Disciplina**: Grafos 2<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 16/0111978  |  André Eduardo |
| 16/0112974  |  Arthur Rodrigues |

## Sobre 

Pode ser acessado no link: https://projeto-de-algoritmos.github.io/Grafos2_FiacaoEletrica/

Link para o vídeo explicativo: https://www.youtube.com/watch?v=RVtvnRWul3M&feature=youtu.be

O projeto implementa o algoritmo de Prim (boa implementação), que ajuda uma companhia elétrica a gastar menos com fiação. Os vértices serão como os postes e as arestas como a fiação. A partir do grafo gerado é gerada a árvore geradora mínima que contabiliza o menor custo para abranger todos os postes com a menor quantidade de fio.

## Screenshots
Imagem 1 - Tela inicial

É gerado um grafo aleatório<br>
![tela_inicial](midia/screenshots/tela_inicial.png)
 
Como percebemos, o grafo gerado não é fortemente conectado, então para gerar a árvore será necessário selecionar (Ctrl + Click) nós que estejam conectados.

Imagem 2 - Selecionando os vertices e apertando em Gerar árvore geradora mínima:

![imagem_do_exemplo_1](midia/screenshots/tela_inicial_arvore.png)

Imagem 3 - [Exemplo 1](###exemplos) da aula:

![imagem_do_exemplo_1](midia/screenshots/exemplo1.png)

Imagem 4 - Apertando em Selecionar todos e gerar árvore geradora mínima:

![imagem_do_exemplo_1_resolvido](midia/screenshots/exemplo1_arvore.png)

Imagem 5 - [Exemplo 2](###exemplos) da aula:

![imagem_do_exemplo_2](midia/screenshots/exemplo2.png)

Imagem 6 - Após clicar em Selecionar todos e gerar árvore geradora mínima. [Exemplo 2](###exemplos) da aula:

![imagem_do_exemplo_2_resolvido](midia/screenshots/exemplo2_arvore.png)

## Instalação 
**Linguagem**: Javascript<br>
**Framework**: React<br>
**Pacotes** : react-graph-vis

Primeiramente utilizaremos a ferramenta [git](https://git-scm.com/downloads) que é necessária para clonar o repositório:

    $ git clone https://github.com/projeto-de-algoritmos/Grafos2_FiacaoEletrica

Após clonar o repositório, é preciso acessar a pasta raiz do projeto:

    Exemplo para o linux:

    $ cd Grafos2_FiacaoEletrica

Para rodar o projeto é necessário ter instalado o [yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable) na versão estável mais atual.

Após instalar o yarn, vamos instalar as dependências do projeto.

    Na pasta raiz, execute:

    $ yarn install

Depois, subir o servidor:

    $ yarn start

E então acessar no navegador:

    http://localhost:3000/

## Uso 
Ao abrir o projeto no navegador com o link acima, automaticamente é gerado um grafo aleatório onde é possível selecionar os vértices(representando os postes) e arestas(representando os fios) apertando (Ctrl + Click), **onde só devera ser selecionado as arestas entre os vértices selecionados**. Devido a limitações da biblioteca, quando um nó é selecionado ele seleciona as arestas para os nós vizinhos desse nó, por essa questão deve se excluir as arestas para os nós que não serão selecionados. Um exemplo de correta utilização pode ser visto nas [screenshots](##screenshots) ou no [vídeo](https://www.youtube.com/watch?v=RVtvnRWul3M&feature=youtu.be).

### Exemplos

É possível escolher os grafos dados como exemplo na aula do professor, que são: 

![grafos_exemplo](midia/exemplos_aula/exemplos.png)

Nesse caso aparece a opção de selecionar todos os nós e gerar a árvore a partir deles (apertando em: Selecionar todos e gerar árvore geradora minima), mas também pode ser selecionado uma a um.

Essa imagem acima é um gabarito das árvores geradoras geradas pelos exemplo 1 e 2. Conforme é visto em [screenshots](##screenshots), vimos que a árvore gerada na imagem 4 é a mesma que a gerada no exemplo 1 e o mesmo acontece para a árvore gerada na imagem 6 com o exemplo 2.

## Outros 
**Um pouco sobre a implementação do algoritmo de Prim.**

Tivemos algumas dificuldades para esta implementação, pois não sabíamos como achar o elemento na fila de prioridades com custo de operação O(1). Mas na live de dúvidas com o professor Maurício ele esclareceu que para resolver este problema, teria que ser criado uma estrutura auxiliar para armazenar o valor dos "ponteiros" para cada elemento, permitindo, assim, o acesso com custo de operação O(1).
Acreditamos que esteja na versão ótima, pois foi baseado no pseudo-código do professor para alcançar o custo de O(m log n).

**Foi implementada uma estrutura Heap(fila de prioridades)**

Algumas dificuldades foram encontradas para a implementação do algoritmo para gerenciar um heap. Foi utilizada como auxílio para a nossa versão as referências abaixo.


**Referências**

* Video aula 13 - Grafos 2 - Professor Maurício Serrano

*  Fila de Prioridades - Heap Binária. Linguagem C Descomplicada. Disponível em: https://www.youtube.com/watch?v=o138_fb85zk

* Filas de prioridade e heap. Disponível em: https://www.ic.unicamp.br/~rafael/cursos/2s2018/mc202/slides/unidade21-fila-de-prioridade.pdf