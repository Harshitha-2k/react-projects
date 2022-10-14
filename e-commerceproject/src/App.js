import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './Components.js/Header';
import Home from './Components.js/Home';
import  Products  from './Components.js/Products'
import Login from './Components.js/Login';
import { BrowserRouter as Routes,Route} from 'react-router-dom';
import Product1 from './Components.js/Product1';

function App(){
  return (
    <>
    <Header/>
    <Routes>
      <Route  path="/Home" component={Home}/>
      <Route  path="/Products"  component={Products}/>
      <Route path="/Products/:id" component={Product1}/>
      <Route path="/Login" component={Login}/>
    </Routes>
    </>
)
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>hi</h1> */}
//       <Header/>
//     </div>
//   );
// }

// export default App;
