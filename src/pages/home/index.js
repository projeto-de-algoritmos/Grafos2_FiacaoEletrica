import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
//import Graph from 'react-graph-vis';
import Graph from 'vis-react';
import { Container, Menu } from './styles';

import Grafo from '../../functions/grafo';

function Dashboard() {
  const grafo = new Grafo();

  // dados abaixo vindos do slide do professor

  // var a = 'A';
  // var b = 'B';
  // var c = 'C';
  // var d = 'D';
  // var e = 'E';
  // var f = 'F';
  // var g = 'G';
  // var h = 'H';

  // grafo.adcVertice('A');
  // grafo.adcVertice(b);
  // grafo.adcVertice(c);
  // grafo.adcVertice(d);
  // grafo.adcVertice(e);
  // grafo.adcVertice(f);
  // grafo.adcVertice(g);
  // grafo.adcVertice(h);

  // // exemplo de grafo 1 da videoaula do professor
  // grafo.adcAresta('A', 'B', 4, 'nao_orientado');
  // grafo.adcAresta('A', 'C', 6, 'nao_orientado');
  // grafo.adcAresta('A', 'D', 16, 'nao_orientado');
  // grafo.adcAresta('B', 'G', 24, 'nao_orientado');
  // grafo.adcAresta('C', 'E', 5, 'nao_orientado');
  // grafo.adcAresta('C', 'D', 8, 'nao_orientado');
  // grafo.adcAresta('C', 'G', 23, 'nao_orientado');
  // grafo.adcAresta('D', 'E', 10, 'nao_orientado');
  // grafo.adcAresta('D', 'H', 21, 'nao_orientado');
  // grafo.adcAresta('E', 'G', 18, 'nao_orientado');
  // grafo.adcAresta('E', 'F', 11, 'nao_orientado');
  // grafo.adcAresta('E', 'H', 14, 'nao_orientado');
  // grafo.adcAresta('F', 'G', 9, 'nao_orientado');
  // grafo.adcAresta('F', 'H', 7, 'nao_orientado');
  // // exemplo de grafo 2 da videoaula do professor
  // // grafo.adcAresta('A', 'B', 2, 'nao_orientado');
  // // grafo.adcAresta('A', 'C', 3, 'nao_orientado');
  // // grafo.adcAresta('B', 'C', 5, 'nao_orientado');
  // // grafo.adcAresta('B', 'D', 4, 'nao_orientado');
  // // grafo.adcAresta('B', 'E', 4, 'nao_orientado');
  // // grafo.adcAresta('C', 'E', 5, 'nao_orientado');
  // // grafo.adcAresta('D', 'E', 2, 'nao_orientado');
  // // grafo.adcAresta('D', 'F', 3, 'nao_orientado');
  // // grafo.adcAresta('E', 'F', 5, 'nao_orientado');
  // grafo.prim('E');

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
    var node = [];
    var edge = [];
    var tamanho = 10; // numero de nós
    for (var i = 0; i < tamanho; i++) {
      var to = Aleatorio(1, tamanho - 1);
      var value = Aleatorio(1, 100);
      node.push({ id: i, label: `Casa ${i}` });
      //grafo.adcVertice(`${i}`);

      edge.push({
        from: i,
        to: to,
        label: `${value}`,
      });

      //grafo.adcAresta(`${i}`, `${to}`, value);
    }
    setEdge(edge);
    setgraph({
      nodes: node,
      edges: edge,
    });
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
      },
      font: { color: '#eeeeee' },
    },
    edges: {
      color: 'lightgray',
    },
  };
  const events = {
    // função que captura os nós selecionados pelo usuario
    select: function (event) {
      var { nodes, edges } = event;
      setNodeSelect(nodes);
      setSelectEdge(edges);
    },
  };

  function Aleatorio(min, max) {
    // gera valores aleatorios
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function CreateGraph() {
    var n = [];
    var e = [];
    nodeSelect.map((no) => {
      console.log(no);
      grafo.adcVertice(`${no}`);
      n.push({ id: no, label: `Casa ${no}` });
    });
    edge.map((ed) => {
      var len = 0;
      //grafo.adcVertice(`${no}`);

      while (len < selectEdge.length) {
        if (selectEdge[len] == ed['id']) {
          console.log(ed);
          grafo.adcAresta(
            `${ed['from']}`,
            `${ed['to']}`,
            parseInt(ed['label'], 10)
          );
        }
        len++;
      }
    });
    grafo.prim(`${nodeSelect[0]}`);
    var caminho = grafo.getCaminho();
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
    console.log(grafo.getCusto());
    setCusto(grafo.getCusto());
  }

  return (
    <Container>
      <Menu>
        <div>
          <p>
            Selecione os nós que deseja incluir no caminho, usando Ctrl+click
          </p>
        </div>
        <button type="submit" onClick={CreateGraph}>
          Gerar Menor caminho
        </button>
        <Form onSubmit={() => {}}>
          <Input name="origem" type="fieldName" placeholder="Nó de Origem" />
        </Form>
        <div>
          <p>
            {`Para percorrer o caminho selcionado , da melhor forma possivel, você
            deve perccorer "${custo}" km`}
          </p>
        </div>
      </Menu>
      <Graph graph={graph} options={options} events={events} />
    </Container>
  );
}
export default Dashboard;
