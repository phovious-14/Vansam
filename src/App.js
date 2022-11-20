import React, {useContext, useEffect, useState} from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Tree from "./pages/Tree/Tree";
import {
  Route,
  Routes
} from 'react-router-dom';
import Protected from "./context/Protected";
import InputForm from "./pages/InputForm/InputForm";
import Auth from "./context/Auth";
import { MarkerType } from 'reactflow';

const App = () => { 

  const {contract} = useContext(Auth)
    const [initialNodes, setInitialNodes] = useState([])
    const [initialEdges, setInitialEdges] = useState([])
    // contract.getData().then((data) => {
    //   console.log(data);
    // })
    const position = { x: 0, y: 0 };

    const data = async () => {
      const famData = await contract.getData()
      console.log(famData);
      for(var i = 0; i < famData.length; i++) {

        var dd = Date(parseInt(famData[i].recordDate._hex, 16))

        var date = new Date(dd).getDate()
        var month = new Date(dd).getMonth()+1
        var year = new Date(dd).getFullYear()

        const text = famData[i][1]
        const mname = (text.split('-'))[0]
        const rootId = (text.split('-'))[1]
          
        initialNodes.push({
          id: `${(i).toString()}`,
          data: { label: (
            <>
              Root-ID - {i}<br />
              Father name - {famData[i][0]}<br />
              Male name - {mname}<br />
              Wife - {famData[i][2]}<br />
              DOB - {famData[i][3]}<br />
              Record Date - {`${date}-${month}-${year}`}<br />
              Generation No - {parseInt(famData[i].genNo._hex, 16)}<br />
              total Wealth - {`$ ${parseInt(famData[i].totalWealth._hex, 16)}`}<br />
            </>
          ), },
          position
        })

        initialEdges.push({
          id: `e${i}`,
          source: `${(rootId).toString()}`,
          target: `${(i).toString()}`,
          label:"son",
          markerEnd: {
            type: MarkerType.ArrowClosed,
          },
        })
        
        // console.log(initialNodes);
      }
    }

    useEffect(() => {
      data()
    }, [])

  return (
    <>
      {/* <Tree /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vansa" element={
          <Protected>
            <Tree initialNodes={initialNodes} initialEdges={initialEdges} />
          </Protected>
        } />
        <Route exact path="/add-person" element={
          <Protected>
            <InputForm />
          </Protected>
        } />
      </Routes>  
    </>
  );
};

export default App;
