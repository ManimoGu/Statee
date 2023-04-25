
import './App.css';
import { useState } from 'react';



function App() {

// let number = 45

const [list, setlist] = useState(["ordinateur","souris"])

 const [text,setText] = useState("")

const AddElement = ()=>{

  setlist([...list,text])

}


const [str, setStr] = useState("hello")


console.log(str)

  return (
    <div className="App">

       <input type="text" placeholder='Add a value..' onChange={(e)=> setText(e.target.value)} />
      <button onClick={()=> AddElement(text)}>Add</button>

     {
      list.map(item=>(
        <h1>{item}</h1>
      ))
     } 

   
     
    </div>
  );
}


export default App;
