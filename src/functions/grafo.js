import Heap from './fila_de_prioridades';
export default class Grafo {
  constructor() {
    this.vertices = {};
    this.custo = 0;
    this.caminho = {};
  }

  // adição de um vertice 'id' no grafo
  adcVertice(id) {
    let vertice = {
      id: id,
      vizinhos: [],
      grau: 0,
    };

    this.vertices[id] = vertice;
  }

  // adicionar aresta aos vertices * parametro 'tipo' opcional (se nao for passado ele considera uma aresta orientada (a->c))
  // se for passado o valor 'nao_orientado' em 'tipo', ele alem de fazer a aresta (a->c) ele faz a aresta (c->a)
  adcAresta(origem, destino, peso, tipo) {
    if (
      typeof tipo === 'undefined' ||
      tipo === 'orientado' ||
      tipo === 'nao_orientado'
    ) {
      let nova_aresta = {
        origem: origem,
        destino: destino,
        peso: peso,
      };
      this.vertices[origem]['vizinhos'].push(nova_aresta);
      this.vertices[origem]['grau']++;
    }
    if (tipo === 'nao_orientado') {
      let nova_aresta_invertida = {
        origem: destino,
        destino: origem,
        peso: peso,
      };

      this.vertices[destino]['vizinhos'].push(nova_aresta_invertida);
      this.vertices[destino]['grau']++;
    }
  }

  obterVertices() {
    return this.vertices; // retornando todos os nós do grafo
  }

  obterArestas() {
    let arestas = [];

    for (let vertice in this.vertices) {
      for (let aresta of this.vertices[vertice]['vizinhos']) {
        let nova_aresta = {
          de: vertice,
          para: aresta.toString(),
        };
        arestas.push(nova_aresta);
      }
    }

    return arestas;
  }

  // tentar implementar a versao otima do algoritmo de prim

  prim(inicial) {
    const heap = new Heap();
    let vertices_explorados = {};
    let arestas = [];
    let total = 0;

    // adicionando todos os vertices a fila de prioridades (heap)
    // custo O(n)
    for (let vertice in this.vertices) {
      heap.inserir(vertice);
    }
    //
    //função 'atualizar_prioridades' da classe heap leva o elemento (se for o de menor valor) ao topo do heap
    heap.atualizar_prioridades(inicial, 0); // operação de custo (O log N)
    //
    // remove o elemento de indice 0 da fila de prioridades ou head do heap.
    let u = heap.remover_o_primeiro(); // operacao de custo O(log N)

    while (heap.fila_de_prioridades.length !== 0) {
      vertices_explorados[u] = u; // adiciona o primeiro elemento que foi removido aos vertices já explorados (CUT)

      for (let vizinho of this.vertices[u]['vizinhos']) {
        // para cada vizinho de u
        // o if abaixo verifica se o vizinho de u em questao esta fora do cut (vertices visitados)
        // verifica tambem se o custo do vizinho atual é menor do que o custo que esta atrelado a ele na fila de prioridades
        if (
          typeof vertices_explorados[vizinho['destino']] === 'undefined' &&
          vizinho['peso'] <
            heap.fila_de_prioridades[
              heap.estrutura_auxiliar[vizinho['destino']]['posicao']
            ]['custo']
        ) {
          // se as condicoes acima forem verdade entao atualiza a posição desse vizinho na fila de prioridades (heap)
          heap.atualizar_prioridades(vizinho['destino'], vizinho['peso'], u); // operação de custo O(log N)
          // o parametro U passado na função acima, salva o elemento de onde aquele nó partiu.
        }
      }
      // após visitar cada vizinho de u, o algoritmo irá adicionar uma nova aresta à árvore geradora.

      let nova_aresta = {
        origem: heap.fila_de_prioridades[0]['origem'],
        destino: heap.fila_de_prioridades[0]['id'],
        custo: heap.fila_de_prioridades[0]['custo'],
      };

      arestas.push(nova_aresta); // adicionando a aresta a estrutura que armazena as arestas
      total += heap.fila_de_prioridades[0]['custo']; // adicionando o custo daquela aresta ao custo total da arvore geradora
      u = heap.remover_o_primeiro(); // setar o novo u;
    }
    this.custo = total;
    this.caminho = arestas;
    console.log(arestas);
    console.log(total);
  }
  getCaminho() {
    return this.caminho;
  }
  getCusto() {
    return this.custo;
  }
  imprimir() {
    console.log(this.vertices);
  }
}

// const graph = new Grafo();

// // dados abaixo vindos do slide do professor

// var a = 'A';
// var b = 'B';
// var c = 'C';
// var d = 'D';
// var e = 'E';
// var f = 'F';
// var g = 'G';
// var h = 'H';

// graph.adcVertice(a);
// graph.adcVertice(b);
// graph.adcVertice(c);
// graph.adcVertice(d);
// graph.adcVertice(e);
// graph.adcVertice(f);
// graph.adcVertice(g);
// graph.adcVertice(h);

// // exemplo de grafo 1 da videoaula do professor
// graph.adcAresta('A', 'B', 4, 'nao_orientado');
// graph.adcAresta('A', 'C', 6, 'nao_orientado');
// graph.adcAresta('A', 'D', 16, 'nao_orientado');
// graph.adcAresta('B', 'G', 24, 'nao_orientado');
// graph.adcAresta('C', 'E', 5, 'nao_orientado');
// graph.adcAresta('C', 'D', 8, 'nao_orientado');
// graph.adcAresta('C', 'G', 23, 'nao_orientado');
// graph.adcAresta('D', 'E', 10, 'nao_orientado');
// graph.adcAresta('D', 'H', 21, 'nao_orientado');
// graph.adcAresta('E', 'G', 18, 'nao_orientado');
// graph.adcAresta('E', 'F', 11, 'nao_orientado');
// graph.adcAresta('E', 'H', 14, 'nao_orientado');
// graph.adcAresta('F', 'G', 9, 'nao_orientado');
// graph.adcAresta('F', 'H', 7, 'nao_orientado');
// // exemplo de grafo 2 da videoaula do professor
// // graph.adcAresta('A', 'B', 2, 'nao_orientado');
// // graph.adcAresta('A', 'C', 3, 'nao_orientado');
// // graph.adcAresta('B', 'C', 5, 'nao_orientado');
// // graph.adcAresta('B', 'D', 4, 'nao_orientado');
// // graph.adcAresta('B', 'E', 4, 'nao_orientado');
// // graph.adcAresta('C', 'E', 5, 'nao_orientado');
// // graph.adcAresta('D', 'E', 2, 'nao_orientado');
// // graph.adcAresta('D', 'F', 3, 'nao_orientado');
// // graph.adcAresta('E', 'F', 5, 'nao_orientado');
// graph.prim('E')
