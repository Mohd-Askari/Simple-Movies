// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
// import React, { useState } from 'react'
import Movie from './component/Movie';
// import './App.css';
import movies from './component/movie.json';


function App() {
  let login=true;
  return (
<div>
    <div className="App">
    {
      login==true?<Header/>: <h1 style={{color:'red'}}>Let me Know </h1>
      }
      <div className="main">
       {
        movies.map((Element)=>{
          return(
        <Movie
        // key={Element.index}
        img={Element.Poster}
        title={Element.Title}
        year={Element.Year}

        />
          )


      })
}
  </div>

    </div>
    </div>
    );
}

// function App(){
//   //  use Hooks...
//   const [num, setNum] = useState(1);
//   function inc() {
//     setNum(num + 1);
//   }
//   function dec() {
//     setNum(num - 1);
//   }
//   if (num==0) {
//     return;
//   }
//   return (
//     <div>

//       <div className="header">
//         <Header />
//       </div>
//       <div className="container">
//         <div className="number">{num}</div>
//         <div>
//           <button className="btn" onClick={inc}>increment</button>
//           <button className="btn" onClick={dec}>decrement</button>
//         </div>

//       </div>
//       </div>

//       );
//   }
    export default App;
