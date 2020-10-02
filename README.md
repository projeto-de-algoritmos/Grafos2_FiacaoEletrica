# Fiação Elétrica

**Número da Lista**: 2<br>
**Conteúdo da Disciplina**: Grafos 2<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 16/0111978  |  André Eduardo |
| 16/0112974  |  Arthur Rodrigues |

## Sobre 
O projeto implementa o algoritmo de Prim (boa implementação), que ajuda uma companhia elétrica a gastar menos com fiação. Os vértices serão como os postes e as arestas como a fiação. A partir do grafo gerado é gerada a árvore geradora mínima que contabiliza o menor custo para abranger todos os postes com a menor quantidade de fio.

## Screenshots
Adicione 3 ou mais screenshots do projeto em funcionamento.

## Instalação 
**Linguagem**: Javascript<br>
**Framework**: React<br>

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
Ao abrir o projeto no navegador com o link acima, automaticamente é gerado um grafo aleatório onde é possível selecionar os vértices(representando os postes) e arestas(representando os fios) apertando (Ctrl + Click), **onde só devera ser selecionado as arestas entre os vértices selecionados**. Devido a limitações da biblioteca, quando um nó é selecionado ele seleciona as arestas para os nós vizinhos desse nó, por essa questão deve se excluir as arestas para os nós que não serão selecionados. Um exemplo de correta utilização pode ser visto nas [screenshots]() ou no [vídeo]().

É possível escolher os grafos dados como exemplo na aula do professor, que são: 

![grafos_exemplo](midia/exemplos_aula/exemplos.png)

Nesse caso aparece a opção de selecionar todos os nós e gerar a árvore a partir deles (apertando em: Selecionar todos e gerar árvore geradora minima), mas também pode ser selecionado uma a um.

## Outros 
Quaisquer outras informações sobre seu projeto podem ser descritas abaixo.




