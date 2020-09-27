class Grafo {

  constructor() {
    this.vertices = {};
    this.id = 0;
  }

  adcVertice(dados) {
    let vertice = {
      dados: dados,
      vizinhos: [],
      grau: 0,
    };

    this.vertices[this.id++] = vertice;
  }

  adcAresta(origem, destino) {
    this.vertices[origem]['vizinhos'].push(destino);
    this.vertices[origem]['grau']++;

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

 

  imprimir() {
    console.log(this.vertices);
  }
}

// module.exports = Grafo;
