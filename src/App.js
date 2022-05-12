import React from "react";
import "./style.css";
import {data} from './data'
import Slides from './Slides'
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Slides data={data}/>
    </div>
  );
}
