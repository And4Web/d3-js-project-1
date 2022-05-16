import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import "./App.css";

function App() {
  const [data] = useState([200, 250, 60, 192, 150, 235, 167]);
  const svgRef = useRef();

  useEffect(() => {
    //1.settig up the svg container
    const width = 400;
    const height = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .style("margin-top", "75px");
    //2.setting the scaling
    //3.setting the axes
    //4.setting the svg data
  }, [data]);

  return (
    <div className="App">
      <h1>D3.js project</h1>
    </div>
  );
}

export default App;
