class Grafo {

  constructor() {
    this.vertices = {};
    this.id = 0;
  }

  adcVertice(letra) {
    let vertice = {
      id: letra,
      vizinhos: [],
      grau: 0,
    };

    this.vertices[letra] = vertice;
  }

  adcAresta(origem, destino, peso, tipo) {

    if(typeof(tipo) === 'undefined' || tipo === 'orientado' || tipo === 'nao_orientado') {
      let nova_aresta = {
        origem: origem,
        destino: destino,
        peso: peso,
      }
      this.vertices[origem]['vizinhos'].push(nova_aresta);
      this.vertices[origem]['grau']++;
    }
    if(tipo === 'nao_orientado')
    {
      let nova_aresta_invertida = {
        origem: destino,
        destino: origem,
        peso: peso,
      }

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
        }
        arestas.push(nova_aresta);
      }
    }

    return arestas;
  }

// tentar implementar a versao otima do algoritmo de prim

  prim(inicial) {
    let fila_de_prioridades = {};
    let vertices_explorados = {};
    let arestas = {};
    let total = 0;

    for(let vertice in this.vertices) {
    
    }    
   
    while(fila_de_prioridades.length !== 0) {
     
    }



  }

  imprimir() {
    console.log(this.vertices);
  }
}

// module.exports = Grafo;

const graph = new Grafo();


// dados abaixo vindos do slide do professor

var a = 'A';
var b = 'B';
var c = 'C';
var d = 'D';
var e = 'E';
var f = 'F';

graph.adcVertice(a);
graph.adcVertice(b);
graph.adcVertice(c);
graph.adcVertice(d);
graph.adcVertice(e);
graph.adcVertice(f);
graph.adcAresta('A', 'B', 2, 'nao_orientado');
graph.adcAresta('A', 'C', 3, 'nao_orientado');
graph.adcAresta('B', 'C', 5, 'nao_orientado');
graph.adcAresta('B', 'D', 4, 'nao_orientado');
graph.adcAresta('B', 'E', 4, 'nao_orientado');
graph.adcAresta('C', 'E', 5, 'nao_orientado');
graph.adcAresta('D', 'E', 2, 'nao_orientado');
graph.adcAresta('D', 'F', 3, 'nao_orientado');
graph.adcAresta('E', 'F', 5, 'nao_orientado');

graph.imprimir();
graph.prim('E')
