import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {
  alert("hello");
}
let input=document.getElementById('input');
        input.addEventListener('keyup',async ()=>{
           let id=Number(input.value);
           if(typeof id==="number" && id!==0)
           {
             const URL=`https://jsonplaceholder.typicode.com/photos/${id}`;
             let component=Loader();

             let data= await genarateAPI(URL);
             component=Photoframe();
           }
        })
        function genarateAPI(URL){
            return fetch(URL,{method:'GET',}).then((res)=>{
                return res.json();
            })
            .then((value)=>{
                return value;
            })
        }

export default App;