import React ,{useState} from "react";
import './App.css';

function App() {
  const [state , setState] = useState([
      {id:Math.floor(Math.random()*1000) , title:'My First task', des: 'I want to buy a milk' , state:false},
      {id:Math.floor(Math.random()*1000) , title:'My second task', des: 'I want to buy a mackBook' , state:false},
  ]);
  return (
      state.map(todo =>(
          <div>
              <div>id: {todo.id}</div>
              <div>title: {todo.title}</div>
              <div>des: {todo.des}</div>
              <div>id: {todo.id}</div>
          </div>
      ))
  );
}

export default App;
