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
   const [status , setStatus] = useState(['add'])

  const mangeDelete = id =>{
      setState(state.filter(todo => todo.id !== id));
  }
  const manageSubmit = e =>{
      e.preventDefault();
      setState([...state , {id: Math.floor(Math.random()*1000) , title: form.title , des: form.des , state: false}]);
      setForm({title:'' , dec:''});
  }
  const mangeEdit = e =>{
      setForm({...form, [e.target.name]: e.target.value})
  }
  return (
      <div>
          <form onSubmit={manageSubmit}>
              <label htmlFor={'title'}>Title:</label>
              <input type={'text'} name={'title'} onChange={mangeEdit} value={form.title}/>
              <label htmlFor={'des'}>Des:</label>
              <input type={'text'} name={'des'} onChange={mangeEdit} value={form.des}/>
              <button type={'submit'} style={{background: 'darkgreen' , border:0 , color:'white', marginLeft:10 , padding:4 , borderRadius:5}}>
                  save
              </button>
          </form>
          {state.map(todo =>(
              <div style={{marginTop:25 , border: "1px solid black" , margin:50 , borderRadius:5 ,padding:25}}>
                  <h3>id: {todo.id}</h3>
                  <h4>title: {todo.title}</h4>
                  <h5>des: {todo.des}</h5>
                  <button style={{background:"darkred" ,color:"white" , border:0 , padding:"4px 12px 4px 12px" , borderRadius:5 , marginRight:5}} onClick={()=>mangeDelete(todo.id)}>Delete</button>
                  <button style={{background:"goldenrod", border:0 , padding:"4px 12px 4px 12px" , borderRadius:5 , marginRight:5}} onClick={()=>mangeEdit(todo)}>Edit</button>
              </div>
          ))}
      </div>

  );
}

export default App;
