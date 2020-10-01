import React, { useState, useEffect } from "react";

import Graph from "react-graph-vis";
import { Container, Formulario } from "./styles";

function Dashboard(props) {
  const [node, setNode] = useState([]);
  const [edge, setEdge] = useState([]);
  const [graph, setgraph] = useState({
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text" },
      { id: 2, label: "Node 2", title: "node 2 tootip text" },
      { id: 3, label: "Node 3", title: "node 3 tootip text" },
      { id: 4, label: "Node 4", title: "node 4 tootip text" },
      { id: 5, label: "Node 5", title: "node 5 tootip text" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  });

  const options = {
    autoResize: true,
    height: "100%",
    width: "100%",
    nodes: {
      borderWidth: 3,
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    },
    edges: {
      color: "lightgray",
    },
  };

  return (
    <Container>
      <Graph graph={graph} options={options} />
    </Container>
  );
}
export default Dashboard;
