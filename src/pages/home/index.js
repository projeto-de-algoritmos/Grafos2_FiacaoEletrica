import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';
import { Container, Menu, Text, Text0, Text2, Custo } from './styles';

import Grafo from '../../functions/grafo';

function Dashboard() {
  const grafo = new Grafo(); // instancia grafo
  const [exemploSelect, setExemploSelect] = useState(false);
  const [nodeSelect, setNodeSelect] = useState();
  const [custo, setCusto] = useState(0);
  const [edge, setEdge] = useState([]);
  const [selectEdge, setSelectEdge] = useState([]);
  const [graph, setgraph] = useState({
    // inicializa os nós e arestas do grafo
    nodes: [],
    edges: [],
  });

  useEffect(() => {
    // inicializa grafo de maneira aleatoria
    var node = [];
    var edge = [];
    var tamanho = 20; // numero de nós
    for (var i = 0; i < tamanho; i++) {
      var from = Aleatorio(Aleatorio(1, tamanho - 1), tamanho - 1);
      var to = Aleatorio(1, tamanho - 1);
      var value = Aleatorio(1, 100);
      node.push({ id: i, label: `${i}` });
      edge.push({
        from: from,
        to: to,
        label: `${value}`,
        id: i,
      });
    }
    //=========================
    // salva grafo  aleatorio no state
    setEdge(edge);
    setgraph({
      nodes: node,
      edges: edge,
    });
    //==========================
  }, []);

  const options = {
    // define as opçoes para renderizaçao do grafo
    interaction: { multiselect: true, hoverConnectedEdges: true },
    autoResize: true,
    height: '100%',
    width: '100%',
    nodes: {
      borderWidth: 3,
      size: 10,
      color: {
        border: '#222222',
        background: '#666666',
        highlight: {
          border: '#000080',
          background: '#4682B4',
        },
      },
      font: { color: '#eeeeee' },
    },
    edges: {
      color: 'lightgray',
      arrows: {
        to: {
          enabled: false,
        },
        from: {
          enabled: false,
        },
      },
    },
  };
  const events = {
    // função que captura os nós selecionados pelo usuario
    select: function (event) {
      var { nodes, edges } = event;
      //=======================
      // adiciona os nos e arestas selecionados no state
      setNodeSelect(nodes);
      setSelectEdge(edges);
      //======================
    },
  };

  function Aleatorio(min, max) {
    // gera valores aleatorios
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // funçao que envia dados para o algoritmo de Prim e exibe os erutados em tela
  function CreateGraph() {
    var n = [];
    var e = [];
    //  ===========================
    // adicona os nos para o Algoritmo de Prim
    nodeSelect.map((no) => {
      grafo.adcVertice(`${no}`);
      n.push({ id: no, label: `${no}` });
    });
    //==============================

    //==============================
    // adiciona arestas para o Algoritmo de Prim
    edge.map((ed) => {
      var len = 0;
      while (len < selectEdge.length) {
        if (selectEdge[len] == ed['id']) {
          // verifica dados  das arestas pelo ID
          grafo.adcAresta(
            // adiona no grafro
            `${ed['from']}`,
            `${ed['to']}`,
            parseInt(ed['label'], 10),
            'nao_orientado'
          );
        }
        len++;
      }
      //=====================================
    });

    grafo.prim(`${nodeSelect[0]}`); // inicia o algoritmo de prim, dizendo qual deve ser o no inical
    var caminho = grafo.getCaminho(); // retona a lista de arestas de menor custo.
    /// ===============================
    // renderiza um novo grafro
    caminho.map((Cami) => {
      e.push({
        from: Cami['origem'],
        to: Cami['destino'],
        label: `${Cami['custo']}`,
      });
    });

    setgraph({
      nodes: n,
      edges: e,
    });
    //=================================
    setCusto(grafo.getCusto()); // retorna o custo de percorrer determinado caminho
  }

  //===============================================
  // funcçoes que carega exemplo da aula
  function Exemp1() {
    setCusto(0);
    setExemploSelect(true);
    setEdge([
      { from: 'A', to: 'B', label: '4', id: '1' },
      { from: 'A', to: 'C', label: '6', id: '2' },
      { from: 'A', to: 'D', label: '16', id: '3' },
      { from: 'B', to: 'G', label: '24', id: '4' },
      { from: 'C', to: 'E', label: '5', id: '5' },
      { from: 'C', to: 'D', label: '8', id: '6' },
      { from: 'C', to: 'G', label: '23', id: '7' },
      { from: 'D', to: 'E', label: '10', id: '8' },
      { from: 'D', to: 'H', label: '21', id: '9' },
      { from: 'E', to: 'G', label: '18', id: '10' },
      { from: 'E', to: 'F', label: '11', id: '11' },
      { from: 'E', to: 'H', label: '14', id: '12' },
      { from: 'F', to: 'G', label: '9', id: '13' },
      { from: 'F', to: 'H', label: '7', id: '14' },
    ]);

    setgraph({
      nodes: [
        { id: 'A', label: 'A' },
        { id: 'B', label: 'B' },
        { id: 'C', label: 'C' },
        { id: 'D', label: 'D' },
        { id: 'E', label: 'E' },
        { id: 'F', label: 'F' },
        { id: 'G', label: 'G' },
        { id: 'H', label: 'H' },
      ],
      edges: [
        { from: 'A', to: 'B', label: '4', id: '1' },
        { from: 'A', to: 'C', label: '6', id: '2' },
        { from: 'A', to: 'D', label: '16', id: '3' },
        { from: 'B', to: 'G', label: '24', id: '4' },
        { from: 'C', to: 'E', label: '5', id: '5' },
        { from: 'C', to: 'D', label: '8', id: '6' },
        { from: 'C', to: 'G', label: '23', id: '7' },
        { from: 'D', to: 'E', label: '10', id: '8' },
        { from: 'D', to: 'H', label: '21', id: '9' },
        { from: 'E', to: 'G', label: '18', id: '10' },
        { from: 'E', to: 'F', label: '11', id: '11' },
        { from: 'E', to: 'H', label: '14', id: '12' },
        { from: 'F', to: 'G', label: '9', id: '13' },
        { from: 'F', to: 'H', label: '7', id: '14' },
      ],
    });
  }
  // =======================================================
  //Exemplo 2
  function Exemp2() {
    setCusto(0);
    setExemploSelect(true);
    setEdge([
      { from: 'A', to: 'B', label: '2', id: '1' },
      { from: 'A', to: 'C', label: '3', id: '2' },
      { from: 'B', to: 'C', label: '5', id: '3' },
      { from: 'B', to: 'D', label: '4', id: '4' },
      { from: 'B', to: 'E', label: '4', id: '5' },
      { from: 'C', to: 'E', label: '5', id: '6' },
      { from: 'D', to: 'E', label: '2', id: '7' },
      { from: 'D', to: 'F', label: '3', id: '8' },
      { from: 'E', to: 'F', label: '5', id: '9' },
    ]);

    setgraph({
      nodes: [
        { id: 'A', label: 'A' },
        { id: 'B', label: 'B' },
        { id: 'C', label: 'C' },
        { id: 'D', label: 'D' },
        { id: 'E', label: 'E' },
        { id: 'F', label: 'F' },
      ],
      edges: [
        { from: 'A', to: 'B', label: '2', id: '1' },
        { from: 'A', to: 'C', label: '3', id: '2' },
        { from: 'B', to: 'C', label: '5', id: '3' },
        { from: 'B', to: 'D', label: '4', id: '4' },
        { from: 'B', to: 'E', label: '4', id: '5' },
        { from: 'C', to: 'E', label: '5', id: '6' },
        { from: 'D', to: 'E', label: '2', id: '7' },
        { from: 'D', to: 'F', label: '3', id: '8' },
        { from: 'E', to: 'F', label: '5', id: '9' },
      ],
    });
  }

  //====================================================
  // funçao que seleciona todos os elementos do grafo
  function selectAll() {
    const nodes = graph['nodes'];
    var e = [];
    graph['nodes'].map((no) => {
      grafo.adcVertice(`${no['id']}`);
    });
    graph['edges'].map((ed) => {
      grafo.adcAresta(
        // adiona no grafro
        `${ed['from']}`,
        `${ed['to']}`,
        parseInt(ed['label'], 10),
        'nao_orientado'
      );
    });

    grafo.prim(`${graph['nodes'][0]['id']}`); // inicia o algoritmo de prim, dizendo qual deve ser o no inical
    var caminho = grafo.getCaminho(); // retona a lista de arestas de menor custo.
    /// ===============================
    // renderiza um novo grafro
    caminho.map((Cami) => {
      e.push({
        from: Cami['origem'],
        to: Cami['destino'],
        label: `${Cami['custo']}`,
      });
    });
    setgraph({
      nodes: nodes,
      edges: e,
    });
    //=================================
    setCusto(grafo.getCusto()); // retorna o custo de percorrer determinado caminho
  }

  return (
    <Container>
      <Menu>
        <Text0>
          Cálculo de menor quantidade de quilômetros de fio
        </Text0>
        <Text>
          Selecione os nós que deseja incluir no caminho, usando Ctrl+click
        </Text>

        <button type="submit" onClick={Exemp1}>
          Exemplo de aula 1{' '}
        </button>
        <button type="submit" onClick={Exemp2}>
          Exemplo de aula 2
        </button>
        {exemploSelect ? (
          <button type="submit" onClick={selectAll}>
            Selecionar todos e gerar árvore geradora minima
          </button>
        ) : (
          ''
        )}
        <button type="submit" onClick={CreateGraph}>
          Gerar árvore geradora mínima
        </button>

        <Text2>
          {`Menor quilometragem possível:`}
        </Text2>
        <Custo>
          {`"${custo}" km`}
        </Custo>
      </Menu>
      <Graph graph={graph} options={options} events={events} />
    </Container>
  );
}
export default Dashboard;
