class Heap {
    constructor() {

        this.fila_de_prioridades = []; // estrutura onde é armazenado de fato o array de prioridades
        this.estrutura_auxiliar = {} // estrutura auxiliar que armazena a posição de um elemento no array de prioridades, para fazer buscas em O(1)
        this.quantidade = 0;

    }

    inserir(elemento) { // função para inserir elemento no heap
        let novo_elemento = {
            id: elemento, // identificação do vértice
            custo: Number.MAX_SAFE_INTEGER, // custo iniciando em "infinito"
        }

        this.fila_de_prioridades.push(novo_elemento);

        this.estrutura_auxiliar[elemento] = { // armazenando a posição de onde o elemento foi adicionado no array
            posicao: this.quantidade,
        }
        this.quantidade++;
        
        return novo_elemento;
    }
    
    imprimir() {
        console.log(this.fila_de_prioridades);
    }
  
}
