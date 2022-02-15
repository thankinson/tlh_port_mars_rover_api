import { useState, useEffect } from 'react';
import './App.css';

function App() {

return (
      <div id="div-container">
  
            <div id="div-header">
              <h1>CN API Advice app</h1>
            </div>
            
            <div id="div-content">
              <FetchApi />
   
  
            </div>
            
            <div id="div-footer"></div>

      </div>

)

}



const FetchApi = () =>{
  // stores the api as a variable in usestate
  const [advice, setAdvice] = useState("");

  const [error, setError] = useState({
    error: false,
    message: ""
  })
  // gets the api data 
  const Collect = async () =>{
     try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      console.log(response.status);
      if (response.status !== 200){
        throw new Error("you fail")
      }
      console.log(data);
      setAdvice(data.slip);
     
    } catch (error){
       console.log(error)
       setError({error: true, message: error.message })
     }
  };

useEffect(()=>{
  console.log("hello")
  Collect()
}, [])

  if(error.error){
    return <h1>an error has occured: {error.message}</h1>
  }
  
      // this outputs the api request    
      return (
        <div><button onClick={Collect}>Fetch Api</button>
              <h1>Advice: {advice.advice}</h1>
        </div>
        
      );
}

export default App;







// import React from 'react';

// class ClassApp extends React.Component{
//   state = {
//     num: 0
//   }
//   componentDidMount() {
//     console.log("mounted")
//     this.setState({num: this.state.num + 1})
//   }
// componentDidUpdate(){
//   console.log("updated")
// }

//   render(){
//     return(
//       <div>
//         <h1>class app</h1>
//         <h2>{this.state.num}</h2>
//         <button onClick={()=> this.setState({num: this.state.num + 1})}> add one</button>
//       </div>
//     )
//   }
// }


// export default ClassApp;