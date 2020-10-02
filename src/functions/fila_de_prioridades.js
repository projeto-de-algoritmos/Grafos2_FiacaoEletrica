export default class Heap {
  constructor() {
    this.fila_de_prioridades = []; // estrutura onde é armazenado de fato o array de prioridades
    this.estrutura_auxiliar = {}; // estrutura auxiliar que armazena a posição de um elemento no array de prioridades, para fazer buscas em O(1)
    this.quantidade = 0;
  }

  inserir(elemento) {
    // função para inserir elemento no heap
    let novo_elemento = {
      id: elemento, // identificação do vértice
      custo: Number.MAX_SAFE_INTEGER, // custo iniciando em "infinito",
      origem: '', // guardará o vertice pai desse elemento no heap, para ajudar na construção da arvore geradora mínima.
    };

    this.fila_de_prioridades.push(novo_elemento);

    this.estrutura_auxiliar[elemento] = {
      // armazenando a posição de onde o elemento foi adicionado no array
      posicao: this.quantidade,
    };
    this.quantidade++;

    return novo_elemento;
  }

  // metodo que retorna a posicao de um elemento no array em O(1).
  obter_posicao(elemento) {
    return this.estrutura_auxiliar[elemento]['posicao'];
  }
  // funcao para alterar a referencia para os elementos no array
  atualizar_referencia(antes, depois) {
    this.estrutura_auxiliar[this.fila_de_prioridades[antes]['id']][
      'posicao'
    ] = depois;
  }

  atualizar_prioridades(elemento, novo_custo, origem) {
    this.fila_de_prioridades[this.obter_posicao(elemento)]['origem'] = origem; // salvando de onde vem a aresta para este vértice, com o menor custo.

    if (elemento == this.fila_de_prioridades[0]['id']) {
      // se o elemento a ser atualizado for igual ao elemento head do heap,
      if (novo_custo < this.fila_de_prioridades[0]['custo']) {
        // é verificado qual custa menos
        this.fila_de_prioridades[0]['custo'] = novo_custo; // se o novo custo for menor que o custo atual (do head) é feita a troca escolhendo o de menor custo.
      }
      return;
    }

    // abaixo começa o processo de subir no heap

    let filho = this.obter_posicao(elemento); // filho recebe o indice do vetor atrelado ao elemento
    let custo_filho = novo_custo;
    let pai = Math.floor((filho - 1) / 2); // para descobrir o pai de um vértice do heap, informação que será usada em caso de swap.
    let custo_pai = this.fila_de_prioridades[pai]['custo'];

    this.fila_de_prioridades[filho]['custo'] = novo_custo; // atrelando ao vertice o seu novo custo ja que é garantido que ele é menor que o atual.

    // O(log n) enquanto filho nao for o head, e o seu pai for mais custoso, ele sobe no heap.
    while (filho > 0 && custo_filho <= custo_pai) {
      // como haverá alteracao no array é necessario atualizar as referencias ("ponteiros") para manter a coesao.
      this.atualizar_referencia(filho, pai); // a posiçãoo do filho recebe a posicao do pai ...
      this.atualizar_referencia(pai, filho); // ... e vice versa.
      [this.fila_de_prioridades[pai], this.fila_de_prioridades[filho]] = [
        this.fila_de_prioridades[filho],
        this.fila_de_prioridades[pai],
      ]; // troca de posicao no array entre pai e filho.

      filho = pai; // atribuições para continuar  o processo de subida
      pai = Math.floor((pai - 1) / 2);

      if (filho == 0)
        // se o filho for 0 é porque chegou no head do heap.
        break;

      custo_pai = this.fila_de_prioridades[pai]['custo']; // atualizando custo do novo pai
      custo_filho = this.fila_de_prioridades[filho]['custo']; // atualizando custo do novo filho
    }
  }
  // complexidade O(log n)
  remover_o_primeiro() {
    delete this.estrutura_auxiliar[this.fila_de_prioridades[0]['id']]; // retirando da estrutura auxiliar onde era guardada sua posição.
    let elemento_retirado = this.fila_de_prioridades[0]['id']; // salvando o elemento a ser retirado na variavel elemento_retirado
    let elemento = this.fila_de_prioridades.pop(); // retirando o ultimo elemento do array
    this.quantidade--;

    if (this.fila_de_prioridades.length === 0) {
      // se apos a retirada nao houverem elementos retorna o elemento retirado
      return elemento_retirado;
    }

    // processo de trazer o ultimo elemento do array para o head (primeiro elemento do array)
    this.fila_de_prioridades[0]['id'] = elemento['id'];
    this.fila_de_prioridades[0]['custo'] = elemento['custo'];
    this.estrutura_auxiliar[elemento['id']]['posicao'] = 0; // atualizando a referencia
    //

    // abaixo começa o processo de descer no heap até achar sua posicao
    let pai = 0;
    let filho = pai * 2 + 1; // selecionando o filho mais à esquerda

    let N = this.fila_de_prioridades.length;

    while (filho < N) {
      if (filho < N - 1) {
        // verificar se o vertice tem um irmão
        // se sim compara os custos dos dois e seleciona o de menor
        if (
          this.fila_de_prioridades[pai * 2 + 1]['custo'] >
          this.fila_de_prioridades[pai * 2 + 2]['custo']
        ) {
          // como o padrao ja ta o filho da esquerda se o filho da direita tiver um custo menor, é so dar um ++.
          filho++;
        }
      }

      if (
        this.fila_de_prioridades[pai]['custo'] <
        this.fila_de_prioridades[filho]['custo']
      )
        break;

      this.atualizar_referencia(filho, pai); // a posiçãoo do filho recebe a posicao do pai ...
      this.atualizar_referencia(pai, filho); // ... e vice versa.
      [this.fila_de_prioridades[pai], this.fila_de_prioridades[filho]] = [
        this.fila_de_prioridades[filho],
        this.fila_de_prioridades[pai],
      ]; // swap

      pai = filho;

      filho = pai * 2 + 1;
    }

    return elemento_retirado;
  }

  imprimir() {
    console.log(this.fila_de_prioridades);
  }
}
