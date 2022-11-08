import React from 'react'
import Graph from '../../components/Graph/Graph'
import './style.css'

const Tree = ({initialNodes, initialEdges}) => {

  return (
    <div className='tree-container'>
        <Graph initialNodes={initialNodes} initialEdges={initialEdges} />
    </div>
  )
}

export default Tree
