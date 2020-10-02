import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import Graph from 'react-graph-vis';
import { Container, Menu } from './styles';

function Dashboard(props) {
  const [nodeSelect, setNodeSelect] = useState();
  const [edge, setEdge] = useState([]);
  const [graph, setgraph] = useState({
    // inicializa os nós e arestas do grafo
    nodes: [
      { id: 1, label: 'Node 1', title: 'node 1 tootip text' },
      { id: 2, label: 'Node 2', title: 'node 2 tootip text' },
      { id: 3, label: 'Node 3', title: 'node 3 tootip text' },
      { id: 4, label: 'Node 4', title: 'node 4 tootip text' },
      { id: 5, label: 'Node 5', title: 'node 5 tootip text' },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  });

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
      var { nodes } = event;
      setNodeSelect(nodes);
    },
  };
  function CreateGraph() {
    console.log(nodeSelect);
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
            Para percorrer o caminho selcionado , da melhor forma possivel, você
            deve perccorer "X" km
          </p>
        </div>
      </Menu>
      <Graph graph={graph} options={options} events={events} />
    </Container>
  );
}
export default Dashboard;
