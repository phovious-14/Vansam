import React, { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from "reactflow";
import dagre from "dagre";
import "reactflow/dist/style.css";
import './style.css'

// import { initialNodes, initialEdges } from "./nodes-edges";
import { Link } from "react-router-dom";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 200;
const nodeHeight = 170;

const getLayoutedElements = (nodes, edges, direction = "TB") => {
  const isHorizontal = direction === "LR";
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? "left" : "top";
    node.sourcePosition = isHorizontal ? "right" : "bottom";

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};


const Graph = ({initialNodes, initialEdges}) => {

      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        initialNodes,
        initialEdges
      );

      const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
      const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

      const onLayout = useCallback(
        (direction) => {
          const { nodes: layoutedNodes, edges: layoutedEdges } =
            getLayoutedElements(nodes, edges, direction);
    
          setNodes([...layoutedNodes]);
          setEdges([...layoutedEdges]);
        },
        [nodes, edges]
      );

  return (
    <div className="layoutflow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={useCallback(
          (params) =>
            setEdges((eds) =>
              addEdge(
                { ...params, type: ConnectionLineType.SmoothStep, animated: true },
                eds
              )
            ), []
        )}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <div className="controls">
        <button className="btn-style"><Link to="/add-person">Add Generation</Link></button>
        <button className="btn-style" onClick={() => onLayout("TB")}>vertical layout</button>
        <button className="btn-style" onClick={() => onLayout("LR")}>horizontal layout</button>
      </div>
    </div>
  )
}

export default Graph
