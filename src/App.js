import React ,{useState} from "react";
import './App.css';

function App() {
  const [state , setState] = useState([
      {id:Math.floor(Math.random()*1000) , title:'My First task', des: 'I want to buy a milk' , state:false},
      {id:Math.floor(Math.random()*1000) , title:'My second task', des: 'I want to buy a mackBook' , state:false},
  ]);
  const [form , setForm] = useState([
      {title:'' , dec:'' , state:false}
  ])

  const mangeDelete = id =>{
      setState(state.filter(todo => todo.id !== id));
  }

  const mangeEdit = e =>{
      setForm({...form, [e.target.name]: e.target.value})
  }
  return (
      <div>
          <form></form>
          {state.map(todo =>(
              <div style={{marginTop:25 , border: "1px solid black" , margin:50 , borderRadius:5 ,padding:25}}>
                  <div>des: {todo.des}</div>
                  <div>id: {todo.id}</div>
                  <div>title: {todo.title}</div>
                  <div>id: {todo.id}</div>
                  <button style={{background:"darkred" ,color:"white" , border:0 , padding:"4px 12px 4px 12px" , borderRadius:5 , marginRight:5}} onClick={()=>mangeDelete(todo.id)}>Delete</button>
                  <button style={{background:"goldenrod", border:0 , padding:"4px 12px 4px 12px" , borderRadius:5 , marginRight:5}} onClick={()=>mangeEdit(todo)}>Edit</button>
              </div>
          ))}
      </div>

  );
}

export default App;
