import './App.css'
import Navigation from '../Navigation/Navigation';
import { Outlet  } from "react-router-dom";

function App() {
  return (
    <>
      <div className='container'>
        <Navigation />
        <Outlet/>
      </div>
    </>
  )
}

export default App;
